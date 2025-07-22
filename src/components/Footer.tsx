'use client';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="section-container py-12">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-2">
              TLI Connect
            </h3>
            <p className="text-gray-400">華語學習的最佳選擇</p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-gray-400">
            <a 
              href="mailto:contact@tli1956.com" 
              className="hover:text-primary-400 transition-colors duration-200"
            >
              聯繫我們
            </a>
            <span className="hidden sm:block">•</span>
            <span>版本日期：2025 年 5 月</span>
          </div>

          {/* Copyright */}
          <div className="text-center lg:text-right text-sm text-gray-500">
            <p>&copy; 2025 TLI. All rights reserved.</p>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center justify-center w-12 h-12 glass-effect rounded-full card-hover"
            aria-label="回到頂部"
          >
            <svg 
              className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;