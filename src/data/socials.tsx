import { ReactNode } from "react";

// Icons =>
import { BsGithub, BsLinkedin, BsTwitch, BsTwitter } from "react-icons/bs";

export const socialsLinks = [
  {
    url: "https://github.com/pheralb",
    icon: (
      <BsGithub
        size={19}
        className="transition-all duration-200 dark:text-gray-300 hover:text-stone-400"
      />
    ),
  },
  {
    url: "https://twitter.com/pheralb_",
    icon: (
      <BsTwitter
        size={19}
        className="transition-all duration-200 dark:text-gray-300 hover:text-blue-400"
      />
    ),
  },
  {
    url: "https://www.twitch.tv/pheralb",
    icon: (
      <BsTwitch
        size={19}
        className="transition-all duration-200 dark:text-gray-300 hover:text-indigo-400"
      />
    ),
  },
  {
    url: "https://www.linkedin.com/in/pheralb/",
    icon: (
      <BsLinkedin
        size={19}
        className="transition-all duration-200 dark:text-gray-300 hover:text-blue-600"
      />
    ),
  },
];