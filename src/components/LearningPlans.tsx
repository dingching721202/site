'use client';

import { membershipPlans } from '@/lib/data';

const LearningPlans = () => {
  return (
    <section id="plans" className="section-padding">
      <div className="container">
        <h2 className="section-title">會員方案</h2>
        <p className="section-subtitle">
          選擇最適合您的學習方案，立即開始華語學習之旅
        </p>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '32px' 
        }}>
          {membershipPlans.map((plan) => (
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
              
              {plan.price && (
                <div style={{ 
                  textAlign: 'center',
                  marginBottom: '24px',
                  padding: '20px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '8px'
                }}>
                  <div style={{ 
                    fontSize: '14px', 
                    color: '#888888',
                    textDecoration: 'line-through',
                    marginBottom: '8px'
                  }}>
                    原價 {plan.price.currency}{plan.price.original.toLocaleString()}
                  </div>
                  <div style={{ 
                    fontSize: '32px', 
                    fontWeight: '700',
                    color: '#3b82f6',
                    marginBottom: '4px'
                  }}>
                    {plan.price.currency}{plan.price.discounted.toLocaleString()}
                  </div>
                  <div style={{ 
                    fontSize: '14px', 
                    color: '#cccccc'
                  }}>
                    省下 {plan.price.currency}{(plan.price.original - plan.price.discounted).toLocaleString()}
                  </div>
                </div>
              )}
              
              {!plan.featured && !plan.price && (
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
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)', 
                  borderRadius: '8px', 
                  marginBottom: '16px' 
                }}>
                  <strong style={{ color: '#ffffff', fontSize: '14px' }}>觀看次數：</strong>
                  <span style={{ color: '#cccccc', fontSize: '14px' }}>{plan.details.viewTimes}</span>
                </div>
                <div style={{ 
                  padding: '16px', 
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)', 
                  borderRadius: '8px', 
                  marginBottom: '16px' 
                }}>
                  <strong style={{ color: '#ffffff', fontSize: '14px' }}>學習頻率：</strong>
                  <span style={{ color: '#cccccc', fontSize: '14px' }}>{plan.details.frequency}</span>
                </div>
                <div style={{ 
                  padding: '16px', 
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)', 
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

              <div style={{ marginTop: '32px' }}>
                <button 
                  className="btn btn-primary"
                  style={{ 
                    width: '100%',
                    fontSize: '16px',
                    fontWeight: '600',
                    padding: '16px 24px'
                  }}
                  onClick={() => {
                    // 這裡可以整合付款系統
                    alert(`選擇了 ${plan.title}，即將跳轉到付款頁面`);
                  }}
                >
                  立即購買 {plan.title}
                </button>
                
                {plan.price && (
                  <div style={{ 
                    textAlign: 'center',
                    marginTop: '12px',
                    fontSize: '12px',
                    color: '#666666'
                  }}>
                    支援信用卡、ATM轉帳等多種付款方式
                  </div>
                )}
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
            還在猶豫嗎？
          </h3>
          <p style={{ 
            fontSize: '16px', 
            color: '#cccccc', 
            marginBottom: '32px' 
          }}>
            立即購買會員方案，開始您的華語學習之旅。如有任何問題，歡迎聯繫我們
          </p>
          
          <div style={{ 
            display: 'flex', 
            gap: '16px', 
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
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
            
            <a
              href="mailto:contact@tli1956.com"
              className="btn"
              style={{ 
                background: 'transparent',
                border: '1px solid #3b82f6',
                color: '#3b82f6',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              📧 聯繫客服
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningPlans;