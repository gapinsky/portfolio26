import type { ProjectDetail } from "@/public/data/hoodmoodData";

export const projects: ProjectDetail[] = [
  {
    slug: "rawg-copy",
    title: "RAWG Inspired Game Browser",
    category: "personal",
    status: "completed",
    featured: false,

    card: {
      tagline: "A game browser built on the RAWG API.",
      description:
        "Game browser with search, genre pages, infinite scroll, game details, a library, a wishlist and light and dark themes.",
      image: "/img/rawg.webp",
      tags: ["React", "TypeScript", "TanStack Query", "shadcn/ui"],
    },

    links: {
      live: "https://rawg-copy-gapinski.vercel.app",
      github: "https://github.com/gapinsky/rawg-copy",
    },

    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "React Router",
      "TanStack Query",
      "Axios",
      "Tailwind CSS",
      "shadcn/ui",
      "Vercel",
    ],

    roles: ["Design", "Frontend development", "API integration"],

    caseStudy: {
      headline: "A game browser inspired by RAWG.io.",

      overview:
        "A personal project to practise working with a real API. I rebuilt the main parts of RAWG.io on top of its public API: browsing, searching, genres, a game page and two personal lists (library and wishlist). It works on phones and has light and dark themes.",

      architecture:
        "A React app built with Vite and routed with React Router. API calls go through a small Axios client, and TanStack Query handles fetching and caching. The library and wishlist are kept in a reducer shared through React context.",

      implementation:
        "Game lists use an infinite query, so the next page loads as you scroll, and results are cached for five minutes. The search box is debounced and shows suggestions. The game page has a screenshot carousel, platforms, ratings and similar games. Skeleton cards fill the space while data loads.",

      features: [
        {
          title: "Search with suggestions",
          description: "Debounced search that suggests titles as you type.",
        },
        {
          title: "Genres",
          description: "Genres come from the API, and each one has its own page.",
        },
        {
          title: "Infinite scroll",
          description: "The next page of games loads when you reach the end of the list.",
        },
        {
          title: "Game page",
          description: "Screenshots, platforms, ratings and similar games.",
        },
        {
          title: "Library and wishlist",
          description: "Add or remove games from two lists.",
        },
        {
          title: "Themes and layouts",
          description: "Light and dark mode, and a grid or list view.",
        },
      ],

      challenges: [
        {
          title: "Long lists from an API",
          problem: "The catalogue is far too big to load at once.",
          solution:
            "An infinite query loads one page at a time and caches it, so going back to a list does not refetch it.",
        },
        {
          title: "Library and wishlist on many pages",
          problem: "The same two lists are needed on cards, game pages and their own views.",
          solution:
            "A reducer with add and remove actions, shared through context. It also ignores duplicates.",
        },
      ],

      outcomes: [
        {
          title: "Live app",
          description: "Deployed on Vercel and running on real data from the RAWG API.",
          evidence: "technical",
        },
      ],

      takeaway:
        "This is where I got used to TanStack Query and to keeping server data and local state apart. It is a practice project, not a product.",
    },

    media: [
      {
        src: "/img/rawg.webp",
        alt: "RAWG inspired game browser",
        caption: "Game browser",
        type: "image",
      },
    ],
  },
];
