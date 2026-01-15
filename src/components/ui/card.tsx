import { mergeProps, useRender } from "@base-ui/react";
import { cva, type VariantProps } from "class-variance-authority";

//  CARD ROOT
const cardVaiants = cva(
  "glass-morph rounded-2xl shadow-xl"
);

interface CardProps
  extends useRender.ComponentProps<"div">,
    VariantProps<typeof cardVaiants> {}

export function Card(props: CardProps) {
  const mergedProps = mergeProps(props, {
    className: cardVaiants({}),
  });

  const element = useRender({
    defaultTagName: "div",
    render: props.render,
    props: mergedProps,
  });

  return element;
}

// CARD HEADER
const cardHeaderVariants = cva("flex flex-col space-y-1.5 p-6");

interface CardHeaderProps
  extends useRender.ComponentProps<"div">,
    VariantProps<typeof cardHeaderVariants> {}

export function CardHeader(props: CardHeaderProps) {
  const mergedProps = mergeProps(props, {
    className: cardHeaderVariants(),
  });

  const element = useRender({
    defaultTagName: "div",
    render: props.render,
    props: mergedProps,
  });

  return element;
}

// CARD TITLE
const cardTitleVariants = cva("font-semibold leading-none tracking-tight");

interface CardTitleProps
  extends useRender.ComponentProps<"div">,
    VariantProps<typeof cardTitleVariants> {}

export function CardTitle(props: CardTitleProps) {
  const mergedProps = mergeProps(props, {
    className: cardTitleVariants(),
  });

  const element = useRender({
    defaultTagName: "div",
    render: props.render,
    props: mergedProps,
  });

  return element;
}

// CARD DESCRIPTION
const cardDescriptionVariants = cva("text-sm text-muted-foreground");

interface CardDescriptionProps
  extends useRender.ComponentProps<"div">,
    VariantProps<typeof cardDescriptionVariants> {}

export function CardDescription(props: CardDescriptionProps) {
  const mergedProps = mergeProps(props, {
    className: cardDescriptionVariants(),
  });

  const element = useRender({
    defaultTagName: "div",
    render: props.render,
    props: mergedProps,
  });

  return element;
}

// CARD CONTENT
const cardContentVariants = cva("p-6 pt-0");

interface CardContentProps
  extends useRender.ComponentProps<"div">,
    VariantProps<typeof cardContentVariants> {}

export function CardContent(props: CardContentProps) {
  const mergedProps = mergeProps(props, {
    className: cardContentVariants(),
  });

  const element = useRender({
    defaultTagName: "div",
    render: props.render,
    props: mergedProps,
  });

  return element;
}

// CARD FOOTER
const cardFooterVariants = cva("p-6 pt-0");

interface CardFooterProps
  extends useRender.ComponentProps<"div">,
    VariantProps<typeof cardFooterVariants> {}

export function CardFooter(props: CardFooterProps) {
  const mergedProps = mergeProps(props, {
    className: cardFooterVariants(),
  });

  const element = useRender({
    defaultTagName: "div",
    render: props.render,
    props: mergedProps,
  });

  return element;
}
