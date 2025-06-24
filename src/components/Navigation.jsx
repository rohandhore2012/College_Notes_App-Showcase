// Navigation Component

import React, { useState, useEffect,} from 'react';
import { motion,} from 'framer-motion';
import {
   
    Smartphone,
  
} from 'lucide-react';
const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${
                isScrolled
                    ? 'bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg'
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <motion.a
                        href="#"
                        className="flex items-center space-x-3"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                            <Smartphone className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-white">College Notes App</span>
                    </motion.a>

                    <div className="hidden md:flex items-center space-x-8">
                        {['Features', 'Screenshots', 'Reviews', 'Download'].map((item, index) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className="text-white/90 hover:text-white font-medium transition-colors duration-300 relative group"
                                >
                                    {item}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};
export default Navigation;