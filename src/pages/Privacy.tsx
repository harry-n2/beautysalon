
const Privacy = () => {
    return (
        <div className="pt-32 pb-20 px-6 container mx-auto max-w-4xl bg-luxury-black min-h-screen">
            <h1 className="text-3xl font-serif text-gold-300 mb-12 text-center tracking-widest">プライバシーポリシー</h1>

            <div className="bg-luxury-dark p-8 md:p-12 rounded-sm border border-luxury-gray/30 space-y-8 text-white font-light leading-relaxed">

                <p>
                    株式会社 MAKI（以下、「当社」といいます。）は、お客様の個人情報の保護を最も重要な責務と認識し、以下の通りプライバシーポリシーを定めます。
                </p>

                <section>
                    <h2 className="text-xl font-serif text-gold-500 mb-4 tracking-widest border-l-4 border-gold-500 pl-4">第1条（個人情報の取得）</h2>
                    <p>
                        当社は、適法かつ公正な手段によって、個人情報を取得いたします。お客様から頂戴する情報には、氏名、住所、電話番号、メールアドレス、ご来店履歴、お悩みや身体に関する情報などが含まれます。
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-serif text-gold-500 mb-4 tracking-widest border-l-4 border-gold-500 pl-4">第2条（個人情報の利用目的）</h2>
                    <p>
                        当社は、取得した個人情報を以下の目的で利用いたします。<br />
                        1. エステティックサロンにおける施術・サービスの提供と、それに関連する業務<br />
                        2. ご予約の確認、お問い合わせへの対応<br />
                        3. 新商品・新サービス、キャンペーン、イベント等のご案内（DM、メール、LINE等）<br />
                        4. サービス向上のためのアンケート、マーケティング調査<br />
                        5. コンサルティング講座・オンラインコンテンツの提供および連絡
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-serif text-gold-500 mb-4 tracking-widest border-l-4 border-gold-500 pl-4">第3条（個人情報の第三者提供）</h2>
                    <p>
                        当社は、法令に定める場合を除き、個人情報を事前に本人の同意を得ることなく第三者に提供いたしません。
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-serif text-gold-500 mb-4 tracking-widest border-l-4 border-gold-500 pl-4">第4条（個人情報の安全管理）</h2>
                    <p>
                        当社は、個人情報の正確性を保ち、これを安全に管理いたします。個人情報の紛失、破壊、改ざん及び漏洩などを防止するため、厳重なセキュリティ対策を実施します。
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-serif text-gold-500 mb-4 tracking-widest border-l-4 border-gold-500 pl-4">第5条（個人情報の開示・訂正など）</h2>
                    <p>
                        お客様がご自身の個人情報の開示、訂正、利用停止、消去などを希望される場合には、当社所定の手続きに基づき速やかに対応いたします。
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-serif text-gold-500 mb-4 tracking-widest border-l-4 border-gold-500 pl-4">お問い合わせ窓口</h2>
                    <p>
                        本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。<br />
                        <br />
                        株式会社 MAKI<br />
                        静岡県浜松市中区上島5-4-48 美容室SOLO 2F<br />
                        TEL: 053-472-3683
                    </p>
                </section>

            </div>
        </div>
    );
};

export default Privacy;
