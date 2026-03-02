import { motion } from 'framer-motion';

const services = [
    {
        category: '顔 / FACIAL',
        title: 'フェイシャル・美顔・若返り',
        description: 'シワ消し・シミ消し・美白・小顔など、年齢に負けない極上の透明感とハリを取り戻す至高のフェイシャルケア。',
        image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800' // アジア系女性がフェイシャルを受けている（横顔）
    },
    {
        category: 'カラダ / BODY',
        title: 'ボディトリートメント・痩身',
        description: '排毒リンパドレナージュやアロママッサージで、不要なものを落とし理想のサイズダウンを実現。ブライダルエステや姿勢矯正・脱毛にも対応。',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800' // 女性が背中のオイルマッサージを受けている
    },
    {
        category: '足 / FOOT',
        title: 'フットケア・足つぼ',
        description: '東洋医術の粋を集めた足つぼ・フットケア。第二の心臓と呼ばれる足裏から全身の巡りを整え、深いリラクゼーションへ導きます。',
        image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800' // スパで施術を受けている足元
    }
];

const Services = () => {
    return (
        <section id="service" className="py-24 bg-luxury-dark border-t border-luxury-gray/30">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block border-b border-gold-500 pb-2 mb-4"
                    >
                        <h2 className="text-sm text-gold-500 tracking-[0.3em] uppercase">Services</h2>
                    </motion.div>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-serif text-white tracking-widest"
                    >
                        極上のメンテナンス
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-6">
                                <div className="absolute inset-0 bg-luxury-black/40 group-hover:bg-luxury-black/20 transition-colors duration-500 z-10"></div>
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute top-6 left-6 z-20">
                                    <span className="text-xs text-gold-500 tracking-[0.2em] font-medium bg-luxury-black/80 px-3 py-1 rounded-full backdrop-blur-md border border-gold-500/30">
                                        {service.category}
                                    </span>
                                </div>
                            </div>

                            <h4 className="text-xl font-serif text-white mb-3 tracking-widest group-hover:text-gold-300 transition-colors">
                                {service.title}
                            </h4>
                            <p className="text-sm text-luxury-light/70 font-light leading-relaxed tracking-wider">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
