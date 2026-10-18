import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export default function SectionTitle({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"h2">) {
  return (
    <h2
      className={cn(
        "text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl mb-8",
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
}
