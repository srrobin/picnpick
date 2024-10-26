import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface SectionBannerProps {
    imageLink: string | StaticImageData; // Accepts either a string or StaticImageData
    alttext: string;
    height: number;
    width: number;
}

const SectionBanner: React.FC<SectionBannerProps> = ({ imageLink, alttext, height, width }) => {
    return (
        <div className='gap-20'> 
            <Image 
                src={imageLink}
                alt={alttext}
                height={height}
                width={width}
                objectFit="cover "
                className='rounded'
            />
        </div>
    );
};

export default SectionBanner;

