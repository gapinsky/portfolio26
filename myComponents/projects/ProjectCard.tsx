import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Project } from "@/public/data/data"
import Link from "next/link"
import Image from "next/image"
import { getProjectSlug } from "@/lib/projects"

export function ProjectCard({name, thumbnail, description, githubUrl, category}: Project) {
  return (
    <Card className="relative mx-auto w-full max-w-full pt-0">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-30 aspect-video " />
      <Image
        src={thumbnail}
        alt={name}
        width={400}
        height={225}
        quality={75}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="relative z-20 aspect-video w-full object-cover p-1 rounded-t-xl"
      />
      <CardHeader className="h-full">
        <Badge variant={category === "commercial" ? "default" : "secondary"} className={`mb-1 w-fit ${category === "commercial" ? "bg-zinc-500 text-white" : ""}`}>
          {category === "commercial" ? "Commercial" : "Practice"}
        </Badge>
        <CardTitle>{name}</CardTitle>
        <CardDescription className="line-clamp-3">
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter>
            <Button className="w-full" nativeButton={false} render={<Link href={`/projects/${getProjectSlug({ githubUrl })}`} />}>
               View project details
            </Button>
      </CardFooter>
    </Card>
  )
}
