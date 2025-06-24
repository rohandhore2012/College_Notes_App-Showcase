// Floating Background Elements

import { motion, } from 'framer-motion';

const FloatingElements = () => {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 0.2, scale: 1.2 }}
                    transition={{
                        duration: 8 + Math.random() * 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 2,
                        repeatType: "reverse"
                    }}
                    className="absolute"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                >
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-sm"></div>
                </motion.div>
            ))}
        </div>
    );
};
export default FloatingElements;