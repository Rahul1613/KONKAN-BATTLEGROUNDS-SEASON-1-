import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Trophy, Users, Gamepad2, Search, ArrowUp, ArrowDown, Crown, Zap, Flame } from 'lucide-react'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        })
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source src="/assets/Cinematic_second_background.mp4" type="video/mp4" />
        </video>
        <div 
          className="absolute inset-0 bg-gradient-radial from-primary/40 via-background/90 to-background"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(229, 9, 20, 0.3) 0%, rgba(8, 8, 8, 0.9) 50%, rgba(8, 8, 8, 1) 100%)`
          }}
        />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
              opacity: 0
            }}
            animate={{
              y: [null, Math.random() * 100 - 50 + '%'],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
        
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.img 
              src="/assets/logo.png" 
              alt="Konkan Battlegrounds Logo" 
              className="w-24 h-24 md:w-32 md:h-32 object-contain mx-auto mb-6"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 2, -2, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div 
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 border border-primary/40 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.span 
                className="w-2 h-2 bg-success rounded-full mr-2"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity
                }}
              />
              <span className="font-inter text-sm font-semibold text-success">SEASON 1 LIVE</span>
            </motion.div>
            
            <motion.h1 
              className="font-bebas text-5xl md:text-7xl lg:text-8xl tracking-wider text-glow mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              KONKAN BATTLEGROUNDS
            </motion.h1>
            <motion.p 
              className="font-inter text-xl md:text-2xl text-white/70 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Connect. Compete. Conquer.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <AnimatedStatCard icon={Trophy} label="Prize Pool" value="₹50,000" />
              <AnimatedStatCard icon={Users} label="Teams" value="32" />
              <AnimatedStatCard icon={Gamepad2} label="Current Match" value="Match 5" />
            </motion.div>
            
            <motion.button 
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-white font-inter font-semibold rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const section = document.getElementById('leaderboard')
                section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
            >
              View Full Leaderboard
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Top 3 Podium */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2 
            className="font-bebas text-4xl text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary">TOP 3</span> TEAMS
          </motion.h2>
          <div className="flex justify-center items-end gap-4 md:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <PodiumCard rank={2} team="Team Alpha" points={45} kills={28} wwcd={1} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <PodiumCard rank={1} team="Team Bravo" points={52} kills={35} wwcd={2} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <PodiumCard rank={3} team="Team Charlie" points={38} kills={22} wwcd={1} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leaderboard Table */}
      <section className="py-16 px-4" id="leaderboard">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-bebas text-4xl">
              <span className="text-primary">LEADER</span>BOARD
            </h2>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="text"
                  placeholder="Search team..."
                  className="pl-10 pr-4 py-2 bg-surface border border-primary/20 rounded-lg font-inter text-sm focus:outline-none focus:border-primary/50 transition-colors focus:shadow-lg focus:shadow-primary/20"
                />
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="glass-card rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-surface/50">
                  <tr>
                    <TableHeader>Rank</TableHeader>
                    <TableHeader>Team</TableHeader>
                    <TableHeader>Matches</TableHeader>
                    <TableHeader>WWCD</TableHeader>
                    <TableHeader>Kills</TableHeader>
                    <TableHeader>Points</TableHeader>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { rank: 1, team: 'Team Bravo', matches: 5, wwcd: 2, kills: 35, points: 52, change: 'up' },
                    { rank: 2, team: 'Team Alpha', matches: 5, wwcd: 1, kills: 28, points: 45, change: 'down' },
                    { rank: 3, team: 'Team Charlie', matches: 5, wwcd: 1, kills: 22, points: 38, change: 'same' },
                    { rank: 4, team: 'Team Delta', matches: 5, wwcd: 0, kills: 20, points: 32, change: 'up' },
                    { rank: 5, team: 'Team Echo', matches: 5, wwcd: 1, kills: 18, points: 30, change: 'down' },
                  ].map((team, index) => (
                    <motion.tr
                      key={team.rank}
                      className="border-t border-primary/10 hover:bg-white/5 transition-colors cursor-pointer"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.01, backgroundColor: 'rgba(255,255,255,0.08)' }}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          {team.rank === 1 && <Crown className="w-5 h-5 text-gold" />}
                          {team.rank === 2 && <Crown className="w-5 h-5 text-silver" />}
                          {team.rank === 3 && <Crown className="w-5 h-5 text-bronze" />}
                          <span className="font-bebas text-lg">{team.rank}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="font-inter font-medium">{team.team}</span>
                          {team.change === 'up' && <motion.div initial={{ y: 0 }} animate={{ y: [-2, 0, -2] }} transition={{ repeat: Infinity, duration: 1 }}><ArrowUp className="w-4 h-4 text-success" /></motion.div>}
                          {team.change === 'down' && <motion.div initial={{ y: 0 }} animate={{ y: [2, 0, 2] }} transition={{ repeat: Infinity, duration: 1 }}><ArrowDown className="w-4 h-4 text-primary" /></motion.div>}
                        </div>
                      </td>
                      <td className="px-6 py-4 font-inter">{team.matches}</td>
                      <td className="px-6 py-4 font-inter">{team.wwcd}</td>
                      <td className="px-6 py-4 font-inter">{team.kills}</td>
                      <td className="px-6 py-4 font-bebas text-lg text-primary">{team.points}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-3 bg-surface/30 border-t border-primary/10 flex items-center justify-between">
              <p className="font-inter text-xs text-white/40">Last updated 2m ago</p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
                <span className="font-inter text-xs text-success">Live Updates</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

function AnimatedStatCard({ icon: Icon, label, value }: { icon: any, label: string, value: string }) {
  return (
    <motion.div 
      className="glass-card rounded-xl px-6 py-4 min-w-[140px] glass-card-hover"
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.div
        initial={{ rotate: 0 }}
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <Icon className="w-6 h-6 text-primary mb-2" />
      </motion.div>
      <p className="font-inter text-sm text-white/60 mb-1">{label}</p>
      <motion.p 
        className="font-bebas text-2xl"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
      >
        {value}
      </motion.p>
    </motion.div>
  )
}

function PodiumCard({ rank, team, points, kills, wwcd }: { rank: number, team: string, points: number, kills: number, wwcd: number }) {
  const colors = {
    1: 'border-gold shadow-gold/30 shadow-2xl',
    2: 'border-silver shadow-silver/30 shadow-xl',
    3: 'border-bronze shadow-bronze/30 shadow-lg',
  }
  const heights = {
    1: 'min-h-[340px]',
    2: 'min-h-[320px]',
    3: 'min-h-[300px]',
  }
  const bgColors = {
    1: 'from-gold/20 to-transparent',
    2: 'from-silver/20 to-transparent',
    3: 'from-bronze/20 to-transparent',
  }
  
  const crownColors = {
    1: 'text-gold',
    2: 'text-silver',
    3: 'text-bronze',
  }

  return (
    <motion.div 
      className={`glass-card rounded-xl border-2 ${colors[rank as keyof typeof colors]} ${heights[rank as keyof typeof heights]} w-full max-w-[240px] p-6 flex flex-col justify-between relative overflow-hidden`}
      whileHover={{ scale: 1.05, y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className={`absolute inset-0 bg-gradient-to-t ${bgColors[rank as keyof typeof bgColors]} opacity-50`} />
      <div className="relative z-10 flex flex-col items-center text-center gap-6">
        <div className="flex flex-col items-center gap-3">
          <div className="rounded-full bg-black/50 p-3 shadow-2xl">
            <Crown className={`w-12 h-12 ${crownColors[rank as keyof typeof crownColors]}`} strokeWidth={1.5} />
          </div>
          <div className="flex items-center gap-3">
            <span className="font-bebas text-5xl">{rank}</span>
            <span className="font-inter text-xs uppercase tracking-[0.3em] text-white/50">Rank</span>
          </div>
        </div>
        <div>
          <h3 className="font-inter font-semibold text-xl mb-2">{team}</h3>
          <div className="space-y-3 text-left">
            <div className="flex items-center justify-between text-sm text-white/70">
              <span className="flex items-center gap-2 text-primary"><Trophy className="w-4 h-4" /> {points} pts</span>
              <span>WWCD {wwcd}</span>
            </div>
            <div className="flex items-center justify-between text-sm text-white/70">
              <span className="flex items-center gap-2 text-primary"><Zap className="w-4 h-4" /> {kills} kills</span>
              <span className="text-white/50">Performance</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function TableHeader({ children }: { children: React.ReactNode }) {
  return (
    <th className="px-6 py-3 text-left font-inter text-xs font-semibold text-white/60 uppercase tracking-wider">
      {children}
    </th>
  )
}
