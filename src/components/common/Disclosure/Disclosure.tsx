import { ChevronRight } from "lucide-react";
import {
  Disclosure as AriaDisclosure,
  DisclosureGroup as AriaDisclosureGroup,
  type DisclosureGroupProps as AriaDisclosureGroupProps,
  DisclosurePanel as AriaDisclosurePanel,
  type DisclosureProps as AriaDisclosureProps,
  Header,
  type Key,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { AnimateChangeInHeight } from "../AnimateChangeInHeight";
import { Button } from "../Button";

export interface DisclosureProps
  extends Omit<AriaDisclosureProps, "children" | "id"> {
  id: Key;
  title: React.ReactNode;
  children?: React.ReactNode;
}

export function Disclosure({ title, children, ...props }: DisclosureProps) {
  return (
    <AriaDisclosure className={twMerge("group")} {...props}>
      <Header>
        <Button
          type="button"
          variant="ghost"
          className="flex w-full justify-between whitespace-normal text-pretty text-left h-auto text-base"
          slot="trigger"
        >
          {title}
          <ChevronRight
            size={16}
            className="shrink-0 transition-transform opacity-60 group-data-[expanded]:rotate-90"
          />
        </Button>
      </Header>
      <AnimateChangeInHeight className="w-full">
        <AriaDisclosurePanel className="px-3 group-data-[expanded]:pt-1 group-data-[expanded]:pb-3">
          {children}
        </AriaDisclosurePanel>
      </AnimateChangeInHeight>
    </AriaDisclosure>
  );
}

interface DisclosureGroupProps extends AriaDisclosureGroupProps {}

export function DisclosureGroup({ children, ...props }: DisclosureGroupProps) {
  return <AriaDisclosureGroup {...props}>{children}</AriaDisclosureGroup>;
}
