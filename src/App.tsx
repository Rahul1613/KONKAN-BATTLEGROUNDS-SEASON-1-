import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import MatchResults from './pages/MatchResults'
import MVP from './pages/MVP'
import Admin from './pages/Admin'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-surface">
        <Navbar />
        <main className="relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/match-results" element={<MatchResults />} />
            <Route path="/mvp" element={<MVP />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
