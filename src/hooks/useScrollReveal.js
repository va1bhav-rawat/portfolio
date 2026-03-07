import { useEffect, useRef } from 'react';

export function useScrollReveal(threshold = 0.12, staggerDelay = 0) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (staggerDelay > 0) {
                        setTimeout(() => {
                            entry.target.classList.add('vis');
                        }, staggerDelay);
                    } else {
                        entry.target.classList.add('vis');
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold });

        observer.observe(el);

        return () => {
            if (el) observer.unobserve(el);
        };
    }, [threshold, staggerDelay]);

    return ref;
}
