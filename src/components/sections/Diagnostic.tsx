import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const questions = [
    {
        id: 1,
        text: "現在、最も解消したいお悩みはどれですか？",
        options: ["顔のシワ・たるみ・くすみ", "肩こり・全身の疲労感", "ボディラインの崩れ・ダイエット", "足のむくみ・冷え"]
    },
    {
        id: 2,
        text: "エステやマッサージに行く頻度はどのくらいですか？",
        options: ["月に1回以上", "2〜3ヶ月に1回", "年に数回程度", "ほとんど行かない"]
    },
    {
        id: 3,
        text: "施術を選ぶ際、最も重視するポイントは何ですか？",
        options: ["即効性と結果", "リラクゼーション・癒し", "スタッフの技術と信頼感", "通いやすさと価格"]
    }
];

const Diagnostic = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<string[]>([]);
    const [isFinished, setIsFinished] = useState(false);

    const handleAnswer = (answer: string) => {
        setAnswers([...answers, answer]);
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setIsFinished(true);
        }
    };

    return (
        <section id="diagnostic" className="py-32 bg-luxury-black relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-4xl border border-gold-500/20 rounded-sm bg-luxury-dark/80 backdrop-blur-md shadow-2xl p-8 md:p-16">

                {!isFinished ? (
                    <div>
                        <div className="text-center mb-12">
                            <h2 className="text-xl md:text-2xl text-gold-500 font-serif tracking-[0.2em] mb-4">あなたに最適な極上ケア診断</h2>
                            <p className="text-luxury-light/80 text-sm font-light tracking-wider">3つの質問に答えるだけで、あなたの本来の美しさを引き出す最適なアプローチをご提案します。</p>
                        </div>

                        <div className="mb-8">
                            <div className="flex justify-between text-xs text-gold-500 mb-2 font-serif tracking-widest">
                                <span>QUESTION {currentQuestion + 1}</span>
                                <span>{currentQuestion + 1} / {questions.length}</span>
                            </div>
                            <div className="w-full bg-luxury-black h-1">
                                <motion.div
                                    className="bg-gold-500 h-1"
                                    initial={{ width: `${(currentQuestion / questions.length) * 100}%` }}
                                    animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                                    transition={{ duration: 0.5 }}
                                />
                            </div>
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentQuestion}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="text-2xl font-serif text-white mb-8 text-center tracking-widest leading-relaxed">
                                    {questions[currentQuestion].text}
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {questions[currentQuestion].options.map((option, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleAnswer(option)}
                                            className="border border-luxury-gray/50 hover:border-gold-500 text-luxury-light/90 hover:text-gold-300 py-4 px-6 text-left rounded-sm transition-all duration-300 hover:bg-gold-500/10 font-light tracking-wider"
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-center py-8"
                    >
                        <div className="w-20 h-20 mx-auto bg-gold-500/10 rounded-full flex items-center justify-center mb-8 border border-gold-500/30">
                            <span className="text-gold-500 text-4xl">✨</span>
                        </div>
                        <h3 className="text-3xl font-serif text-gold-300 mb-6 tracking-widest">診断完了</h3>
                        <p className="text-white font-light tracking-wider mb-8 leading-relaxed">
                            あなたの回答を分析しました。<br />
                            <span className="text-gold-500">「{answers[0]}」</span>にお悩みのあなたには、<br />
                            独自の<span className="blur-sm bg-luxury-light/10 select-none">極秘デトックスメソッド</span>が最適です。
                        </p>

                        <div className="bg-luxury-black border border-gold-500/30 p-8 rounded-sm mb-10 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-luxury-black/90 z-10"></div>
                            <h4 className="text-gold-500 font-serif mb-4 tracking-widest relative z-0">診断結果レポート</h4>
                            <p className="text-luxury-light/60 font-light text-sm tracking-wider leading-loose relative z-0">
                                あなたの現在の状態は、日々のストレスや姿勢の崩れにより、本来持つべき巡りの力が低下しています。<br />
                                今すぐ始めるべき3つの特別なケアとは...
                            </p>
                            <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center">
                                <span className="text-white text-sm tracking-widest bg-luxury-black/80 px-4 py-2 rounded-full border border-luxury-gray">
                                    続きは公式LINEで公開中（無料）
                                </span>
                            </div>
                        </div>

                        <a
                            href="https://line.me/R/ti/p/@your_line_id"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-[#06C755] hover:bg-[#05b34c] text-white font-bold tracking-widest py-5 px-12 rounded-full transition-colors shadow-lg shadow-[#06C755]/20"
                        >
                            LINE登録して結果の続きを見る
                        </a>
                        <p className="text-xs text-luxury-light/50 mt-4 tracking-widest font-light">※登録後、すぐに結果が届きます</p>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Diagnostic;
