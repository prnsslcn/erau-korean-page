import Layout from '../components/Layout';
import { useState } from 'react';
import erauMain from '../assets/erau-main.jpg';

const Home = () => {
    const [section, setSection] = useState<'overview' | 'curriculum' | null>(null);

    return (
        <Layout>
            <section id="intro" className="w-full px-6 py-16 text-center">
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
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <button
                            onClick={() => setSection('overview')}
                            className="px-6 py-3 bg-[#041f45] text-white rounded-md hover:bg-[#031632] transition"
                        >
                            ✈️ 학위 개요 보기
                        </button>
                        <button
                            onClick={() => setSection('curriculum')}
                            className="px-6 py-3 bg-[#041f45] text-white rounded-md hover:bg-[#031632] transition"
                        >
                            📘 커리큘럼 보기
                        </button>
                    </div>
                </div>
            </section>

            <section id="overview" className="w-full px-6 py-12">
                {section === 'overview' && (
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-2xl font-semibold mb-4">📌 학위 개요</h3>
                        <p className="text-gray-700 leading-relaxed">
                            ERAU 항공과학 학사는 실제 비행과 이론을 통합하여 전문 조종사를 양성하는 과정입니다.
                            세계적으로 인정받는 커리큘럼과 최신 장비를 통해 민간, 군용, 상업 항공 분야로 진출할 수 있는 역량을 갖춥니다.
                        </p>
                    </div>
                )}
            </section>

            <section id="curriculum" className="w-full px-6 py-12">
                {section === 'curriculum' && (
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-2xl font-semibold mb-4">📘 커리큘럼</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li>1학기: 항공입문, 기초 물리학, 수학</li>
                            <li>2학기: 기초 비행 이론, 기상학</li>
                            <li>3~4학기: 상업 비행 실습, 항공법, 리더십</li>
                            <li>5~6학기: 고급 기상, 항공 안전, 트랙 선택</li>
                        </ul>
                    </div>
                )}
            </section>
        </Layout>
    );
};

export default Home;