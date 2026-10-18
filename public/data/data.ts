export type ProjectCategory =
  | "commercial"
  | "personal"
  | "student"
  | "unverified";

export type ProjectStatus = "completed" | "in-progress" | "unfinished" | "unknown";

export interface Project {
  name: string;
  thumbnail: string;
  description: string;
  category: ProjectCategory;
  status: ProjectStatus;
  technologies: string[];
  githubUrl: string;
  liveUrl: string | null;
}

export const projects: Project[] = [
  {
    name: "Hoodmood Dance Studio",
    thumbnail: "/img/hoodmood.png",
    description: "Multi-location dance studio website with class schedules, a four-step enrollment form and automated email confirmations.",
    category: "commercial",
    status: "completed",
    technologies: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Resend"],
    githubUrl: "https://github.com/gapinsky/hoodmood2",
    liveUrl: "https://hoodmood.pl",
  },
  {
    name: "Ticket System",
    thumbnail: "/projects/ticket-system/ui-mockup-agent-queue.png",
    description: "Self-hosted IT helpdesk I am designing for my workplace, with an explainable ticket assignment algorithm. Design phase.",
    category: "commercial",
    status: "in-progress",
    technologies: ["TypeScript", "Next.js", "NestJS", "PostgreSQL", "Prisma"],
    githubUrl: "https://github.com/gapinsky/ticket-system",
    liveUrl: null,
  },
  {
    name: "RAWG Inspired Game Browser",
    thumbnail: "/img/rawg.webp",
    description: "Game discovery app on the RAWG API with search, genre pages, infinite scroll, a library and a wishlist.",
    category: "personal",
    status: "completed",
    technologies: ["TypeScript", "React", "Tailwind CSS", "TanStack Query", "shadcn/ui"],
    githubUrl: "https://github.com/gapinsky/rawg-copy",
    liveUrl: "https://rawg-copy-gapinski.vercel.app",
  },
  {
    name: "KMechFix",
    thumbnail: "/img/kmtechfix.webp",
    description: "One-page website for a security and IT services company, with a validated contact form delivering enquiries by email.",
    category: "commercial",
    status: "completed",
    technologies: ["TypeScript", "React", "Tailwind CSS", "Motion", "Zod", "EmailJS"],
    githubUrl: "https://github.com/gapinsky/kmechfix",
    liveUrl: "https://kmechfix.vercel.app",
  },
  {
    name: "iWallDesign",
    thumbnail: "/img/iwalldesign.png",
    description: "UV printing studio website with an interactive visualiser to preview a print on your own wall.",
    category: "commercial",
    status: "completed",
    technologies: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Resend"],
    githubUrl: "https://github.com/gapinsky/iwalldesign",
    liveUrl: "https://iwalldesign.vercel.app",
  },

  {
    name: "Fake Store",
    thumbnail: "/img/ecommerce.webp",
    description: "Demo e-commerce storefront with category pages, product details, a cart and a checkout summary.",
    category: "personal",
    status: "completed",
    technologies: ["TypeScript", "React", "Tailwind CSS", "React Router", "TanStack Query"],
    githubUrl: "https://github.com/gapinsky/fake-store",
    liveUrl: "https://fake-store-b4pj.vercel.app/",
  },
  {
    name: "Tic-Tac-Toe (ZPO)",
    thumbnail: "/img/project-placeholder.svg",
    description: "Two-player tic-tac-toe in C++ with a Windows Forms interface and the game rules in a separate class.",
    category: "student",
    status: "completed",
    technologies: ["C++", "Windows Forms"],
    githubUrl: "https://github.com/gapinsky/zpo",
    liveUrl: null,
  },
  {
    name: "Java Table Calculator",
    thumbnail: "/img/project-placeholder.svg",
    description: "Java Swing desktop app with a numeric table, calculations, a pie chart, PDF export and unit tests.",
    category: "student",
    status: "completed",
    technologies: ["Java", "Swing", "JFreeChart", "JUnit"],
    githubUrl: "https://github.com/gapinsky/Java-PK-Project-",
    liveUrl: null,
  },
];

export const projectsByCategory = (category: ProjectCategory) =>
  projects.filter((project) => project.category === category);

export const projectCategories: Record<ProjectCategory, string> = {
  commercial: "Commercial",
  personal: "Personal",
  student: "Academic",
  unverified: "To verify",
};
