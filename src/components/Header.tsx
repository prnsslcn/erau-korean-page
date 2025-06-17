import erauLogo from '../assets/erau-logo.svg';
const Header = () => {
    return (
        <header className="w-full bg-[#041f45] border-b border-gray-200 py-8 px-6 sticky top-0 z-10">
            <div className="max-w-[1000px] mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <img src={erauLogo} alt="ERAU Logo" className="h-16 sm:h-16 md:h-16 w-auto" />
                <nav className="space-x-4 text-sm self-center md:self-end">
                    <a href="#intro" className="hover:underline text-white">홈</a>
                    <a href="#overview" className="hover:underline text-white">학위 개요</a>
                    <a href="#curriculum" className="hover:underline text-white">커리큘럼</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;