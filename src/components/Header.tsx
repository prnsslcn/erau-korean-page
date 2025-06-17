import erauLogo from '../assets/erau-logo.svg';
const Header = () => {
    return (
        <header className="w-full bg-[#041f45] border-b border-gray-200 py-4 px-6 sticky top-0 z-10">
            <div className="flex max-w-[1000px] mx-auto justify-between items-center">
                <img src={erauLogo} alt="ERAU Logo" className="h-8 w-auto" />
                <nav className="space-x-4 text-sm">
                    <a href="#intro" className="hover:underline text-white">홈</a>
                    <a href="#overview" className="hover:underline text-white">학위 개요</a>
                    <a href="#curriculum" className="hover:underline text-white">커리큘럼</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;