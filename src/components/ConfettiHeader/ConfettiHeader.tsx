import './ConfettiHeader.css';

interface ConfettiHeaderProps {
  title: string;
}

export function ConfettiHeader({ title }: ConfettiHeaderProps) {
  return (
    <div className="confetti-header">
      <div className="confetti-pieces" aria-hidden>
        <span className="confetti confetti-1" />
        <span className="confetti confetti-2" />
        <span className="confetti confetti-3" />
        <span className="confetti confetti-4" />
        <span className="confetti confetti-5" />
        <span className="confetti confetti-6" />
        <span className="confetti confetti-7" />
        <span className="confetti confetti-8" />
      </div>
      <span className="confetti-title">{title}</span>
    </div>
  );
}
