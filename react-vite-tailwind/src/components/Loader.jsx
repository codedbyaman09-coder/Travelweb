import React, { useState, useEffect } from 'react';

const Loader = ({ onFinish, pageName }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        onFinish();
      }, 800);
    }, 1200);

    return () => clearTimeout(timer);
  }, [onFinish, pageName]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-700 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center">
        
        {/* Logo Container */}
        <div className="relative w-64 h-64 flex items-center justify-center">
          
          {/* Glow Background */}
          <div className="absolute w-40 h-40 bg-[#C6A46D]/10 blur-3xl rounded-full"></div>

          {/* Outer Ring */}
          <div className="absolute inset-0 border border-[#C6A46D]/20 rounded-full"></div>

          {/* Middle Ring */}
          <div className="absolute inset-3 border border-[#C6A46D]/10 rounded-full"></div>

          {/* Animated Ring */}
          <div className="absolute inset-0 rounded-full border-t border-b border-[#C6A46D] animate-spin-slow"></div>

          {/* Animated Dots */}
          <div className="absolute w-full h-full animate-spin-reverse">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#C6A46D] rounded-full shadow-[0_0_15px_#C6A46D]"></span>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#C6A46D] rounded-full shadow-[0_0_15px_#C6A46D]"></span>
          </div>

          {/* Page Name */}
          <div className="z-10 text-center space-y-3">
            <div className="text-[#C6A46D] text-4xl font-serif tracking-[0.15em] uppercase animate-fade">
              {pageName || 'Indeora'}
            </div>

            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-[#C6A46D] to-transparent mx-auto"></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="mt-10 overflow-hidden">
          <p className="text-[#C6A46D]/70 text-[10px] tracking-[1em] uppercase font-semibold animate-loading">
            Loading...
          </p>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes loading {
            0% {
              opacity: 0.2;
              letter-spacing: 0.5em;
            }
            50% {
              opacity: 1;
              letter-spacing: 1em;
            }
            100% {
              opacity: 0.2;
              letter-spacing: 0.5em;
            }
          }

          @keyframes fade {
            0% {
              opacity: 0;
              transform: scale(0.9);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }

          .animate-loading {
            animation: loading 2s ease-in-out infinite;
          }

          .animate-fade {
            animation: fade 1.5s ease forwards;
          }

          .animate-spin-slow {
            animation: spin 4s linear infinite;
          }

          .animate-spin-reverse {
            animation: spin 6s linear infinite reverse;
          }
        `,
        }}
      />
    </div>
  );
};

export default Loader;
