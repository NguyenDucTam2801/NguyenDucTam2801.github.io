import { HashRouter, Routes, Route } from 'react-router-dom'; // 1. Swapped to HashRouter
import HomePage from './pages/HomePage';
import './App.css';
import { NotFoundPage } from './pages/NotFoundPage';
import { OfflineAlert } from './components/OfflineAlert';
import NavBar from './components/NavBar';
import ContactSection from './sections/ContactSection';
import { SocialIconsContact } from './data/SocialLinkContact';
import { ContactSectionData } from './data/ContactSectionData';
import AboutMePage from './pages/AboutMePage';

function App() {
  return (
    <div className="bg-black w-full h-full py-1">
      {/* 2. Wrap the NavBar and routes together inside HashRouter */}
      <HashRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutMePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        {/* Placed inside the router in case it contains links */}
        <ContactSection contactData={ContactSectionData} socialIconsData={SocialIconsContact} />
      </HashRouter>

      <OfflineAlert />
    </div>
  );
}

export default App;