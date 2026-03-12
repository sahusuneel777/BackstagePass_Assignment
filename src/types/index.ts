export interface User {
  id: string;
  name: string;
  avatar: string;
}

export interface Post {
  id: string;
  user: User;
  content: string;
  timestamp: string;
  media?: {
    type: 'image' | 'video';
    url: string;
    thumbnail?: string;
  };
  reactions: number;
  commentsCount: number;
  isPinned?: boolean;
}

export interface ChallengeDay {
  id: number;
  dayNumber: number;
  isCompleted: boolean;
  isLocked: boolean;
}

export interface ChallengeRequirement {
  id: number;
  text: string;
}

export interface ChallengeDetails {
  id: string;
  title: string;
  description: string;
  requirements: ChallengeRequirement[];
  totalDays: number;
}
