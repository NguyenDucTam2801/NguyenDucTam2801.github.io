import { SocialIconsHero } from "../data/homePage/SocialLinkData";
import HeroSection from "../sections/aboutMePage/HeroSection";
import { heroSectionData, resumeLink } from "../data/aboutPage/heroSectionData";
import { FlexDiv } from "../components/ui/FlexDiv";
import aboutMeHero from '../assets/images/aboutMeHero.jpg'
import MyCapabilitiesSection from "../sections/aboutMePage/MyCapabilitiesSection";
import { myCapabilitiesSectionData, listSkills } from "../data/aboutPage/myCapabilitiesSectionData";
import MyExperienceSection from "../sections/aboutMePage/MyExperiencSection";
import { myExperienceSectionData, experienceList } from "../data/aboutPage/myExperienceSectionData";
import MyAcademySection from "../sections/aboutMePage/MyAcademySection";
import { academyList, myAcademySectionData } from "../data/aboutPage/myAcademySectionData";
import { MyLocationSection } from "../sections/aboutMePage/MyLocation";
import { googleMapsEmbed, googleMapsLink, myLocationSectionData, } from "../data/aboutPage/myLocationSectionData";

const AboutMePage = () => {
    return (
        <main className="overflow-x-hidden">
            <HeroSection heroSectionData={heroSectionData} socialIconsData={SocialIconsHero} resumeLink={resumeLink} />
            <FlexDiv
                direction="col"
                align="center"
                justify="center"
                // Added 'overflow-visible' and 'relative' to the container
                className="w-[90%] md:w-[80%] mx-auto bg-none md:bg-gray-500 rounded-md overflow-visible relative"
                margin="my-20"
            >
                <img
                    src={aboutMeHero}
                    alt="About Me"
                    className="w-full md:w-[40%] h-auto hover:scale-105 transition-transform duration-300 relative hover:z-10 rounded-3xl md:rounded-none"
                />
            </FlexDiv>
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