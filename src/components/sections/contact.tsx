"use client";

import { useState } from "react";
import { Copy, Mail, Phone } from "lucide-react";
import useWindowSize from "@/hooks/use-window-size";
import { copyTextToClipboard } from "@/lib/utils";
import Container from "../layout/container";
import Tag from "../data-display/tag";
import SocialIcons from "../data-display/social-icons";
import Typography from "../general/typography";
import IconButton from "../general/icon-button";

let email = "fudi.mahfudin@gmail.com";
let phone = "+62 89653893888";

type CopyValue = "email" | "phone";

const ContactSection = () => {
  const { width } = useWindowSize();
  const [isCopied, setIsCopied] = useState(false);
  const [copiedValueType, setCopiedValueType] = useState<CopyValue | null>(
    null
  );

  const handleCopyClick = async (text: string, type: CopyValue) => {
    try {
      await copyTextToClipboard(text);
      setIsCopied(true);
      setCopiedValueType(type);
      let timeoutId = setTimeout(() => {
        setIsCopied(false);
        setCopiedValueType(null);
        clearTimeout(timeoutId);
      }, 1500);
    } catch (err) {
      setIsCopied(false);
      setCopiedValueType(null);
      alert("Unable to copy!");
    }
  };

  return (
    <Container id="contact">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Get in touch" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          What&apos;s next? Feel free to reach out to me if you are looking for
          a developer, have a query, or simply want to connect.
        </Typography>
      </div>

      <div className="flex flex-col items-center gap-6 md:gap-12">
        <div className="flex flex-col items-center md:gap-4">
          <div className="flex items-center gap-4 md:gap-5">
            <Mail className="h-6 w-6 md:h-8 md:w-8" />
            <Typography variant="h2">{email}</Typography>
            <IconButton
              size={width && width < 768 ? "md" : "lg"}
              onClick={() => handleCopyClick(email, "email")}
              showTooltip={isCopied && copiedValueType === "email"}
              tooltipText="Copied!"
            >
              <Copy />
            </IconButton>
          </div>
          <div className="flex items-center gap-4 md:gap-5">
            <Phone className="h-6 w-6 md:h-8 md:w-8" />
            <Typography variant="h2">{phone}</Typography>
            <IconButton
              size={width && width < 768 ? "md" : "lg"}
              onClick={() => handleCopyClick(phone.replace(" ", ""), "phone")}
              showTooltip={isCopied && copiedValueType === "phone"}
              tooltipText="Copied!"
            >
              <Copy />
            </IconButton>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Typography className="text-center">
            You may also find me on these platforms!
          </Typography>
          <SocialIcons />
        </div>
      </div>
    </Container>
  );
};

export default ContactSection;
