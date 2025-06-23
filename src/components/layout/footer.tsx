import { Copyright } from "lucide-react";
import Typography from "../general/typography";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 py-6">
      <div className="flex items-center justify-center gap-1">
        <Typography className="flex items-center" variant="body3">
          <Copyright className="mr-1 inline-block w-4 h-4" />
          {new Date().getFullYear()}
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
