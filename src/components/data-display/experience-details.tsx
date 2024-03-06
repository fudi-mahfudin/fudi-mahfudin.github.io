import { ExperienceDetails as Props } from "@/lib/types";
import Card from "../layout/card";
import ImageWrapper from "./image-wrapper";
import Typography from "../general/typography";
import Tag from "./tag";

const dateFormatOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "short",
};

const ExperienceDetails = ({
  logo,
  darkModeLogo,
  company,
  position,
  currentlyWorkHere,
  startDate,
  endDate,
  summary,
  technologies,
}: Props) => {
  return (
    <Card className="mx-auto w-full max-w-4xl flex flex-col justify-between gap-4 p-8 md:flex-row md:gap-8">
      <div className="max-md:order-1 md:w-1/4">
        <ImageWrapper
          src={logo}
          srcForDarkMode={darkModeLogo}
          alt={company}
          className="max-w-[120px]"
        />
      </div>
      <div className="flex flex-col gap-4 max-md:order-3 md:w-2/4">
        <div className="flex flex-col gap-1">
          <Typography
            variant="subtitle"
            className="font-semibold text-gray-900"
          >
            {position}
          </Typography>
          <Typography variant="body2" className="text-gray-500">
            {company}
          </Typography>
        </div>
        <ul className="list-disc flex flex-col gap-2 md:gap-1 pl-4">
          {summary?.map((text, index) => (
            <Typography component="li" key={index}>
              {text}
            </Typography>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {technologies?.map((tech, index) => (
            <Tag label={tech} className="px-2" key={index} />
          ))}
        </div>
      </div>
      <div className="max-md:order-2 md:w-1/4">
        <Typography className="text-gray-700 md:text-right">
          {new Intl.DateTimeFormat("en-US", dateFormatOptions).format(
            startDate
          )}{" "}
          -{" "}
          {currentlyWorkHere
            ? "Present"
            : endDate
            ? new Intl.DateTimeFormat("en-US", dateFormatOptions).format(
                endDate
              )
            : "NA"}
        </Typography>
      </div>
    </Card>
  );
};

export default ExperienceDetails;
