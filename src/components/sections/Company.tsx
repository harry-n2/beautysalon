import { motion } from 'framer-motion';

const Company = () => {
    return (
        <section id="company" className="py-24 bg-luxury-dark relative border-t border-luxury-gray/30">
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="inline-block mb-4 border-b border-gold-500 pb-2">
                            <h2 className="text-sm text-gold-500 tracking-[0.3em] uppercase">Company & Access</h2>
                        </div>
                        <h3 className="text-3xl md:text-5xl font-serif text-white mb-10 tracking-widest leading-tight">
                            店舗情報
                        </h3>

                        <div className="space-y-6 text-luxury-light/80 font-light tracking-widest text-sm md:text-base">
                            <div className="grid grid-cols-12 border-b border-luxury-gray/50 pb-4">
                                <div className="col-span-4 text-gold-500 font-medium">運営会社</div>
                                <div className="col-span-8">株式会社 MAKI</div>
                            </div>
                            <div className="grid grid-cols-12 border-b border-luxury-gray/50 pb-4">
                                <div className="col-span-4 text-gold-500 font-medium">代表者</div>
                                <div className="col-span-8">小倉 真樹</div>
                            </div>
                            <div className="grid grid-cols-12 border-b border-luxury-gray/50 pb-4">
                                <div className="col-span-4 text-gold-500 font-medium">所在地</div>
                                <div className="col-span-8 leading-loose">
                                    〒433-8122<br />
                                    静岡県浜松市中区上島5-4-48<br />
                                    美容室SOLO 2F
                                </div>
                            </div>
                            <div className="grid grid-cols-12 border-b border-luxury-gray/50 pb-4">
                                <div className="col-span-4 text-gold-500 font-medium">電話番号</div>
                                <div className="col-span-8 text-white text-lg">053-472-3683</div>
                            </div>
                            <div className="grid grid-cols-12 border-b border-luxury-gray/50 pb-4">
                                <div className="col-span-4 text-gold-500 font-medium">営業時間</div>
                                <div className="col-span-8">月～土 AM 9:00 〜 PM 5:00</div>
                            </div>
                            <div className="grid grid-cols-12 pb-4">
                                <div className="col-span-4 text-gold-500 font-medium">定休日</div>
                                <div className="col-span-8">日曜（駐車場：あり・3台）</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="w-full lg:w-1/2 min-h-[400px]"
                    >
                        {/* Google Map 埋め込み（浜松市中区上島5-4-48 美容室SOLOの想定場所をピンポイント表示） */}
                        <div className="w-full h-full rounded-sm overflow-hidden border border-luxury-gray/50 shadow-2xl relative">
                            <div className="absolute inset-0 bg-gold-900/10 mix-blend-overlay pointer-events-none z-10"></div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.4116410312686!2d137.7344!3d34.7431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601ade0!2sShizuoka%20Hamamatsu%2BKamijima%205-4-48!5e0!3m2!1sen!2sjp!4v1700000000000!5m2!1sen!2sjp"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: '400px', filter: 'grayscale(60%) contrast(1.2)' }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0 z-0"
                            ></iframe>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Company;
