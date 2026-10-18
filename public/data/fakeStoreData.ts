import type { ProjectDetail } from "@/public/data/hoodmoodData";

export const projects: ProjectDetail[] = [
  {
    slug: "fake-store",
    title: "Fake Store",
    category: "personal",
    status: "completed",
    featured: false,

    card: {
      tagline: "A demo online shop on the Fake Store API.",
      description:
        "Demo shop front end with category pages, product pages, a cart and a checkout summary.",
      image: "/img/ecommerce.webp",
      tags: ["React", "TypeScript", "React Router", "TanStack Query"],
    },

    links: {
      live: "https://fake-store-b4pj.vercel.app/",
      github: "https://github.com/gapinsky/fake-store",
    },

    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "React Router",
      "TanStack Query",
      "Tailwind CSS",
      "Vercel",
    ],

    roles: ["Design", "Frontend development"],

    caseStudy: {
      headline: "The front end of a small online shop.",

      overview:
        "A practice project: a shop front end on top of the free Fake Store API. It covers the usual path through a shop. You start on a home page with a carousel, pick a category, open a product, add it to the cart and end on a checkout page.",

      architecture:
        "A React app built with Vite and routed with React Router. Products are fetched with a TanStack Query hook, and the cart lives in a React context with its own hook.",

      implementation:
        "One hook fetches either all products or a single category, and the category is part of the query key, so each one is cached on its own. The cart stores product id, quantity and price, and the cart page shows the total and a discount. The checkout page does not take payments. It turns the cart into a small JSON list of id, quantity and price, which is what an order request would contain.",

      features: [
        {
          title: "Categories",
          description: "Men's, women's, jewellery and electronics, plus a page with everything.",
        },
        {
          title: "Product page",
          description: "Image, price and description for each product.",
        },
        {
          title: "Cart",
          description: "Change quantities and see the total and discount.",
        },
        {
          title: "Sorting and pagination",
          description: "Product lists can be sorted and split into pages.",
        },
      ],

      outcomes: [
        {
          title: "Live demo",
          description:
            "Deployed on Vercel. It has no accounts and no payments, so it is a demo only.",
          evidence: "technical",
        },
      ],

      takeaway:
        "A small exercise in routing, fetching data and sharing state through context.",
    },

    media: [],
  },
];
