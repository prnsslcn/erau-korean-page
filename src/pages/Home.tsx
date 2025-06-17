import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import IntroSection from '../components/HomeSections/IntroSection';
import OverviewSection from '../components/HomeSections/OverviewSection';
import CurriculumSection from '../components/HomeSections/CurriculumSection';
import DetailSection from '../components/HomeSections/DetailSection';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const introRef = useRef<HTMLElement | null>(null);
    const overviewRef = useRef<HTMLElement | null>(null);
    const curriculumRef = useRef<HTMLElement | null>(null);
    const detailRef = useRef<HTMLElement | null>(null);

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
                }
            }
            );

            gsap.fromTo(detailRef.current, { opacity: 0, y: 50 }, {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: detailRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                }
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <>
            <IntroSection sectionRef={introRef as React.RefObject<HTMLElement>} />
            <OverviewSection sectionRef={overviewRef as React.RefObject<HTMLElement>} />
            <CurriculumSection sectionRef={curriculumRef as React.RefObject<HTMLElement>} />
            <DetailSection sectionRef={detailRef as React.RefObject<HTMLElement>} />
        </>
    );
};

export default Home;