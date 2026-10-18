import type { ProjectDetail } from "@/public/data/hoodmoodData";

export const projects: ProjectDetail[] = [
  {
    slug: "kmechfix",
    title: "KMechFix",
    category: "commercial",
    status: "completed",
    featured: false,

    card: {
      tagline: "Website for a small security and IT company.",
      description:
        "One-page website for a company that installs alarms, CCTV and intercoms, with a contact form that sends enquiries to the owner's email.",
      image: "/img/kmtechfix.webp",
      tags: ["React", "TypeScript", "Tailwind CSS", "Motion"],
    },

    links: {
      live: "https://kmechfix.vercel.app",
      github: "https://github.com/gapinsky/kmechfix",
    },

    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Motion",
      "React Hook Form",
      "Zod",
      "EmailJS",
      "Vercel",
    ],

    roles: ["Design", "Frontend development", "Deployment"],

    caseStudy: {
      headline: "A one-page website for a small security and IT company.",

      overview:
        "KMechFix is a website I built for a company that installs alarm systems, CCTV and intercoms and also does IT work. Everything is on one page: a hero, the services, a few numbers about the company, a map, an FAQ and a contact form. It is hosted on Vercel.",

      architecture:
        "It is a React app built with Vite, with one component per section. There is no backend. The contact form sends the message straight to EmailJS, which forwards it to the owner's inbox.",

      implementation:
        "The form uses React Hook Form and a Zod schema. It requires a first and last name without digits, a 9-digit phone number, a valid email and a message of at least 30 characters. While the request is running the button is disabled, and afterwards a confirmation modal opens. Sections fade in on scroll with Motion, and the company numbers count up with react-countup.",

      features: [
        {
          title: "Contact form",
          description:
            "Validated in the browser, with error messages in Polish next to each field.",
        },
        {
          title: "Enquiries by email",
          description:
            "Messages go to the owner through EmailJS, so the site needs no server.",
        },
        {
          title: "Company numbers",
          description: "Counters that animate when they scroll into view.",
        },
        {
          title: "FAQ and map",
          description:
            "Common questions in an accordion and an embedded map of the area.",
        },
      ],

      challenges: [
        {
          title: "Contact form without a backend",
          problem:
            "The owner wanted enquiries in his inbox, but a server just for that would be extra cost and upkeep.",
          solution:
            "I used EmailJS and posted the form data from the browser, so the whole site stays a static deployment.",
        },
        {
          title: "Useless messages",
          problem:
            "One-word messages with no way to call the person back are no help to the owner.",
          solution:
            "The form requires a full name, a phone number and a message of at least 30 characters before it sends anything.",
        },
      ],

      outcomes: [
        {
          title: "Live site",
          description: "The website is online at kmechfix.vercel.app.",
          evidence: "technical",
        },
      ],

      takeaway:
        "A small project, but it has the parts a real client site needs: content, a form that works and a deployment.",
    },

    media: [],
  },
];
