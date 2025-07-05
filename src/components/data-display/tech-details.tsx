import { TechDetails as Props } from '@/lib/types';
import React from 'react';
import Link from '../navigation/link';
import ImageWrapper from './image-wrapper';
import Typography from '../general/typography';

const TechDetails = ({ url, logo, darkModeLogo, label }: Props) => {
  return (
    <div className="flex flex-col items-center justify-between gap-2">
      <Link noCustomization href={url} externalLink>
        <ImageWrapper
          src={logo}
          srcForDarkMode={darkModeLogo}
          alt={label}
          className="transition-transform duration-300 md:hover:scale-110 w-16"
        />
      </Link>
      <Typography variant="body1">{label}</Typography>
    </div>
  );
};

export default TechDetails;
