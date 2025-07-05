import React from "react";
import { PROJECTS } from "@/lib/data";
import Container from "../layout/container";
import Typography from "../general/typography";
import Tag from "../data-display/tag";
import ProjectDetails from "../data-display/project-details";

const WorkSection = () => {
  return (
    <Container id="portfolio">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Portfolio" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Some of the noteworthy projects I have built:
        </Typography>
      </div>

      {PROJECTS?.map((project, index) => (
        <ProjectDetails
          {...project}
          layoutType={index % 2 === 0 ? "default" : "reverse"}
          key={index}
        />
      ))}
    </Container>
  );
};

export default WorkSection;
