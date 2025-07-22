'use client';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div>
          <h1 className="hero-title">TLI 華語影音課程</h1>
          <p className="hero-subtitle">專為華語學習者設計的線上互動學習平台</p>
          <p className="hero-description">
            結合教學影片、AI實境對話、單元測驗與真人團班課程，讓您自由安排進度並享受完整的學習體驗。
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              className="btn btn-primary"
              onClick={() => {
                const element = document.querySelector('#plans');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              開始學習
            </button>
            <button 
              className="btn btn-outline"
              onClick={() => {
                const element = document.querySelector('#intro');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              了解更多
            </button>
          </div>
          <p style={{ 
            marginTop: '32px', 
            fontSize: '16px', 
            color: '#666666',
            textAlign: 'center'
          }}>
            適用對象：華語學習者（0-A1 ～ A2）
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;