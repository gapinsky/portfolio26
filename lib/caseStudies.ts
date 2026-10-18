import type { ProjectDetail } from "@/public/data/hoodmoodData";
import { projects as iwalldesign } from "@/public/data/iwalldesignData";
import { projects as javaPk } from "@/public/data/javaPkData";
import { projects as kmechfix } from "@/public/data/kmechfixData";
import { projects as rawg } from "@/public/data/rawgData";
import { projects as fakeStore } from "@/public/data/fakeStoreData";
import { projects as ticketSystem } from "@/public/data/ticketSystemData";
import { projects as zpo } from "@/public/data/zpoData";

// Keyed by the route slug (last segment of the project's githubUrl in data.ts).
export const caseStudies: Record<string, ProjectDetail> = Object.fromEntries(
  [...iwalldesign, ...javaPk, ...kmechfix, ...rawg, ...fakeStore, ...ticketSystem, ...zpo].map((project) => [project.slug, project]),
);
