export interface iProjects {
  title: string;
  description: string;
  url?: string;
  gh: string;
  image: string;
  type: string;
  tags: string[];
}

export const projects = [
  {
    title: "slug",
    description: "🌱 A URL shortener built with T3 Stack.",
    url: "https://slug.vercel.app/",
    gh: "https://github.com/pheralb/slug",
    image: "/images/screenshots/svgl.png",
    type: "App",
    tags: ["Next.js", "React", "Typescript", "Tailwind CSS"],
  },
  {
    title: "superkey",
    description: "❄️ A stylized command menu for React.",
    gh: "https://github.com/pheralb/superkey",
    url: "https://superkey.vercel.app",
    image: "/images/screenshots/svgl.png",
    type: "Library",
    tags: ["React", "Typescript", "Tailwind CSS"],
  },
  {
    title: "svgl",
    description: "🎨 A beautiful library with SVG logos.",
    gh: "https://github.com/pheralb/svgl",
    url: "https://svgl.vercel.app",
    image: "/images/screenshots/svgl.png",
    type: "App",
    tags: ["Next.js", "React", "Typescript", "Chakra UI"],
  },
  {
    title: "weathr",
    description: "☀️ A simple weather web app.",
    gh: "https://github.com/pheralb/weathr",
    url: "https://weathr.pages.dev/",
    image: "/images/screenshots/svgl.png",
    type: "App",
    tags: ["Next.js", "React", "Typescript", "Chakra UI"],
  },
];
