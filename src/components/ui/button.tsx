import { mergeProps, useRender } from "@base-ui/react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "glass-morph shadow-xl inline-flex items-center backdrop-blur-md justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:outline-none focus-visible:shadow-[var(--shadow-raised)] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-all duration-200 ease-out hover:scale-105 backdrop-blur-md hover:shadow-[var(--shadow-raised)] active:shadow-[var(--shadow-inset)] active:text-shadow-[var(--text-shadow-blur)]",
  {
    variants: {
      variant: {
        default: "bg-background/10 text-foreground hover:text-foreground/80",
        primary: "bg-primary/10 text-primary hover:text-primary/80",
        destructive: "bg-destructive/10 text-destructive hover:text-destructive/80",
        warning: "bg-warning/10 text-warning hover:text-warning/80",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
      shape: {
        circle: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends useRender.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {}

export default function Button(props: ButtonProps) {
  const buttonProps = mergeProps(props, {
    className: twMerge(
      buttonVariants({
        variant: props.variant,
        size: props.size,
        shape: props.shape,
      }),
      props.className
    ),
  });

  const element = useRender({
    defaultTagName: "button",
    render: props.render,
    props: buttonProps,
  });

  return element;
}
