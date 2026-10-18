import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export default function Wrapper({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-7xl px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
