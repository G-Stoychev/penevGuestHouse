import { useState } from "react";
import { X, Home, Mountain } from "lucide-react";

/* ==============================
   VITE GLOB IMPORTS (LITERALS)
================================ */
const attractionsImages = Object.values(
    import.meta.glob("../images/attractions/*.{jpg,jpeg,png,webp}", {
        eager: true,
    })
).map((img) => img.default);

const house1Images = Object.values(
    import.meta.glob("../images/house1/**/*.{jpg,jpeg,png,webp}", {
        eager: true,
    })
).map((img) => img.default);

const house2Images = Object.values(
    import.meta.glob("../images/house2/**/*.{jpg,jpeg,png,webp}", {
        eager: true,
    })
).map((img) => img.default);

/* ==============================
   GALLERIES MAP
================================ */
const galleries = {
    attractions: attractionsImages,
    houses: [...house1Images, ...house2Images],
};

export default function Gallery() {
    const [activeCategory, setActiveCategory] = useState("attractions");
    const [activeImage, setActiveImage] = useState(null);

    const imagesToShow = galleries[activeCategory] || [];

    return (
        <section className="max-w-7xl mx-auto px-4 py-16 transition-colors duration-300">
            {/* TITLE */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                    Галерия
                </h1>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Снимки от нашите къщи и красивите забележителности в района.
                </p>
            </div>

            {/* CATEGORY SELECTOR */}
            <div className="flex justify-center gap-4 mb-12 flex-wrap">
                <CategoryButton
                    active={activeCategory === "attractions"}
                    onClick={() => setActiveCategory("attractions")}
                    icon={<Mountain size={18} />}
                    label="Около нас"
                />
                <CategoryButton
                    active={activeCategory === "houses"}
                    onClick={() => setActiveCategory("houses")}
                    icon={<Home size={18} />}
                    label="При нас"
                />
            </div>

            {/* GALLERY GRID */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {imagesToShow.map((src, i) => (
                    <button
                        key={i}
                        onClick={() => setActiveImage(src)}
                        className="group relative overflow-hidden rounded-xl"
                    >
                        <img
                            src={src}
                            alt=""
                            className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/0 dark:bg-black/10 group-hover:bg-black/30 dark:group-hover:bg-black/50 transition-colors duration-300" />
                    </button>
                ))}
            </div>

            {/* MODAL */}
            {activeImage && (
                <div className="fixed inset-0 bg-black/80 dark:bg-black/90 z-50 flex items-center justify-center px-4 transition-colors duration-300">
                    <button
                        onClick={() => setActiveImage(null)}
                        className="absolute top-6 right-6 text-white dark:text-gray-200 hover:opacity-70 transition-opacity duration-200"
                    >
                        <X size={32} />
                    </button>
                    <img
                        src={activeImage}
                        alt="Preview"
                        className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl transition-shadow duration-300"
                    />
                </div>
            )}
        </section>
    );
}

/* ==============================
   Category Button
================================ */
function CategoryButton({ active, onClick, icon, label }) {
    return (
        <button
            onClick={onClick}
            className={`px-6 py-2 rounded-full border transition font-medium flex items-center gap-2
                ${
                    active
                        ? "bg-black dark:bg-white text-white dark:text-black border-black dark:border-white"
                        : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                }
                `}
        >
            {icon}
            {label}
        </button>
    );
}
