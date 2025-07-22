'use client';

const Footer = () => {
  return (
    <footer style={{ 
      background: 'rgba(0, 0, 0, 0.3)', 
      backdropFilter: 'blur(10px)',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)', 
      padding: '48px 0' 
    }}>
      <div className="container">
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          textAlign: 'center'
        }}>
          <div>
            <h3 style={{ 
              fontSize: '24px', 
              fontWeight: '800', 
              color: '#ffffff',
              marginBottom: '8px'
            }}>
              TLI Connect
            </h3>
            <p style={{ 
              color: '#888888',
              fontSize: '16px',
              margin: 0
            }}>
              華語學習的最佳選擇
            </p>
          </div>

          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '32px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <a 
              href="mailto:contact@tli1956.com" 
              style={{ 
                color: '#cccccc', 
                textDecoration: 'none',
                fontSize: '14px',
                transition: 'color 0.2s ease'
              }}
              onMouseOver={(e) => (e.target as HTMLElement).style.color = '#ffffff'}
              onMouseOut={(e) => (e.target as HTMLElement).style.color = '#cccccc'}
            >
              聯繫我們
            </a>
            <span style={{ color: '#444444', fontSize: '14px' }}>•</span>
            <span style={{ color: '#888888', fontSize: '14px' }}>
              版本日期：2025 年 5 月
            </span>
          </div>

          <div style={{ 
            fontSize: '14px', 
            color: '#666666',
            borderTop: '1px solid #222222',
            paddingTop: '24px',
            width: '100%',
            textAlign: 'center'
          }}>
            <p style={{ margin: 0 }}>
              &copy; 2025 TLI. All rights reserved.
            </p>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              position: 'fixed',
              bottom: '32px',
              right: '32px',
              width: '48px',
              height: '48px',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid #333333',
              borderRadius: '50%',
              color: '#cccccc',
              cursor: 'pointer',
              fontSize: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
              zIndex: 1000
            }}
            onMouseOver={(e) => {
              const target = e.target as HTMLElement;
              target.style.background = 'rgba(255, 255, 255, 0.2)';
              target.style.color = '#ffffff';
              target.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              const target = e.target as HTMLElement;
              target.style.background = 'rgba(255, 255, 255, 0.1)';
              target.style.color = '#cccccc';
              target.style.transform = 'translateY(0)';
            }}
            title="回到頂部"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;