import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        text: "David is an exceptional designer. He understood our vision perfectly and delivered a site that exceeded our expectations.",
        author: "Sarah Miller",
        handle: "@sarahm",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces"
    },
    {
        text: "Working with David was a breeze. Fast communication, top-tier design skills, and a great eye for detail.",
        author: "James Chen",
        handle: "@jamesc",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&crop=faces"
    },
    {
        text: "I highly recommend David to anyone looking for a unique and professional web presence.",
        author: "Elena Rodriguez",
        handle: "@elena_rod",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=faces"
    }
];

export function Clients() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid gap-6"
        >
            {testimonials.map((testimonial, index) => (
                <div key={index} className="p-8 bg-white dark:bg-card-bg-dark rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
                    <Quote className="text-gray-300 dark:text-gray-600 mb-6" size={32} />
                    <p className="text-lg text-text-primary-light dark:text-text-primary-dark font-medium leading-relaxed mb-8">
                        "{testimonial.text}"
                    </p>
                    <div className="flex items-center gap-4">
                        <img
                            src={testimonial.image}
                            alt={testimonial.author}
                            className="w-12 h-12 rounded-full border border-gray-100 dark:border-gray-700"
                        />
                        <div>
                            <h4 className="font-bold text-text-primary-light dark:text-text-primary-dark">{testimonial.author}</h4>
                            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">{testimonial.handle}</p>
                        </div>
                    </div>
                </div>
            ))}
        </motion.div>
    );
}
