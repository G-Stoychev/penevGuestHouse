export default function Footer() {
    return (
        <footer className="bg-black text-white py-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold">
                            Penev Guest House
                        </h3>
                        <p className="text-sm text-gray-400">
                            Уют и спокойствие сред природата
                        </p>
                    </div>

                    <div className="text-center md:text-left text-sm text-gray-300 space-y-1">
                        <p>📍 с.Главатарци, България</p>
                        <p>
                            <a href="tel:+359883208308" className="underline">
                                +359 883 208 308
                            </a>
                        </p>
                        <p>
                            <a href="mailto:info@site.bg" className="underline">
                                info@mail.bg
                            </a>
                        </p>
                    </div>

                    <div className="text-center md:text-left text-sm">
                        <p className="mb-1 text-gray-400">Последвай ни</p>
                        <div className="flex justify-center md:justify-start gap-4">
                            <a
                                href="https://www.facebook.com/profile.php?id=61568758135858"
                                className="hover:underline"
                            >
                                Facebook
                            </a>
                            <a
                                href="https://www.instagram.com/penev_guesthouse/"
                                className="hover:underline"
                            >
                                Instagram
                            </a>
                            <a
                                href="https://www.booking.com/hotel/bg/penev-gust-house.bg.html"
                                className="hover:underline"
                            >
                                Booking
                            </a>
                            <a
                                href=" https://vila.bg/house-penev-6928.html"
                                className="hover:underline"
                            >
                                Vila.bg
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-center md:justify-end gap-2">
                        <a
                            href="tel:+359883208308"
                            className="inline-block bg-white text-black px-6 py-3 rounded-xl font-medium"
                        >
                            Обади се
                        </a>
                        <a
                            href="https://www.booking.com/hotel/bg/penev-gust-house.bg.html"
                            className="inline-block bg-white text-black px-6 py-3 rounded-xl font-medium"
                        >
                            Booking
                        </a>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-8 pt-4 text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center gap-2">
                    <span>© {new Date().getFullYear()} Penev GuestHouse</span>
                </div>
            </div>
        </footer>
    );
}
