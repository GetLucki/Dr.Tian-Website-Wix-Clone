import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Behandlingar from './pages/Behandlingar'
import Boka from './pages/Boka'
import OmDrTian from './pages/OmDrTian'
import VadArTCM from './pages/VadArTCM'
import VanligaFragor from './pages/VanligaFragor'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/behandlingar-och-priser" element={<Layout><Behandlingar /></Layout>} />
        <Route path="/boka" element={<Layout><Boka /></Layout>} />
        <Route path="/om-dr-tian" element={<Layout><OmDrTian /></Layout>} />
        <Route path="/vad-ar-kinesisk-medicin" element={<Layout><VadArTCM /></Layout>} />
        <Route path="/vanliga-fragor" element={<Layout><VanligaFragor /></Layout>} />
      </Routes>
    </BrowserRouter>
  )
}
