
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  chip?: string;
  align?: "left" | "center" | "right";
  className?: string;
  children?: ReactNode;
}

const SectionHeading = ({
  title,
  subtitle,
  chip,
  align = "center",
  className,
  children,
}: SectionHeadingProps) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div className={cn("max-w-3xl mb-12", alignmentClasses[align], className)}>
      {chip && (
        <span className="inline-block px-3 py-1 mb-3 text-xs font-medium rounded-full bg-primary/10 text-primary">
          {chip}
        </span>
      )}
      <h2 className="mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
      {children}
    </div>
  );
};

export default SectionHeading;
