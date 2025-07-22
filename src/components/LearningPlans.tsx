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
      className="section-padding bg-gradient-to-b from-black via-gray-900/50 to-black relative overflow-hidden"
    >
      {/* Background Tech Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 border border-cyan-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-purple-500/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 glass-effect rounded-full mb-6">
            <span className="text-cyan-300 font-semibold tracking-wider uppercase text-sm">
              Learning Programs
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black gradient-text mb-6 tracking-tight">
            三個月學習建議方案
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            選擇最適合您程度和學習節奏的<span className="text-cyan-400 font-semibold">未來式學習方案</span>
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
              {/* Plan Card with Futuristic Design */}
              <div className={`relative h-full backdrop-blur-xl rounded-3xl p-8 border transition-all duration-500 group-hover:-translate-y-4 ${
                plan.featured 
                  ? 'bg-gradient-to-br from-cyan-500/10 via-black/60 to-purple-500/10 border-cyan-400/50 shadow-2xl shadow-cyan-500/20' 
                  : 'bg-gradient-to-br from-white/5 via-black/60 to-white/5 border-gray-500/30 group-hover:border-cyan-400/30'
              }`}>
                
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 rounded-3xl blur-xl ${
                    plan.featured
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20'
                      : 'bg-gradient-to-r from-cyan-500/10 to-purple-500/10'
                  }`}></div>
                </div>

                {/* Featured Badge */}
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-2 rounded-full text-sm font-bold tracking-wider uppercase shadow-lg shadow-cyan-500/30">
                      {plan.badge}
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8 pt-4 relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                    {plan.title}
                  </h3>
                  
                  {!plan.featured && (
                    <div className="inline-block bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-semibold border border-cyan-400/30 backdrop-blur-sm">
                      {plan.badge}
                    </div>
                  )}
                </div>

                {/* Stats Grid with Tech Design */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="text-center p-4 bg-gradient-to-br from-cyan-500/10 to-black/60 rounded-2xl border border-cyan-500/20 backdrop-blur-sm group-hover:border-cyan-400/40 transition-colors duration-300">
                    <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                      {plan.stats.courses}
                    </div>
                    <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider">學習課數</div>
                  </div>
                  
                  <div className="text-center p-4 bg-gradient-to-br from-purple-500/10 to-black/60 rounded-2xl border border-purple-500/20 backdrop-blur-sm group-hover:border-purple-400/40 transition-colors duration-300">
                    <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                      {plan.stats.units}
                    </div>
                    <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider">總單元數</div>
                  </div>
                  
                  <div className="text-center p-4 bg-gradient-to-br from-green-500/10 to-black/60 rounded-2xl border border-green-500/20 backdrop-blur-sm group-hover:border-green-400/40 transition-colors duration-300">
                    <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                      {plan.stats.studyHours}
                    </div>
                    <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider">建議自學時數</div>
                  </div>
                  
                  <div className="text-center p-4 bg-gradient-to-br from-orange-500/10 to-black/60 rounded-2xl border border-orange-500/20 backdrop-blur-sm group-hover:border-orange-400/40 transition-colors duration-300">
                    <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                      {plan.stats.vocabulary}
                    </div>
                    <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider">學習詞彙量</div>
                  </div>
                </div>

                {/* Plan Details with Tech Styling */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3 p-3 bg-black/40 rounded-xl border border-gray-600/30 backdrop-blur-sm">
                    <div className="flex-shrink-0 w-2 h-2 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
                    <div className="text-gray-300 text-sm">
                      <span className="text-cyan-300 font-semibold">觀看次數：</span>
                      {plan.details.viewTimes}
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-black/40 rounded-xl border border-gray-600/30 backdrop-blur-sm">
                    <div className="flex-shrink-0 w-2 h-2 bg-purple-400 rounded-full mt-2 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="text-gray-300 text-sm">
                      <span className="text-purple-300 font-semibold">學習頻率：</span>
                      {plan.details.frequency}
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-black/40 rounded-xl border border-gray-600/30 backdrop-blur-sm">
                    <div className="flex-shrink-0 w-2 h-2 bg-green-400 rounded-full mt-2 animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="text-gray-300 text-sm">
                      <span className="text-green-300 font-semibold">真人團班：</span>
                      {plan.details.groupClasses}
                    </div>
                  </div>
                </div>

                {/* Plan Description */}
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-cyan-500/5 to-transparent rounded-xl border-l-4 border-cyan-400/50">
                    <h4 className="text-cyan-300 font-semibold mb-2 text-sm uppercase tracking-wider">學習重點</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {plan.description.focus}
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border-l-4 border-purple-400/50">
                    <h4 className="text-purple-300 font-semibold mb-2 text-sm uppercase tracking-wider">能力描述</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {plan.description.abilities}
                    </p>
                  </div>
                </div>

                {/* Tech Border Animation */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000"></div>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 delay-200"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA with Futuristic Design */}
        <div className="text-center mt-20">
          <div className="max-w-2xl mx-auto backdrop-blur-xl rounded-3xl p-8 bg-gradient-to-br from-cyan-500/10 via-black/60 to-purple-500/10 border border-cyan-400/30 shadow-2xl shadow-cyan-500/10">
            <div className="mb-6">
              <div className="w-20 h-20 mx-auto bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/30">
                <span className="text-3xl">🚀</span>
              </div>
            </div>
            <h3 className="text-3xl font-bold gradient-text mb-4 tracking-tight">
              準備開始您的華語學習之旅？
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              選擇最適合的<span className="text-cyan-400 font-semibold">智能學習方案</span>，搭配我們的AI測驗系統找到最佳起點
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#testing');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="btn-primary group"
            >
              <span>啟動測驗系統</span>
              <svg 
                className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningPlans;