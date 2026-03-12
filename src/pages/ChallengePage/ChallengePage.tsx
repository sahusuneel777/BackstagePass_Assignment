import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SubscriberPostCard } from '../../components/SubscriberPostCard';
import { SeeOthersShared } from '../../components/SeeOthersShared';
import { challengeApi } from '../../api';
import { mockParticipantAvatars } from '../../data/mockData';
import type { Post, ChallengeRequirement } from '../../types';
import './ChallengePage.css';

export function ChallengePage() {
  const { dayId } = useParams<{ dayId: string }>();
  const currentDay = dayId ? parseInt(dayId, 10) : 1;

  const [data, setData] = useState<{
    userSubmission: Post | null;
    pinnedPost: Post;
    participantsCount: number;
    requirements: ChallengeRequirement[];
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    challengeApi
      .getChallengePage(currentDay)
      .then((res) => {
        setData({
          userSubmission: res.userSubmission,
          pinnedPost: res.pinnedPost,
          participantsCount: res.participantsCount,
          requirements: res.challenge.requirements,
        });
      })
      .catch((err) => {
        setError(err instanceof Error ? err.message : 'Failed to load challenge');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [currentDay]);

  if (loading) {
    return (
      <div className="challenge-page-loading">
        <div className="loading-spinner" aria-hidden />
        <p>Loading challenge...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="challenge-page-error">
        <p>{error}</p>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <div className="challenge-page">
      {data.userSubmission && (
        <SubscriberPostCard post={data.userSubmission} />
      )}
      <SeeOthersShared
        participantsCount={data.participantsCount}
        pinnedPost={data.pinnedPost}
        requirements={data.requirements}
        participantAvatars={mockParticipantAvatars}
      />
    </div>
  );
}
