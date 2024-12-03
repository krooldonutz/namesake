import { Button, SearchField } from "@/components/common";
import { HelpQuestions } from "@/components/help";
import { api } from "@convex/_generated/api";
import { useQuery } from "convex/react";
import { HelpCircle, X } from "lucide-react";
import { tv } from "tailwind-variants";

type HelpSidebarProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const HelpSidebar = ({ open, onOpenChange }: HelpSidebarProps) => {
  const questions = useQuery(api.questions.getAll);

  const sidebar = tv({
    base: "flex flex-col shrink-0 sticky top-0 h-screen border-l border-transparent",
    variants: {
      open: {
        true: "w-72 lg:w-80 xl:w-[22rem] border-gray-dim overflow-y-auto",
        false: "absolute top-0 right-0",
      },
    },
  });

  const header = tv({
    base: "h-header flex gap-3 items-center sticky top-0 shrink-0",
    variants: {
      open: {
        true: "px-6 bg-gray-app z-20",
      },
    },
  });

  const button = tv({
    variants: {
      open: {
        true: "relative",
        false: "absolute -right-8",
      },
    },
  });

  return (
    <aside className={sidebar({ open })}>
      <header className={header({ open })}>
        {open && <SearchField autoFocus />}
        <Button
          className={button({ open })}
          variant="icon"
          icon={open ? X : HelpCircle}
          onPress={() => onOpenChange(!open)}
        />
      </header>
      {open && <HelpQuestions questions={questions} />}
    </aside>
  );
};
