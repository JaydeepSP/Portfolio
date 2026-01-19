import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const services = [
    {
        title: "Web Design",
        price: "Starts at $500"
    },
    {
        title: "Framer Development",
        price: "Starts at $800"
    },
    {
        title: "Photography",
        price: "Starts at $300"
    },
    {
        title: "3D Visuals",
        price: "Starts at $600"
    }
];

export function Services() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-4"
        >
            {services.map((service, index) => (
                <div
                    key={index}
                    className="flex items-center justify-between p-6 bg-white dark:bg-card-bg-dark rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <span className="text-gray-300 dark:text-gray-600 font-medium">0{index + 1}</span>
                        <h3 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark">{service.title}</h3>
                    </div>
                    <div className="px-4 py-2 bg-gray-50 dark:bg-gray-900 rounded-full border border-gray-100 dark:border-gray-700 text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-colors">
                        {service.price}
                    </div>
                </div>
            ))}

            <div className="mt-4 p-6 bg-black dark:bg-white text-white dark:text-black rounded-2xl text-center cursor-pointer hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
                <h3 className="font-semibold flex items-center justify-center gap-2">
                    <Plus size={20} /> Book a call
                </h3>
            </div>
        </motion.div>
    );
}
