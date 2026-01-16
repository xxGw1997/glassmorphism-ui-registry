import {
  type useRender,
  Progress as BaseProgress,
  mergeProps,
} from "@base-ui/react";
import { cva, type VariantProps } from "class-variance-authority";

const progressVariants = cva(
  "relative glass-morph rounded-full overflow-visible",
  {
    variants: {
      orientation: {
        horizontal: "h-4 w-full",
        vertical: "h-full w-4",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  }
);

const progressIndicatorVariants = cva(
  "glass-morph border-none rounded-full from-primary to-primary/50 shadow-[var(--shadow-raised)] text-primary/50",
  {
    variants: {
      orientation: {
        horizontal: "bg-linear-to-l",
        vertical: "bg-linear-to-b",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  }
);

interface ProgressProps
  extends useRender.ComponentProps<"progress">,
    VariantProps<typeof progressVariants>,
    VariantProps<typeof progressIndicatorVariants> {}

export default function Progress(props: ProgressProps) {
  const mergedProps = mergeProps(props, {
    className: progressVariants({ orientation: props.orientation }),
  });

  const { value, ...otherProps } = mergedProps;

  return (
    <BaseProgress.Root value={value} {...otherProps}>
      <BaseProgress.Track className="h-full w-full">
        <BaseProgress.Indicator
          className={progressIndicatorVariants({
            orientation: props.orientation,
          })}
          style={
            props.orientation === "vertical"
              ? {
                  height: `${props.value}%`,
                  position: "absolute",
                  width: "100%",
                  bottom: 0,
                }
              : {}
          }
        />
      </BaseProgress.Track>
    </BaseProgress.Root>
  );
}
