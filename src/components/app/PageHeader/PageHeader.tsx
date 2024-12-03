import type { LucideIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

export interface PageHeaderProps {
  title: string;
  icon?: LucideIcon;
  badge?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

export const PageHeader = ({
  title,
  icon: Icon,
  badge,
  children,
  className,
}: PageHeaderProps) => {
  return (
    <header
      className={twMerge(
        "h-header flex bg-gray-app shrink-0 items-center justify-between gap-6 text-gray-normal sticky top-0 z-20 max-w-full",
        className,
      )}
    >
      <div className="flex flex-col flex-1 min-w-0 gap-1">
        <div className="flex gap-2 items-center overflow-hidden">
          {Icon && <Icon className="text-gray-dim" />}
          <h1 className="text-lg lg:text-2xl font-medium whitespace-nowrap truncate max-w-full">
            {title}
          </h1>
          {badge}
        </div>
      </div>
      <div className="flex items-center gap-2">{children}</div>
    </header>
  );
};
