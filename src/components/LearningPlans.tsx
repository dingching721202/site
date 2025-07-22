'use client';

import { useEffect, useRef, useState } from 'react';
import { learningPlans } from '@/lib/data';

const LearningPlans = () => {
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
      id="plans" 
      ref={sectionRef}
      className="section-padding bg-gray-900"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            三個月學習建議方案
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            選擇最適合您程度和學習節奏的方案
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
          {learningPlans.map((plan, index) => (
            <div
              key={plan.id}
              data-index={index}
              className={`group relative transition-all duration-700 ${
                visibleItems.has(index)
                  ? 'opacity-100 transform translate-y-0'
                  : 'opacity-0 transform translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${index * 0.2}s`
              }}
            >
              {/* Plan Card */}
              <div className={`relative h-full glass-effect rounded-3xl p-8 card-hover ${
                plan.featured 
                  ? 'ring-2 ring-primary-500/50 shadow-2xl shadow-primary-500/20' 
                  : ''
              }`}>
                {/* Featured Badge */}
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      {plan.badge}
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8 pt-4">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                    {plan.title}
                  </h3>
                  
                  {!plan.featured && (
                    <div className="inline-block bg-primary-500/20 text-primary-300 px-4 py-1 rounded-full text-sm font-medium border border-primary-500/30">
                      {plan.badge}
                    </div>
                  )}
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="text-center p-4 bg-gray-800/20 rounded-2xl">
                    <div className="text-3xl font-bold gradient-text">
                      {plan.stats.courses}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">學習課數</div>
                  </div>
                  
                  <div className="text-center p-4 bg-gray-800/20 rounded-2xl">
                    <div className="text-3xl font-bold gradient-text">
                      {plan.stats.units}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">總單元數</div>
                  </div>
                  
                  <div className="text-center p-4 bg-gray-800/20 rounded-2xl">
                    <div className="text-3xl font-bold gradient-text">
                      {plan.stats.studyHours}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">建議自學時數</div>
                  </div>
                  
                  <div className="text-center p-4 bg-gray-800/20 rounded-2xl">
                    <div className="text-3xl font-bold gradient-text">
                      {plan.stats.vocabulary}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">學習詞彙量</div>
                  </div>
                </div>

                {/* Plan Details */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                    <div className="text-gray-300">
                      <span className="text-primary-300 font-medium">觀看次數：</span>
                      {plan.details.viewTimes}
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                    <div className="text-gray-300">
                      <span className="text-primary-300 font-medium">學習頻率：</span>
                      {plan.details.frequency}
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                    <div className="text-gray-300">
                      <span className="text-primary-300 font-medium">真人團班：</span>
                      {plan.details.groupClasses}
                    </div>
                  </div>
                </div>

                {/* Plan Description */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">學習重點</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {plan.description.focus}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">能力描述</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {plan.description.abilities}
                    </p>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute inset-0 rounded-3xl ${
                    plan.featured
                      ? 'bg-gradient-to-r from-primary-500/10 to-secondary-500/10'
                      : 'bg-gradient-to-r from-primary-500/5 to-secondary-500/5'
                  } blur-xl`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              準備開始您的華語學習之旅？
            </h3>
            <p className="text-gray-300 mb-6">
              選擇最適合的學習方案，搭配我們的測驗系統找到最佳起點
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#testing');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="btn-primary"
            >
              了解測驗系統
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningPlans;