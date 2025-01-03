import { composeTailwindRenderProps } from "@/components/utils";
import {
  DateField as AriaDateField,
  type DateFieldProps as AriaDateFieldProps,
  DateInput as AriaDateInput,
  type DateInputProps,
  DateSegment,
  type DateValue,
  type ValidationResult,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import {
  FieldDescription,
  FieldError,
  Label,
  fieldGroupStyles,
} from "../Field";

export interface DateFieldProps<T extends DateValue>
  extends AriaDateFieldProps<T> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function DateField<T extends DateValue>({
  label,
  description,
  errorMessage,
  ...props
}: DateFieldProps<T>) {
  return (
    <AriaDateField
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "flex flex-col gap-1",
      )}
    >
      {label && <Label>{label}</Label>}
      <DateInput />
      {description && <FieldDescription>{description}</FieldDescription>}
      <FieldError>{errorMessage}</FieldError>
    </AriaDateField>
  );
}

const segmentStyles = tv({
  base: "inline p-0.5 type-literal:px-0 rounded outline outline-0 forced-color-adjust-none caret-transparent text-gray-normal forced-colors:text-[ButtonText]",
  variants: {
    isPlaceholder: {
      true: "text-gray-9 dark:text-graydark-9",
    },
    isDisabled: {
      true: "text-gray-2 dark:text-gray-6 forced-colors:text-[GrayText]",
    },
    isFocused: {
      true: "bg-purple-9 text-white dark:text-white forced-colors:bg-[Highlight] forced-colors:text-[HighlightText]",
    },
  },
});

export function DateInput(props: Omit<DateInputProps, "children">) {
  return (
    <AriaDateInput
      className={(renderProps) =>
        fieldGroupStyles({
          ...renderProps,
          class: "block min-w-[150px] px-3 py-2",
        })
      }
      {...props}
    >
      {(segment) => <DateSegment segment={segment} className={segmentStyles} />}
    </AriaDateInput>
  );
}
