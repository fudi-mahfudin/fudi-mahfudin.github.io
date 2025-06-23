'use client';

import Link from 'next/link';
import Button from './button';

const DownloadCV = () => {
  return (
    <Button asChild>
      <Link href="/cv" target="_blank">
        Download CV
      </Link>
    </Button>
  );
};

export default DownloadCV;
