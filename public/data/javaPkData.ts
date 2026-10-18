import type { ProjectDetail } from "@/public/data/hoodmoodData";

export const projects: ProjectDetail[] = [
  {
    slug: "Java-PK-Project-",
    title: "Java Table Calculator",
    category: "academic",
    status: "completed",
    featured: false,

    card: {
      tagline: "A Java Swing desktop app for a university course.",
      description:
        "Desktop app with a table of numbers, sum, average and min/max, a pie chart, a calendar, file saving and PDF export.",
      image: "/img/project-placeholder.svg",
      tags: ["Java", "Swing", "JUnit", "PDF"],
    },

    links: {
      github: "https://github.com/gapinsky/Java-PK-Project-",
    },

    technologies: [
      "Java",
      "Swing",
      "JFreeChart",
      "iText",
      "JCalendar",
      "Log4j",
      "JUnit",
      "Ant",
    ],

    roles: ["Programming", "Testing", "Documentation"],

    caseStudy: {
      headline: "A Swing desktop app built for a Java course.",

      overview:
        "A university project in Java. The app shows a table of numbers where you can calculate the sum, the average and the minimum and maximum. It also draws a pie chart, has a calendar, saves the table to a file and exports it to PDF.",

      architecture:
        "The code is split into a model package (the table model and an enum with the operations) and a UI package with the window, menu, panels and dialogs. The enum also holds the labels shown in the operation selector, so the UI and the calculations use the same definition.",

      implementation:
        "The chart uses JFreeChart, the PDF export uses iText, the date picker is JCalendar, and errors are written to a log with Log4j. If saving or exporting fails, the user gets a dialog instead of a crash. The model has JUnit tests, the project is built with Ant, and the classes are documented with Javadoc.",

      features: [
        {
          title: "Table and calculations",
          description: "Enter numbers, then calculate the sum, the average or the min and max.",
        },
        {
          title: "Pie chart",
          description: "A chart of the table data that can be refreshed on demand.",
        },
        {
          title: "Save and PDF export",
          description: "Write the table to a file or export it as a PDF.",
        },
        {
          title: "Extras",
          description: "A calendar, a help dialog, an author dialog and a tip of the day.",
        },
      ],

      outcomes: [
        {
          title: "Tests and docs",
          description: "The model is covered by JUnit tests and the code has Javadoc.",
          evidence: "technical",
        },
      ],

      takeaway:
        "I learned how to put a desktop app together from several libraries, and to keep the model separate from the interface so it can be tested.",
    },

    media: [],
  },
];
