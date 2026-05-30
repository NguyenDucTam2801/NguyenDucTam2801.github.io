import { SocialIconsHero } from "../data/homePage/SocialLinkData";
import HeroSection from "../sections/aboutMePage/HeroSection";
import { heroSectionData, resumeLink } from "../data/aboutPage/heroSectionData";
import aboutMeHero from '../assets/images/aboutMeHero.jpg'
import MyCapabilitiesSection from "../sections/aboutMePage/MyCapabilitiesSection";
import { myCapabilitiesSectionData, listSkills } from "../data/aboutPage/myCapabilitiesSectionData";
import MyExperienceSection from "../sections/aboutMePage/MyExperiencSection";
import { myExperienceSectionData, experienceList } from "../data/aboutPage/myExperienceSectionData";
import MyAcademySection from "../sections/aboutMePage/MyAcademySection";
import { academyList, myAcademySectionData } from "../data/aboutPage/myAcademySectionData";
import { MyLocationSection } from "../sections/aboutMePage/MyLocation";
import { googleMapsEmbed, googleMapsLink, myLocationSectionData, } from "../data/aboutPage/myLocationSectionData";
import { FlexSection } from "../components/ui/FlexSection";

const AboutMePage = () => {
    return (
        <main className="overflow-x-hidden">
            <HeroSection heroSectionData={heroSectionData} socialIconsData={SocialIconsHero} resumeLink={resumeLink} />
            <FlexSection
                direction="col"
                align="center"
                justify="center"
                // Added 'overflow-visible' and 'relative' to the container
                className="bg-none md:bg-gray-500 rounded-md overflow-visible relative"
                margin="my-20"
            >
                <img
                    src={aboutMeHero}
                    alt="About Me"
                    // 1. Removed width: '100%' from style (kept objectFit)
                    style={{ objectFit: 'cover' }}
                    // 2. Added w-[90%] md:w-[40%]
                    // 3. Changed transition-all to transition-transform for better animation performance
                    className=" md:w-[40%] rounded-3xl md:rounded-none hover:scale-105 transition-transform duration-300 md:m-0 my-5"
                />
            </FlexSection>
            <MyCapabilitiesSection myCapabilitiesData={myCapabilitiesSectionData} skillList={listSkills} />
            <hr className='border-gray-600 w-full' />
            <MyExperienceSection experienceSectionData={myExperienceSectionData} experienceItems={experienceList} />
            <hr className='border-gray-600 w-full' />
            <MyAcademySection myAcademyData={myAcademySectionData} academyItems={academyList} />
            <hr className='border-gray-600 w-full' />
            <MyLocationSection myLocationData={myLocationSectionData} googleMapsLink={googleMapsLink} googleMapsEmbed={googleMapsEmbed} />
            <hr className='border-gray-600 w-full' />


        </main>
    )
}

export default AboutMePage;