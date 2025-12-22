export default function Hero() {
    return (
        <section
            id="hero"
            className="relative h-[80vh] flex items-center justify-center text-white transition-colors duration-300"
        >
            {/* Background Image */}
            <img
                src="/images/hero2.jpg"
                alt="Penev Guest House - Главатарци"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 dark:bg-black/70" />

            {/* Content */}
            <div className="relative z-10 text-center max-w-3xl px-4">
                <h1 className="text-5xl font-bold mb-4 text-white dark:text-white">
                    Penev GuestHouse
                </h1>
                <p className="text-xl mb-6 text-gray-200 dark:text-gray-300">
                    с. Главатарци – спокойствие, природа и уют
                </p>
                <a
                    href="#houses"
                    className="inline-block bg-white dark:bg-gray-200 text-black dark:text-black px-8 py-3 rounded-2xl font-medium hover:bg-gray-100 dark:hover:bg-white transition-colors duration-300"
                >
                    Виж къщите
                </a>
            </div>
        </section>
    );
}
