import type { ExperienceInfo } from "../../model/ExperienceModel";
import type { SectionData } from "../../model/SectionData";

export const myExperienceSectionData: SectionData = {
    title: "My Experience",
}

export const experienceList: ExperienceInfo[] = [
    {
        jobTitle: "Software Engineer Intern",
        company: "VNEMEX COMPANY LIMITED",
        period: [new Date("2024-09-01"), new Date("2025-06-01")],
        responsibilities: [
            "Web Application Development:Developed and maintained web applications using NextJS and ExpressJS, ensuring high performance and responsiveness. (Website: https://www.tpvl.tw)",
            "Android Application Development: Created and optimized Android applications using Java and Kotlin, enhancing user experience and functionality.",

        ]
    }
]