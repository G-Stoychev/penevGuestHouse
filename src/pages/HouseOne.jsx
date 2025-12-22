import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import {
    Sofa,
    BedDouble,
    Bath,
    Mountain,
    Sun,
    Home,
    Bed,
    Wifi,
    Tv,
    WashingMachine,
    Utensils,
    Flame,
    Refrigerator,
    Coffee,
    Microwave,
    DoorClosed,
    VolumeX,
    Moon,
    Lamp,
    Heart,
    Sparkles,
    Leaf,
    Sunset,
} from "lucide-react";

import ImagePreview from "../componets/ImagePreview";
import ImageModal from "../componets/ImageModal";
import CallToAction from "../componets/Footer";

/* ================= LOAD IMAGES ================= */
// Статичен glob – всички снимки от house2 рекурсивно
const allImages = import.meta.glob(
    "../images/house1/**/*.{jpg,jpeg,png,webp}",
    { eager: true }
);

const allImagesArray = Object.values(allImages).map((img) => img.default);

// Взимаме само снимките за секция
const loadImagesBySection = (sectionId) =>
    Object.entries(allImages)
        .filter(([path]) =>
            path.toLowerCase().includes(`/house1/${sectionId}/`)
        )
        .map(([, img]) => img.default);

/* ================= SECTIONS ================= */
const sections = [
    {
        id: "living",
        label: "Всекидневна",
        description:
            "Просторна и светла всекидневна, подходяща за отдих и приятни моменти с близки и приятели. Комфортното обзавеждане и спокойната обстановка я правят идеално място за почивка. Всекидневна: разтегателен диван",
        icon: <Sofa size={16} />,
        descriptionIcons: [
            <Sun size={18} />,
            <Sofa size={18} />,
            <Tv size={18} />,
        ],
    },
    {
        id: "bedroom1",
        label: "Спалня 1",
        description:
            "Просторна спалня с екстра голямо двойно легло и внимателно подбран интериор, създаващ усещане за стил и домашен уют.",

        icon: <Bed size={16} />,
        descriptionIcons: [
            <BedDouble size={18} />,
            <Sun size={18} />,
            <Moon size={18} />,
            <Sparkles size={18} />,
            <Heart size={18} />,
            <Lamp size={18} />,
        ],
    },
    {
        id: "bedroom2",
        label: "Спалня 2",
        description:
            "Комфортна спалня с голямо двойно легло и спокойна атмосфера, осигуряваща идеални условия за пълноценна почивка и релакс.",

        icon: <BedDouble size={16} />,
        descriptionIcons: [
            <BedDouble size={18} />,
            <Sun size={18} />,
            <Moon size={18} />,
            <Sparkles size={18} />,
            <Heart size={18} />,
            <Lamp size={18} />,
        ],
    },
    {
        id: "bedroom3",
        label: "Спалня 3",
        description:
            "Уютна спалня с две единични легла, подходяща за семейства или приятели, предлагаща комфортна обстановка за спокоен сън и пълноценна почивка.",
        icon: <BedDouble size={16} />,
        descriptionIcons: [
            <BedDouble size={18} />,
            <Sun size={18} />,
            <Moon size={18} />,
            <Sparkles size={18} />,
            <Heart size={18} />,
            <Lamp size={18} />,
        ],
    },
    {
        id: "terrace",
        label: "Тераса",
        description:
            "Тераса с възможност за отдих на открито – идеална за сутрешно кафе или вечерна чаша вино, където можете да се насладите на тишината, свежия въздух и красивата околна природа.",
        icon: <Sun size={16} />,
        descriptionIcons: [
            <Sun size={18} />,
            <Coffee size={18} />,
            <Leaf size={18} />,
            <Sunset size={18} />,
            <Mountain size={18} />,
            <Home size={18} />,
            <Coffee size={18} />,
        ],
    },
    {
        id: "view",
        label: "Гледка",
        description:
            "Къщата предлага впечатляваща гледка към езерото, градината и планината, съчетавайки спокойствие, чист въздух и усещане за пълна релаксация сред природата.",
        icon: <Mountain size={16} />,
        descriptionIcons: [<Mountain size={14} />, <Sun size={14} />],
    },
];

