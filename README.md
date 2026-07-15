# Konkan Battlegrounds

A premium esports tournament website for BGMI (Battlegrounds Mobile India) regional tournaments.

## Tech Stack

- **Frontend:** React + Vite + TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Routing:** React Router DOM
- **Fonts:** Bebas Neue (headings), Inter (body text)

## Design System

- **Primary Red:** #E50914
- **Background Black:** #080808
- **Surface/Accent:** #151515
- **Text:** #FFFFFF
- **Success/Live:** #00FF88
- **Gold:** #FFD700 (Rank 1)
- **Silver:** #C0C0C0 (Rank 2)
- **Bronze:** #CD7F32 (Rank 3)

## Pages

1. **Home/Leaderboard** - Hero section, top 3 podium, full leaderboard table
2. **Match Results** - Match cards with expandable results
3. **MVP/Top Killers** - Featured MVP card and ranked killers list
4. **Admin Panel** - Login-gated dashboard for updating match results

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```

## Point System

Points are computed on read using the formula:
```
points = placement_points[placement] + kills
```

Example placement points:
- 1st place: 10 points
- 2nd place: 6 points
- 3rd place: 5 points
- 4th place: 4 points
- 5th place: 3 points
- 6th place: 2 points
- 7th-8th place: 1 point
- 9th+: 0 points

## Features

- **Live-style Updates:** Leaderboard data can be refreshed dynamically in the UI
- **Responsive Design:** Fully responsive across desktop, tablet, and mobile
- **Glassmorphism UI:** Modern glass-effect cards with backdrop blur
- **Animations:** Smooth page transitions and micro-interactions
- **Admin Panel:** Secure admin dashboard for match result management

## License

MIT
