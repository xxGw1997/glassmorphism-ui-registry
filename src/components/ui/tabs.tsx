import { cva } from "class-variance-authority";
import { mergeProps, Tabs as BaseTabs } from "@base-ui/react";

// ROOT
const rootVariants = cva("w-full");

interface rootProps extends React.ComponentProps<typeof BaseTabs.Root> {}

function Tabs(props: rootProps) {
  const mergedProps = mergeProps(props, {
    className: rootVariants(),
  });

  return <BaseTabs.Root {...mergedProps} />;
}

// LIST
const listVariants = cva(
  "glass-morph relative inline-flex h-12 items-center justify-center rounded-xl"
);

interface ListProps extends React.ComponentProps<typeof BaseTabs.List> {}

function List(props: ListProps) {
  const mergedProps = mergeProps(props, {
    className: listVariants(),
  });

  return <BaseTabs.List {...mergedProps} />;
}

// TAB
const tabVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium hover:text-shadow-[var(--text-shadow-blur)] data-[active]:text-primary data-[active]:text-shadow-[var(--text-shadow-blur)] focus-visible:outline-none focus-visible:ring-1"
);

interface tabProps extends React.ComponentProps<typeof BaseTabs.Tab> {}

function Tab(props: tabProps) {
  const { value, ...otherProps } = props;

  const mergedProps = mergeProps(otherProps, {
    className: tabVariants(),
  });

  return <BaseTabs.Tab value={value} {...mergedProps} />;
}

// INDICATOR
const indicatorVariants = cva(
  "absolute rounded-xl top-1/2 left-0 -z-1 bg-primary/30 dark:bg-primary/60 blur-xl backdrop-blur-md h-[var(--active-tab-height)] w-[var(--active-tab-width)] translate-x-[var(--active-tab-left)] -translate-y-1/2 transition-all duration-200 ease-in-out"
);

interface IndicatorProps
  extends React.ComponentProps<typeof BaseTabs.Indicator> {}

function Indicator(props: IndicatorProps) {
  const mergedProps = mergeProps(props, {
    className: indicatorVariants(),
  });

  return <BaseTabs.Indicator {...mergedProps} />;
}

// PANEL
const panelVariants = cva(
  "mt-4 rounded-2xl focus-visible:outline-none focus-visible:shadow-[var(--shadow-raised)] focus-visible:text-primary"
);

interface PanelProps extends React.ComponentProps<typeof BaseTabs.Panel> {}

function Panel(props: PanelProps) {
  const { value, ...otherProps } = props;

  const mergedProps = mergeProps(otherProps, {
    className: panelVariants(),
  });

  return <BaseTabs.Panel value={value} {...mergedProps} />;
}

export { Tabs, Tab, List, Indicator, Panel };
