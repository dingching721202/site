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

export const membershipPlans: LearningPlan[] = [
  {
    id: 'quarterly',
    title: '季方案',
    badge: '3個月會員',
    price: {
      original: 10800,
      discounted: 9000,
      currency: 'NT$'
    },
    stats: {
      courses: '無限制',
      units: '所有課程',
      studyHours: '無限制',
      vocabulary: '完整詞庫'
    },
    details: {
      viewTimes: '無限次觀看所有課程影片',
      frequency: '隨時隨地學習，彈性安排',
      groupClasses: '每月可預約 3 堂真人團班課程'
    },
    description: {
      focus: '完整使用平台所有功能，包含 0-A1、A1-A2 等級課程，適合想要系統性學習的學習者',
      abilities: '從零基礎到 A2 程度，具備日常生活溝通能力，能夠進行基本的工作與學習交流'
    }
  },
  {
    id: 'annual',
    title: '年方案',
    badge: '最超值',
    featured: true,
    price: {
      original: 36000,
      discounted: 30000,
      currency: 'NT$'
    },
    stats: {
      courses: '無限制',
      units: '所有課程',
      studyHours: '無限制',
      vocabulary: '完整詞庫'
    },
    details: {
      viewTimes: '無限次觀看所有課程影片',
      frequency: '隨時隨地學習，彈性安排',
      groupClasses: '每月可預約 4 堂真人團班課程'
    },
    description: {
      focus: '最划算的選擇！完整一年學習時間，包含未來新增課程，適合認真學習華語的學習者',
      abilities: '完整學習路徑，從零基礎到高階程度，未來 A2-B1、B2-C1 課程上架後也可免費使用'
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

export const courselevels: TimelineItem[] = [
  {
    id: '1',
    date: 'Pronunciation',
    title: '發音基礎',
    description: '學習華語基本發音、聲調系統，建立正確的發音基礎，適合所有華語學習者作為入門起點',
    status: 'completed'
  },
  {
    id: '2',
    date: 'Beginner 1',
    title: '初級一',
    description: '華語入門課程，學習基本詞彙、簡單句型和日常對話，能進行基本的自我介紹和簡單交流',
    status: 'completed'
  },
  {
    id: '3',
    date: 'Beginner 2',
    title: '初級二',
    description: '擴展詞彙量和句型，學習更複雜的日常對話，能表達基本需求和描述簡單的生活經驗',
    status: 'completed'
  },
  {
    id: '4',
    date: 'Intermediate 1',
    title: '中級一',
    description: '提升語言表達能力，學習更複雜的語法結構，能處理大部分日常情況和表達個人觀點',
    status: 'completed'
  },
  {
    id: '5',
    date: 'Intermediate 2',
    title: '中級二',
    description: '進一步強化語言技能，能流利進行各種話題的討論，處理複雜的社交和工作場合對話',
    status: 'completed'
  },
  {
    id: '6',
    date: 'Advanced',
    title: '高級課程',
    description: '高階華語應用，掌握複雜語法和專業詞彙，能理解各種文體和進行深度討論',
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