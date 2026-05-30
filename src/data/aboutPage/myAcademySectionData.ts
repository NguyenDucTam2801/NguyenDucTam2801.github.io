import { type AcademyInfo } from "../../model/AcademyModel";

export const myAcademySectionData = {
    title: "My Academy",
}

export const academyList: AcademyInfo[] = [{
    major: "Computer Science",
    school: "Ho Chi Minh City International University",
    period: [new Date("2021-09-01"), new Date("2025-06-01")],
    details: ["Cumulative GPA: 71.8/100", "Former member of IT Youth Union",]
}
]