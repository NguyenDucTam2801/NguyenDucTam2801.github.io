import profile_avatar from '../../assets/images/profile.png'
import Button from '../../components/ui/Button'
import SocialIcons from '../../components/SocialIcon';
import { Typography } from '../../components/ui/Typography';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { SectionData } from '../../model/SectionData';
import type { SocialIconModel } from '../../model/SocialIconModel';
import { FlexSection } from '../../components/ui/FlexSection';
import { FlexDiv } from '../../components/ui/FlexDiv';

interface HeroSectionProps {
    heroSectionData: SectionData,
    socialIconsData: SocialIconModel[]
}

const HeroSection = ({ heroSectionData, socialIconsData }: HeroSectionProps) => {
    if (!heroSectionData) return null
    const title = heroSectionData.title || "Hi, I am Nguyen Duc Tam"
    const description = heroSectionData.description || "A HCM city based website application developer passionate about building accessible and user friendly websites."
    const btnText = "CONTACT ME"
    return (
        <FlexSection direction='responsiveReverse' align='center' justify='between' gap='lg' className='py-10 md:py-20'>
            <FlexDiv direction='col' gap='md' className='flex-1'>
                <Typography variant='h1'>{title}</Typography>
                <Typography variant='p'>{description}</Typography>
                <FlexDiv direction='row' align='center' justify='start' gap='md' className='mt-5'>
                    <Button onClick={() => window.location.href = '/work'} className='inline-flex flex-row items-center' >
                        {btnText}
                        <span className='hidden group-hover:inline ml-2 opacity-0
                         group-hover:opacity-100 translate-x-0 group-hover:translate-x-2
                        transition-all duration-300'>
                            <FontAwesomeIcon icon="square-arrow-up-right" size='xl'
                            />
                        </span>
                    </Button>
                    <SocialIcons socialIconsData={socialIconsData} />
                </FlexDiv>
            </FlexDiv>
            <FlexDiv className='flex-1'>
                <img src={profile_avatar} alt="Profile Avatar" style={{ width: '100%', objectFit: 'cover' }} className="rounded-3xl hover:scale-105 transition-all duration-300 md:m-0 my-5" />
            </FlexDiv>
        </FlexSection>
    )
}

export default HeroSection