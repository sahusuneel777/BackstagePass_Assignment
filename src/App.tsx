import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { MainLayout } from './layouts/MainLayout/MainLayout';
import { ChallengeLayout } from './layouts/ChallengeLayout/ChallengeLayout';
import { HomePage } from './pages/HomePage';
import { ChallengePage } from './pages/ChallengePage';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Navigate to="/challenge/1" replace />} />
          <Route path="/home" element={<HomePage />} />
            <Route path="challenge" element={<ChallengeLayout />}>
              <Route path=":dayId" element={<ChallengePage />} />
            </Route>
          </Route>
          <Route path="/challenge" element={<Navigate to="/challenge/1" replace />} />
          <Route path="*" element={<Navigate to="/challenge/1" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
