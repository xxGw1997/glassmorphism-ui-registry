import type { useRender } from "@base-ui/react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slider as BaseSlider, mergeProps } from "@base-ui/react";

const sliderVariants = cva("h-4 w-full");

const trackVariants = cva(
  "glass-morph relative h-4 w-full rounded-full overflow-visible"
);

const rangeVariants = cva(
  "glass-morph border-none absolute h-2 rounded-full transition-all duration-350 ease-out shadow-[var(--shadow-raised)]",
  {
    variants: {
      variant: {
        default: "bg-linear-to-l from-primary to-primary/50 text-primary/50",
        secondary:
          "bg-linear-to-l from-muted-foreground to-muted-foreground/50 text-muted-foreground/50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const thumbVariants = cva(
  "glass-morph h-4 w-4 mt-[1px] rounded-full duration-350 transition-all ease-out shadow-[var(--shadow-inset)] focus-visible:outline-none focus-visible:shadow-[var(--shadow-raised)]",
  {
    variants: {
      variant: {
        default: "text-primary/50 bg-primary/75",
        secondary: "text-muted-foreground/50 bg-muted-foreground/75",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface SliderProps
  extends useRender.ComponentProps<typeof BaseSlider.Root>,
    VariantProps<typeof rangeVariants> {}

export default function Slider(props: SliderProps) {
  const mergedProps = mergeProps(props, {
    className: sliderVariants(),
  });

  return (
    <BaseSlider.Root {...mergedProps}>
      <BaseSlider.Control className="">
        <BaseSlider.Track className={trackVariants()}>
          <BaseSlider.Indicator
            className={rangeVariants({
              variant: props.variant,
            })}
          />
          <BaseSlider.Thumb
            className={thumbVariants({ variant: props.variant })}
          />
        </BaseSlider.Track>
      </BaseSlider.Control>
    </BaseSlider.Root>
  );
}