/* ================= MAIN COMPONENT ================= */
export default function HouseOne() {
    const [active, setActive] = useState("living");
    const location = useLocation();
    const linksRef = useRef({});

    useEffect(() => {
        if (location.hash) {
            const el = document.getElementById(location.hash.replace("#", ""));
            el?.scrollIntoView({ behavior: "smooth" });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [location]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) =>
                entries.forEach(
                    (entry) =>
                        entry.isIntersecting && setActive(entry.target.id)
                ),
            { rootMargin: "-40% 0px -50% 0px" }
        );

        sections.forEach((s) => {
            const el = document.getElementById(s.id);
            el && observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        linksRef.current[active]?.scrollIntoView({
            behavior: "smooth",
            inline: "center",
        });
    }, [active]);
    useEffect(() => {
        const el = linksRef.current[active];
        const container = linksRef.current.container;

        if (!el || !container) return;

        const elCenter = el.offsetLeft + el.offsetWidth / 2;
        const containerCenter = container.offsetWidth / 2;

        container.scrollTo({
            left: elCenter - containerCenter,
            behavior: "smooth",
        });
    }, [active]);

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 flex gap-10 text-gray-900 dark:text-gray-200">
            {/* DESKTOP ASIDE */}
            <aside className="hidden lg:block w-64 sticky top-28 h-fit">
                <nav className="space-y-2 text-sm">
                    {sections.map((s) => (
                        <a
                            key={s.id}
                            href={`#${s.id}`}
                            className={`
                        flex items-center gap-2 px-3 py-2 rounded-lg transition
                        ${
                            active === s.id
                                ? "bg-black text-white dark:bg-white dark:text-black"
                                : "hover:bg-gray-100 dark:hover:bg-gray-700"
                        }
                    `}
                        >
                            {s.icon}
                            {s.label}
                        </a>
                    ))}
                </nav>
            </aside>

            {/* MOBILE BOTTOM NAV */}
            <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-gray-800 border-t dark:border-gray-700">
                <div
                    className="flex gap-2 px-4 py-3 overflow-x-auto scroll-smooth"
                    ref={(el) => (linksRef.current.container = el)}
                >
                    {sections.map((s) => (
                        <a
                            key={s.id}
                            href={`#${s.id}`}
                            ref={(el) => (linksRef.current[s.id] = el)}
                            className={`
                        flex items-center gap-2
                        whitespace-nowrap
                        px-4 py-2 rounded-lg text-sm
                        transition
                        ${
                            active === s.id
                                ? "bg-black text-white dark:bg-white dark:text-black"
                                : "bg-gray-100 dark:bg-gray-700"
                        }
                    `}
                        >
                            {s.icon}
                            {s.label}
                        </a>
                    ))}
                </div>
            </nav>

            {/* CONTENT */}
            <main className="flex-1 space-y-24">
                {/* TITLE + INFO */}
                <section className="space-y-10">
                    <div>
                        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                            Penev GuestHouse – Къща 1
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300 max-w-3xl">
                            Цяла ваканционна къща с площ <strong>170 m²</strong>
                            , включваща всекидневна, 3 спални и 2 бани.
                            Самостоятелен вход, тишина и панорамна гледка към
                            езерото, градината и планината.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                        <Info
                            icon={<Home size={16} />}
                            text="Цяла къща – 170 m²"
                        />
                        <Info icon={<Wifi size={16} />} text="Безплатен WiFi" />
                        <Info icon={<Sun size={16} />} text="Балкон и тераса" />
                        <Info
                            icon={<Mountain size={16} />}
                            text="Гледка към езеро и планина"
                        />
                        <Info icon={<Bath size={16} />} text="2 бани" />
                        <Info
                            icon={<DoorClosed size={16} />}
                            text="Самостоятелен вход"
                        />
                    </div>
                </section>

                {/* AMENITIES */}
                <section className="space-y-12">
                    <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
                        Удобства
                    </h2>

                    <Amenities
                        title="В къщата"
                        items={[
                            ["Климатик", Sun],
                            ["Телевизор с кабелни канали", Tv],
                            ["Пералня", WashingMachine],
                            ["Шумоизолация", VolumeX],
                            ["Барбекю", Flame],
                        ]}
                    />

                    <Amenities
                        title="Самостоятелна кухня"
                        items={[
                            ["Хладилник", Refrigerator],
                            ["Кухненски прибори", Utensils],
                            ["Микровълнова фурна", Microwave],
                            ["Кафе машина", Coffee],
                            ["Фурна и котлони", Utensils],
                        ]}
                    />
                </section>

                {/* ROOMS */}
                {sections.map((s) => (
                    <RoomSection key={s.id} {...s} />
                ))}
            </main>
        </div>
    );

    /* ================= HELPERS ================= */
    function Info({ icon, text }) {
        return (
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                {icon}
                {text}
            </div>
        );
    }

    function Amenities({ title, items }) {
        return (
            <div>
                <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">
                    {title}
                </h3>
                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-gray-700 dark:text-gray-300">
                    {items.map(([label, Icon], i) => (
                        <li key={i} className="flex gap-2 items-center">
                            <Icon size={16} /> {label}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    function RoomSection({ id, label, description, descriptionIcons }) {
        const images = loadImagesBySection(id);
        const [activeIndex, setActiveIndex] = useState(null);

        if (!images.length) return null;

        return (
            <section id={id} className="scroll-mt-28">
                <div className="grid lg:grid-cols-2 gap-10 items-start">
                    <div>
                        <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
                            {label}
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            {description}
                        </p>
                        <div className="flex gap-3 text-gray-500 dark:text-gray-400">
                            {descriptionIcons.map((Icon, i) => (
                                <span key={i}>{Icon}</span>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {images.map((src, i) => (
                            <ImagePreview
                                key={i}
                                src={src}
                                alt={label}
                                onClick={() => setActiveIndex(i)}
                            />
                        ))}
                    </div>
                </div>

                {activeIndex !== null && (
                    <ImageModal
                        images={images}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                    />
                )}
            </section>
        );
    }
}
