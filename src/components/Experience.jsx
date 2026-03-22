import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Experience() {
    const exp0Ref = useScrollReveal(0.1);
    const exp1Ref = useScrollReveal(0.1, 160); // Adding staggered delay logic via hook

    return (
        <>
            <div className="div-line"></div>
            <section className="section" id="experience">
                <div className="section-inner">
                    <div className="s-header">
                        <span className="s-tag">Experience</span>
                        <h2 className="s-title">Stories <em>carved in bark.</em></h2>
                    </div>
                    <div className="exp-list">

                        <div className="exp-entry" id="ex0" ref={exp0Ref}>
                            <div className="exp-date">July 2024 – March 2026</div>
                            <div className="exp-role">Full Stack Engineer</div>
                            <div className="exp-co">DevsLane</div>
                            <div className="proj-list">
                                <div className="proj">
                                    <div className="proj-name">Math Learning Web App</div>
                                    <div className="proj-pts">
                                        <div className="proj-pt">Full stack interactive math learning platform for elementary
                                            learners, working across React-based UI and Node.js backend services.</div>
                                        <div className="proj-pt">Designed and maintained a content ingestion pipeline handling bulk
                                            question uploads, integrating AWS S3 cloud storage and optimizing database writes
                                            for performance at scale.</div>
                                        <div className="proj-pt">Supported user progress tracking and shipped reliable builds via
                                            established CI/CD workflows.</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="exp-entry" id="ex1" ref={exp1Ref}>
                            <div className="exp-date">July 2022 – June 2024</div>
                            <div className="exp-role">Full Stack Engineer Intern</div>
                            <div className="exp-co">DevsLane</div>
                            <div className="proj-list">
                                <div className="proj">
                                    <div className="proj-name">Home Concierge Dashboard</div>
                                    <div className="proj-pts">
                                        <div className="proj-pt">Built a multi-organization analytics dashboard in React.js
                                            surfacing real-time service consumption data and user intelligence.</div>
                                        <div className="proj-pt">Interactive charts and fully responsive UI enabling stakeholders to
                                            monitor cross-org activity.</div>
                                    </div>
                                </div>
                                <div className="proj">
                                    <div className="proj-name">Nutrition Labeling Compliance Tool</div>
                                    <div className="proj-pts">
                                        <div className="proj-pt">Interactive compliance tracker for global nutrition and
                                            sustainability labeling regulations.</div>
                                        <div className="proj-pt">React-based world map with dynamic country-level filtering for
                                            cross-border regulatory navigation.</div>
                                    </div>
                                </div>
                                <div className="proj">
                                    <div className="proj-name">AI-Powered Sales Platform</div>
                                    <div className="proj-pts">
                                        <div className="proj-pt">Maintained and developed an AI-driven account-based marketing
                                            platform for B2B sales teams.</div>
                                        <div className="proj-pt">Automated account research, target selection, and personalized
                                            outreach to improve pipeline growth.</div>
                                    </div>
                                </div>
                                <div className="proj">
                                    <div className="proj-name">CRM System</div>
                                    <div className="proj-pts">
                                        <div className="proj-pt">Built backend infrastructure with secure session-based
                                            authentication and schema-versioned database migrations.</div>
                                        <div className="proj-pt">Established structured API testing and documentation practices,
                                            reducing onboarding friction.</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
