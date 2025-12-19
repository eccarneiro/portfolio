import { cn } from "../../lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "bg-surface border border-dim/20 p-6 rounded-lg transition-all duration-300 hover:border-neon/50 hover:shadow-[0_0_15px_rgba(var(--neon),0.1)] group",
        className
      )}
    >
      {children}
    </div>
  );
}
