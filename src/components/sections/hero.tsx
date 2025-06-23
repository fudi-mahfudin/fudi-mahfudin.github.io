import Image from 'next/image';
import { MapPin } from 'lucide-react';
import Container from '../layout/container';
import Typography from '../general/typography';
import SocialIcons from '../data-display/social-icons';
import HeroHeadshot from '/public/images/hero-headshot.jpg';
import { HERO } from '@/lib/data';
import { mergeClasses } from '@/lib/utils';

const HeroSection = () => {
  return (
    <Container id="hero">
      <div className="flex flex-col gap-12 md:flex-row">
        {/* Image */}
        <div className="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
          <div className="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
            <Image
              src={HeroHeadshot}
              alt="Headshot of Fudi"
              className="absolute z-10 h-[280px] w-[240px] border-8 border-gray max-md-:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px]"
              style={{ objectFit: 'cover' }}
              priority
            />
            <div className="absolute h-[280px] w-[280px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:right-0 md:h-[320px] md:w-[280px]" />
          </div>
        </div>
        {/* Content */}
        <div className="max-w-3xl flex flex-grow flex-col justify-center gap-8 md:order-first md:items-start 2xl:gap-12">
          <div className="flex flex-col gap-2">
            <Typography variant="h1">
              {HERO.title}{' '}
              <span className="inline-block animate-waving-hand">👋</span>
            </Typography>
            <Typography>{HERO.description}</Typography>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <MapPin className="stroke-gray-600" />
              <Typography>{HERO.location}</Typography>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span
                    className={mergeClasses(
                      'relative inline-flex h-3 w-3 rounded-full',
                      HERO.available ? 'bg-emerald-500' : 'bg-gray-300'
                    )}
                  />
                </span>
              </div>
              <Typography>
                {HERO.available
                  ? 'Available for new project'
                  : 'Not available for new project'}
              </Typography>
            </div>
          </div>
          <SocialIcons />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
