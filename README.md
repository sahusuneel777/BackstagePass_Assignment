# BackstagePass - 9-Day Fitness Challenge

A production-ready React application for the BackstagePass 9-Day Fitness Challenge, built with pixel-perfect UI matching the design specifications.

## Tech Stack

- **Vite** - Fast build tool
- **TypeScript** - Type safety
- **React 19** - UI framework
- **React Router** - Client-side routing

## Features

- ✅ Feed Post Card UI with user avatars, timestamps, media (video/image)
- ✅ Subscriber Post Card with confetti-style header
- ✅ Sidebar with day navigation, active states, and locked states
- ✅ Light and Dark mode support
- ✅ Fully responsive design
- ✅ API service layer (mock data)
- ✅ Reusable components
- ✅ Clean folder architecture

## Project Structure

```
src/
├── api/              # API service layer
├── components/       # Reusable UI components
│   ├── TopBar/
│   ├── Header/
│   ├── Sidebar/
│   ├── FeedPostCard/
│   ├── ConfettiHeader/
│   ├── SubscriberPostCard/
│   ├── ChallengeRequirements/
│   └── SeeOthersShared/
├── contexts/         # React contexts (Theme)
├── data/             # Mock data
├── hooks/            # Custom hooks
├── layouts/          # Page layouts
├── pages/            # Route pages
├── types/            # TypeScript definitions
└── index.css         # Global styles
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Routes

- `/` - Redirects to challenge Day 1
- `/challenge/:dayId` - Challenge day view (1-9)
- `/home` - Landing page

## Design Colors (Light Mode)

- Top bar: `#333333`
- Sidebar active: `#E0F7FA`
- Completed dot: `#4CAF50`
- Confetti header: `#C8E6C9` / `#1B5E20`
- Flame/streak: `#FF5722`
- Primary blue: `#2196F3`
