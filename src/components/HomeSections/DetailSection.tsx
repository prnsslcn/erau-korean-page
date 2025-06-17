import { useState, useEffect, useRef } from 'react';
import type { RefObject } from 'react';
import { gsap } from 'gsap';

interface DetailSectionProps {
    sectionRef: RefObject<HTMLElement>;
}

const DetailSection = ({ sectionRef }: DetailSectionProps) => {
    const [selectedCampus, setSelectedCampus] = useState<string | null>(null);
    const detailBoxRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (selectedCampus && detailBoxRef.current) {
            gsap.fromTo(
                detailBoxRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8 }
            );
        }
    }, [selectedCampus]);

    const campusDetails: Record<string, string> = {
        daytona: '데이토나 캠퍼스는 플로리다에 위치해 있으며, 뛰어난 비행 교육과 실습 시설을 갖추고 있습니다.',
        prescott: '애리조나 캠퍼스는 사막 기후 속에서 안정적인 비행 조건을 제공하며, 소규모 집중 교육 환경을 자랑합니다.',
    };

    return (
        <section
            ref={sectionRef}
            id="detail"
            className="w-full bg-white py-20 text-center font-ibm px-4 opacity-0"
        >
            <h2 className="text-4xl font-bold text-[#041f45] mb-6">DETAILS</h2>
            <p className="text-lg text-gray-700 mb-10">
                This offering is available at the following campuses. Select a campus to learn more.
            </p>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-6xl mx-auto">
                <div
                    onClick={() => setSelectedCampus('daytona')}
                    className="cursor-pointer hover:opacity-80 transition"
                >
                    <img
                        src="https://via.placeholder.com/400x250.png?text=Daytona+Beach"
                        alt="Daytona Campus"
                        className="rounded-lg shadow-md w-full max-w-md mx-auto mb-4"
                    />
                    <p className="text-xl font-semibold text-[#041f45]">Daytona Beach Campus</p>
                </div>
                <div
                    onClick={() => setSelectedCampus('prescott')}
                    className="cursor-pointer hover:opacity-80 transition"
                >
                    <img
                        src="https://via.placeholder.com/400x250.png?text=Prescott+AZ"
                        alt="Prescott Campus"
                        className="rounded-lg shadow-md w-full max-w-md mx-auto mb-4"
                    />
                    <p className="text-xl font-semibold text-[#041f45]">Prescott, AZ Campus</p>
                </div>
            </div>

            {selectedCampus && (
                <div
                    ref={detailBoxRef}
                    className="mt-12 max-w-3xl mx-auto text-left bg-gray-100 p-6 rounded-lg shadow opacity-0"
                >
                    <h3 className="text-2xl font-bold text-[#041f45] mb-4">캠퍼스 정보</h3>
                    <p className="text-gray-800">{campusDetails[selectedCampus]}</p>
                </div>
            )}
        </section>
    );
};

export default DetailSection;