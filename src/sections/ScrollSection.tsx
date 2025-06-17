import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollSection = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.fade-in',
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top center',
                        end: 'bottom center',
                        scrub: true,
                    },
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="h-screen flex items-center justify-center bg-white"
        >
            <h2 className="text-4xl font-bold fade-in text-[#041f45]">
                ✈️ ERAU 항공과학 소개
            </h2>
        </section>
    );
};

export default ScrollSection;