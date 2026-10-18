import type { ProjectDetail } from "@/public/data/hoodmoodData";

export const projects: ProjectDetail[] = [
  {
    slug: "zpo",
    title: "Tic-Tac-Toe (ZPO)",
    category: "academic",
    status: "completed",
    featured: false,

    card: {
      tagline: "Tic-tac-toe in C++ for an OOP course.",
      description:
        "Two-player tic-tac-toe with a Windows Forms interface. The game rules are in a separate class.",
      image: "/img/project-placeholder.svg",
      tags: ["C++", "OOP", "Windows Forms"],
    },

    links: {
      github: "https://github.com/gapinsky/zpo",
    },

    technologies: ["C++", "Windows Forms", "Visual Studio"],

    roles: ["Programming"],

    caseStudy: {
      headline: "Tic-tac-toe written for an object-oriented programming course.",

      overview:
        "A university project for an OOP course in C++. The game is simple on purpose. The point was to design the classes properly and keep the rules apart from the window code.",

      architecture:
        "The rules live in a Game class: a board of nine fields, whose turn it is and the two player names. The window code only calls it. Placing a symbol returns a result (legal, illegal, win or draw), so the forms never need to know the rules themselves.",

      implementation:
        "The interface has a start window where players enter their names, the board window, and help, about-the-game and author windows.",

      features: [
        {
          title: "Two players",
          description: "Players enter their names and take turns placing X and O.",
        },
        {
          title: "Rules in one class",
          description: "Illegal moves are rejected, and wins and draws are detected by the Game class.",
        },
        {
          title: "New round",
          description: "The board resets without restarting the program.",
        },
      ],

      takeaway:
        "A small exercise in encapsulation and in keeping the game logic separate from the interface.",
    },

    media: [],
  },
];
