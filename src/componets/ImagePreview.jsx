import { useRef, useState } from "react";

export default function ImagePreview({ src, alt, onClick }) {
    const timerRef = useRef(null);
    const [showPreview, setShowPreview] = useState(false);

    const handleMouseEnter = () => {
        timerRef.current = setTimeout(() => {
            setShowPreview(true);
        }, 1100); // ⏱ 1.1 секунди
    };

    const handleMouseLeave = () => {
        clearTimeout(timerRef.current);
        setShowPreview(false);
    };

    return (
        <div
            className="relative cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
        >
            <img
                src={src}
                alt={alt}
                className="rounded-2xl object-cover h-40 w-full transition-shadow duration-300"
            />

            {/* DELAYED HOVER PREVIEW */}
            {showPreview && (
                <div
                    className="
          fixed inset-0 z-40
          flex items-center justify-center
          bg-black/60 dark:bg-black/80
          pointer-events-none
          transition-colors duration-300
        "
                >
                    <img
                        src={src}
                        alt={alt}
                        className="max-h-[80vh] max-w-[80vw] rounded-2xl shadow-2xl transition-shadow duration-300"
                    />
                </div>
            )}
        </div>
    );
}
