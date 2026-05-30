import { FlexSection } from '../../components/ui/FlexSection';
import { FlexDiv } from '../../components/ui/FlexDiv';
import { Typography } from '../../components/ui/Typography';
import type { SectionData } from "../../model/SectionData";
import type { ExperienceInfo } from '../../model/ExperienceModel';

interface MyExperienceSectionProps {
    experienceSectionData: SectionData;
    experienceItems: ExperienceInfo[];
}

const MyExperienceSection = ({ experienceSectionData, experienceItems }: MyExperienceSectionProps) => {
    if (!experienceSectionData) return null
    const title = experienceSectionData.title || "My Experience";
    return (
        <FlexSection direction='responsive' align='start' justify='start' gap='lg'>
            <Typography variant='h2' className="flex-1">{title}</Typography>
            <FlexDiv direction='col' align='start' justify='start' gap='lg' className='flex-1'>
                {experienceItems.map((item, index) => (
                    <FlexDiv key={index} direction='col' gap='sm'>
                        <FlexDiv direction='row' align='center' justify='between' gap='sm'>
                            <Typography variant='p' className="text-white">{item.jobTitle}</Typography>
                            <Typography variant='p'>{item.period[0].toDateString()} - {item.period[1].toDateString()}</Typography>
                        </FlexDiv>
                        <Typography variant='p' className='!text-[#D3E97A]'>{item.company}</Typography>
                        <ol className='list-disc list-inside'>
                            {item.responsibilities.map((responsibility, idx) => (
                                <li key={idx}>
                                    <Typography key={idx} variant='p'>- {responsibility}</Typography>
                                </li>
                            ))}
                        </ol>
                    </FlexDiv>
                ))}
            </FlexDiv>
        </FlexSection>
    )
}

export default MyExperienceSection