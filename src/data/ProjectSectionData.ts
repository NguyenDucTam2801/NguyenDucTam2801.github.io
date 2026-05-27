import type { ProjectInfo } from '../model/ProjectInfo';
import VAcademyImage from '../assets/images/v-academy-preview.png';
import DataVizXImage from '../assets/images/dataviz-preview.png';
import type { SectionData } from '../model/SectionData';

export const FuturedProjectData: SectionData = {
    title: 'Featured Projects',
    description: 'Here are some of the selected projects that showcase my passion for website application development.',
}

export const ProjectListData: ProjectInfo[] = [
    {
        name: 'V-Academy',
        description: 'This project is a website designed for private online classes, enabling one-on-one sessions between a student and a tutor. Each class is managed and monitored by an admission, ensuring smooth coordination. The platform supports multiple subjects, providing an intuitive experience for all users.',
        image: VAcademyImage,
        link: 'https://github.com/NguyenDucTam2801/V_Academy',
        subjects: 'Website Applicaton',
        year: 2024,
        role: 'Full Stack Developer',
    },
    {
        name: 'DataVizX',
        description: 'DataVizX is a cutting-edge data visualization tool that transforms complex information into stunning, interactive insights. Designed for both analysts and beginners, it makes exploring data intuitive and engaging—unraveling hidden trends, clarifying relationships, and empowering confident decision-making. With vibrant visuals and captivating clarity, DataVizX revolutionizes how you understand, interact with, and communicate your discoveries.',
        image: DataVizXImage,
        link: 'https://github.com/NguyenDucTam2801/DataVizX',
        subjects: 'DSA',
        year: 2023,
        role: 'Fron-end Developer',
    },
]