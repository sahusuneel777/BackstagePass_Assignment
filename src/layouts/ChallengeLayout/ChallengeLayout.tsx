import { Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { challengeApi } from '../../api';
import type { ChallengeDay } from '../../types';
import './ChallengeLayout.css';

export function ChallengeLayout() {
  const { dayId } = useParams<{ dayId: string }>();
  const currentDay = dayId ? parseInt(dayId, 10) : 1;
  const [days, setDays] = useState<ChallengeDay[]>([]);
  const [challengeTitle, setChallengeTitle] = useState('9-Day Fitness Challenge');

  useEffect(() => {
    challengeApi.getChallengePage(currentDay).then((res) => {
      setDays(res.days);
      setChallengeTitle(res.challenge.title);
    });
  }, [currentDay]);

  const totalDays = days.length || 9;

  return (
    <div className="challenge-layout">
      <Header
        challengeTitle={challengeTitle}
        currentDay={currentDay}
        totalDays={totalDays}
      />
      <div className="challenge-body">
        <Sidebar days={days.length ? days : getDefaultDays()} currentDay={currentDay} />
        <div className="challenge-content">
          <Outlet context={{ currentDay }} />
        </div>
      </div>
    </div>
  );
}

function getDefaultDays(): ChallengeDay[] {
  return Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    dayNumber: i + 1,
    isCompleted: i === 0,
    isLocked: i > 0,
  }));
}
