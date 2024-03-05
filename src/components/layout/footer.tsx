import { Copyright } from "lucide-react";
import { EXTERNAL_LINKS } from "@/lib/data";
import Typography from "../general/typography";
import Link from "../navigation/link";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 py-6">
      <div className="flex items-center justify-center gap-1">
        <Typography className="flex items-center" variant="body3">
          <Copyright className="mr-1 inline-block w-4 h-4" />
          {new Date().getFullYear()} |&nbsp;
          <Link
            noCustomization
            externalLink
            withUnderline
            href={EXTERNAL_LINKS.FIGMA}
          >
            Designed
          </Link>
          &nbsp;and&nbsp;
          <Link
            noCustomization
            externalLink
            withUnderline
            href={EXTERNAL_LINKS.GITHUB_REPO}
          >
            coded
          </Link>
          &nbsp;with ❤️️ by Fudi
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
