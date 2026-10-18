import type { ProjectDetail } from "@/public/data/hoodmoodData";

const diagrams = "/projects/ticket-system";

export const projects: ProjectDetail[] = [
  {
    slug: "ticket-system",
    title: "Ticket System",
    category: "commercial",
    status: "in-development",
    featured: true,

    card: {
      tagline: "An IT helpdesk where an algorithm picks the next ticket.",
      description:
        "A ticketing system I plan to run at my workplace. I am finishing the design: requirements, data model, architecture, API and the assignment algorithm. Implementation is next.",
      image: `${diagrams}/ui-mockup-agent-queue.png`,
      tags: ["System design", "NestJS", "PostgreSQL", "Next.js"],
    },

    links: {
      figma:
        "https://www.figma.com/design/zzmgxlrP3AJTCRyNAc9asr/Ticketing-System-%E2%80%93-UI-Mockup?node-id=18-2",
    },

    technologies: [
      "TypeScript",
      "Next.js",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "Nginx",
      "Figma",
      "draw.io",
    ],

    roles: [
      "Requirements",
      "System analysis",
      "Architecture",
      "Database design",
      "API design",
      "Algorithm design",
      "UI mockups",
    ],

    caseStudy: {
      headline: "Designing a ticketing system for my workplace, before writing the code.",

      overview:
        "I plan to run this system at my workplace. The idea came from daily work: users kept calling or walking up with problems, and we kept forgetting who wanted what. Ready-made ticketing tools charge per seat, and we cannot really afford that, so I am designing our own. The project is still in progress. I am finishing the design phase, and this page shows what is done so far.",

      challenge:
        "Requests came in by phone and in person, with nothing written down, so things got forgotten. A ticket system fixes that, but the commercial ones are paid per seat. It also had to be small enough for one person to build and run: one server, no outside services, no scheduled jobs.",

      discovery:
        "I started with a project charter and a functional description, then wrote a critical review of my own assumptions. After that I listed the actors and the 28 functions, drew use cases, and wrote the requirements, business rules and an RBAC matrix saying who can do what. Then I cut a small MVP and wrote down what it leaves out and how people can manage without it.",

      design:
        "I modelled the system with data flow diagrams, a state diagram of a ticket with a table of allowed transitions, an ERD, and UML class, sequence and activity diagrams. The screens are mocked up in Figma, for desktop and mobile, for all three roles.",

      architecture:
        "A modular monolith: one NestJS backend split into modules (auth, users, settings, tickets, queue, notifications, statistics) and one PostgreSQL database. The frontend is Next.js behind Nginx, all in Docker Compose. Every ticket operation is one database transaction that saves the change, the history entry and the notifications together. Sessions are stored on the server and sent in an HttpOnly cookie. Passwords are hashed with Argon2. Permissions are denied by default and checked on the server. The assignment algorithm is a separate library with no database access, so I can test it on its own.",

      implementation:
        "Not started yet. The plan is to build the Prisma schema first, then the assignment library, tested against the synthetic data I prepared (starting history, a demo queue and the expected picks), then the API, then the frontend.",

      performance:
        "The non-functional requirements are written down: security, audit history, data isolation, transactions, running on the organisation's own network, and backups with pg_dump. I also noted the deliberate limits: one backend instance, no outgoing email, no file storage.",

      features: [
        {
          title: "Next ticket chosen by an algorithm",
          description:
            "When an agent asks for work, the algorithm picks a ticket from the shared queue and saves the reason, so an administrator can check it later.",
        },
        {
          title: "Priority from facts",
          description:
            "Weight is scope times work blocked times the reporter's position. Users do not pick the priority themselves.",
        },
        {
          title: "Old tickets move up",
          description:
            "A ticket's weight grows with the time it waits, so low-priority tickets do not wait forever.",
        },
        {
          title: "Time estimates that learn",
          description:
            "The estimate starts from a per-category guess and an agent's specialisation, and moves towards the agent's real times as they finish tickets.",
        },
        {
          title: "Clear ticket states",
          description:
            "Six states with a table of allowed changes. An agent has one active ticket at a time and a limit on how many they hold.",
        },
        {
          title: "Roles and permissions",
          description:
            "User, agent and administrator, with a matrix of who can do what, checked on the server.",
        },
      ],

      challenges: [
        {
          title: "No budget for per-seat pricing",
          problem:
            "Commercial ticketing tools charge per seat, which does not fit our budget, and requests were still getting lost.",
          solution:
            "I designed a self-hosted system on open-source tools, with no licence fees and no outside services, and cut the MVP down to report, queue, take and resolve.",
        },
        {
          title: "Picking the next ticket fairly",
          problem:
            "A fixed priority lets important tickets overtake low ones forever, and first-in-first-out ignores urgency.",
          solution:
            "I treated it as a scheduling problem: choose the ticket with the highest weight divided by expected time (Smith's rule), and let weight grow with waiting time.",
        },
        {
          title: "Estimating time without reading the ticket",
          problem:
            "The text of a ticket says little about how long it will take, and a new system has no history.",
          solution:
            "I blend a per-category starting estimate with the agent's own past times. A new agent works from day one, and the estimate gets more accurate as data comes in.",
        },
        {
          title: "Two agents asking at once",
          problem:
            "A ticket change, its history and the notifications must never disagree.",
          solution:
            "Each operation runs in one transaction, and the rules are enforced in the backend, not in the UI.",
        },
      ],

      outcomes: [
        {
          title: "Design documents",
          description:
            "Charter, requirements, business rules, RBAC matrix, data model, state model, API, deployment notes and a test plan.",
          evidence: "technical",
        },
        {
          title: "Diagrams and mockups",
          description:
            "Use cases, DFD, state diagram, ERD, architecture and UML diagrams, plus the UI in Figma for desktop and mobile.",
          evidence: "technical",
        },
        {
          title: "Algorithm with test data",
          description:
            "The algorithm is fully specified, and the test data with expected results is ready before the first line of code.",
          evidence: "technical",
        },
      ],

      futureDevelopment: {
        status: "development",
        title: "Implementation",
        description:
          "I am finishing the design. Next I will build the database schema and the assignment library against the prepared test data, then the API and the interface.",
      },

      takeaway:
        "This project shows how I work before coding: turning a vague need into requirements, choosing an architecture and being able to explain why, and designing the data, the API and the algorithm. It is still in progress, so what you see here is the design, not a finished product.",
    },

    media: [
      {
        src: `${diagrams}/ui-mockup-agent-queue.png`,
        alt: "UI mockup of the agent queue: a table of waiting tickets and the algorithm's suggestion",
        caption: "UI mockup (Figma), agent queue",
        type: "image",
      },
      {
        src: `${diagrams}/architecture.png`,
        alt: "System architecture: Next.js frontend, Nginx, NestJS backend with the assignment library, and PostgreSQL",
        caption: "Architecture",
        type: "image",
      },
      {
        src: `${diagrams}/use-cases.png`,
        alt: "Use case diagram for the user, agent and administrator roles",
        caption: "Use cases",
        type: "image",
      },
      {
        src: `${diagrams}/dfd-level-1.png`,
        alt: "Data flow diagram, level 1",
        caption: "Data flow diagram, level 1",
        type: "image",
      },
      {
        src: `${diagrams}/ticket-states.png`,
        alt: "Ticket states: new, in progress, on hold, fulfilled, unfulfilled and rejected",
        caption: "Ticket states",
        type: "image",
      },
      {
        src: `${diagrams}/erd.png`,
        alt: "Entity relationship diagram of the database",
        caption: "Database (ERD)",
        type: "image",
      },
      {
        src: `${diagrams}/algorithm-activity.png`,
        alt: "UML activity diagram of the ticket assignment algorithm",
        caption: "Assignment algorithm, activity diagram",
        type: "image",
      },
      {
        src: `${diagrams}/sequence-take-next.png`,
        alt: "UML sequence diagram of taking the next ticket",
        caption: "Taking the next ticket, sequence diagram",
        type: "image",
      },
      {
        src: `${diagrams}/assignment-core-classes.png`,
        alt: "UML class diagram of the assignment library",
        caption: "Assignment library, class diagram",
        type: "image",
      },
    ],
  },
];
