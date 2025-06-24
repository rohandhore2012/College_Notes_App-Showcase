import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-4 overflow-hidden  min-h-screen flex items-center justify-center font-inter">
      {/* Background blobs */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob-slow"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob-delay"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob-reverse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center justify-center">
          {/* Left Side Text */}
          <div className="text-center lg:text-left animate-fade-in-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 
              bg-gradient-to-r from-white via-purple-300 to-pink-300 
              bg-clip-text text-transparent leading-tight drop-shadow-lg">
              Smart Notes for
              <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Smart Students
              </span>
            </h1>

            <p className="text-md md:text-lg lg:text-xl mb-8 text-gray-200 max-w-xl lg:max-w-none mx-auto lg:mx-0 leading-relaxed font-light">
              Transform your college experience with effortless digital note taking,
              secure backups, and an intuitive design built for academic success.
            </p>

            <div className="flex justify-center lg:justify-start">
              <a
                href="https://rohandhore-portfolio.vercel.app/"
                className="group bg-gradient-to-r from-purple-600 to-pink-700 
             hover:from-purple-700 hover:to-pink-800 
             px-7 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg text-white 
             transition-all duration-300 transform hover:scale-105 
             shadow-2xl hover:shadow-pink-500/40 
             flex items-center gap-2 md:gap-3 ring-2 ring-purple-700 
             focus:outline-none focus:ring-4 focus:ring-pink-500"
              >
                <MessageCircle className="mr-2 h-5 w-5 group-hover:animate-pulserotate-6 group-hover:scale-110 group-hover:-translate-y-0.5 transition-transform duration-200" />
                Contact Developer
              </a>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in-right">
            <img
              src="/images/NotesHeroPic.png"
              alt="College Notes App UI"
              className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[550px] 
                rounded-3xl shadow-2xl border border-gray-700/50 
                transition-all duration-700 hover:scale-[1.03] hover:shadow-pink-500/30 animate-float-subtle"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/500x600/1e1e1e/cccccc?text=College+Notes+App";
              }}
            />
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: scale(1) translate(0, 0); }
          33% { transform: scale(1.1) translate(10px, -10px); }
          66% { transform: scale(0.9) translate(-10px, 10px); }
        }

        @keyframes float-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        .animate-blob-slow {
          animation: blob 16s infinite ease-in-out;
        }

        .animate-blob-delay {
          animation: blob 22s infinite ease-in-out 2s;
        }

        .animate-blob-reverse {
          animation: blob 20s infinite ease-in-out 4s reverse;
        }

        .animate-float-subtle {
          animation: float-subtle 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
