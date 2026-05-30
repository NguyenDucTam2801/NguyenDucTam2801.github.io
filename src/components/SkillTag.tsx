import { FlexSpan } from "./ui/FlexSpan"
import { Typography } from "./ui/Typography"


const SkillTag = ({ skill }: { skill: string }) => {
    return (
        <FlexSpan direction="row" align="center" justify="center" gap="xs" className="px-2 py-1 bg-gray-200 rounded-full">
            <Typography variant="p" className="text-sm">{skill}</Typography>
        </FlexSpan>
    )
}

export default SkillTag