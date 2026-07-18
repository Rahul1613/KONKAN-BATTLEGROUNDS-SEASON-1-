import { useState } from 'react'
import { Shield, Trophy, Users, Gamepad2, Clock, Save } from 'lucide-react'
import { tournamentStats, leaderboardData, matchesData } from '../lib/data'

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center px-4">
        <div className="glass-card rounded-2xl p-8 w-full max-w-md border-2 border-primary/30">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="font-bebas text-3xl mb-2">ADMIN LOGIN</h1>
            <p className="font-inter text-sm text-white/60">Konkan Battlegrounds Dashboard</p>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); setIsAuthenticated(true) }} className="space-y-4">
            <div>
              <label className="block font-inter text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-surface border border-primary/20 rounded-lg font-inter focus:outline-none focus:border-primary/50"
                placeholder="admin@konkanbattlegrounds.com"
                required
              />
            </div>
            <div>
              <label className="block font-inter text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-surface border border-primary/20 rounded-lg font-inter focus:outline-none focus:border-primary/50"
                placeholder="••••••••"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-primary hover:bg-primary/90 text-white font-inter font-semibold rounded-lg transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24 px-4 pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-bebas text-4xl">ADMIN DASHBOARD</h1>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="px-4 py-2 bg-surface border border-primary/20 rounded-lg font-inter text-sm hover:border-primary/50 transition-colors"
          >
            Logout
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard icon={Users} label="Total Teams" value={tournamentStats.totalTeams} />
          <StatCard icon={Trophy} label="Matches Played" value={matchesData.length.toString()} />
          <StatCard icon={Gamepad2} label="Current Match" value={tournamentStats.currentMatch} />
          <StatCard icon={Clock} label="Last Update" value="Just now" />
        </div>

        {/* Update Match Result Form */}
        <div className="glass-card rounded-xl p-6 mb-8">
          <h2 className="font-bebas text-2xl mb-6">UPDATE MATCH RESULT</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div>
              <label className="block font-inter text-sm font-medium mb-2">Match Number</label>
              <input
                type="number"
                className="w-full px-4 py-3 bg-surface border border-primary/20 rounded-lg font-inter focus:outline-none focus:border-primary/50"
                placeholder="5"
              />
            </div>
            <div>
              <label className="block font-inter text-sm font-medium mb-2">Map</label>
              <select className="w-full px-4 py-3 bg-surface border border-primary/20 rounded-lg font-inter focus:outline-none focus:border-primary/50">
                <option>Erangel</option>
                <option>Miramar</option>
                <option>Sanhok</option>
                <option>Vikendi</option>
              </select>
            </div>
            <div>
              <label className="block font-inter text-sm font-medium mb-2">Team</label>
              <select className="w-full px-4 py-3 bg-surface border border-primary/20 rounded-lg font-inter focus:outline-none focus:border-primary/50">
                {leaderboardData.length === 0 ? (
                  <option>No teams registered</option>
                ) : (
                  leaderboardData.map(team => (
                    <option key={team.team}>{team.team}</option>
                  ))
                )}
              </select>
            </div>
            <div>
              <label className="block font-inter text-sm font-medium mb-2">Placement</label>
              <input
                type="number"
                min="1"
                className="w-full px-4 py-3 bg-surface border border-primary/20 rounded-lg font-inter focus:outline-none focus:border-primary/50"
                placeholder="1"
              />
            </div>
            <div>
              <label className="block font-inter text-sm font-medium mb-2">Kills</label>
              <input
                type="number"
                min="0"
                className="w-full px-4 py-3 bg-surface border border-primary/20 rounded-lg font-inter focus:outline-none focus:border-primary/50"
                placeholder="10"
              />
            </div>
            <div className="md:col-span-2 lg:col-span-5">
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-primary hover:bg-primary/90 text-white font-inter font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Save className="w-4 h-4" />
                Save Result
              </button>
            </div>
          </form>
        </div>

        {/* Recent Activity */}
        <div className="glass-card rounded-xl p-6">
          <h2 className="font-bebas text-2xl mb-6">RECENT ACTIVITY</h2>
          <div className="space-y-3">
            {[
              { action: 'Match 5 result updated', time: '2m ago' },
              { action: 'Team Alpha placement changed', time: '5m ago' },
              { action: 'Match 4 completed', time: '1h ago' },
            ].map((activity, idx) => (
              <div key={idx} className="flex items-center justify-between py-3 border-t border-primary/10 first:border-t-0">
                <span className="font-inter text-sm">{activity.action}</span>
                <span className="font-inter text-xs text-white/50">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function StatCard({ icon: Icon, label, value }: { icon: any, label: string, value: string }) {
  return (
    <div className="glass-card rounded-xl p-6">
      <Icon className="w-6 h-6 text-primary mb-3" />
      <p className="font-inter text-sm text-white/60 mb-1">{label}</p>
      <p className="font-bebas text-2xl">{value}</p>
    </div>
  )
}
