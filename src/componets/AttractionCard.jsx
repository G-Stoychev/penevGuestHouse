export default function AttractionCard({ title, img, description }) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md dark:shadow-none p-6 transition-colors duration-300">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {title}
            </h3>
            <img
                src={img}
                alt={title}
                className="rounded-2xl object-cover h-48 w-full mb-2"
            />
            <p className="text-gray-700 dark:text-gray-300">{description}</p>
        </div>
    );
}
