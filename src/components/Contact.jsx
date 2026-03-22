export function Contact() {
    return (
        <>
            <div className="div-line"></div>
            <section className="section" id="contact">
                <div className="section-inner">
                    <div className="con-inner">
                        <div className="s-header" style={{ justifyContent: 'center' }}>
                            <span className="s-tag">Contact</span>
                        </div>
                        <h2 className="con-title">Let the <em>blossoms</em><br />bloom together.</h2>
                        <p className="con-sub">Open to full-time roles, freelance projects, and long-term collaborations. Let's
                            build something that lasts.</p>
                        <div className="con-links">
                            <a className="clink" href="mailto:vaibhavr325@gmail.com">
                                <span className="ctype">Email</span>
                                <span className="cval">vaibhavr325@gmail.com</span>
                                <span className="carr">↗</span>
                            </a>
                            <a className="clink" href="https://linkedin.com/in/vaibhavrawatt" target="_blank" rel="noopener noreferrer">
                                <span className="ctype">LinkedIn</span>
                                <span className="cval">linkedin.com/in/vaibhavrawatt</span>
                                <span className="carr">↗</span>
                            </a>
                            <a className="clink" href="https://github.com/va1bhav-rawat" target="_blank" rel="noopener noreferrer">
                                <span className="ctype">GitHub</span>
                                <span className="cval">github.com/va1bhav-rawat</span>
                                <span className="carr">↗</span>
                            </a>
                            <a className="clink" href="https://instagram.com/vaibhav.rawatt" target="_blank" rel="noopener noreferrer">
                                <span className="ctype">Instagram</span>
                                <span className="cval">@vaibhav.rawatt</span>
                                <span className="carr">↗</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export function Footer() {
    return (
        <footer>
            <span className="footer-text">© 2026 Vaibhav Rawat</span>
            <span className="footer-text">Dehradun, Uttarakhand, India</span>
        </footer>
    );
}
