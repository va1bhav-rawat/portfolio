import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
    const mainRef = useScrollReveal();
    const statsRef = useScrollReveal();

    return (
        <section className="section" id="about">
            <div className="section-inner">
                <div className="s-header">
                    <span className="s-tag">About</span>
                    <h2 className="s-title">The <em>roots</em> run deep.</h2>
                </div>
                <div className="about-grid">
                    <div className="about-main" id="am" ref={mainRef}>
                        <p className="about-body">
                            I'm a <strong>Full Stack Developer</strong> with 3 years of experience building and shipping
                            production-grade web applications. I work confidently across the entire stack — from crafting
                            pixel-precise React interfaces to architecting Node.js backends with real-world scale in
                            mind.<br /><br />
                            I've shipped products across <strong>EdTech</strong>, <strong>B2B SaaS</strong>, and
                            <strong>compliance tooling</strong> — each with different constraints, timelines, and teams. I
                            adapt fast, own features end-to-end, and care deeply about code quality and user experience.
                        </p>
                        <div className="about-meta">
                            <div className="mrow">
                                <span className="mk">Location</span>
                                <span className="mv">Dehradun, Uttarakhand, India</span>
                            </div>
                            <div className="mrow">
                                <span className="mk">Current Role</span>
                                <span className="mv">Full Stack Developer @ DevsLane</span>
                            </div>
                            <div className="mrow">
                                <span className="mk">Education</span>
                                <span className="mv">B.Sc. CS · HNB Garhwal University</span>
                            </div>
                            <div className="mrow">
                                <span className="mk">Active Since</span>
                                <span className="mv">2022</span>
                            </div>
                            <div className="mrow">
                                <span className="mk">Email</span>
                                <span className="mv">vaibhavr325@gmail.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="about-stats" id="as" ref={statsRef}>
                        <div className="stat">
                            <div className="sn">3+</div>
                            <div className="sl">Years professional experience</div>
                        </div>
                        <div className="stat">
                            <div className="sn">5+</div>
                            <div className="sl">Production products shipped</div>
                        </div>
                        <div className="stat">
                            <div className="sn">1</div>
                            <div className="sl">Company served</div>
                        </div>
                        <div className="stat">
                            <div className="sn">Full</div>
                            <div className="sl">Stack — frontend to cloud</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
