import { motion } from 'framer-motion';
import { Smartphone, Github, Mail, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="h-5 w-5" />,
      href: 'https://github.com/rohandhore2012',
    },
    {
      name: 'Email',
      icon: <Mail className="h-5 w-5" />,
      href: 'mailto:rohandhore2102@gmail.com',
    },
    {
      name: 'Instagram',
      icon: <Instagram className="h-5 w-5" />,
      href: 'https://www.instagram.com/rohan_dhore_3303/',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="h-5 w-5" />,
      href: 'https://www.linkedin.com/in/rohan-dhore-7351211a1/',
    },
  ];

  return (
    <footer className="relative text-white pt-20 pb-10 overflow-hidden">
      {/* Gradient background blur effect */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1200px] h-[1200px] bg-pink-500/10 rounded-full blur-3xl opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Logo & App Name */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center space-x-3 text-3xl font-bold bg-gradient-to-r bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent mb-4"
        >
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
            <Smartphone className="w-6 h-6 text-white" />
          </div>
          <span>CollegeNotes App</span>
        </motion.div>

        {/* Tagline */}
        <p className="text-white/70 max-w-2xl mx-auto text-base md:text-lg mb-8">
          Built for students. Trusted by learners. Simplify your academic life with clarity and control.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-5 mb-12">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-all duration-300 shadow-md"
              title={social.name}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-white/60 text-sm">
          &copy; {new Date().getFullYear()} College Notes. All rights reserved.
          <br className="md:hidden" />
          <span className="block md:inline ml-1">
            Crafted with precision by <a href="https://rohandhore-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-cyan-400 transition">Rohan</a>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
