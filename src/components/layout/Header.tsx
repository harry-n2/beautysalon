import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'HOME', path: '/' },
        { name: 'ABOUT', path: '/#about' },
        { name: 'SERVICE', path: '/#service' },
        { name: 'COMPANY', path: '/#company' },
    ];

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-500 border-b ${isScrolled
                ? 'bg-luxury-black/95 backdrop-blur-sm shadow-md border-luxury-gray/30 py-4'
                : 'bg-transparent border-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
                <Link to="/" className="text-2xl font-serif text-white tracking-widest">
                    MAKI
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-8 items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.path}
                            className="text-white hover:text-gold-300 transition-colors text-sm tracking-wider font-light"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="/#diagnostic"
                        className="bg-gold-500 hover:bg-gold-300 text-luxury-black px-6 py-2 rounded-sm transition-colors text-sm font-medium tracking-wider"
                    >
                        無料診断・ご予約
                    </a>
                </nav>

                {/* Mobile menu button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <div
                className={`md:hidden absolute top-full left-0 w-full bg-luxury-black border-t border-luxury-gray/30 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
                    }`}
            >
                <div className="flex flex-col space-y-4 px-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.path}
                            className="text-white hover:text-gold-300 transition-colors text-sm tracking-widest py-2 border-b border-white/10"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="/#diagnostic"
                        className="bg-gold-500 text-luxury-black text-center px-6 py-3 mt-4 rounded-sm font-medium tracking-wider"
                    >
                        無料診断・ご予約はこちら
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
