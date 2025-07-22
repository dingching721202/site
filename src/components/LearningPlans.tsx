'use client';

import { learningPlans } from '@/lib/data';

const LearningPlans = () => {
  return (
    <section id="plans" className="section-padding" style={{ background: '#000000' }}>
      <div className="container">
        <h2 className="section-title">三個月學習建議方案</h2>
        <p className="section-subtitle">
          選擇最適合您程度和學習節奏的方案
        </p>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '32px' 
        }}>
          {learningPlans.map((plan) => (
            <div 
              key={plan.id} 
              className={`plan-card ${plan.featured ? 'featured' : ''}`}
            >
              {plan.featured && (
                <div className="plan-badge">
                  {plan.badge}
                </div>
              )}

              <h3 className="plan-title">{plan.title}</h3>
              
              {!plan.featured && (
                <div className="plan-price">{plan.badge}</div>
              )}

              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-number">{plan.stats.courses}</div>
                  <div className="stat-label">學習課數</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">{plan.stats.units}</div>
                  <div className="stat-label">總單元數</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">{plan.stats.studyHours}</div>
                  <div className="stat-label">建議自學時數</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">{plan.stats.vocabulary}</div>
                  <div className="stat-label">學習詞彙量</div>
                </div>
              </div>

              <div style={{ marginTop: '32px', marginBottom: '32px' }}>
                <div style={{ 
                  padding: '16px', 
                  background: '#0a0a0a', 
                  borderRadius: '8px', 
                  marginBottom: '16px' 
                }}>
                  <strong style={{ color: '#ffffff', fontSize: '14px' }}>觀看次數：</strong>
                  <span style={{ color: '#cccccc', fontSize: '14px' }}>{plan.details.viewTimes}</span>
                </div>
                <div style={{ 
                  padding: '16px', 
                  background: '#0a0a0a', 
                  borderRadius: '8px', 
                  marginBottom: '16px' 
                }}>
                  <strong style={{ color: '#ffffff', fontSize: '14px' }}>學習頻率：</strong>
                  <span style={{ color: '#cccccc', fontSize: '14px' }}>{plan.details.frequency}</span>
                </div>
                <div style={{ 
                  padding: '16px', 
                  background: '#0a0a0a', 
                  borderRadius: '8px' 
                }}>
                  <strong style={{ color: '#ffffff', fontSize: '14px' }}>真人團班：</strong>
                  <span style={{ color: '#cccccc', fontSize: '14px' }}>{plan.details.groupClasses}</span>
                </div>
              </div>

              <div>
                <div style={{ marginBottom: '24px' }}>
                  <h4 style={{ 
                    color: '#ffffff', 
                    fontSize: '16px', 
                    fontWeight: '600', 
                    marginBottom: '8px' 
                  }}>
                    學習重點
                  </h4>
                  <p style={{ 
                    color: '#cccccc', 
                    fontSize: '14px', 
                    lineHeight: '1.6', 
                    margin: 0 
                  }}>
                    {plan.description.focus}
                  </p>
                </div>
                
                <div>
                  <h4 style={{ 
                    color: '#ffffff', 
                    fontSize: '16px', 
                    fontWeight: '600', 
                    marginBottom: '8px' 
                  }}>
                    能力描述
                  </h4>
                  <p style={{ 
                    color: '#cccccc', 
                    fontSize: '14px', 
                    lineHeight: '1.6', 
                    margin: 0 
                  }}>
                    {plan.description.abilities}
                  </p>
                </div>
              </div>
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
            準備開始您的華語學習之旅？
          </h3>
          <p style={{ 
            fontSize: '16px', 
            color: '#cccccc', 
            marginBottom: '32px' 
          }}>
            選擇最適合的學習方案，搭配我們的測驗系統找到最佳起點
          </p>
          <button 
            className="btn btn-primary"
            onClick={() => {
              const element = document.querySelector('#testing');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            了解測驗系統
          </button>
        </div>
      </div>
    </section>
  );
};

export default LearningPlans;