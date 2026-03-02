import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 bg-luxury-black relative overflow-hidden">
            {/* 装飾用背景要素 */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="w-full lg:w-1/2 relative min-h-[500px]"
                    >
                        {/* 複数画像の重ね合わせで高級感を演出 */}
                        <div className="absolute top-0 right-0 w-4/5 h-4/5 rounded-sm overflow-hidden shadow-2xl border border-gold-500/20 z-10">
                            <img
                                src="http://detox-maki.com/images/sample1.jpg"
                                alt="代表 小倉真樹"
                                className="w-full h-full object-cover select-none"
                            />
                            <div className="absolute inset-0 bg-gold-900/10 mix-blend-overlay"></div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 rounded-sm overflow-hidden shadow-2xl border border-white/10 z-20 transform -translate-y-8 translate-x-8">
                            <img
                                src="http://detox-maki.com/images/sample2.jpg"
                                alt="施術風景"
                                className="w-full h-full object-cover select-none"
                            />
                            <div className="absolute inset-0 bg-luxury-black/20 mix-blend-overlay"></div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="inline-block mb-4 border-b border-gold-500 pb-2">
                            <h2 className="text-sm text-gold-500 tracking-[0.3em] uppercase">About MAKI</h2>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-serif text-white mb-8 leading-tight tracking-widest">
                            20年の確かな実績と、<br />
                            『全ての女性を救いたい』<br />という強い想い。
                        </h3>

                        <div className="space-y-6 text-luxury-light/80 font-light leading-relaxed tracking-wider text-sm md:text-base">
                            <p>
                                2013年10月のオープン以来、横浜・東京などで7年間「本物の美と健康とは何か？」を追求し、4年間の店長経験を経て培った確かな技術。
                            </p>
                            <p>
                                タレント・モデル（冨田りかさん等）の専属エステティシャンとしても成果を上げ、多くのプレッシャーの中で『人に喜んで頂ける技術』を極めてまいりました。
                            </p>
                            <p>
                                現代の生活習慣やストレス社会がもたらす悪影響に対し、「いらないものを外に出す（排毒）」ことの重要性を実感。ダイエットはもちろん、心のもやもやが取れ、内側から元気になる感覚を、一人でも多くの女性にお届けしたいと願っています。
                            </p>
                            <p className="text-gold-300 font-medium pt-4">
                                「エステにとどまらない東洋医術」<br />
                                無理な勧誘は一切なく、100%ハンドケアで一生懸命施術させていただきます。
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
