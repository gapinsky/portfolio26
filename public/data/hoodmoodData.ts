
export type Project = {
  slug: string;
  title: string;
  category: "commercial" | "personal" | "academic";
  status: "completed" | "in-development";
  featured: boolean;

  card: {
    tagline: string;
    description: string;
    image: string;
    tags: string[];
  };

  links: {
    live?: string;
    github?: string;
    figma?: string;
  };

  technologies: string[];
  roles: string[];

  caseStudy: {
    headline: string;
    overview: string;
    challenge: string;
    discovery: string;
    design: string;
    architecture: string;
    implementation: string;
    performance: string;

    features: {
      title: string;
      description: string;
    }[];

    challenges: {
      title: string;
      problem: string;
      solution: string;
    }[];

    outcomes: {
      title: string;
      description: string;
      evidence: "client-feedback" | "technical";
    }[];

    futureDevelopment?: {
      status: "planned" | "design" | "development";
      title: string;
      description: string;
    };

    takeaway: string;
  };

  media: {
    src: string;
    alt: string;
    caption: string;
    type: "image" | "video";
  }[];
};

export const projects: Project[] = [
  {
    slug: "hoodmood",
    title: "Hoodmood Dance Studio",
    category: "commercial",
    status: "completed",
    featured: true,

    card: {
      tagline: "From business needs to a complete digital product.",
      description:
        "A multi-location dance studio platform featuring context-aware enrollment, automated email workflows, and centralized content management.",
      image: "/img/hoodmood.png",
      tags: [
        "Next.js",
        "TypeScript",
        "UI/UX Design",
        "Full-stack",
      ],
    },

    links: {
      live: "https://www.hoodmood.pl",
      // Add verified public repository URL here.
      // github: "https://github.com/gapinsky/...",
    },

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Hook Form",
      "Zod",
      "Resend",
      "Figma",
      "Vercel",
      "GitHub",
      "Instagram API",
    ],

    roles: [
      "Requirements Analysis",
      "Client Communication",
      "Product Design",
      "UI/UX Design",
      "Frontend Development",
      "Server-side Development",
      "Technical Architecture",
      "SEO Optimization",
      "Deployment",
      "Maintenance",
    ],

    caseStudy: {
      headline:
        "Designing and developing a complete digital experience for a multi-location dance studio.",

      overview:
        "Hoodmood is a commercial web application designed to strengthen the studio's digital presence, simplify class discovery, and streamline registration for children and adults. I independently handled the entire delivery process, from client discovery and Figma designs to implementation, deployment, and ongoing maintenance.",

      challenge:
        "The client needed a visually distinctive yet intuitive platform, primarily targeting parents. Existing class management lacked a consistent data structure, while the enrollment process needed to accommodate multiple locations, age groups, and participant types. The website also needed to make essential information easier to access and reduce repetitive customer inquiries.",

      discovery:
        "I conducted direct client interviews to understand registration requirements, differences between child and adult enrollment, previous application limitations, and recurring customer questions. I also collected visual references and investigated opportunities to improve information accessibility and administrative workflows.",

      design:
        "I independently designed the application in Figma and iteratively refined it based on client feedback. I balanced the school's expressive visual identity with usability, responsiveness, clear navigation, and accessibility considerations. I also introduced light and dark themes and advocated against excessive animations and unnecessary multimedia.",

      architecture:
        "I structured the application around centralized TypeScript data modules containing classes, locations, instructors, and shared information. Reusable components consume these datasets throughout the website, reducing duplication and simplifying frequent content updates. The application also uses dedicated Next.js routes and a hybrid metadata strategy combining static and dynamically generated metadata.",

      implementation:
        "I implemented a four-step enrollment workflow using React Hook Form and Zod, with conditional fields and filtering based on age, location, and participant type. A Next.js Server Action revalidates submitted data, resolves selected classes against server-side application data, normalizes contact information, and calculates enrollment costs. Resend automates enrollment notifications and personalized confirmations.",

      performance:
        "I balanced visual quality with loading performance through image optimization, selective loading strategies, and careful client-component boundaries. I also limited unnecessary video-heavy content to keep the experience accessible and responsive.",

      features: [
        {
          title: "Multi-Step Enrollment",
          description:
            "A four-step registration workflow with contextual fields, per-step validation, shared form state, and clear progress indicators.",
        },
        {
          title: "Dynamic Class Filtering",
          description:
            "Available classes are filtered by participant age and location, helping users find relevant activities.",
        },
        {
          title: "Server-Side Business Validation",
          description:
            "Server Actions validate requests and resolve selected classes against trusted application data before processing.",
        },
        {
          title: "Automated Email Communication",
          description:
            "Resend delivers enrollment notifications to the studio and personalized confirmation emails to participants.",
        },
        {
          title: "Centralized Content Architecture",
          description:
            "Structured TypeScript data modules keep classes, schedules, instructors, and locations consistent across the application.",
        },
        {
          title: "Instagram Integration",
          description:
            "An Instagram API integration displays studio posts in an infinitely scrolling feed, with interactive dialogs and video playback.",
        },
        {
          title: "Search & Filtering",
          description:
            "Interactive filtering and search help visitors navigate classes, pricing information, and frequently asked questions.",
        },
        {
          title: "Location-Specific Pages",
          description:
            "Dedicated routes provide localized schedules, pricing, and studio information while supporting direct linking and SEO.",
        },
        {
          title: "Instructor Profiles",
          description:
            "Dedicated instructor pages present the studio's teaching team through reusable content-driven components.",
        },
        {
          title: "Adaptive Visual Experience",
          description:
            "Responsive layouts and light/dark themes provide a consistent experience across devices.",
        },
      ],

      challenges: [
        {
          title: "Complex Enrollment Logic",
          problem:
            "Different participant types, age restrictions, and locations required a flexible registration process without overwhelming users.",
          solution:
            "I designed a modular multi-step form with conditional fields, contextual class filtering, shared state, per-step validation, and server-side enforcement of business rules.",
        },
        {
          title: "Frequently Changing Content",
          problem:
            "The studio regularly modifies classes, schedules, locations, and instructor information.",
          solution:
            "I created a centralized, code-managed data architecture using typed objects and reusable components, allowing consistent updates without editing multiple pages.",
        },
        {
          title: "Visual Identity vs. Performance",
          problem:
            "The client wanted extensive video and animation, which could negatively affect performance and usability for the primary audience.",
          solution:
            "I prioritized purposeful multimedia, optimized images, responsive layouts, and restrained animations while preserving the studio's energetic brand identity.",
        },
        {
          title: "Reliable Form Processing",
          problem:
            "Registration submissions needed to remain valid even if client-side validation was bypassed or class availability changed.",
          solution:
            "I introduced server-side schema validation, class-selection resolution, trusted price calculations, structured error handling, and automated email workflows.",
        },
        {
          title: "Improving Information Accessibility",
          problem:
            "Customers frequently contacted the studio with questions about classes, pricing, schedules, and registration.",
          solution:
            "I designed dedicated information pages, FAQ content, contextual navigation, and filtering tools to help customers find answers independently.",
        },
      ],

      outcomes: [
        {
          title: "Fewer Customer Inquiries",
          description:
            "The client reported a noticeable reduction in routine phone inquiries after the new website was introduced.",
          evidence: "client-feedback",
        },
        {
          title: "Increased Registrations",
          description:
            "According to the client, more participants have been registering since the launch of the new application.",
          evidence: "client-feedback",
        },
        {
          title: "Improved User Experience",
          description:
            "The client highlighted the website's clarity, visual presentation, and ease of finding relevant information.",
          evidence: "client-feedback",
        },
        {
          title: "Improved Online Presence",
          description:
            "The client expressed strong satisfaction with the studio's improved online visibility.",
          evidence: "client-feedback",
        },
        {
          title: "End-to-End Delivery",
          description:
            "I independently completed client discovery, UI/UX design, technical implementation, deployment, domain configuration, and ongoing maintenance.",
          evidence: "technical",
        },
        {
          title: "Maintainable Architecture",
          description:
            "Centralized data modules and reusable components support consistent updates across the website.",
          evidence: "technical",
        },
      ],

      futureDevelopment: {
        status: "design",
        title: "Studio Management CRM",
        description:
          "I am designing a management system that will allow the studio to independently manage instructors, classes, and schedules, reducing reliance on developer-managed content updates.",
      },

      takeaway:
        "Hoodmood demonstrates my ability to independently deliver a complete digital product, translate business needs into technical requirements, and make informed decisions across UX, architecture, server-side logic, performance, and deployment.",
    },

    media: [
      {
        src: "/img/hoodmood.png",
        alt: "Hoodmood Dance Studio homepage",
        caption: "Homepage and visual identity",
        type: "image",
      },
      {
        src: "/projects/hoodmood/lighthouse-desktop.png",
        alt: "Desktop Lighthouse report: Performance 100, Accessibility 96, Best Practices 100, SEO 100",
        caption: "Desktop · Lighthouse audit · 18 October 2026",
        type: "image",
      },
      {
        src: "/projects/hoodmood/lighthouse-mobile.png",
        alt: "Mobile Lighthouse report: Performance 98, Accessibility 96, Best Practices 100, SEO 100",
        caption: "Mobile · Lighthouse audit · 18 October 2026",
        type: "image",
      },
    ],
  },
];

export const hoodmoodLighthouse = [
  { device: "Desktop", performance: 100, accessibility: 96, bestPractices: 100, seo: 100 },
  { device: "Mobile", performance: 98, accessibility: 96, bestPractices: 100, seo: 100 },
];

// Lighter shape for the other projects: only the essentials are required.
export type ProjectDetail = Omit<Project, "caseStudy"> & {
  caseStudy: Partial<Project["caseStudy"]> &
    Pick<Project["caseStudy"], "headline" | "overview" | "features" | "takeaway">;
};
