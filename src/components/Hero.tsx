'use client';

import { useEffect, useState } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    { icon: '🎥', text: '教學影片' },
    { icon: '🤖', text: 'AI實境對話' },
    { icon: '👥', text: '真人團班課程' },
    { icon: '📈', text: '進度追蹤' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0 bg-black">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(cyan 1px, transparent 1px),
              linear-gradient(90deg, cyan 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'pulse 4s ease-in-out infinite'
          }}></div>
        </div>

        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-60`}
            style={{
              top: `${20 + (i * 15)}%`,
              left: `${10 + (i * 12)}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: '3s'
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 section-container text-center">
        <div
          className={`transition-all duration-1000 ${
            isLoaded 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-8'
          }`}
        >
          {/* Main Title with Glow Effect */}
          <div className="relative mb-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-4 gradient-text leading-tight tracking-tight">
              TLI CONNECT
            </h1>
            <div className="absolute inset-0 text-6xl md:text-8xl lg:text-9xl font-black gradient-text opacity-20 blur-md">
              TLI CONNECT
            </div>
          </div>

          {/* Futuristic Subtitle */}
          <div className="relative mb-12">
            <div className="inline-block px-8 py-3 glass-effect rounded-full mb-6">
              <span className="text-cyan-300 font-semibold text-lg tracking-wider uppercase">
                華語影音課程使用說明書
              </span>
            </div>
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-light max-w-5xl mx-auto leading-relaxed">
              專為華語學習者設計的
              <span className="gradient-text font-semibold"> 線上互動學習平台</span>
            </p>
          </div>

          {/* Tech Feature Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative glass-effect rounded-2xl p-6 card-hover transition-all duration-500 ${
                  isLoaded ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ 
                  animationDelay: `${0.8 + index * 0.2}s`,
                  animationFillMode: 'both'
                }}
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl"></div>
                </div>
                
                <div className="relative">
                  <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <span className="text-gray-200 font-semibold text-lg group-hover:text-cyan-300 transition-colors duration-300">
                    {feature.text}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Target Audience Badge */}
          <div className="inline-block glass-effect rounded-full px-8 py-3 mb-12">
            <span className="text-cyan-400 font-medium text-lg">
              適用對象：華語學習者（0-A1 ～ A2）
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => {
                const element = document.querySelector('#plans');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="btn-primary group relative overflow-hidden"
            >
              <span className="relative z-10">開始學習之旅</span>
              <svg 
                className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1 relative z-10" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              
              {/* Button Glow Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/30 to-cyan-400/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </button>
            
            <button
              onClick={() => {
                const element = document.querySelector('#intro');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="btn-outline group"
            >
              <span>探索功能</span>
              <svg 
                className="w-5 h-5 ml-2 transition-transform group-hover:rotate-90" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center relative">
                <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
                <div className="absolute -inset-2 border-2 border-cyan-400/30 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Tech Elements */}
      <div className="absolute top-20 right-20 w-40 h-40 border border-cyan-500/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}>
        <div className="absolute inset-4 border border-cyan-500/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
          <div className="absolute inset-4 border border-cyan-500/10 rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
        </div>
      </div>

      <div className="absolute bottom-20 left-20 w-32 h-32 border border-purple-500/30 rounded-full animate-pulse">
        <div className="absolute inset-2 border border-purple-500/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}>
          <div className="absolute inset-2 border border-purple-500/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;