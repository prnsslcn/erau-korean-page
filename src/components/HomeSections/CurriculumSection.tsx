import React from 'react';

const CurriculumSection = ({ sectionRef }: { sectionRef: React.RefObject<HTMLElement> }) => (
    <section
        ref={sectionRef}
        id="curriculum"
        className="w-full px-6 py-12 opacity-0 font-ibm text-center"
    >
        <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">커리큘럼</h3>
            <p className="text-gray-700 text-base leading-relaxed">
                ERAU의 항공과학 학사 과정은 고정익 조종 분야에서 이론과 실습을 아우르는 포괄적인 커리큘럼을 제공합니다.
                학생들은 항공역학, 항공법규, 비행 운영, 기상학 등의 과목을 학습하며, 실제 조종 실습을 통해 현장 경험을 쌓습니다.
            </p>
        </div>
    </section>
);

export default CurriculumSection;