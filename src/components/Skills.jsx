import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Skills() {
    const skillsRef = useScrollReveal();

    return (
        <>
            <div className="div-line"></div>
            <section className="section" id="skills">
                <div className="section-inner">
                    <div className="s-header">
                        <span className="s-tag">Skills</span>
                        <h2 className="s-title">Branches <em>reach wide.</em></h2>
                    </div>
                    <div className="skills-grid" id="sk" ref={skillsRef}>
                        <div className="sk-card">
                            <div className="sk-label">Frontend</div>
                            <div className="tags">
                                <span className="tag">React</span><span className="tag">Next.js</span>
                                <span className="tag">TypeScript</span><span className="tag">JavaScript</span>
                                <span className="tag">React Native</span><span className="tag">Redux</span>
                                <span className="tag">React Query</span><span className="tag">HTML5</span>
                                <span className="tag">CSS3</span><span className="tag">SCSS</span>
                            </div>
                        </div>
                        <div className="sk-card">
                            <div className="sk-label">Backend</div>
                            <div className="tags">
                                <span className="tag">Node.js</span><span className="tag">AdonisJS</span>
                                <span className="tag">Express.js</span><span className="tag">Mongoose</span>
                                <span className="tag">RESTful APIs</span>
                            </div>
                        </div>
                        <div className="sk-card">
                            <div className="sk-label">Databases</div>
                            <div className="tags">
                                <span className="tag">PostgreSQL</span><span className="tag">MongoDB</span>
                            </div>
                        </div>
                        <div className="sk-card">
                            <div className="sk-label">Cloud & DevOps</div>
                            <div className="tags">
                                <span className="tag">AWS S3</span><span className="tag">GitHub Actions</span>
                                <span className="tag">CI/CD Pipelines</span>
                            </div>
                        </div>
                        <div className="sk-card">
                            <div className="sk-label">Tools</div>
                            <div className="tags">
                                <span className="tag">Git</span><span className="tag">GitHub</span>
                                <span className="tag">Bitbucket</span><span className="tag">Postman</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
