import { useEffect, useState } from 'react';

const SECTIONS = ['hero', 'about', 'skills', 'experience', 'credentials', 'contact'];

export default function ScrollDots() {
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { threshold: 0.4 });

        SECTIONS.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    const dots = [
        { id: 'hero', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'experience', label: 'Experience' },
        { id: 'credentials', label: 'Credentials' },
        { id: 'contact', label: 'Contact' }
    ];

    return (
        <div id="dots">
            {dots.map((dot) => (
                <div className="dw" key={dot.id}>
                    <div
                        className={`dot ${activeSection === dot.id ? 'on' : ''}`}
                        onClick={() => scrollToSection(dot.id)}
                    ></div>
                    <span className="dlbl">{dot.label}</span>
                </div>
            ))}
        </div>
    );
}
