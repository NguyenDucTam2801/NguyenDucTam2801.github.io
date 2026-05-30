import type { SectionData } from "../../model/SectionData";
import type { SocialIconModel } from "../../model/SocialIconModel";
import { FlexSection } from "../../components/ui/FlexSection";
import { FlexDiv } from '../../components/ui/FlexDiv';
import { Typography } from "../../components/ui/Typography";
import Button from "../../components/ui/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SocialIcons from "../../components/SocialIcon";

interface HeroSectionProps {
    heroSectionData: SectionData,
    socialIconsData: SocialIconModel[],
    resumeLink: string
}

const HeroSection = ({ heroSectionData, socialIconsData, resumeLink }: HeroSectionProps) => {
    if (!heroSectionData) return null
    const title = heroSectionData.title || "About Me"
    const subtitle = heroSectionData.subTitle || "I am a fullstack website application developer based in HCM city. Has Computer Science background. "
    const description = heroSectionData.description || "I’m a curious developer passionate about accessibility and problem-solving. Currently growing from frontend into fullstack, I’m sharpening my skills in React, Express, and MySQL to connect them seamlessly. Outside of coding, I enjoy making music, photography, which keep me inspired and balanced."
    const btnText = "Download Resume"
    return (
        <FlexSection direction='responsive' align='start' justify='start' gap='md'>
            <Typography variant='h1' className="flex-1">{title}</Typography>
            <FlexDiv direction='col' align="start" justify='start' gap='md' className=' flex-1'>
                <Typography variant='h3'>{subtitle}</Typography>
                <Typography variant='p'>{description}</Typography>
                <FlexDiv direction='row' align='center' justify='start' gap='md'>
                    <Button onClick={() => window.open(resumeLink, '_blank')} className='inline-flex flex-row items-center' >
                        {btnText}
                        <span className='hidden group-hover:inline ml-2 opacity-0
                         group-hover:opacity-100 translate-x-0 group-hover:translate-x-2
                        transition-all duration-300'>
                            <FontAwesomeIcon icon="download" size='xl'
                            />
                        </span>
                    </Button>

                    <SocialIcons socialIconsData={socialIconsData} />
                </FlexDiv>

            </FlexDiv>
        </FlexSection >
    )
}

export default HeroSection