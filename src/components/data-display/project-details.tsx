import React from 'react';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import { ProjectDetails as ProjectDetailsType } from '@/lib/types';
import { mergeClasses } from '@/lib/utils';
import Card from '../layout/card';
import Link from '../navigation/link';
import Typography from '../general/typography';
import Tag from './tag';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type Props = ProjectDetailsType & {
  layoutType: 'default' | 'reverse';
};

const ProjectDetails = ({
  name,
  description,
  technologies,
  url,
  githubUrl,
  previewImage,
  layoutType = 'default',
}: Props) => {
  return (
    <Card className="mx-auto w-full max-w-6xl flex flex-col md:flex-row">
      {/* Image */}
      <div
        className={mergeClasses(
          'flex items-center justify-center border-gray-100 bg-gray-50 p-8 dark:bg-gray-200 max-md:rounded-t-xl md:w-1/2 lg:p-12',
          layoutType === 'default'
            ? 'md:rounded-l-xl md:border-r'
            : 'md:order-last md:rounded-r-xl md:border-l'
        )}
      >
        <Link noCustomization href={url || githubUrl || '#'} externalLink>
          <Image
            src={previewImage}
            alt={`${name} preview`}
            className="rounded-xl transition-transform duration-500 md:hover:scale-110"
            style={{ objectFit: 'cover' }}
          />
        </Link>
      </div>

      {/* Content */}
      <div
        className={mergeClasses(
          'flex flex-col gap-6 p-8 md:w-1/2 lg:p-12',
          layoutType === 'reverse' && 'md:order-first'
        )}
      >
        <Typography variant="subtitle" className="font-semibold text-gray-900">
          {name}
        </Typography>

        <div className="prose dark:prose-invert">
          <Markdown remarkPlugins={[remarkGfm]}>{description}</Markdown>
        </div>
        {/* <Typography>{description}</Typography> */}
        <div className="flex flex-wrap gap-2">
          {technologies?.map((tech, index) => (
            <Tag label={tech} className="px-2" key={index} />
          ))}
        </div>
        <div className="flex flex-row gap-6 order-first md:order-last">
          {url && (
            <Link
              href={url}
              noCustomization
              className="flex items-center gap-2 self-start rounded-lg p-1.5 text-white bg-emerald-500 hover:text-white hover:bg-emerald-600 [&_svg]:stroke-white"
              externalLink
            >
              Preview <ExternalLink />
            </Link>
          )}
          {githubUrl && (
            <Link
              href={githubUrl}
              noCustomization
              className="flex items-center gap-2 self-start rounded-lg p-1.5 hover:bg-gray-100 [&_svg]:stroke-gray-500 ring-gray-200 ring-2"
              externalLink
            >
              Code <Github />
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectDetails;
