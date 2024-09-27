import {
  Link as AriaLink,
  type LinkProps as AriaLinkProps,
  composeRenderProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { type ButtonProps, buttonStyles } from "../Button";
import { focusRing } from "../utils";

interface LinkProps extends AriaLinkProps {
  variant?: "primary" | "secondary";
  button?: ButtonProps;
}

const linkStyles = tv({
  extend: focusRing,
  base: "underline disabled:no-underline disabled:cursor-default forced-colors:disabled:text-[GrayText] transition rounded",
  variants: {
    variant: {
      primary: "text-blue-9 dark:text-bluedark-9",
      secondary: "text-gray-dim hover:text-gray-normal",
    },
  },
  defaultVariants: {
    variant: "secondary",
  },
});

export function Link({ button, ...props }: LinkProps) {
  return (
    <AriaLink
      {...props}
      className={composeRenderProps(
        props.className,
        (className, renderProps) =>
          button
            ? buttonStyles({
                ...renderProps,
                className,
                variant: props.variant,
              })
            : linkStyles({ ...renderProps, className, variant: props.variant }),
      )}
    />
  );
}
