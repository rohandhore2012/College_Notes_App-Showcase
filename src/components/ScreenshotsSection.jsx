import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const autoplayTimerRef = useRef(null); // Ref to store autoplay interval ID
  const dragStartX = useRef(0); // Use ref for drag start X to prevent re-renders on every drag
  const isDragging = useRef(false); // Flag to indicate if dragging is active

  const images = [
    {
      src: '/images/Registration ScreenShot.png',
      title: 'Effortless Registration',
      description: 'Sign up in minutes and start organizing your college life. A simple and intuitive onboarding process.'
    },
    {
      src: '/images/Login Screen.png', 
      title: 'Secure Login',
      description: 'Quick and secure access to all your academic resources.'
    },
    
    {
      src: '/images/Add New Note.png',
      title: 'Adding New Note',
      description: 'Create new notes with rich text editing, tags, and attachments. Capture every lecture and idea with ease.'
    },
    {
      src: '/images/Edit Note.png',
      title: 'Edit & Refine Notes',
      description: 'Edit existing notes on the fly. Update, add details, and refine your study materials anytime, anywhere.'
    },
    {
      src: '/images/Edited Note Saved.png',
      title: 'Notes Saved Securely',
      description: 'Automatic cloud backup ensures your notes are always safe and accessible across all your devices.'
    },
    {
      src: '/images/Note Deleted.png',
      title: 'Organize Your Space',
      description: 'Easily delete or archive notes to keep your workspace clutter-free and focused on what matters most.'
    }
  ];

  const radius = 280; // Distance of images from the center of the cylinder
  const angleStep = 360 / images.length; // Angle between each image in the cylinder
  const minSwipeDistance = 50; // Minimum distance for a swipe to register

  // Autoplay effect
  useEffect(() => {
    // Clear any existing timer to prevent multiple intervals
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
    }

    if (isAutoplay) {
      autoplayTimerRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % images.length);
      }, 4000); // Autoplay every 4 seconds
    }

    // Cleanup interval on component unmount or when autoplay is toggled off
    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [isAutoplay, images.length]);

  // Pause autoplay temporarily on user interaction
  const pauseAutoplayTemp = () => {
    setIsAutoplay(false); // Stop autoplay immediately
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current); // Clear current interval
    }
    // Restart autoplay after a short delay
    autoplayTimerRef.current = setTimeout(() => setIsAutoplay(true), 2500);
  };

  // Navigation functions
  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % images.length);
    pauseAutoplayTemp();
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
    pauseAutoplayTemp();
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    pauseAutoplayTemp();
  };

  // Mouse and Touch Event Handlers for Swiping on the main image
  const handleMouseDown = (e) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
    // Prevent default to avoid image dragging behavior on desktop
    e.preventDefault(); 
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    // Optional: add visual feedback during drag if desired
  };

  const handleMouseUp = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const dragDistance = e.clientX - dragStartX.current;
    if (dragDistance > minSwipeDistance) {
      prevSlide();
    } else if (dragDistance < -minSwipeDistance) {
      nextSlide();
    }
  };

  const handleMouseLeave = () => {
    // End dragging if mouse leaves the container
    if (isDragging.current) {
      isDragging.current = false;
    }
  };

  const handleTouchStart = (e) => {
    isDragging.current = true;
    dragStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const dragDistance = e.changedTouches[0].clientX - dragStartX.current;
    if (dragDistance > minSwipeDistance) {
      prevSlide();
    } else if (dragDistance < -minSwipeDistance) {
      nextSlide();
    }
  };

  return (
    <section id="screenshots" className=" md:py-24 font-inter text-white flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title & Description */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
            App Interface Showcase
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Explore the intuitive design and powerful features of our note-taking application through these key screenshots.
          </p>
        </div>

        {/* Cylinder Container - Adjusted size for better visual balance */}
        <div 
          className="relative w-[300px] h-[450px] md:w-[560px] md:h-[480px] mb-8 select-none cursor-grab active:cursor-grabbing mx-auto"
          style={{ perspective: '1000px' }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Inner cylinder - rotates */}
          <div 
            className="absolute inset-0 transition-transform duration-700 ease-in-out"
            style={{
              transformStyle: 'preserve-3d',
              transform: `rotateY(${-currentIndex * angleStep}deg)`
            }}
          >
            {images.map((item, index) => {
              // Calculate angular distance to current index for opacity
              let diff = currentIndex - index;
              if (diff > images.length / 2) diff -= images.length;
              if (diff < -images.length / 2) diff += images.length;

              return (
                <div
                  key={index}
                  className="absolute w-[220px] h-[400px] md:w-[250px] md:h-[450px] overflow-hidden rounded-2xl shadow-2xl cursor-pointer 
                             hover:shadow-purple-500/25 transition-all duration-300 
                             bg-gray-800/50 backdrop-blur-md border border-gray-700 flex flex-col items-center justify-start p-4"
                  style={{
                    transform: `rotateY(${index * angleStep}deg) translateZ(${radius}px)`,
                    left: '50%',
                    top: '50%',
                    marginLeft: `-${(220 / 2)}px`, // Half of card width
                    marginTop: `-${(400 / 2)}px`,  // Half of card height
                    opacity: index === currentIndex ? 1 : (Math.abs(diff) <= 1 ? 0.7 : 0.3) // Smoother opacity
                  }}
                  onClick={() => goToSlide(index)}
                >
                  <div className="w-full h-[80%] overflow-hidden rounded-lg border border-gray-600/50">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src="https://placehold.co/220x400/4a4a4a/cccccc?text=Error"; // Fallback image for card
                      }}
                    />
                  </div>
                  <div className="mt-4 text-center w-full">
                    <h3 className="text-base font-semibold text-white mb-1 leading-tight">{item.title}</h3>
                    <p className="text-xs text-gray-300 line-clamp-2">{item.description}</p>
                  </div>
                  {index === currentIndex && (
                    <div className="absolute inset-0 border-4 border-purple-500 rounded-2xl animate-pulse-border z-20"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
           {/* Write code for chevron buttons if needed */}
      </div>

      {/* Custom CSS for scrollbar and animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap');

        .font-inter {
          font-family: 'Inter', sans-serif;
        }

        /* Keyframe for subtle border pulse on active thumbnail */
        @keyframes pulse-border {
          0% { box-shadow: 0 0 0 0 rgba(168, 85, 247, 0.7); } /* purple-500 */
          70% { box-shadow: 0 0 0 10px rgba(168, 85, 247, 0); }
          100% { box-shadow: 0 0 0 0 rgba(168, 85, 247, 0); }
        }
        .animate-pulse-border {
          animation: pulse-border 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default App;
