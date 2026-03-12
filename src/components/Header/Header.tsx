import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';
import './Header.css';

interface HeaderProps {
  challengeTitle: string;
  currentDay: number;
  totalDays: number;
}

export function Header({ challengeTitle, currentDay, totalDays }: HeaderProps) {
  const [showInfo, setShowInfo] = useState(false);
  const infoRef = useRef<HTMLDivElement>(null);
  useClickOutside(infoRef, () => setShowInfo(false));

  return (
    <header className="main-header">
      <div className="header-left">
        
        <nav className="breadcrumb-nav">
          <Link to="/home" className="back-link">
            <svg
              className="chevron-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
            Back
          </Link>
          <span className="day-indicator">
            Day {currentDay} of {totalDays}
          </span>
        </nav>
      </div>
      <div className="header-right">
        <div className="challenge-title-wrap">
          <h1 className="challenge-title">{challengeTitle}</h1>
          <div className="info-tooltip-wrapper" ref={infoRef}>
            <button
              type="button"
              className="info-btn"
              onClick={() => setShowInfo(!showInfo)}
              aria-label="Challenge information"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
              </svg>
            </button>
            {showInfo && (
              <div className="info-tooltip" role="tooltip">
                A 9-day journey to build fitness consistency and energy.
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
