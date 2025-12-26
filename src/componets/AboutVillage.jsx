import AttractionCard from "./AttractionCard";

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
                    <AttractionCard
                        title={"Язовир Кърджали"}
                        img={"/images/attractions/Язовир Кърджали.jpg"}
                        description={
                            " Подходящ за риболов, лодки, каяк и разходки край водата с впечатляващи гледки. "
                        }
                    />

                    <AttractionCard
                        title={"Перперикон"}
                        img={"/images/attractions/perpirikon.jpg"}
                        description={
                            "Древен скален град и археологически комплекс, едно от най-значимите исторически места в България."
                        }
                    />

                    <AttractionCard
                        title={"Каменните гъби"}
                        img={"/images/attractions/kamennite-gybi-ahrida.jpg"}
                        description={
                            "Уникален природен феномен със скални образувани подходящ за кратки разходки и снимки."
                        }
                    />
                    <AttractionCard
                        title={"Маказа – Гърция"}
                        img={"/images/attractions/makaza.jpg"}
                        description={
                            "Граничният пункт Маказа свързва Родопите с Егейскотокрайбрежие на Гърция и е една от най-популярните туристически връзки между България и южната ни съседка, предлагаща бърз достъп до морето, живописни планински пейзажи и разнообразни възможности за отдих."
                        }
                    />
                    <AttractionCard
                        title={"Каменната сватба"}
                        img={"/images/attractions/Каменна сватба.jpg"}
                        description={
                            "  Природна забележителност със скални фигури и интересна легенда, разположена край село Зимзелен."
                        }
                    />
                    <AttractionCard
                        title={"Манастир „Св. Йоан Продром“"}
                        img={
                            "/images/attractions/ukrepen-manastir-sv-joan-prodrom.png"
                        }
                        description={
                            "  Духовно средище с вековна история, разположено сред тишината и красотата на Източните Родопи. Манастирът впечатлява със спокойствие, уникална атмосфера и аязмо със свещена вода с лечебна сила."
                        }
                    />
                </div>
                <AttractionCard
                    title={"Въжен мост с. Сухово"}
                    img={"/images/attractions/vyjen-most-2.jpg"}
                    description={
                        " Една от най-атрактивните забележителности в района на Кърджали. Въженият мост предлага вълнуваща разходка над реката и красиви панорамни гледки към природата на Родопите."
                    }
                />
            </section>
        </>
    );
}
