import HeroSection from "../sections/homePage/HeroSection";
import ProjectSection from "../sections/homePage/ProjectSection";
import AboutMeSection from '../sections/homePage/AboutMeSection';

import { FuturedProjectData } from '../data/homePage/ProjectSectionData';
import { ProjectListData } from '../data/homePage/ProjectSectionData';
import { AboutMeSectionData } from '../data/homePage/AboutMeSectionData';
import { HeroSectionData } from "../data/homePage/HeroSectionData";
import { SocialIconsHero } from '../data/homePage/SocialLinkData';

const HomePage = () => {
    return (
        <main className="overflow-x-hidden">
            <HeroSection heroSectionData={HeroSectionData} socialIconsData={SocialIconsHero} />
            <hr className='border-gray-600 w-full' />
            <ProjectSection
                futuredProjectData={FuturedProjectData}
                projectDetailItems={ProjectListData}
            />
            <hr className='border-gray-600 w-full' />
            <AboutMeSection aboutMeData={AboutMeSectionData} />

        </main>
    )
}

export default HomePage;