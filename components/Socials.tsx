import Link from "next/link";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/e-hua" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/guanhua-chen-089319325/",
  },
  { icon: <SiLeetcode />, path: "https://leetcode.com/u/eclipse_hua/" },
];

interface SocialProps {
  containerStyles: string;
  iconStyles: string;
}

export default function Socials({ containerStyles, iconStyles }: SocialProps) {
  return (
    <div className={containerStyles}>
      {socials.map((social, idx) => {
        return (
          <Link key={idx} href={social.path} className={iconStyles}>
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
}
