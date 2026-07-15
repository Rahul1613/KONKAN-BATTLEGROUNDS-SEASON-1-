import { Instagram, Youtube, DiscIcon as Discord } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-primary/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-3">
            <img 
              src="/assets/logo.png" 
              alt="Konkan Battlegrounds Logo" 
              className="w-8 h-8 object-contain"
            />
            <span className="font-bebas text-lg tracking-wider">KONKAN BATTLEGROUNDS</span>
          </div>

          <p className="font-inter text-sm text-white/60">
            Konkan Battlegrounds — Made with ❤️ in Konkan
          </p>

          <div className="flex items-center space-x-4">
            <span className="font-inter text-xs text-white/40 uppercase tracking-wider">Season 1</span>
            <div className="flex items-center space-x-3">
              <a href="#" className="p-2 rounded-lg bg-surface border border-primary/20 hover:border-primary/50 transition-colors">
                <Instagram className="w-4 h-4 text-white/70 hover:text-primary" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-surface border border-primary/20 hover:border-primary/50 transition-colors">
                <Youtube className="w-4 h-4 text-white/70 hover:text-primary" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-surface border border-primary/20 hover:border-primary/50 transition-colors">
                <Discord className="w-4 h-4 text-white/70 hover:text-primary" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
