'use client';

import { useEffect, useRef, useState } from 'react';
import { faqs } from '@/lib/data';

const FAQ = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
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

    const items = sectionRef.current?.querySelectorAll('[data-index]');
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const toggleItem = (itemId: string) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  return (
    <section 
      id="faq" 
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            常見問題 FAQ
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            快速找到您需要的答案
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              data-index={index}
              className={`glass-effect rounded-2xl overflow-hidden card-hover transition-all duration-700 ${
                visibleItems.has(index)
                  ? 'opacity-100 transform translate-y-0'
                  : 'opacity-0 transform translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${index * 0.1}s`
              }}
            >
              {/* Question */}
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200 group"
              >
                <h3 className="text-lg md:text-xl font-semibold text-white group-hover:gradient-text transition-all duration-300">
                  {faq.question}
                </h3>
                
                {/* Toggle Icon */}
                <div className={`flex-shrink-0 ml-4 transition-transform duration-300 ${
                  openItems.has(faq.id) ? 'rotate-180' : ''
                }`}>
                  <svg 
                    className="w-6 h-6 text-primary-400 group-hover:text-primary-300 transition-colors duration-200" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Answer */}
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openItems.has(faq.id) 
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6 border-t border-white/10">
                  <div className="pt-4">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div 
          data-index={faqs.length}
          className={`text-center mt-16 transition-all duration-700 ${
            visibleItems.has(faqs.length)
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-8'
          }`}
          style={{ 
            transitionDelay: `${faqs.length * 0.1}s`
          }}
        >
          <div className="glass-effect rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              還有其他問題？
            </h3>
            <p className="text-gray-300 mb-6">
              如有其他問題，請隨時與我們聯繫，我們將竭誠為您服務
            </p>
            
            <a
              href="mailto:contact@tli1956.com"
              className="inline-flex items-center gap-3 btn-primary group"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>contact@tli1956.com</span>
            </a>
            
            <div className="mt-6 text-sm text-gray-400">
              <p>我們會在 24 小時內回覆您的問題</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;