import type { ChallengeRequirement } from '../../types';
import './ChallengeRequirements.css';

interface ChallengeRequirementsProps {
  requirements: ChallengeRequirement[];
}

export function ChallengeRequirements({ requirements }: ChallengeRequirementsProps) {
  return (
    <ul className="challenge-requirements">
      {requirements.map((req) => (
        <li key={req.id} className="requirement-item">
          <span className="requirement-number">{req.id}</span>
          <span className="requirement-text">{req.text}</span>
        </li>
      ))}
    </ul>
  );
}
