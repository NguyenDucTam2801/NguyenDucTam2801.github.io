import type { SectionData } from "../../model/SectionData"
import { Typography } from "../../components/ui/Typography";
import { FlexSection } from "../../components/ui/FlexSection";
import { FlexDiv } from "../../components/ui/FlexDiv";

interface AboutMeSectionProps {
    aboutMeData: SectionData;
}

const AboutMeSection = ({ aboutMeData }: AboutMeSectionProps) => {
    if (!aboutMeData) return null
    const title = aboutMeData?.title || "About Me";
    const subTitle = aboutMeData?.subTitle || "Who I Am";
    const description = aboutMeData?.description || "I am a software engineer passionate about building web applications...";
    return (
        <FlexSection direction="responsive" align='start' justify='start' gap='lg' margin='my-20'>
            <div className="flex-1">
                <Typography variant="h2">{title}</Typography>
            </div>
            <FlexDiv direction="col" gap="md" className="flex-1">
                <Typography variant="h3">{subTitle}</Typography>
                <Typography variant="p">{description}</Typography>
            </FlexDiv>
        </FlexSection>
    )
}

export default AboutMeSection