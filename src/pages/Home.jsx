import { SquareArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

import Hero from "../componets/Hero";
import AboutVillage from "../componets/AboutVillage";
import HousesPreview from "../componets/HousesPreview";

export default function Home() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setShow(window.scrollY > 300);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <Hero />
            <HousesPreview />
            <AboutVillage />
            {show && (
                <a
                    href="#hero"
                    aria-label="Scroll to top"
                    className="fixed bottom-6 right-6 text-3xl bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-2xl font-medium shadow-lg hover:scale-105 transition transform duration-300"
                >
                    <SquareArrowUp />
                </a>
            )}
        </>
    );
}
