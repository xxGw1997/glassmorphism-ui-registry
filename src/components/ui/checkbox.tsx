import { Checkbox as BaseCheckbox, mergeProps } from "@base-ui/react";
import { cva, type VariantProps } from "class-variance-authority";
import { Check } from "lucide-react";

const checkboxVariants = cva(
  "glass-morph block relative shadow-xl h-5 w-5 shrink-0 rounded-sm transition-all duration-350 ease-out hover:shadow-[var(--shadow-raised)] hover:text-primary/60 data-[checked]:shadow-[var(--shadow-raised)] data-[checked]:text-primary data-[checked]:border-primary/60 data-[checked]:bg-primary/10 focus-visible:outline-none focus-visible:shadow-[var(--shadow-raised)]"
);

const checkboxIndicatorVariants = cva(
  "flex items-center justify-center absolute top-1/2 left-1/2 -translate-1/2"
);

interface CheckboxProps
  extends React.ComponentProps<typeof BaseCheckbox.Root>,
    VariantProps<typeof checkboxVariants> {
  className?: string;
}

export default function CheckBox(props: CheckboxProps) {
  const mergedProps = mergeProps(props, {
    className: checkboxVariants(),
  });

  const indicatorProps = mergeProps(props, {
    className: checkboxIndicatorVariants(),
  });

  return (
    <BaseCheckbox.Root {...mergedProps}>
      <BaseCheckbox.Indicator {...indicatorProps}>
        <Check className="h-3 w-3 text-primary" strokeWidth={3} />
      </BaseCheckbox.Indicator>
    </BaseCheckbox.Root>
  );
}
