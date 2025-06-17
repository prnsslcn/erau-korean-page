import React from 'react';

const OverviewSection = ({ sectionRef }: { sectionRef: React.RefObject<HTMLElement> }) => (
    <section
        ref={sectionRef}
        id="overview"
        className="w-full px-6 py-12 opacity-0 font-ibm text-center"
    >
        <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">학위 개요</h3>
            <p className="text-gray-700 text-base leading-relaxed">
                이 학위 프로그램은 항공 산업에 진출하고자 하는 학생들에게 필수적인 이론 지식과 조종 실습 기술을
                모두 제공합니다. ERAU의 고정익 조종 학위 과정은 FAA 인증 과정을 포함하며, 업계 최고의 교수진과
                최첨단 비행 시뮬레이터, 실제 비행 교육을 통해 학생들이 전문 조종사로 성장할 수 있도록 돕습니다.
            </p>
        </div>
    </section>
);

export default OverviewSection;
