import { FeedPostCard } from '../FeedPostCard';
import { ChallengeRequirements } from '../ChallengeRequirements';
import type { Post } from '../../types';
import type { ChallengeRequirement } from '../../types';
import './SeeOthersShared.css';

interface SeeOthersSharedProps {
  participantsCount: number;
  pinnedPost: Post;
  requirements: ChallengeRequirement[];
  participantAvatars: string[];
}

export function SeeOthersShared({
  participantsCount,
  pinnedPost,
  requirements,
  participantAvatars,
}: SeeOthersSharedProps) {
  return (
    <section className="see-others-section">
      <div className="section-header">
        <h2 className="section-title">
          See what others{' '}
          <span className="avatars-group">
            {participantAvatars.map((avatar, i) => (
              <img
                key={i}
                src={avatar}
                alt=""
                className="participant-avatar"
                loading="lazy"
              />
            ))}
          </span>{' '}
          shared
        </h2>
        <p className="participants-count">
  <span className="participants-number">{participantsCount}+</span> participants already completed
</p>
      </div>

      <div className="pinned-badge">
        <svg
          className="pin-icon"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
        <span>This is a pinned post</span>
      </div>

      <div className="challenge-post-card">
        <FeedPostCard post={pinnedPost} showDropdown showActions={false}>
          <div className="challenge-requirements-wrap">
            <ChallengeRequirements requirements={requirements} />
          </div>
        </FeedPostCard>
      </div>
    </section>
  );
}
