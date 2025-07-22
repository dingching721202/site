export interface LearningPlan {
  id: string;
  title: string;
  badge: string;
  featured?: boolean;
  stats: {
    courses: number;
    units: number;
    studyHours: number;
    vocabulary: number;
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