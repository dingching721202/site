'use client';

import { useState } from 'react';
import { faqs } from '@/lib/data';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

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
    <section id="faq" className="section-padding">
      <div className="container">
        <h2 className="section-title">常見問題 FAQ</h2>
        <p className="section-subtitle">
          快速找到您需要的答案
        </p>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {faqs.map((faq) => (
            <div key={faq.id} className="faq-item">
              <button
                className="faq-question"
                onClick={() => toggleItem(faq.id)}
              >
                <span>{faq.question}</span>
                <span style={{ 
                  transform: openItems.has(faq.id) ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s ease',
                  color: '#3b82f6'
                }}>
                  ▼
                </span>
              </button>
              
              {openItems.has(faq.id) && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="card" style={{ marginTop: '64px', textAlign: 'center' }}>
          <h3 style={{ 
            fontSize: '28px', 
            fontWeight: '700', 
            marginBottom: '16px', 
            color: '#ffffff' 
          }}>
            還有其他問題？
          </h3>
          <p style={{ 
            fontSize: '16px', 
            color: '#cccccc', 
            marginBottom: '32px' 
          }}>
            如有其他問題，請隨時與我們聯繫，我們將竭誠為您服務
          </p>
          
          <a
            href="mailto:contact@tli1956.com"
            className="btn btn-primary"
            style={{ textDecoration: 'none' }}
          >
            📧 contact@tli1956.com
          </a>
          
          <div style={{ 
            marginTop: '24px', 
            fontSize: '14px', 
            color: '#666666' 
          }}>
            <p>我們會在 24 小時內回覆您的問題</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;