import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import erauMain from '../assets/erau-main.jpg';

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
            <section ref={introRef} id="intro" className="w-full px-6 py-16 text-center opacity-0 font-ibm">
                <div className="w-full max-w-6xl">
                    <h2 className="text-4xl font-bold mb-6">ERAU 항공과학 – 고정익 조종</h2>
                    <img
                        src={erauMain}
                        alt="항공 이미지"
                        className="w-full max-w-5xl mx-auto mb-6 rounded-lg"
                    />
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        차세대 조종사를 위한 최고의 교육과 실습 환경을 제공합니다.
                    </p>
                </div>
            </section>

            <section ref={overviewRef} id="overview" className="w-full px-6 py-12 opacity-0 font-ibm">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold mb-4">📌 학위 개요</h3>
                    <p className="text-gray-700 leading-relaxed">
                        ERAU 항공과학 학사는 실제 비행과 이론을 통합하여 전문 조종사를 양성하는 과정입니다.
                        세계적으로 인정받는 커리큘럼과 최신 장비를 통해 민간, 군용, 상업 항공 분야로 진출할 수 있는 역량을 갖춥니다.
                    </p>
                </div>
            </section>

            <section ref={curriculumRef} id="curriculum" className="w-full px-6 py-12 opacity-0 font-ibm">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold mb-4">📘 커리큘럼</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>1학기: 항공입문, 기초 물리학, 수학</li>
                        <li>2학기: 기초 비행 이론, 기상학</li>
                        <li>3~4학기: 상업 비행 실습, 항공법, 리더십</li>
                        <li>5~6학기: 고급 기상, 항공 안전, 트랙 선택</li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Home;