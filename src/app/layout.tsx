import { Inter } from "next/font/google";
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={inter.className} suppressHydrationWarning={true}>
                <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800">
                    <Sidebar/>
                    <main className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
                        <Header/>
                        <div className="main-content flex flex-col flex-grow p-4">
                            {children}
                        </div>
                       <Footer/>
                    </main>
                </div>
            </body>
        </html>
    );
}
