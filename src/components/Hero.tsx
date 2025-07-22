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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-30"></div>
      
      {/* Animated Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 section-container text-center">
        <div
          className={`transition-all duration-1000 ${
            isLoaded 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-8'
          }`}
        >
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 gradient-text leading-tight">
            TLI 華語影音課程
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light mb-12 max-w-4xl mx-auto">
            專為華語學習者設計的線上互動學習平台
          </p>

          {/* Features Grid */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`glass-effect px-6 py-4 rounded-full flex items-center gap-3 card-hover transition-all duration-300 ${
                  isLoaded ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ 
                  animationDelay: `${0.2 + index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                <span className="text-2xl">{feature.icon}</span>
                <span className="text-gray-200 font-medium">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Target Audience */}
          <p className="text-lg text-gray-400 font-light italic mb-8">
            適用對象：華語學習者（0-A1 ～ A2）
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => {
                const element = document.querySelector('#plans');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="btn-primary group"
            >
              <span>開始學習</span>
              <svg 
                className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            
            <button
              onClick={() => {
                const element = document.querySelector('#intro');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="btn-outline"
            >
              了解更多
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-primary-500/30 rounded-full animate-ping delay-300"></div>
      <div className="absolute top-1/3 right-16 w-3 h-3 bg-secondary-500/30 rounded-full animate-ping delay-700"></div>
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-primary-400/40 rounded-full animate-ping delay-1000"></div>
    </section>
  );
};

export default Hero;