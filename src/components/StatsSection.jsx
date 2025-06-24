// Stats Section Component

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Users,
  ShieldCheck,
  MapPin,
  Rocket
} from 'lucide-react';

const StatsSection = () => {
  const stats = [
    { number: "50+", label: "Active Users", icon: <Users className="h-6 w-6" /> },
    { number: "4.4", label: "User Satisfaction", icon: <ShieldCheck className="h-6 w-6" /> },
    { number: "6+", label: "Campuses Reached", icon: <MapPin className="h-6 w-6" /> },
    { number: "100%", label: "Offline Access", icon: <Rocket className="h-6 w-6" /> }
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section ref={ref} className="py-20 relative bg-gradient-to-b from-[#130f40] via-[#0f0c29] to-[#000000]">
      <div className="absolute inset-0 bg-neutral-900/30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Heading */}
        <div className="text-center mb-12">
         <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
               Helping Students{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
              Stay Organized
            </span>
          </h2>
            <p className="text-gray-300 mt-2">
                Real results. Real users. See how College Notes is making an impact every day.
            </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 group-hover:border-white/40 transition-all duration-300">
                <div className="text-pink-400 mb-2 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/70 text-sm">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
