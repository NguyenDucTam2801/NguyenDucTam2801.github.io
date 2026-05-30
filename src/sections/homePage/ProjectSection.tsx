import ProjectDetail from "../../components/ProjectDetail";
import { FlexDiv } from "../../components/ui/FlexDiv";
import { FlexSection } from "../../components/ui/FlexSection";
import { Typography } from "../../components/ui/Typography";
import type { ProjectInfo } from "../../model/ProjectInfo";
import type { SectionData } from "../../model/SectionData";


type Props = {
    futuredProjectData: SectionData;
    projectDetailItems: ProjectInfo[];
};

const ProjectSection = ({ futuredProjectData, projectDetailItems }: Props) => {
    return (
        <FlexSection direction="col" align="start" justify="start" gap="lg" className="w-90% md:w-[80%]">
            <FlexDiv direction="col" gap="md" className="md:w-[50%] w-full">
                <Typography variant="h2">{futuredProjectData.title}</Typography>
                <Typography variant="p">{futuredProjectData.description}</Typography>
            </FlexDiv>
            <FlexDiv direction="col" align="center" justify="center" gap="lg" className="w-full">
                {
                    projectDetailItems.map((project) => (
                        <ProjectDetail key={project.name} {...project} />
                    ))
                }
            </FlexDiv>
        </FlexSection>
    )
}

export default ProjectSection