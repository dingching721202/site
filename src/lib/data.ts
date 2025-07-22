import { LearningPlan, FAQ, Feature, TestOption, TimelineItem } from '@/types';

export const features: Feature[] = [
  {
    id: '1',
    icon: '🎥',
    title: '教學影片',
    description: '語音語調、生詞句型、語法應用'
  },
  {
    id: '2',
    icon: '🤖',
    title: 'AI實境對話影片',
    description: '真實場景模擬'
  },
  {
    id: '3',
    icon: '📝',
    title: '單元測驗',
    description: '回饋機制'
  },
  {
    id: '4',
    icon: '👨‍🏫',
    title: '真人線上團班課程',
    description: '8堂，每堂50分鐘'
  }
];

export const learningPlans: LearningPlan[] = [
  {
    id: 'beginner-light',
    title: '0-A1 輕量級方案',
    badge: '初學者推薦',
    stats: {
      courses: 6,
      units: 26,
      studyHours: 18,
      vocabulary: 176
    },
    details: {
      viewTimes: '每單元至少觀看3-4次',
      frequency: '每週至少3天，每次30分鐘',
      groupClasses: '每月預定3堂'
    },
    description: {
      focus: '從發音開始，涵蓋基本日常主題如點餐、購物、描述外表、介紹家人等',
      abilities: '能簡單基本介紹、日常互動、市場體驗、購物體驗、偏好與計畫、介紹自己與家人'
    }
  },
  {
    id: 'beginner-medium',
    title: '0-A1 中量級方案',
    badge: '最受歡迎',
    featured: true,
    stats: {
      courses: 12,
      units: 43,
      studyHours: 30,
      vocabulary: 376
    },
    details: {
      viewTimes: '每單元至少觀看3-4次',
      frequency: '每週至少5天，每次30分鐘',
      groupClasses: '每月預定3堂'
    },
    description: {
      focus: '從發音到基本介紹、日常互動、市場及購物體驗、簡單社交表達及與人互動、安排行程與旅遊、工作與學習',
      abilities: '能簡單介紹自己及朋友家人、日常用中文簡單互動、購物及興趣表達、安排旅行及工作與學習表達'
    }
  },
  {
    id: 'intermediate-light',
    title: 'A1-A2 輕量級方案',
    badge: '進階學習',
    stats: {
      courses: 12,
      units: 34,
      studyHours: 18,
      vocabulary: 350
    },
    details: {
      viewTimes: '每單元至少觀看3-4次',
      frequency: '每週至少3天，每次30分鐘',
      groupClasses: '每月預定3堂'
    },
    description: {
      focus: '表達日常生活規劃、假期活動、天氣與身體狀況、學習與未來目標等',
      abilities: '能表達對自己未來的規劃、工作與學習計畫、日常生活習慣、旅行與健康、假期安排與打工等'
    }
  }
];

export const testOptions: TestOption[] = [
  {
    title: '零程度學習者',
    description: '建議從發音單元學起，並按照學習建議觀看影片與預約團班課程。'
  },
  {
    title: '有基礎學習者',
    description: '請登入平台進行前測筆試，並預約真人教師 15 分鐘口語測試。'
  }
];

export const timeline: TimelineItem[] = [
  {
    id: '1',
    date: '現已開放',
    title: '0-A1、A1-A2 課程',
    description: '課程影片及團班選課',
    status: 'completed'
  },
  {
    id: '2',
    date: '2025/6/2',
    title: 'A2-B1 課程',
    description: '預計上架 A2-B1 課程影片，並開放團班選課',
    status: 'upcoming'
  },
  {
    id: '3',
    date: '2025/11/3',
    title: 'B2-C1 課程',
    description: '預計上架 B2-C1 課程影片，並開放團班選課',
    status: 'upcoming'
  }
];

export const faqs: FAQ[] = [
  {
    id: 'q1',
    question: 'Q1：影片可以重複觀看嗎？',
    answer: '可以，每支影片不限次數觀看，建議每單元重看 3～4 次以強化記憶。'
  },
  {
    id: 'q2',
    question: 'Q2：AI 虛擬實境影片怎麼使用？',
    answer: '請先不看字幕跟著情境來觀看影片擬角色互動，如聽不懂可重回學習影片學習或開啟字幕重複播放，以學會情境場境對話。'
  },
  {
    id: 'q3',
    question: 'Q3：我可以自己選課順序嗎？',
    answer: '平台開放彈性選課，但仍建議按照課表順序循序漸進，系統也會根據測驗結果提供建議順序。'
  },
  {
    id: 'q4',
    question: 'Q4：團體課要怎麼加入？',
    answer: '進入平台後選擇團班場次，並依程度及主題預約課程，預約完成後會提供教室連結即可進入教室上課。'
  }
];