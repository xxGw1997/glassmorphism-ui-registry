import { cva } from "class-variance-authority";
import { mergeProps, Tabs } from "@base-ui/react";

// ROOT
const rootVariants = cva("");

interface rootProps extends React.ComponentProps<typeof Tabs.Root> {}

function Root(props: rootProps) {
  const mergedProps = mergeProps(props, {
    className: rootVariants(),
  });

  return <Tabs.Root {...mergedProps} />;
}

// TAB
const tabVariants = cva("");

interface tabProps extends React.ComponentProps<typeof Tabs.Tab> {}

function Tab(props: tabProps) {
  const { value, ...otherProps } = props;

  const mergedProps = mergeProps(otherProps, {
    className: tabVariants(),
  });

  return <Tabs.Tab value={value} {...mergedProps} />;
}

// LIST
const listVariants = cva("");

interface ListProps extends React.ComponentProps<typeof Tabs.List> {}

function List(props: ListProps) {
  const mergedProps = mergeProps(props, {
    className: listVariants(),
  });

  return <Tabs.List {...mergedProps} />;
}

// INDICATOR
const indicatorVariants = cva("");

interface IndicatorProps extends React.ComponentProps<typeof Tabs.Indicator> {}

function Indicator(props: IndicatorProps) {
  const mergedProps = mergeProps(props, {
    className: indicatorVariants(),
  });

  return <Tabs.Indicator {...mergedProps} />;
}

// PANEL
const panelVariants = cva("");

interface PanelProps extends React.ComponentProps<typeof Tabs.Panel> {}

function Panel(props: PanelProps) {
  const { value, ...otherProps } = props;

  const mergedProps = mergeProps(otherProps, {
    className: panelVariants(),
  });

  return <Tabs.Panel value={value} {...mergedProps} />;
}

export { Root, Tab, List, Indicator, Panel };
