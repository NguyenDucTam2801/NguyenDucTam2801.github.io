import NavBar from "../components/NavBar";
import HeroSection from "../sections/homePage/HeroSection";
import ProjectSection from "../sections/homePage/ProjectSection";
import AboutMeSection from '../sections/homePage/AboutmeSection';
import ContactSection from "../sections/homePage/ContactSection";

import { FuturedProjectData } from '../data/ProjectSectionData';
import { ProjectListData } from '../data/ProjectSectionData';
import { AboutMeData } from '../data/AboutMeSectionData';
import { HeroSectionData } from "../data/HeroSectionData";
import { SocialIconsContact, SocialIconsHero } from '../data/SocialLinkData';
import { ContactSectionData } from "../data/ContactSectionData";

const HomePage = () => {
    return (
        <div className="min-h-screen overflow-x-hidden">
            <NavBar />
            <main className="mt-20">
                <HeroSection heroSectionData={HeroSectionData} socialIconsData={SocialIconsHero} />
                <hr className='border-gray-600 w-full' />
                <ProjectSection
                    futuredProjectData={FuturedProjectData}
                    projectDetailItems={ProjectListData}
                />
                <hr className='border-gray-600 w-full' />
                <AboutMeSection aboutMeData={AboutMeData} />
                <ContactSection contactData={ContactSectionData} socialIconsData={SocialIconsContact} />

            </main>
        </div>
    )
}

export default HomePage;