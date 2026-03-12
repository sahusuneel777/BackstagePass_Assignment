import { useState, useRef } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';
import type { Post } from '../../types';
import './FeedPostCard.css';

interface FeedPostCardProps {
  post: Post;
  showDropdown?: boolean;
  showActions?: boolean;
  children?: React.ReactNode;
}

export function FeedPostCard({
  post,
  showDropdown = true,
  showActions = true,
  children,
}: FeedPostCardProps) {
  const [showMenu, setShowMenu] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [reactions, setReactions] = useState(post.reactions);
  const menuRef = useRef<HTMLDivElement>(null);

  useClickOutside(menuRef, () => setShowMenu(false));

  const handleLike = () => {
    setReactions((prev) => prev + 1);
  };

  return (
    <article className="feed-post-card">
      <div className="post-header">
        <div className="post-user">
          <img
            src={post.user.avatar}
            alt=""
            className="user-avatar"
            loading="lazy"
          />
          <div className="post-meta">
            <span className="user-name">{post.user.name}</span>
            <span className="post-timestamp">{post.timestamp}</span>
          </div>
        </div>
        {showDropdown && (
          <div className="post-menu-wrapper" ref={menuRef}>
            <button
              type="button"
              className="menu-btn"
              onClick={() => setShowMenu(!showMenu)}
              aria-label="Post options"
              aria-expanded={showMenu}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <circle cx="5" cy="12" r="2"/>
                <circle cx="12" cy="12" r="2"/>
                <circle cx="19" cy="12" r="2"/>
              </svg>
            </button>
            {showMenu && (
              <div className="dropdown-menu" role="menu">
                <button type="button" onClick={() => setShowMenu(false)}>
                  Edit
                </button>
                <button type="button" onClick={() => setShowMenu(false)}>
                  Delete
                </button>
                <button type="button" onClick={() => setShowMenu(false)}>
                  Report
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {post.content && (
        <p className="post-content">{post.content}</p>
      )}

      {post.media && (
        <div className="post-media">
          <div className="media-wrapper">
            <img
              src={post.media.thumbnail || post.media.url}
              alt=""
              className="media-thumbnail"
            />
            {post.media.type === 'video' && (
              <button
                type="button"
                className={`play-btn ${isPlaying ? 'playing' : ''}`}
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  {isPlaying ? (
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  ) : (
                    <path d="M8 5v14l11-7z" />
                  )}
                </svg>
              </button>
            )}
          </div>
        </div>
      )}

      {children}

      {showActions && (
      <div className="post-actions">
        <button
          type="button"
          className="action-btn reactions"
          onClick={handleLike}
        >
          <span className="reaction-icon" aria-hidden>👍</span>
          <span>{reactions}</span>
        </button>
        <button type="button" className="action-btn">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
          </svg>
          <span>Comment</span>
        </button>
        <button type="button" className="action-btn">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
          </svg>
          <span>Share</span>
        </button>
        <span className="comments-count">{post.commentsCount} Comments</span>
      </div>
      )}
    </article>
  );
}
