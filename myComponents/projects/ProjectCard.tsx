import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Project } from "@/public/data/data"
import Link from "next/link"
import Image from "next/image"

export function ProjectCard({name, thumbnail, description}: Project) {
  return (
    <Card className="relative mx-auto w-full max-w-full pt-0">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-30 aspect-video " />
      <Image
        src={thumbnail}
        alt={name}
        width={400}
        height={225}
        quality={100}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="relative z-20 aspect-video w-full object-cover p-1 rounded-t-xl"
      />
      <CardHeader className="h-full">
        <CardAction>
          {/* <Badge variant="secondary">Featured</Badge> */}
        </CardAction>
        <CardTitle>{name}</CardTitle>
        <CardDescription className="line-clamp-3">
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter>
            <Button className="w-full" nativeButton={false} render={<Link href="/#projects" />}>
               View project details
            </Button>
      </CardFooter>
    </Card>
  )
}
