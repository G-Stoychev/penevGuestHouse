export default function PricesInfo() {
    return (
        <main className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
            <section className="max-w-5xl mx-auto px-4 py-16">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                    Цени и Информация
                </h1>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 mb-10 transition-colors duration-300">
                    <h2 className="text-2xl font-semibold mb-6  text-gray-900 dark:text-white">
                        Цени за нощувка
                    </h2>
                    <div>
                        <h3 className="text-xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
                            Делнични дни
                        </h3>
                        <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                            <li className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
                                <span>Къща 1 (до 8 гости)</span>
                                <div>
                                    <span className="font-medium ">€179/</span>
                                    <span className="font-medium text-sm">
                                        {" "}
                                        350 лв.
                                    </span>
                                </div>
                            </li>
                            <li className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
                                <span>Къща 2 (до 8 гости)</span>
                                <div>
                                    <span className="font-medium ">€179/</span>
                                    <span className="font-medium text-sm">
                                        {" "}
                                        350 лв.
                                    </span>
                                </div>
                            </li>
                            <li className="flex justify-between">
                                <span>Двете къщи заедно</span>
                                <div>
                                    <span className="font-medium ">€358 /</span>
                                    <span className="font-medium text-sm">
                                        {" "}
                                        700 лв.
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
                            Уикенд
                        </h3>
                        <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                            <li className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
                                <span>Къща 1 (до 8 гости)</span>
                                <div>
                                    <span className="font-medium "> €199/</span>
                                    <span className="font-medium text-sm">
                                        {" "}
                                        389 лв.
                                    </span>
                                </div>
                            </li>
                            <li className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
                                <span>Къща 2 (до 8 гости)</span>
                                <div>
                                    <span className="font-medium "> €199/</span>
                                    <span className="font-medium text-sm">
                                        {" "}
                                        389 лв.
                                    </span>
                                </div>
                            </li>
                            <li className="flex justify-between">
                                <span>Двете къщи заедно</span>
                                <div>
                                    <span className="font-medium "> €390/</span>
                                    <span className="font-medium text-sm">
                                        {" "}
                                        762 лв.
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                        * Цените са ориентировъчни и могат да варират според
                        сезона и продължителността на престоя.
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                        * Къщите се отдават минимум за 2 нощувки.
                    </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 mb-10 transition-colors duration-300">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                        Настаняване и Напускане
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 text-gray-700 dark:text-gray-300">
                        <div>
                            <h3 className="font-medium mb-2 text-gray-900 dark:text-white">
                                Настаняване
                            </h3>
                            <p>
                                Настаняването се извършва след{" "}
                                <strong>14:00 ч.</strong>. Ранно настаняване е
                                възможно след предварителна уговорка.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-medium mb-2 text-gray-900 dark:text-white">
                                Напускане
                            </h3>
                            <p>
                                Напускането е до <strong>11:00 ч.</strong>.
                                Късно напускане е възможно при наличие на
                                свободни дати.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 transition-colors duration-300">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                        Допълнителна информация
                    </h2>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300 list-disc list-inside">
                        <li>
                            Домашни любимци се допускат след предварително
                            запитване
                        </li>
                        <li>Пушенето в къщите не е разрешено</li>
                        <li>Осигурен безплатен паркинг за гостите</li>
                        <li>Безплатен Wi-Fi на територията на обекта</li>
                    </ul>

                    <div className="mt-8 text-center">
                        <a
                            href="https://www.booking.com/hotel/bg/penev-gust-house.bg.html"
                            className="inline-block bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300"
                        >
                            Провери наличности
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
