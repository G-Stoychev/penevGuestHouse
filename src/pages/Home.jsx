import Hero from "../componets/Hero";
import AboutVillage from "../componets/AboutVillage";
import HousesPreview from "../componets/HousesPreview";

export default function Home() {
    return (
        <>
            <Hero />
            <HousesPreview />
            <AboutVillage />
            <a
                href="#hero"
                aria-label="Scroll to top"
                className="fixed bottom-6 right-6 text-3xl bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-2xl font-medium shadow-lg hover:scale-105 transition transform duration-300"
            >
                ^
            </a>
        </>
    );
}
