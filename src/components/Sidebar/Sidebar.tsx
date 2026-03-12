import { NavLink } from 'react-router-dom';
import './Sidebar.css';

interface ChallengeDay {
  id: number;
  dayNumber: number;
  isCompleted: boolean;
  isLocked: boolean;
}

interface SidebarProps {
  days: ChallengeDay[];
  currentDay: number;
}

export function Sidebar({ days, currentDay }: SidebarProps) {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav" aria-label="Challenge days">
        {days.map((day) => {
          const isActive = day.dayNumber === currentDay;

          return (
            <NavLink
              key={day.id}
              to={`/challenge/${day.dayNumber}`}
              className={`sidebar-item ${isActive ? 'active' : ''} ${
                day.isLocked ? 'locked' : ''
              }`}
            >
              <span className="day-label">Day - {day.dayNumber}</span>
              {day.isLocked ? (
                <svg
                  className="day-icon lock-icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                </svg>
              ) : (
                <span className="day-icon completed-dot" aria-hidden />
              )}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
