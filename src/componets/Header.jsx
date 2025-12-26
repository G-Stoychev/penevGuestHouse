import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Share2, Moon, Sun } from "lucide-react";

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-sm dark:bg-gray-900/90 dark:shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <NavLink
                    to="/"
                    className="text-2xl font-bold tracking-wide dark:text-white"
                >
                    Penev GuestHouse
                </NavLink>

                <button
                    className="md:hidden text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
                    onClick={() => {
                        if (navigator.share) {
                            navigator.share({
                                title: "Penev Guesthouse",
                                text: "Виж това място!",
                                url: window.location.href,
                            });
                        } else {
                            navigator.clipboard.writeText(window.location.href);
                            alert("Линкът е копиран!");
                        }
                    }}
                >
                    <Share2 />
                </button>
                <button
                    onClick={() => {
                        document.documentElement.classList.toggle("dark");
                        setIsDark(!isDark);
                    }}
                    className="hidden ml-4 p-2  bg-transparent hover:text-black    dark:text-gray-300 dark:hover:text-white rounded"
                >
                    {isDark ? <Moon /> : <Sun />}
                </button>

                <nav className="hidden md:flex gap-8 text-sm font-medium">
                    <NavLink
                        to="/"
                        className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
                    >
                        Начало
                    </NavLink>
                    <NavLink
                        to="/house-one"
                        className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
                    >
                        Къща 1
                    </NavLink>
                    <NavLink
                        to="/house-two"
                        className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
                    >
                        Къща 2
                    </NavLink>
                    <NavLink
                        to="/gallery"
                        className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
                    >
                        Галерия
                    </NavLink>
                    <NavLink
                        to="/information"
                        className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
                    >
                        Цени и настаняване
                    </NavLink>
                    <NavLink
                        to="/contacts"
                        className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
                    >
                        Контакти
                    </NavLink>
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <a
                        href="tel:+359883208308"
                        className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
                    >
                        Телефон: +359 883 208 308
                    </a>
                    <a
                        href="https://www.booking.com/hotel/bg/penev-gust-house.bg.html"
                        className="bg-black text-white px-5 py-2 rounded-xl text-sm hover:bg-gray-800 transition dark:bg-white dark:text-black dark:hover:bg-gray-300"
                    >
                        Резервации
                    </a>
                </div>

                <button
                    onClick={() => {
                        document.documentElement.classList.toggle("dark");
                        setIsDark(!isDark);
                    }}
                    className=" ml-4 p-2  bg-transparent hover:text-black    dark:text-gray-300 dark:hover:text-white rounded"
                >
                    {isDark ? <Moon /> : <Sun />}
                </button>

                <button
                    className="md:hidden text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {mobileOpen && (
                <div className="md:hidden bg-white shadow-lg dark:bg-gray-900 dark:shadow-md">
                    <nav className="flex flex-col gap-2 px-4 py-4 border-b dark:border-gray-700">
                        <NavLink
                            to="/"
                            onClick={() => setMobileOpen(false)}
                            className="text-gray-600 hover:text-black"
                        >
                            Начало
                        </NavLink>
                        <NavLink
                            to="/house-one"
                            onClick={() => setMobileOpen(false)}
                            className="text-gray-600 hover:text-black"
                        >
                            Къща 1
                        </NavLink>
                        <NavLink
                            to="/house-two"
                            onClick={() => setMobileOpen(false)}
                            className="text-gray-600 hover:text-black"
                        >
                            Къща 2
                        </NavLink>
                        <NavLink
                            to="/gallery"
                            className="text-gray-600 hover:text-black"
                        >
                            Галерия
                        </NavLink>
                        <NavLink
                            to="/information"
                            onClick={() => setMobileOpen(false)}
                            className="text-gray-600 hover:text-black"
                        >
                            Цени и настаняване
                        </NavLink>
                        <NavLink
                            to="/contacts"
                            onClick={() => setMobileOpen(false)}
                            className="text-gray-600 hover:text-black"
                        >
                            Контакти
                        </NavLink>
                    </nav>
                    ;
                    <div className="flex flex-col px-4 py-4 gap-2">
                        <a
                            href="tel:+359883208308"
                            className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
                        >
                            Телефон: +359 883 208 308
                        </a>

                        <a
                            href="https://www.booking.com/hotel/bg/penev-gust-house.bg.html"
                            className="bg-black text-white px-5 py-2 rounded-xl text-center hover:bg-gray-800 transition dark:bg-white dark:text-black dark:hover:bg-gray-300"
                        >
                            Резервации
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
