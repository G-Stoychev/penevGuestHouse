export default function AboutVillage() {
    return (
        <>
            <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                        За село Главатарци
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                        Село Главатарци се намира само на няколко километра от
                        град Кърджали, на брега на язовир Кърджали. Районът е
                        известен с красивата си природа, чист въздух и спокойна
                        атмосфера, което го прави предпочитана дестинация за
                        почивка и отдих.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                        Селото предлага отлични условия за риболов, разходки
                        сред природата, водни активности и релакс, далеч от
                        градския шум и ежедневния стрес.
                    </p>
                </div>

                <img
                    src="/images/attractions/с.Главатарци.jpg"
                    alt="Село Главатарци"
                    className="rounded-2xl object-cover h-48 w-full shadow-lg dark:shadow-none"
                />
            </section>

            <section className="max-w-7xl mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">
                    Забележителности и атракции наблизо
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Карта 1 */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md dark:shadow-none p-6 transition-colors duration-300">
                        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                            Язовир Кърджали
                        </h3>
                        <img
                            src="/images/attractions/Язовир Кърджали.jpg"
                            alt="Язовир Кърджали"
                            className="rounded-2xl object-cover h-48 w-full mb-2"
                        />
                        <p className="text-gray-700 dark:text-gray-300">
                            Подходящ за риболов, лодки, каяк и разходки край
                            водата с впечатляващи гледки.
                        </p>
                    </div>

                    {/* Карта 2 */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md dark:shadow-none p-6 transition-colors duration-300">
                        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                            Перперикон
                        </h3>
                        <img
                            src="/images/attractions/perpirikon.jpg"
                            alt="Перперикон"
                            className="rounded-2xl object-cover h-48 w-full mb-2"
                        />
                        <p className="text-gray-700 dark:text-gray-300">
                            Древен скален град и археологически комплекс, едно
                            от най-значимите исторически места в България.
                        </p>
                    </div>

                    {/* Карта 3 */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md dark:shadow-none p-6 transition-colors duration-300">
                        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                            Каменните гъби
                        </h3>
                        <img
                            src="/images/attractions/kamennite-gybi-ahrida.jpg"
                            alt="Каменните гъби"
                            className="rounded-2xl object-cover h-48 w-full mb-2"
                        />
                        <p className="text-gray-700 dark:text-gray-300">
                            Уникален природен феномен със скални образувания,
                            подходящ за кратки разходки и снимки.
                        </p>
                    </div>

                    {/* Останалите карти се правят по същия начин */}
                </div>
            </section>
        </>
    );
}
