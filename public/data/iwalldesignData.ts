import type { ProjectDetail } from "@/public/data/hoodmoodData";

export const projects: ProjectDetail[] = [
  {
    slug: "iwalldesign",
    title: "iWallDesign",
    category: "commercial",
    status: "completed",
    featured: false,

    card: {
      tagline: "Website and print visualiser for a UV printing studio.",
      description:
        "Website for a UV printing studio, with an online visualiser where customers can place a design on a photo of their own wall.",
      image: "/img/iwalldesign.png",
      tags: ["Next.js", "TypeScript", "Canvas", "SEO"],
    },

    links: {
      live: "https://iwalldesign.vercel.app",
      github: "https://github.com/gapinsky/iwalldesign",
    },

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Motion",
      "React Hook Form",
      "Zod",
      "Resend",
      "Vercel",
    ],

    roles: ["Design", "Frontend development", "Server-side development", "SEO", "Deployment"],

    caseStudy: {
      headline: "A website for a UV printing studio, with a tool to preview a print on your own wall.",

      overview:
        "iWallDesign is a website I built for a studio that prints on walls, glass, wood and other surfaces. It has the usual company content (services, surfaces, gallery, pricing, FAQ, map, contact) and one extra thing: a visualiser. A customer uploads a photo of a room and a design, moves, scales and rotates the design on the photo, and then downloads the result or sends it to the studio.",

      architecture:
        "It is a Next.js app using the App Router. The home page is made of section components. The visualiser has its own page, and there is a privacy policy page, a sitemap and a robots file. The contact form posts to a route handler, so the email API key stays on the server.",

      implementation:
        "The visualiser draws on a canvas. The user drags the design, and sliders control its size and rotation. The result can be saved as a PNG. The contact form accepts up to three files (JPG, PNG or PDF, 2 MB each). The route handler checks every field again on the server, escapes the text and sends the email with the attachments through Resend.",

      features: [
        {
          title: "Print visualiser",
          description:
            "Put a design on a photo of your wall, adjust it and download a PNG.",
        },
        {
          title: "Enquiry form with files",
          description:
            "Contact details, city and up to three reference files, sent to the studio by email.",
        },
        {
          title: "Offer, pricing and gallery",
          description:
            "Services, surfaces, price cards, a portfolio and before/after sliders.",
        },
        {
          title: "SEO basics",
          description:
            "Page titles and descriptions, Open Graph data, a sitemap and a robots file.",
        },
      ],

      challenges: [
        {
          title: "Showing the result before the quote",
          problem:
            "It is hard for a customer to imagine a print on their own wall, and hard to describe it in an email.",
          solution:
            "The visualiser lets them try it themselves, and the studio gets the picture with the enquiry.",
        },
        {
          title: "File uploads",
          problem:
            "Letting visitors attach files means dealing with big or unexpected files.",
          solution:
            "The server limits the number of files, allows only JPG, PNG and PDF, and rejects anything over 2 MB.",
        },
      ],

      outcomes: [
        {
          title: "Live site",
          description: "The website is online at iwalldesign.vercel.app.",
          evidence: "technical",
        },
      ],

      takeaway:
        "This one went beyond a brochure site. The visualiser meant working with canvas and pointer events, and the form meant handling uploads and validating on the server.",
    },

    media: [
      {
        src: "/img/iwalldesign.png",
        alt: "iWallDesign website homepage",
        caption: "Homepage",
        type: "image",
      },
    ],
  },
];
