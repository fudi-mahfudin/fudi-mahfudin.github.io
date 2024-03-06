import { mergeClasses } from "@/lib/utils";
import React from "react";
import Typography from "../general/typography";

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
}

const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  ({ label, className, ...props }: TagProps, ref) => {
    return (
      <div
        className={mergeClasses(
          "flex items-center justify-center rounded-xl bg-gray-200 py-1 px-5",
          className
        )}
        {...props}
      >
        <Typography variant="body3" className="font-medium">
          {label}
        </Typography>
      </div>
    );
  }
);
Tag.displayName = "Tag";

export default Tag;
