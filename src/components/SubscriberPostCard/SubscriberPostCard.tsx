import { FeedPostCard } from '../FeedPostCard';
import { ConfettiHeader } from '../ConfettiHeader';
import type { Post } from '../../types';
import './SubscriberPostCard.css';

interface SubscriberPostCardProps {
  post: Post;
}

export function SubscriberPostCard({ post }: SubscriberPostCardProps) {
  return (
    <div className="subscriber-post-card">
      <ConfettiHeader title="Your Submission" />
      <div className="subscriber-post-content">
        <FeedPostCard post={post} />
      </div>
    </div>
  );
}
