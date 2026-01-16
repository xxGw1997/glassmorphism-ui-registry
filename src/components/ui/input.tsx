import { mergeProps, useRender } from "@base-ui/react";
import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva(
  `glass-morph flex w-full rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent placeholder:text-muted-foreground/70 transition-all duration-350 ease-out focus-visible:outline-none focus-visible:shadow-primary focus-visible:bg-primary/15 disabled:opacity-50 animate-caret-blink`
);

interface InputProps
  extends useRender.ComponentProps<"input">,
    VariantProps<typeof inputVariants> {}

export default function Input(props: InputProps) {
  const mergedProps = mergeProps(props, {
    className: inputVariants(),
  });

  const element = useRender({
    defaultTagName: "input",
    props: mergedProps,
    render: props.render,
  });

  return element;
}
