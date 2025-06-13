import Header from './Header';
import Footer from './Footer';
import type { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="min-h-screen w-screen bg-white text-[#041f45] flex flex-col overflow-x-hidden">
            <Header />
            <main className="flex-1 w-full flex justify-center">
                <div className="w-full max-w-7xl px-6">{children}</div>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;