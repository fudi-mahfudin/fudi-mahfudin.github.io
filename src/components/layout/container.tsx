import { mergeClasses } from "@/lib/utils";
import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {}

const Container = React.forwardRef<HTMLElement, ContainerProps>(
  ({ className, children, ...props }: ContainerProps, ref) => {
    return (
      <section
        className={mergeClasses(
          "w-full bg-gray py-16 md:py-20 lg:py-24",
          className
        )}
        ref={ref}
        {...props}
      >
        <div className="flex flex-col w-full max-w-7xl mx-auto gap-6 px-4 md:gap-12 md:px-8">
          {children}
        </div>
      </section>
    );
  }
);
Container.displayName = "Container";

export default Container;
