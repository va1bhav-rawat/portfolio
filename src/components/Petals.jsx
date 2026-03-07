import { useEffect, useRef } from 'react';

const PC = ['#f7cdd8', '#f2b8c8', '#eca8bc', '#e07898', '#fce8f0', '#f4b4c6', '#fce0ec'];

export default function Petals() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let W, H;
        let animationFrameId;

        const rsz = () => {
            W = canvas.width = window.innerWidth;
            H = canvas.height = window.innerHeight;
        };
        rsz();
        window.addEventListener('resize', rsz);

        class Petal {
            constructor() {
                this.r(true);
            }
            r(init = false) {
                this.x = Math.random() * W;
                this.y = init ? Math.random() * H : -14;
                this.sz = 3 + Math.random() * 6.5;
                this.vx = (Math.random() - 0.5) * 0.65;
                this.vy = 0.28 + Math.random() * 0.55;
                this.rot = Math.random() * Math.PI * 2;
                this.vr = (Math.random() - 0.5) * 0.028;
                this.sw = Math.random() * Math.PI * 2;
                this.sws = 0.005 + Math.random() * 0.011;
                this.swa = 0.35 + Math.random() * 0.85;
                this.c = PC[Math.floor(Math.random() * PC.length)];
                this.a = 0.45 + Math.random() * 0.48;
            }
            u() {
                this.sw += this.sws;
                this.x += this.vx + Math.sin(this.sw) * this.swa;
                this.y += this.vy;
                this.rot += this.vr;
                if (this.y > H + 18 || this.x < -28 || this.x > W + 28) this.r();
            }
            d() {
                ctx.save();
                ctx.globalAlpha = this.a;
                ctx.translate(this.x, this.y);
                ctx.rotate(this.rot);
                ctx.beginPath();
                ctx.ellipse(0, 0, this.sz, this.sz * 0.5, 0, 0, Math.PI * 2);
                ctx.fillStyle = this.c;
                ctx.fill();
                ctx.beginPath();
                ctx.ellipse(-this.sz * 0.18, -this.sz * 0.1, this.sz * 0.36, this.sz * 0.19, -0.45, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255,255,255,.42)';
                ctx.fill();
                ctx.restore();
            }
        }

        const petals = Array.from({ length: 72 }, () => new Petal());

        const loop = () => {
            ctx.clearRect(0, 0, W, H);
            petals.forEach((p) => {
                p.u();
                p.d();
            });
            animationFrameId = requestAnimationFrame(loop);
        };
        loop();

        return () => {
            window.removeEventListener('resize', rsz);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas id="petals" ref={canvasRef}></canvas>;
}
