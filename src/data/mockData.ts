import type { Post, ChallengeDay, ChallengeDetails, User } from '../types';

export const mockUser: User = {
  id: '1',
  name: 'Ashraf Idrishi',
  avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Ashraf',
};

export const mockChallengeDetails: ChallengeDetails = {
  id: '1',
  title: '9-Day Fitness Challenge',
  description:
    "This 9-day fitness challenge is designed to help you build consistency, boost energy, and feel stronger—one day at a time. Each day comes with a simple, achievable fitness task that fits easily into your routine, no matter your current fitness level.",
  totalDays: 9,
  requirements: [
    { id: 1, text: 'Minimum 20 minutes of sit-up' },
    { id: 2, text: 'Mention Intensity' },
    { id: 3, text: 'Upload Media (Optional)' },
  ],
};

export const mockUserSubmission: Post = {
  id: '1',
  user: mockUser,
  content: "Today's challenge workout completed—feeling stronger already",
  timestamp: '1s',
  media: {
    type: 'video',
    url: 'https://example.com/video.mp4',
    thumbnail:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600',
  },
  reactions: 18,
  commentsCount: 10,
};

export const mockPinnedPost: Post = {
  id: '2',
  user: {
    id: '2',
    name: 'Russell Brunson',
    avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Russell',
  },
  content: mockChallengeDetails.description,
  timestamp: '3 hrs ago',
  reactions: 0,
  commentsCount: 0,
  isPinned: true,
};

export const mockChallengeDays: ChallengeDay[] = Array.from(
  { length: 9 },
  (_, i) => ({
    id: i + 1,
    dayNumber: i + 1,
    isCompleted: i === 0,
    isLocked: i > 0,
  })
);

export const mockParticipantsCount = 85;

export const mockParticipantAvatars = [
  'https://api.dicebear.com/9.x/avataaars/svg?seed=User1',
  'https://api.dicebear.com/9.x/avataaars/svg?seed=User2',
  'https://api.dicebear.com/9.x/avataaars/svg?seed=User3',
];
