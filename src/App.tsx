// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import './App.css'
import { NotFoundPage } from './pages/NotFoundPage';
import { OfflineAlert } from './components/OfflineAlert';
import NavBar from './components/NavBar';
import ContactSection from './sections/ContactSection';
import { SocialIconsContact } from './data/SocialLinkContact';
import { ContactSectionData } from './data/ContactSectionData';
import AboutMePage from './pages/AboutMePage';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="bg-black w-full h-full py-1">
      <NavBar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutMePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      <OfflineAlert />
      <ContactSection contactData={ContactSectionData} socialIconsData={SocialIconsContact} />

    </div>
  )
}

export default App
