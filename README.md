# Konkan Battlegrounds

A premium esports tournament website for BGMI (Battlegrounds Mobile India) regional tournaments.

## Tech Stack

- **Frontend:** React + Vite + TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Backend/Database:** Supabase (Postgres + Auth + Realtime)
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

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and add your Supabase credentials:
   ```
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```

## Supabase Schema

```sql
-- Teams table
CREATE TABLE teams (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  team_id TEXT UNIQUE NOT NULL,
  team_name TEXT NOT NULL,
  captain TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Matches table
CREATE TABLE matches (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  match_no INTEGER NOT NULL,
  map TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('upcoming', 'live', 'completed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Results table
CREATE TABLE results (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  match_id UUID REFERENCES matches(id) ON DELETE CASCADE,
  team_id UUID REFERENCES teams(id) ON DELETE CASCADE,
  placement INTEGER NOT NULL,
  kills INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Players table (optional, for MVP page)
CREATE TABLE players (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  player_name TEXT NOT NULL,
  team_id UUID REFERENCES teams(id) ON DELETE CASCADE,
  kills INTEGER NOT NULL DEFAULT 0
);

-- Enable Realtime
ALTER PUBLICATION supabase_realtime ADD TABLE results;
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

- **Real-time Updates:** Leaderboard updates live via Supabase Realtime
- **Responsive Design:** Fully responsive across desktop, tablet, and mobile
- **Glassmorphism UI:** Modern glass-effect cards with backdrop blur
- **Animations:** Smooth page transitions and micro-interactions
- **Admin Panel:** Secure admin dashboard for match result management

## License

MIT
