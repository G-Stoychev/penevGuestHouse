import { Link } from "react-router-dom";

export default function HouseCard({ title, image, link }) {
    return (
        <div className="rounded-2xl overflow-hidden shadow-md dark:shadow-none bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300">
            <img src={image} alt={title} className="h-56 w-full object-cover" />
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {title}
                </h3>
                <Link
                    to={link}
                    className="inline-block mt-2 text-sm font-medium text-black dark:text-gray-200 underline hover:text-gray-700 dark:hover:text-white transition-colors duration-300"
                >
                    Виж повече
                </Link>
            </div>
        </div>
    );
}
