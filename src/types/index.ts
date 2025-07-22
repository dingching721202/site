export interface LearningPlan {
  id: string;
  title: string;
  badge: string;
  featured?: boolean;
  price?: {
    original: number;
    discounted: number;
    currency: string;
  };
  stats: {
    courses: number | string;
    units: number | string;
    studyHours: number | string;
    vocabulary: number | string;
  };
  details: {
    viewTimes: string;
    frequency: string;
    groupClasses: string;
  };
  description: {
    focus: string;
    abilities: string;
  };
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface TestOption {
  title: string;
  description: string;
}

export interface TimelineItem {
  id: string;
  date: string;
  title: string;
  description: string;
  status: 'completed' | 'upcoming';
}