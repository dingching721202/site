'use client';

import { useEffect, useRef, useState } from 'react';
import { testOptions, timeline } from '@/lib/data';

const Testing = () => {
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

    const elements = sectionRef.current?.querySelectorAll('[data-index]');
    elements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="testing" 
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            前測與後測
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            透過科學的測驗系統，找到最適合您的學習起點
          </p>
        </div>

        {/* Testing Cards */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Pre-Test Card */}
          <div 
            data-index="0"
            className={`glass-effect rounded-3xl p-8 card-hover transition-all duration-700 ${
              visibleItems.has(0)
                ? 'opacity-100 transform translate-y-0'
                : 'opacity-0 transform translate-y-8'
            }`}
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m4-4h6m-4-2a2 2 0 100-4 2 2 0 000 4zm-6 8a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-white mb-6">前測</h3>

            {/* Test Options */}
            <div className="space-y-6 mb-8">
              {testOptions.map((option, index) => (
                <div key={index} className="border-l-4 border-primary-500 bg-black/20 rounded-r-xl p-6">
                  <h4 className="text-lg font-semibold text-primary-300 mb-2">
                    {option.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {option.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Note */}
            <div className="bg-primary-500/10 border border-primary-500/20 rounded-xl p-4">
              <p className="text-primary-200 text-sm leading-relaxed">
                <strong>注意：</strong>測驗結果將建議最適合的起始課程，建議即便有程度，也快速複習前段內容以擴充詞彙與句型。
              </p>
            </div>
          </div>

          {/* Post-Test Card */}
          <div 
            data-index="1"
            className={`glass-effect rounded-3xl p-8 card-hover transition-all duration-700 ${
              visibleItems.has(1)
                ? 'opacity-100 transform translate-y-0'
                : 'opacity-0 transform translate-y-8'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-white mb-6">後測</h3>

            {/* Process Steps */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 p-4 bg-gray-800/20 rounded-xl">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  1
                </div>
                <div className="text-gray-300">
                  課程完成後請於平台完成筆試後測
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-800/20 rounded-xl">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  2
                </div>
                <div className="text-gray-300">
                  系統將寄送分數通知
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-800/20 rounded-xl">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  3
                </div>
                <div className="text-gray-300">
                  建議預約真人教師 15 分鐘口語測試
                </div>
              </div>
            </div>

            {/* Recommendation */}
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
              <p className="text-blue-200 text-sm leading-relaxed">
                <strong>建議：</strong>後測可以輔助評估整體學習成果，幫助您了解進步程度並規劃下一階段的學習目標。
              </p>
            </div>
          </div>
        </div>

        {/* Group Classes Section */}
        <div 
          data-index="2"
          className={`mb-20 transition-all duration-700 ${
            visibleItems.has(2)
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-8'
          }`}
          style={{ transitionDelay: '0.4s' }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold gradient-text mb-4">
              真人團班課程預約說明
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              與真人教師進行互動學習，提升口語表達能力
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-effect rounded-2xl p-6 text-center card-hover">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">彈性選課</h4>
              <p className="text-gray-400">可依平台開放時段選擇喜好主題與時間</p>
            </div>

            <div className="glass-effect rounded-2xl p-6 text-center card-hover">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">小班互動</h4>
              <p className="text-gray-400">報名參加真人小班互動課程</p>
            </div>

            <div className="glass-effect rounded-2xl p-6 text-center card-hover">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">開放程度</h4>
              <p className="text-gray-400">團班選課目前開放程度：0-A1、A1-A2</p>
            </div>
          </div>
        </div>

        {/* Course Timeline */}
        <div 
          data-index="3"
          className={`transition-all duration-700 ${
            visibleItems.has(3)
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-8'
          }`}
          style={{ transitionDelay: '0.6s' }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold gradient-text mb-4">
              課程影片與進度總表
            </h3>
            <p className="text-gray-300">
              持續更新的課程內容，滿足不同程度學習者需求
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {timeline.map((item, index) => (
              <div key={item.id} className="relative flex items-start gap-6 pb-8 last:pb-0">
                {/* Timeline Line */}
                {index < timeline.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-full bg-gray-600"></div>
                )}
                
                {/* Timeline Marker */}
                <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border-4 ${
                  item.status === 'completed'
                    ? 'bg-primary-500 border-primary-500'
                    : 'bg-gray-700 border-gray-500'
                }`}>
                  {item.status === 'completed' ? (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                  )}
                </div>

                {/* Timeline Content */}
                <div className="flex-1 glass-effect rounded-2xl p-6">
                  <div className={`text-sm font-semibold mb-2 ${
                    item.status === 'completed' ? 'text-primary-300' : 'text-gray-400'
                  }`}>
                    {item.date}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testing;