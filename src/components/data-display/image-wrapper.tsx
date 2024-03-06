"use client";

import { useTheme } from "next-themes";
import Image, { ImageProps, StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";

type Props = ImageProps & {
  srcForDarkMode?: string | StaticImageData;
};

const ImageWrapper = ({ srcForDarkMode, src, alt, ...props }: Props) => {
  // Ref :: https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const finalSrc = theme === "dark" ? srcForDarkMode || src : src;

  return <Image src={finalSrc} alt={alt} {...props} />;
};

export default ImageWrapper;
