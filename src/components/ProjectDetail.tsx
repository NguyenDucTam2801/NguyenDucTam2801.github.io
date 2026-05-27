import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { ProjectInfo } from '../model/ProjectInfo';
import { FlexDiv } from './ui/FlexDiv';
import { Typography } from './ui/Typography';
import { UnderlineLink } from './ui/UnderlineLink';

const ProjectDetail = (project: ProjectInfo) => {

    return (
        <FlexDiv direction='responsive' align='center' justify='center' gap='lg' className='w-full'>
            <FlexDiv direction='col' align='center' justify='center' className='md:w-[50%] w-full aspect-square bg-[#1A1A1A] rounded-3xl'>
                <img src={project.image} alt={project.name} style={{ width: '80%', height: '65%' }} />
            </FlexDiv>
            <FlexDiv direction='col' align='start' justify='center' gap='xs' className='md:w-[50%] w-full'>
                <Typography variant='h3'>{project.name}</Typography>
                <Typography variant='p'>{project.description}</Typography>
                <FlexDiv direction='col' align='start' justify='start' gap='xs' className='w-full mt-5 text-lg font-manrope text-gray-300'>
                    <Typography variant='h3'>PROJECT INFO</Typography>
                    <hr className='border-gray-600 w-full mt-2 mb-2' />
                    <FlexDiv direction='row' align='center' justify='between'>
                        <Typography variant='p'>Subject</Typography>
                        <Typography variant='p'>{project.subjects}</Typography>
                    </FlexDiv>
                    <hr className='border-gray-600 w-full mt-2 mb-2' />
                    <FlexDiv direction='row' align='center' justify='between'>
                        <Typography variant='p'>Year</Typography>
                        <Typography variant='p'>{project.year}</Typography>
                    </FlexDiv>
                    <hr className='border-gray-600 w-full mt-2 mb-2' />
                    <FlexDiv direction='row' align='center' justify='between'>
                        <Typography variant='p'>Role</Typography>
                        <Typography variant='p'>{project.role}</Typography>
                    </FlexDiv>
                    <hr className='border-gray-600 w-full mt-2 mb-2' />
                    {/* <SeeProjectLink link={project.link} /> */}
                    <UnderlineLink href={project.link} target="_blank" className='text-[#D3E97A] font-light text-xl hover:text-white transition-all duration-300 hover:decoration-white'>
                        <FontAwesomeIcon icon={['fab', 'github']} className='mr-2' />
                        See the project
                    </UnderlineLink>
                </FlexDiv>
            </FlexDiv>

        </FlexDiv >
    )
}

export default ProjectDetail