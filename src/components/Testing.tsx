'use client';

import { testOptions, courselevels } from '@/lib/data';

const Testing = () => {
  return (
    <section id="testing" className="section-padding">
      <div className="container">
        <h2 className="section-title">前測與後測</h2>
        <p className="section-subtitle">
          透過科學的測驗系統，找到最適合您的學習起點
        </p>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', 
          gap: '32px',
          marginBottom: '64px'
        }}>
          <div className="card">
            <div style={{ 
              fontSize: '48px', 
              marginBottom: '24px',
              textAlign: 'center'
            }}>
              ▶️
            </div>
            <h3 className="feature-title" style={{ textAlign: 'center' }}>前測</h3>
            
            <div style={{ marginBottom: '24px' }}>
              {testOptions.map((option, index) => (
                <div 
                  key={index} 
                  style={{ 
                    padding: '20px', 
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)', 
                    borderRadius: '8px', 
                    marginBottom: '16px' 
                  }}
                >
                  <h4 style={{ 
                    color: '#3b82f6', 
                    fontSize: '16px', 
                    fontWeight: '600', 
                    marginBottom: '8px' 
                  }}>
                    {option.title}
                  </h4>
                  <p style={{ 
                    color: '#cccccc', 
                    fontSize: '14px', 
                    lineHeight: '1.6', 
                    margin: 0 
                  }}>
                    {option.description}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ 
              padding: '16px', 
              background: '#1a365d', 
              borderRadius: '8px', 
              border: '1px solid #2563eb' 
            }}>
              <p style={{ 
                color: '#93c5fd', 
                fontSize: '14px', 
                lineHeight: '1.6', 
                margin: 0 
              }}>
                <strong>注意：</strong>測驗結果將建議最適合的起始課程，建議即便有程度，也快速複習前段內容以擴充詞彙與句型。
              </p>
            </div>
          </div>

          <div className="card">
            <div style={{ 
              fontSize: '48px', 
              marginBottom: '24px',
              textAlign: 'center'
            }}>
              🏁
            </div>
            <h3 className="feature-title" style={{ textAlign: 'center' }}>後測</h3>
            
            <div style={{ marginBottom: '24px' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '16px', 
                padding: '16px', 
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)', 
                borderRadius: '8px',
                marginBottom: '12px'
              }}>
                <div style={{ 
                  background: '#3b82f6', 
                  color: 'white', 
                  width: '24px', 
                  height: '24px', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: '700'
                }}>
                  1
                </div>
                <span style={{ color: '#cccccc', fontSize: '14px' }}>
                  課程完成後請於平台完成筆試後測
                </span>
              </div>
              
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '16px', 
                padding: '16px', 
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)', 
                borderRadius: '8px',
                marginBottom: '12px'
              }}>
                <div style={{ 
                  background: '#3b82f6', 
                  color: 'white', 
                  width: '24px', 
                  height: '24px', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: '700'
                }}>
                  2
                </div>
                <span style={{ color: '#cccccc', fontSize: '14px' }}>
                  系統將寄送分數通知
                </span>
              </div>
              
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '16px', 
                padding: '16px', 
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)', 
                borderRadius: '8px'
              }}>
                <div style={{ 
                  background: '#3b82f6', 
                  color: 'white', 
                  width: '24px', 
                  height: '24px', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: '700'
                }}>
                  3
                </div>
                <span style={{ color: '#cccccc', fontSize: '14px' }}>
                  建議預約真人教師 15 分鐘口語測試
                </span>
              </div>
            </div>

            <div style={{ 
              padding: '16px', 
              background: '#1a365d', 
              borderRadius: '8px', 
              border: '1px solid #2563eb' 
            }}>
              <p style={{ 
                color: '#93c5fd', 
                fontSize: '14px', 
                lineHeight: '1.6', 
                margin: 0 
              }}>
                <strong>建議：</strong>後測可以輔助評估整體學習成果，幫助您了解進步程度並規劃下一階段的學習目標。
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="feature-title" style={{ textAlign: 'center' }}>真人團班課程預約說明</h3>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '24px',
            marginTop: '32px'
          }}>
            <div style={{ 
              padding: '24px', 
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)', 
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>📅</div>
              <h4 style={{ 
                color: '#ffffff', 
                fontSize: '18px', 
                fontWeight: '600', 
                marginBottom: '8px' 
              }}>
                彈性選課
              </h4>
              <p style={{ 
                color: '#cccccc', 
                fontSize: '14px', 
                lineHeight: '1.6', 
                margin: 0 
              }}>
                可依平台開放時段選擇喜好主題與時間
              </p>
            </div>
            
            <div style={{ 
              padding: '24px', 
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)', 
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>👥</div>
              <h4 style={{ 
                color: '#ffffff', 
                fontSize: '18px', 
                fontWeight: '600', 
                marginBottom: '8px' 
              }}>
                小班互動
              </h4>
              <p style={{ 
                color: '#cccccc', 
                fontSize: '14px', 
                lineHeight: '1.6', 
                margin: 0 
              }}>
                報名參加真人小班互動課程
              </p>
            </div>
            
            <div style={{ 
              padding: '24px', 
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)', 
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>📈</div>
              <h4 style={{ 
                color: '#ffffff', 
                fontSize: '18px', 
                fontWeight: '600', 
                marginBottom: '8px' 
              }}>
                開放程度
              </h4>
              <p style={{ 
                color: '#cccccc', 
                fontSize: '14px', 
                lineHeight: '1.6', 
                margin: 0 
              }}>
                團班選課目前開放程度：0-A1、A1-A2
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="feature-title" style={{ textAlign: 'center' }}>課程影片程度說明及適用對象</h3>
          
          <div style={{ maxWidth: '700px', margin: '32px auto 0' }}>
            {courselevels.map((item, index) => (
              <div 
                key={item.id} 
                style={{ 
                  padding: '24px',
                  background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                  borderRadius: '12px',
                  marginBottom: '24px',
                  border: item.status === 'completed' ? '1px solid #3b82f6' : '1px solid #333333'
                }}
              >
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '16px', 
                  marginBottom: '16px' 
                }}>
                  <div style={{ 
                    padding: '8px 16px',
                    background: item.status === 'completed' ? '#3b82f6' : '#333333',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#ffffff'
                  }}>
                    {item.date}
                  </div>
                  
                  {item.status === 'completed' && (
                    <div style={{ 
                      padding: '4px 12px',
                      background: '#065f46',
                      borderRadius: '12px',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#10b981'
                    }}>
                      現已開放
                    </div>
                  )}
                  
                  {item.status === 'upcoming' && (
                    <div style={{ 
                      padding: '4px 12px',
                      background: '#7c2d12',
                      borderRadius: '12px',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#f97316'
                    }}>
                      即將推出
                    </div>
                  )}
                </div>
                
                <h4 style={{ 
                  color: '#ffffff', 
                  fontSize: '20px', 
                  fontWeight: '700', 
                  marginBottom: '12px' 
                }}>
                  {item.title}
                </h4>
                
                <p style={{ 
                  color: '#cccccc', 
                  fontSize: '15px', 
                  lineHeight: '1.6', 
                  margin: 0 
                }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testing;