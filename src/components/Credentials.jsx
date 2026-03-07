import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Credentials() {
    const cred0Ref = useScrollReveal();
    const cred1Ref = useScrollReveal();

    return (
        <>
            <div className="div-line"></div>
            <section className="section" id="credentials">
                <div className="section-inner">
                    <div className="s-header">
                        <span className="s-tag">Credentials</span>
                        <h2 className="s-title">Rings of <em>growth.</em></h2>
                    </div>
                    <div className="cred-grid">
                        <div className="cred-card" id="cr0" ref={cred0Ref}>
                            <div className="cred-type">Certification</div>
                            <div className="cred-title">Professional Frontend Development</div>
                            <div className="cred-org">CodeYogi</div>
                            <div className="cred-date">Jan 2022 – Jul 2022</div>
                            <div className="cred-pts">
                                <div className="cred-pt">Modern React.js — State Management with Redux, Hooks, Component
                                    Architecture.</div>
                                <div className="cred-pt">Codebase versioning via Git · Production builds deployed on Netlify.</div>
                            </div>
                        </div>
                        <div className="cred-card" id="cr1" ref={cred1Ref}>
                            <div className="cred-type">Education</div>
                            <div className="cred-title">B.Sc. Computer Science</div>
                            <div className="cred-org">Hemwati Nandan Bahuguna Garhwal University · Srinagar, Uttarakhand</div>
                            <div className="cred-date">June 2020 – July 2023</div>
                            <div className="cred-pts">
                                <div className="cred-pt">Algorithms, data structures, and software engineering fundamentals.</div>
                                <div className="cred-pt">Foundation for full-stack development and systems thinking.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
