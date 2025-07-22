'use client';

import { useEffect, useRef, useState } from 'react';
import { features } from '@/lib/data';

const CourseIntro = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const cards = sectionRef.current?.querySelectorAll('[data-index]');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="intro" 
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            課程簡介
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            TLI 華語影音學習課程是專為華語學習者設計的線上互動資源，結合：
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              data-index={index}
              className={`group relative glass-effect rounded-2xl p-6 text-center card-hover transition-all duration-700 ${
                visibleItems.has(index)
                  ? 'opacity-100 transform translate-y-0'
                  : 'opacity-0 transform translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${index * 0.1}s`
              }}
            >
              {/* Feature Icon */}
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 w-20 h-20 mx-auto bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              </div>

              {/* Feature Content */}
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-300 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {feature.description}
              </p>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary-500/20 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom Description */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto glass-effect rounded-2xl p-8">
            <p className="text-lg text-gray-300 leading-relaxed">
              透過本平台，學習者可{' '}
              <span className="gradient-text font-semibold">自由安排進度</span>
              ，並搭配 TLI 提供的{' '}
              <span className="gradient-text font-semibold">學習進度追蹤</span>
              {' '}與{' '}
              <span className="gradient-text font-semibold">輔導機制</span>
              。
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="relative">
          <div className="absolute -top-10 left-1/4 w-2 h-2 bg-primary-400/40 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-5 right-1/3 w-3 h-3 bg-secondary-400/40 rounded-full animate-pulse delay-700"></div>
        </div>
      </div>
    </section>
  );
};

export default CourseIntro;