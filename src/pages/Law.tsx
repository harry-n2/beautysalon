
const Law = () => {
    return (
        <div className="pt-32 pb-20 px-6 container mx-auto max-w-4xl bg-luxury-black min-h-screen">
            <h1 className="text-3xl font-serif text-gold-300 mb-12 text-center tracking-widest">特定商取引法に基づく表記</h1>

            <div className="bg-luxury-dark p-8 md:p-12 rounded-sm border border-luxury-gray/30">
                <table className="w-full text-left border-collapse">
                    <tbody>
                        <tr className="border-b border-luxury-gray/30">
                            <th className="py-6 w-1/3 font-medium text-gold-500 align-top">販売事業者（屋号）</th>
                            <td className="py-6 text-white font-light">株式会社 MAKI</td>
                        </tr>
                        <tr className="border-b border-luxury-gray/30">
                            <th className="py-6 font-medium text-gold-500 align-top">運営統括責任者</th>
                            <td className="py-6 text-white font-light">代表 小倉 真樹</td>
                        </tr>
                        <tr className="border-b border-luxury-gray/30">
                            <th className="py-6 font-medium text-gold-500 align-top">所在地</th>
                            <td className="py-6 text-white font-light">
                                〒433-8122<br />
                                静岡県浜松市中区上島5-4-48<br />
                                美容室SOLO 2F
                            </td>
                        </tr>
                        <tr className="border-b border-luxury-gray/30">
                            <th className="py-6 font-medium text-gold-500 align-top">電話番号</th>
                            <td className="py-6 text-white font-light">053-472-3683</td>
                        </tr>
                        <tr className="border-b border-luxury-gray/30">
                            <th className="py-6 font-medium text-gold-500 align-top">販売価格帯</th>
                            <td className="py-6 text-white font-light">各サービス・商品ごとにウェブサイト、またはカウンセリング時にご案内いたします。</td>
                        </tr>
                        <tr className="border-b border-luxury-gray/30">
                            <th className="py-6 font-medium text-gold-500 align-top">商品代金以外の料金</th>
                            <td className="py-6 text-white font-light">銀行振込の場合の振込手数料、または消費税はご購入者様のご負担となります。</td>
                        </tr>
                        <tr className="border-b border-luxury-gray/30">
                            <th className="py-6 font-medium text-gold-500 align-top">お支払い方法</th>
                            <td className="py-6 text-white font-light">クレジットカード決済、銀行振込、現金決済</td>
                        </tr>
                        <tr className="border-b border-luxury-gray/30">
                            <th className="py-6 font-medium text-gold-500 align-top">お支払い時期</th>
                            <td className="py-6 text-white font-light">サービス提供前（前払い）、またはご予約時の事前決済</td>
                        </tr>
                        <tr>
                            <th className="py-6 font-medium text-gold-500 align-top">キャンセル・返金について</th>
                            <td className="py-6 text-white font-light">
                                サービスの性質上、施術提供後の返金はお受けできかねます。<br />
                                ご予約のキャンセルについては、予約日の前日〇〇時までにご連絡ください。<br />
                                情報商材・講座等のデジタルコンテンツに関しても、提供後のキャンセル・返金は原則としてお受けいたしません。
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Law;
