import { mergeProps, useRender, Switch as BaseSwitch } from "@base-ui/react";
import { cva, type VariantProps } from "class-variance-authority";

const switchVariants = cva(
  "glass-morph block h-5.5 w-12 shadow-xl rounded-full hover:shadow-[var(--shadow-raised)] hover:text-primary/60 data-[checked]:shadow-[var(--shadow-raised)] data-[checked]:text-primary data-[checked]:bg-primary/60 data-[checked]:border-primary/60 data-[checked]:text-primary transition-all ease-out duration-350 aria-disabled:opacity-50 focus-visible:outline-none focus-visible:shadow-[var(--shadow-raised)]"
);

const thumbVariants = cva(
  "glass-morph block h-5 w-5 rounded-full transition-all ease-out duration-350 translate-x-0 data-[checked]:translate-x-6.5 data-[checked]:bg-primary data-[checked]:shadow-inset data-[checked]:text-primary"
);

interface SwitchProps
  extends useRender.ComponentProps<"switch">,
    VariantProps<typeof switchVariants> {
  disabled?: boolean;
  defaultChecked?: boolean;
}

export default function Switch(props: SwitchProps) {
  const mergedProps = mergeProps(props, {
    className: switchVariants(),
  });

  const thumbProps = mergeProps(props, {
    className: thumbVariants(),
  });

  return (
    <BaseSwitch.Root {...mergedProps}>
      <BaseSwitch.Thumb {...thumbProps} />
    </BaseSwitch.Root>
  );
}
