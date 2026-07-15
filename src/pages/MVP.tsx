import { motion } from 'framer-motion'
import { Crown, Target, Zap, Flame, Award } from 'lucide-react'

export default function MVP() {
  const topKillers = [
    { rank: 1, name: 'PlayerOne', team: 'Team Bravo', kills: 35 },
    { rank: 2, name: 'PlayerTwo', team: 'Team Alpha', kills: 28 },
    { rank: 3, name: 'PlayerThree', team: 'Team Charlie', kills: 22 },
    { rank: 4, name: 'PlayerFour', team: 'Team Delta', kills: 20 },
    { rank: 5, name: 'PlayerFive', team: 'Team Echo', kills: 18 },
  ]

  const maxKills = topKillers[0].kills

  return (
    <div className="pt-24 px-4 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          className="font-bebas text-4xl md:text-5xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gold">MVP</span> & TOP KILLERS
        </motion.h1>

        {/* Featured MVP Card */}
        <motion.div 
          className="glass-card rounded-2xl p-8 mb-12 border-2 border-gold/50 shadow-2xl shadow-gold/30 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Animated background glow */}
          <motion.div 
            className="absolute inset-0 bg-gradient-radial from-gold/20 via-transparent to-transparent"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <motion.div 
              className="relative"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-32 h-32 bg-gradient-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center shadow-2xl shadow-gold/50">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Crown className="w-16 h-16 text-white" />
                </motion.div>
              </div>
              <motion.div 
                className="absolute -bottom-2 -right-2 bg-primary rounded-full px-3 py-1 text-sm font-bebas shadow-lg"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                #{topKillers[0].rank}
              </motion.div>
            </motion.div>
            <div className="text-center md:text-left flex-1">
              <motion.div 
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/20 text-gold text-sm font-semibold mb-4"
                animate={{
                  boxShadow: ['0 0 0 rgba(255, 215, 0, 0)', '0 0 20px rgba(255, 215, 0, 0.3)', '0 0 0 rgba(255, 215, 0, 0)']
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div
                  animate={{ rotate: [0, -15, 15, -15, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                >
                  <Crown className="w-4 h-4" />
                </motion.div>
                CURRENT MVP
              </motion.div>
              <motion.h2 
                className="font-bebas text-4xl md:text-5xl mb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {topKillers[0].name}
              </motion.h2>
              <motion.p 
                className="font-inter text-xl text-white/70 mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {topKillers[0].team}
              </motion.p>
              <div className="flex items-center gap-6">
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Flame className="w-4 h-4 text-gold" />
                    <p className="font-inter text-sm text-white/50">Total Kills</p>
                  </div>
                  <motion.p 
                    className="font-bebas text-3xl text-gold"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {topKillers[0].kills}
                  </motion.p>
                </motion.div>
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Zap className="w-4 h-4 text-primary" />
                    <p className="font-inter text-sm text-white/50">Avg/Match</p>
                  </div>
                  <p className="font-bebas text-3xl">{(topKillers[0].kills / 5).toFixed(1)}</p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Top Killers List */}
        <motion.div 
          className="glass-card rounded-xl p-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="font-bebas text-2xl mb-6 flex items-center gap-2">
            <motion.div
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              <Target className="w-6 h-6 text-primary" />
            </motion.div>
            TOP KILLERS
          </h2>
          <div className="space-y-4">
            {topKillers.map((player, index) => (
              <motion.div 
                key={player.rank} 
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="w-8 flex items-center justify-center">
                  {player.rank === 1 && (
                    <motion.div
                      animate={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity, delay: index * 0.1 }}
                    >
                      <Award className="w-6 h-6 text-gold" />
                    </motion.div>
                  )}
                  {player.rank === 2 && <Award className="w-6 h-6 text-silver" />}
                  {player.rank === 3 && <Award className="w-6 h-6 text-bronze" />}
                  {player.rank > 3 && <span className="font-bebas text-xl text-white/50">#{player.rank}</span>}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <div>
                      <span className="font-inter font-medium">{player.name}</span>
                      <span className="font-inter text-sm text-white/50 ml-2">{player.team}</span>
                    </div>
                    <motion.span 
                      className="font-bebas text-lg"
                      animate={player.rank === 1 ? {
                        scale: [1, 1.1, 1],
                        color: ['#FFD700', '#FFF', '#FFD700']
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {player.kills}
                    </motion.span>
                  </div>
                  <div className="h-2 bg-surface rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${player.rank === 1 ? 'bg-gradient-to-r from-gold to-yellow-600' : 'bg-gradient-to-r from-primary to-primary/60'}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${(player.kills / maxKills) * 100}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
