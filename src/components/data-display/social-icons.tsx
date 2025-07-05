"use client";

import { SOCIAL_LINKS } from "@/lib/data";
import IconButton from "../general/icon-button";

const SocialIcons = () => {
  return (
    <div className="flex gap-2">
      {SOCIAL_LINKS.map((socialLink, index) => (
        <IconButton
          key={index}
          onClick={() => window.open(socialLink.url, "_blank")}
          className="ring-gray-200 ring-2"
        >
          <socialLink.icon />
        </IconButton>
      ))}
    </div>
  );
};

export default SocialIcons;
