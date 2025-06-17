import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import IntroSection from '../components/HomeSections/IntroSection';
import OverviewSection from '../components/HomeSections/OverviewSection';
import CurriculumSection from '../components/HomeSections/CurriculumSection';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const introRef = useRef(null);
    const overviewRef = useRef(null);
    const curriculumRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(introRef.current, { opacity: 0, y: 50 }, {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: introRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
            });

            gsap.fromTo(overviewRef.current, { opacity: 0, y: 50 }, {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: overviewRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
            });

            gsap.fromTo(curriculumRef.current, { opacity: 0, y: 50 }, {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: curriculumRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <>
            <IntroSection sectionRef={introRef} />
            <OverviewSection sectionRef={overviewRef} />
            <CurriculumSection sectionRef={curriculumRef} />
        </>
    );
};

export default Home;