export interface TournamentStats {
  prizePool: string;
  totalTeams: string;
  currentMatch: string;
  status: 'live' | 'upcoming' | 'completed';
}

export interface LeaderboardEntry {
  rank: number;
  team: string;
  matches: number;
  wwcd: number;
  kills: number;
  points: number;
  change: 'up' | 'down' | 'same';
}

export interface Match {
  id: number;
  matchNo: number;
  map: string;
  date: string;
  status: 'live' | 'completed' | 'upcoming';
}

export interface MatchPlacementResult {
  team: string;
  placement: number;
  kills: number;
  points: number;
}

export interface TopKiller {
  rank: number;
  name: string;
  team: string;
  kills: number;
}

// Global Tournament Stats
export const tournamentStats: TournamentStats = {
  prizePool: "₹50,000",
  totalTeams: "0",
  currentMatch: "Not Started",
  status: 'upcoming'
};

// Leaderboard entries (empty by default)
export const leaderboardData: LeaderboardEntry[] = [];

// Matches (empty by default)
export const matchesData: Match[] = [];

// Match placement details mapping match ID -> array of results
export const matchResultsData: Record<number, MatchPlacementResult[]> = {};

// Top killers (empty by default)
export const topKillersData: TopKiller[] = [];
