import React from 'react';
import erauMain from '../../assets/erau-main.jpg';

const IntroSection = ({ sectionRef }: { sectionRef: React.RefObject<HTMLElement> }) => (
    <section
        ref={sectionRef}
        id="intro"
        className="w-full px-6 py-16 text-center opacity-0 font-ibm"
    >
        <div className="w-full max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">ERAU 항공과학 – 고정익 조종</h2>
            <img
                src={erauMain}
                alt="항공 이미지"
                className="w-full max-w-5xl mx-auto mb-6 rounded-lg"
            />
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Embry-Riddle Aeronautical University는 고정익 조종사를 위한 세계 최고 수준의 교육과 훈련을 제공합니다.
                이 과정은 이론, 시뮬레이션, 실제 비행을 통합한 교육을 통해 차세대 항공 전문가를 양성합니다.
            </p>
        </div>
    </section>
);

export default IntroSection;