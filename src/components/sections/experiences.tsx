import React from "react";
import { EXPERIENCES } from "@/lib/data";
import Container from "../layout/container";
import Typography from "../general/typography";
import Tag from "../data-display/tag";
import ExperienceDetails from "../data-display/experience-details";

const ExperienceSection = () => {
  return (
    <Container id="experience" className="bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Experience" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Here is a quick summary of my most recent experiences:
        </Typography>
      </div>

      {EXPERIENCES.map((experience, index) => (
        <ExperienceDetails {...experience} key={index} />
      ))}
    </Container>
  );
};

export default ExperienceSection;
