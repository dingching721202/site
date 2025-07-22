'use client';

import { features } from '@/lib/data';

const CourseIntro = () => {
  return (
    <section id="intro" className="section-padding" style={{ background: '#000000' }}>
      <div className="container">
        <h2 className="section-title">課程簡介</h2>
        <p className="section-subtitle">
          TLI 華語影音學習課程是專為華語學習者設計的線上互動資源
        </p>

        <div className="feature-grid">
          {features.map((feature) => (
            <div key={feature.id} className="card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="card" style={{ marginTop: '48px', textAlign: 'center' }}>
          <p style={{ fontSize: '18px', lineHeight: '1.6', margin: 0 }}>
            透過本平台，學習者可<strong style={{ color: '#ffffff' }}>自由安排進度</strong>，
            並搭配 TLI 提供的<strong style={{ color: '#ffffff' }}>學習進度追蹤與輔導機制</strong>。
          </p>
        </div>
      </div>
    </section>
  );
};

export default CourseIntro;