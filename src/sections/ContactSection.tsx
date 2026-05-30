import SocialIcons from "../components/SocialIcon";
import { ContactForm } from "../components/ContactForm";
import { Typography } from "../components/ui/Typography";
import type { ContactModel } from "../model/ContactModel";
import type { SocialIconModel } from "../model/SocialIconModel";
import { FlexSection } from "../components/ui/FlexSection";
import { FlexDiv } from "../components/ui/FlexDiv";
import { UnderlineLink } from "../components/ui/UnderlineLink";

interface ContactSectionProps {
    contactData: ContactModel,
    socialIconsData: SocialIconModel[]
}

const ContactSection = ({ contactData, socialIconsData }: ContactSectionProps) => {
    const title = contactData.title || "Let's Connect"
    const email = contactData.email
    const emailText = "Say hello at "
    const resume = contactData.resume
    const resumeText = "For more info, here's my "
    return (
        <FlexSection id="contact-section" direction="col" align="start" justify="between" gap="lg" className="!mb-9">
            <FlexDiv direction="responsive" gap="md" className="w-full">
                <FlexDiv direction="col" justify="between" gap="md" className='md:w-[50%] w-full h-full'>
                    <Typography variant="h2">{title}</Typography>
                    <Typography variant="p">{emailText}
                        <UnderlineLink href={`mailto:${email}`}>
                            {email}
                        </UnderlineLink>
                    </Typography>
                    <Typography variant="p">{resumeText}
                        <UnderlineLink href={`${resume}`} target="_blank">
                            resume
                        </UnderlineLink>
                    </Typography>
                    <SocialIcons socialIconsData={socialIconsData} />
                </FlexDiv>
                <ContactForm />
            </FlexDiv>
            <Typography variant="p" className="mt-auto">© 2024 Nguyen Duc Tam. All rights reserved.</Typography>



        </FlexSection>
    )
}

export default ContactSection