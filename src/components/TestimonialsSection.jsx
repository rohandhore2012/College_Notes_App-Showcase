// Testimonials Section Component
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    Star
    } from 'lucide-react';
const TestimonialsSection = () => {
    const testimonials = [
  {
    name: "Shravan Padale",
    role: "BCA Student, Pune",
    avatar: "https://ui-avatars.com/api/?name=Shravam+Padale&background=1E1E2F&color=F9D923&rounded=true&size=128&bold=true",
    rating: 5,
    text: "This app changed the way I manage my notes. Clean UI, fast sync, and I never lose anything!"
  },
  {
    name: "Shreyash Zapate",
    role: "Arts Student, Satara",
    avatar: "https://ui-avatars.com/api/?name=Shreyash+Zapate&background=3D3D66&color=FF9F1C&rounded=true&size=128&bold=true",
    rating: 5,
    text: "I used to write notes on paper and lose them. Now everything's on my phone, organized by subject!"
  },
  {
    name: "Abhishek Jadhav",
    role: "Computer Science, Pune",
    avatar: "https://ui-avatars.com/api/?name=Abhishek+Jadhav&background=3D3D66&color=FF9F1C&rounded=true&size=128&bold=true",
    rating: 4,
    text: "No internet? No problem. I can take notes offline and sync later. It’s just perfect for college life."
  }
];

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <section id="reviews" ref={ref} className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        What Users
                        <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent"> Say</span>
                    </h2>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        Join thousands of satisfied users worldwide
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="group"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                                <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300">
                                    <div className="flex items-center mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                        ))}
                                    </div>
                                    <p className="text-white/80 mb-6 italic leading-relaxed">
                                        "{testimonial.text}"
                                    </p>
                                    <div className="flex items-center">
                                        <img
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            className="w-12 h-12 rounded-full mr-4"
                                        />
                                        <div>
                                            <h4 className="text-white font-semibold">{testimonial.name}</h4>
                                            <p className="text-white/60 text-sm">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default TestimonialsSection;