import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";

export default function ImageModal({ images, activeIndex, setActiveIndex }) {
    const startXRef = useRef(null);

    const handleTouchStart = (e) => {
        startXRef.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        if (startXRef.current === null) return;
        const diffX = e.touches[0].clientX - startXRef.current;

        if (diffX > 50) swipePrev();
        else if (diffX < -50) swipeNext();
        startXRef.current = null;
    };

    const swipeNext = () => {
        setActiveIndex((prev) => (prev + 1) % images.length);
    };

    const swipePrev = () => {
        setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleClose = () => setActiveIndex(null);

    useEffect(() => {
        const handleEsc = (e) => e.key === "Escape" && handleClose();
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    return (
        <div
            className="fixed inset-0 z-50 bg-black/80 dark:bg-black/90 flex items-center justify-center transition-colors duration-300"
            onClick={handleClose}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
        >
            <div className="relative" onClick={(e) => e.stopPropagation()}>
                {/* Close button */}
                <button
                    onClick={handleClose}
                    className="absolute -top-12 right-0 text-white dark:text-gray-200 hover:opacity-70 transition-opacity duration-200"
                >
                    <X size={32} />
                </button>

                {/* Navigation arrows */}
                <button
                    onClick={swipePrev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 text-white dark:text-gray-200 p-4 hover:opacity-70 transition-opacity duration-200"
                >
                    <ChevronLeft size={32} />
                </button>
                <button
                    onClick={swipeNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-white dark:text-gray-200 p-4 hover:opacity-70 transition-opacity duration-200"
                >
                    <ChevronRight size={32} />
                </button>

                <img
                    src={images[activeIndex]}
                    alt="Preview"
                    className="max-h-[85vh] max-w-[85vw] rounded-2xl shadow-2xl transition-shadow duration-300"
                />
            </div>
        </div>
    );
}
