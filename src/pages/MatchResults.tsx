import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Trophy, MapPin, Clock, Zap, Gamepad2 } from 'lucide-react'
import { matchesData, matchResultsData } from '../lib/data'

export default function MatchResults() {
  const [filter, setFilter] = useState('all')
  const [expandedMatch, setExpandedMatch] = useState<number | null>(null)

  const matches = matchesData
  const matchResults = matchResultsData

  const filteredMatches = matches.filter(m => 
    filter === 'all' ? true : m.status === filter
  )

  return (
    <div className="pt-24 px-4 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          className="font-bebas text-4xl md:text-5xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary">MATCH</span> RESULTS
        </motion.h1>

        {/* Filters */}
        <motion.div 
          className="flex flex-wrap gap-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {['all', 'completed', 'live', 'upcoming'].map((f) => (
            <motion.button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg font-inter text-sm font-medium capitalize transition-all ${
                filter === f
                  ? 'bg-primary text-white scale-105 shadow-lg shadow-primary/30'
                  : 'bg-surface border border-primary/20 text-white/70 hover:border-primary/50 hover:scale-105'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {f}
            </motion.button>
          ))}
        </motion.div>

        {/* Match Cards */}
        {filteredMatches.length === 0 ? (
          <motion.div 
            className="glass-card rounded-2xl p-12 border border-primary/20 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-full bg-surface border border-primary/20 p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Gamepad2 className="w-8 h-8 text-white/40" />
            </div>
            <h2 className="font-bebas text-2xl md:text-3xl mb-3">NO MATCHES</h2>
            <p className="font-inter text-sm text-white/50 max-w-md mx-auto">
              No match results are currently available under this category. Standings will appear once matches begin!
            </p>
          </motion.div>
        ) : (
          <div className="space-y-4">
            {filteredMatches.map((match, index) => (
              <motion.div
                key={match.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <MatchCard
                  match={match}
                  isExpanded={expandedMatch === match.id}
                  onToggle={() => setExpandedMatch(expandedMatch === match.id ? null : match.id)}
                  results={matchResults[match.id]}
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function MatchCard({ match, isExpanded, onToggle, results }: any) {
  const statusColors = {
    live: 'bg-success/20 text-success border-success/40 shadow-success/20',
    completed: 'bg-white/10 text-white/70 border-white/20',
    upcoming: 'bg-primary/20 text-primary border-primary/40 shadow-primary/20',
  }

  return (
    <motion.div 
      className="glass-card rounded-xl overflow-hidden"
      whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(229, 9, 20, 0.2)' }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
        whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
      >
        <div className="flex items-center gap-4">
          <motion.div 
            className="font-bebas text-2xl text-primary"
            whileHover={{ scale: 1.1 }}
          >
            #{match.matchNo}
          </motion.div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-white/50" />
            <span className="font-inter text-sm">{match.map}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-white/50" />
            <span className="font-inter text-sm text-white/50">{match.date}</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <motion.span 
            className={`px-3 py-1 rounded-full text-xs font-semibold border capitalize ${statusColors[match.status as keyof typeof statusColors]}`}
            animate={match.status === 'live' ? {
              scale: [1, 1.05, 1],
              boxShadow: ['0 0 0 rgba(0, 255, 136, 0)', '0 0 10px rgba(0, 255, 136, 0.3)', '0 0 0 rgba(0, 255, 136, 0)']
            } : {}}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          >
            {match.status === 'live' && <motion.span 
              className="inline-block w-2 h-2 bg-success rounded-full mr-2"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />}
            {match.status}
          </motion.span>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </div>
      </motion.button>

      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? 'auto' : 0,
          opacity: isExpanded ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        {results && (
          <div className="px-6 py-4 border-t border-primary/10 bg-surface/30">
            <table className="w-full">
              <thead>
                <tr className="text-left">
                  <th className="pb-2 font-inter text-xs font-semibold text-white/60 uppercase">Team</th>
                  <th className="pb-2 font-inter text-xs font-semibold text-white/60 uppercase">Placement</th>
                  <th className="pb-2 font-inter text-xs font-semibold text-white/60 uppercase">Kills</th>
                  <th className="pb-2 font-inter text-xs font-semibold text-white/60 uppercase">Points</th>
                </tr>
              </thead>
              <tbody>
                {results.map((result: any, idx: number) => (
                  <motion.tr 
                    key={idx} 
                    className="border-t border-primary/10"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <td className="py-3 font-inter font-medium flex items-center gap-2">
                      {result.placement === 1 && (
                        <motion.div
                          animate={{ rotate: [0, -10, 10, -10, 0] }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                          <Trophy className="w-4 h-4 text-gold" />
                        </motion.div>
                      )}
                      {result.team}
                    </td>
                    <td className="py-3 font-inter">{result.placement}</td>
                    <td className="py-3 font-inter flex items-center gap-1">
                      <Zap className="w-3 h-3 text-primary" />
                      {result.kills}
                    </td>
                    <td className="py-3 font-bebas text-primary">{result.points}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}
