import React from 'react';
import { FlexSection } from '../../components/ui/FlexSection';
import { FlexDiv } from '../../components/ui/FlexDiv';
import { Typography } from '../../components/ui/Typography';
import type { SectionData } from '../../model/SectionData';

interface MyLocationSectionProps {
    myLocationData: SectionData;
    googleMapsLink: string;
    googleMapsEmbed: string;
}

export const MyLocationSection = ({ myLocationData, googleMapsLink, googleMapsEmbed }: MyLocationSectionProps) => {
    if (!myLocationData || !googleMapsLink || !googleMapsEmbed) return null
    const title = myLocationData.title || "My Location";
    const subTitle = myLocationData.subTitle || "Currently based in Ho Chi Minh City, Vietnam. Available for remote contract roles and worldwide collaboration.";
    const description = myLocationData.description || "Binh Thanh ward, Ho Chi Minh City, VN";

    return (
        <FlexSection direction="responsive" align="start" justify="between" gap="lg" margin="my-20">

            {/* Left Column: Location details */}
            <FlexDiv direction="col" gap="md" className="flex-1 w-full md:w-[45%]">
                <Typography variant="h2">{title}</Typography>
                <Typography variant="p">
                    {subTitle}
                </Typography>
                <Typography variant="p" className="text-gray-400 font-semibold">
                    {description}
                </Typography>
            </FlexDiv>

            {/* Right Column: Map with transparent link overlay */}
            <FlexDiv className="flex-1 w-full md:w-[50%] h-[350px] relative rounded-2xl overflow-hidden group border border-white/10 shadow-lg">

                {/* 3. Transparent Link Overlay: catches clicks and opens in a new tab */}
                <a
                    href={googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-20 cursor-pointer"
                >
                    <span className="sr-only">Open in Google Maps</span>
                </a>

                {/* 4. Google Maps Iframe */}

                <iframe
                    title="Google Maps Location"

                    src={googleMapsEmbed}
                    className="w-full h-full border-none filter md:grayscale md:contrast-125 md:opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 ease-in-out z-10"
                    loading="lazy">

                </iframe>

                {/* 5. Sleek hover badge */}
                <div className="absolute bottom-4 right-4 bg-black/90 backdrop-blur-md text-[#D3E97A] text-xs font-semibold px-4 py-2.5 rounded-lg pointer-events-none opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-30 shadow-md">
                    Open in Google Maps ➔
                </div>

            </FlexDiv>

        </FlexSection>
    );
};