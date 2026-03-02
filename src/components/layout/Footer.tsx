import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-luxury-black text-white pt-16 pb-8 border-t border-luxury-gray">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    <div>
                        <h2 className="text-2xl font-serif tracking-widest mb-6">MAKI</h2>
                        <p className="text-luxury-light/70 text-sm leading-relaxed mb-6 font-light">
                            極上のハンドケアと最新フェイシャル技術で<br />
                            真の美しさと健康を引き出すデトックスサロン。
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-serif tracking-widest mb-6 border-b border-luxury-gray pb-2 inline-block">CONTACT</h3>
                        <ul className="space-y-4 text-sm text-luxury-light/80 font-light">
                            <li>〒433-8122</li>
                            <li>静岡県浜松市中区上島5-4-48</li>
                            <li>美容室SOLO 2F</li>
                            <li className="text-gold-300 pt-2 text-lg">053-472-3683</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-serif tracking-widest mb-6 border-b border-luxury-gray pb-2 inline-block">INFORMATION</h3>
                        <ul className="space-y-3 text-sm text-luxury-light/80 font-light">
                            <li><Link to="/law" className="hover:text-gold-300 transition-colors">特定商取引法に基づく表記</Link></li>
                            <li><Link to="/privacy" className="hover:text-gold-300 transition-colors">プライバシーポリシー</Link></li>
                            <li><Link to="/contact" className="hover:text-gold-300 transition-colors">お問い合わせフォーム</Link></li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-luxury-gray/50 pt-8 text-center text-xs text-luxury-light/50 tracking-wider">
                    <p>&copy; {new Date().getFullYear()} 株式会社 MAKI. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
