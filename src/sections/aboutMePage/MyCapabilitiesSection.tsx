import type { SectionData } from "../../model/SectionData";
import { FlexDiv } from "../../components/ui/FlexDiv";
import { FlexSection } from "../../components/ui/FlexSection";
import { Typography } from "../../components/ui/Typography";

interface MyCapabilitiesSectionProps {
    myCapabilitiesData: SectionData;
    skillList: string[];
}

const MyCapabilitiesSection = ({ myCapabilitiesData, skillList }: MyCapabilitiesSectionProps) => {
    if (!myCapabilitiesData) return null
    const title = myCapabilitiesData.title || "My Capabilities";
    const subTitle = myCapabilitiesData.subTitle || "What I Can Do";
    const description = myCapabilitiesData.description || "I am always eager to expand my skill set. With a strong foundation in adaptability and continuous learning, I thrive on exploring new tools, techniques, and knowledge areas. My approach blends creativity with problem-solving, allowing me to tackle challenges with precision and innovation. ";
    return (
        <FlexSection direction='responsive' align='start' justify='start' gap='lg'>
            <Typography variant='h2' className="flex-1">{title}</Typography>
            <FlexDiv direction='col' gap='md' className='flex-1'>
                <Typography variant='h3'>{subTitle}</Typography>
                <Typography variant='p'>{description}</Typography>
                <FlexDiv direction='row' wrap={true} gap='sm'>
                    {skillList.map((skill, index) => (
                        <Typography key={index} variant='p' className="px-3 py-1 bg-gray-700 rounded-2xl">{skill}</Typography>
                    ))}
                </FlexDiv>
            </FlexDiv>

        </FlexSection >
    )
}

export default MyCapabilitiesSection