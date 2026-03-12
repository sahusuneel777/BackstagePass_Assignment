import { useTheme } from '../../contexts/ThemeContext';
import './TopBar.css';

export function TopBar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="top-bar">
      <span className="top-bar-status">BackstagePass</span>
      <div className="top-bar-actions">
        <div className="top-bar-streak">
          <svg
            className="flame-icon"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
          >
            <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8c0-3.38-1.21-6.49-3.2-8.16.03.12.03.24.03.36 0 2.06-1.56 3.73-3.63 3.73-2.06 0-3.41-1.67-3.41-3.73 0-2.15.74-4.8.74-4.8C14.21 2.19 13.5.67 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z" />
          </svg>
          <span className="streak-count">30</span>
        </div>
        <button
          type="button"
          className="top-bar-icon-btn"
          aria-label="Notifications"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
          </svg>
        </button>
        <button
          type="button"
          className="top-bar-avatar"
          aria-label="User profile"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </button>
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </header>
  );
}
