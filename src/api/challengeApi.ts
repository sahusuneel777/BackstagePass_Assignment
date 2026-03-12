import type { Post, ChallengeDay, ChallengeDetails } from '../types';
import {
  mockChallengeDays,
  mockChallengeDetails,
  mockUserSubmission,
  mockPinnedPost,
  mockParticipantsCount,
} from '../data/mockData';

export interface ChallengeDayResponse {
  days: ChallengeDay[];
}

export interface ChallengePageResponse {
  challenge: ChallengeDetails;
  userSubmission: Post | null;
  pinnedPost: Post;
  participantsCount: number;
  days: ChallengeDay[];
}

const simulateDelay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const challengeApi = {
  async getChallengeDays(): Promise<ChallengeDayResponse> {
    await simulateDelay(100);
    return { days: mockChallengeDays };
  },

  async getChallengePage(dayId: number): Promise<ChallengePageResponse> {
    await simulateDelay(150);
    const days = mockChallengeDays.map((d, i) => ({
      ...d,
      isCompleted: i < dayId,
      isLocked: i >= dayId,
    }));
    return {
      challenge: mockChallengeDetails,
      userSubmission: dayId === 1 ? mockUserSubmission : null,
      pinnedPost: mockPinnedPost,
      participantsCount: mockParticipantsCount,
      days,
    };
  },

  async getChallengeDetails(): Promise<ChallengeDetails> {
    await simulateDelay(50);
    return mockChallengeDetails;
  },
};
