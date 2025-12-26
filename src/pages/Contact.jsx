import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contacts() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-16 transition-colors duration-300">
            <section className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                    Контакти
                </h1>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Свържете се с нас за резервации, въпроси или допълнителна
                    информация. Ще се радваме да ви помогнем.
                </p>
            </section>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
                <section className="space-y-8">
                    <div className="flex items-start gap-4">
                        <MapPin className="w-6 h-6 text-gray-900 dark:text-white" />
                        <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                                Адрес
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                с. Главатарци, обл. Кърджали
                                <br />
                                България
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <Phone className="w-6 h-6 text-gray-900 dark:text-white" />
                        <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                                Телефон
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                +359 883 208 308
                            </p>
                        </div>
                    </div>
                </section>
                <section className="space-y-8">
                    <div className="flex items-start gap-4">
                        <Mail className="w-6 h-6 text-gray-900 dark:text-white" />
                        <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                                Имейл
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                info@penevguesthouse.bg
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <Clock className="w-6 h-6 text-gray-900 dark:text-white" />
                        <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                                Работно време
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Всеки ден: 08:00 – 22:00
                            </p>
                        </div>
                    </div>
                </section>

                {/* <section className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                        Изпратете ни съобщение
                    </h2>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Вашето име"
                            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        />
                        <input
                            type="email"
                            placeholder="Имейл"
                            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        />
                        <textarea
                            rows="5"
                            placeholder="Вашето съобщение"
                            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        />
                        <button
                            type="submit"
                            className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300"
                        >
                            Изпрати
                        </button>
                    </form>
                </section> */}
            </div>

            <section className="mt-20">
                <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
                    Как да ни намерите
                </h2>
                <div className="w-full h-[400px] rounded-2xl overflow-hidden">
                    <iframe
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2981.382984750104!2d25.307978376481895!3d41.647466571268026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ad733d9438eb8f%3A0x3751bedab67a607c!2sPenev%20Guest%20House!5e0!3m2!1sbg!2sbg!4v1765912097832!5m2!1sbg!2sbg"
                        className="w-full h-full border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </section>
        </div>
    );
}
