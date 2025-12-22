import HouseCard from "./HouseCard";

export default function HousesPreview() {
    return (
        <>
            <section
                id="houses"
                className="max-w-7xl mx-auto px-4 py-20 transition-colors duration-300"
            >
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
                    Нашите къщи
                </h2>

                <div className="max-w-4xl mx-auto text-center mb-2 space-y-4 text-gray-700 dark:text-gray-300">
                    <strong>Penev GuestHouse</strong> се намира на брега на
                    язовир Кърджали, в туристическото селище{" "}
                    <strong>Главатарци</strong>, само на
                    <strong> 7 км от гр. Кърджали</strong>.
                    <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-gray-700 dark:text-gray-300 mt-2">
                        <li>
                            ✅ Разполагаме с две къщи с по{" "}
                            <strong>3 спални</strong> и капацитет
                            <strong> 7–8 гости</strong> всяка.
                        </li>

                        <li>
                            ✅ Всяка от къщите разполага с напълно оборудвана
                            кухня, телевизор с плосък екран с кабелни канали,
                            всекидневна с диван, самостоятелна баня и пералня.
                        </li>

                        <li>
                            ✅ Осигурени са също съдомиялна машина, микровълнова
                            фурна, хладилник, електрическа кана и кафемашина.
                        </li>
                    </ul>
                    <p className="mt-2">
                        ☀️ На ваше разположение са тераси за слънчеви бани и
                        барбекю. В непосредствена близост има условия за{" "}
                        <strong>пешеходен туризъм</strong> и{" "}
                        <strong>риболов</strong>.
                    </p>
                </div>

                {/* Ако искаш, можеш да включиш и удобствата с иконите */}
                {/* <div className="max-w-5xl mx-auto my-5 text-gray-700 dark:text-gray-300">...</div> */}

                <div className="grid md:grid-cols-2 gap-8 mt-10">
                    <HouseCard
                        title="Penev GuestHouse 1 – Къща с 3 спални"
                        image="/images/house1.jpg"
                        link="/house-one"
                    />
                    <HouseCard
                        title="Penev GuestHouse 2 – Къща с 3 спални"
                        image="/images/house2.jpg"
                        link="/house-two"
                    />
                </div>
            </section>
        </>
    );
}
