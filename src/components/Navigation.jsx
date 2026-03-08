import { useEffect, useState } from 'react';

export default function Navigation() {
    const [progress, setProgress] = useState(0);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const p = window.scrollY / (document.body.scrollHeight - window.innerHeight);
            setProgress(p * 100);

            if (window.scrollY > 80) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Initialize properly incase of reload midway
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div id="prog" style={{ width: `${progress}%` }}></div>

            <nav id="nav">
                <div className={`nlogo ${scrolled ? 'scrolled' : ''}`} id="nlogo">
                    <span className="nlogo-full">Vaibhav Rawat</span>
                    <span className="nlogo-short">VR</span>
                    <span className="nlogo-sizer">Vaibhav Rawat</span>
                </div>
                <div className="nlinks">
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#experience">Experience</a>
                    <a href="#credentials">Credentials</a>
                    <a href="#contact">Contact</a>
                </div>
            </nav>
        </>
    );
}
