"use client";

import Button from "./button";

const DownloadCV = () => {
  return (
    <Button
      onClick={() => window?.open("/files/mahfudin-cv-2024.pdf", "_blank")}
    >
      Download CV
    </Button>
  );
};

export default DownloadCV;
