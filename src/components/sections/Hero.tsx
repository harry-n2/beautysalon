import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Video with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-luxury-black/70 mix-blend-multiply z-10"></div>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover scale-105"
                >
                    {/* ゴージャスなスパ/エステのフリー動画を利用し、圧倒的視認性を高める */}
                    <source src="https://cdn.pixabay.com/vimeo/329759245/spa-22927.mp4?width=1280&hash=8cbfaba74ee61f8ae6b1b51e9f45ddab4c5e3d73" type="video/mp4" />
                </video>

                {/* 提供アセットをアクセントとして重ねる（フェード切り替え） */}
                <motion.div
                    animate={{ opacity: [0, 0.4, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 z-10 mix-blend-overlay"
                >
                    <img src="http://detox-maki.com/images/mainImg2.jpg" alt="MAKI Salon Main" className="w-full h-full object-cover" />
                </motion.div>
            </div>

            <div className="relative z-10 text-center px-6 mt-16">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="mb-8"
                >
                    <img
                        src="/maki-logo-placeholder.png" // 実際のロゴに差し替え可能
                        alt=""
                        className="w-24 h-24 mx-auto mb-8 opacity-0 hidden"
                    />
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-gold-300 mb-6 tracking-[0.2em] md:leading-tight drop-shadow-lg">
                        極上の癒し空間で<br className="md:hidden" />身体のメンテナンス
                    </h1>
                    <div className="w-24 h-[1px] bg-gold-500 mx-auto my-8"></div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-white md:text-xl font-light tracking-widest max-w-2xl mx-auto leading-loose drop-shadow-md"
                >
                    100％オールハンドのデトックスケアサロン『MAKI』。<br className="hidden md:block" />
                    エステにとどまらない東洋医術で、<br className="md:hidden" />本物の美と健康を。
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="mt-16"
                >
                    <a
                        href="#diagnostic"
                        className="group relative inline-flex items-center justify-center px-12 py-5 text-sm md:text-base font-serif tracking-[0.3em] overflow-hidden rounded-sm bg-transparent border border-gold-500 text-gold-500 hover:text-luxury-black transition-all duration-500"
                    >
                        <span className="relative z-10 group-hover:text-luxury-black transition-colors duration-500">
                            無料診断へ進む
                        </span>
                        <div className="absolute inset-0 h-full w-full bg-gold-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10"
            >
                <span className="text-luxury-light/60 text-xs tracking-[0.3em] mb-2 font-serif uppercase">Scroll</span>
                <div className="w-[1px] h-16 bg-luxury-light/20 relative overflow-hidden">
                    <motion.div
                        animate={{ y: [0, 64] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                        className="w-full h-1/2 bg-gold-500 absolute top-0"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
