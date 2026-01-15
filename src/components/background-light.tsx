import { useEffect } from "react";
import {
  animate,
  motion,
  useMotionValue,
  type ValueAnimationTransition,
} from "motion/react";

const COLORS = [
  // bg-primary/20
  "#af08f733",
  "#1E67C650",
  "#13FFAA50",
  "#DD335C50",
  "#CE84CF50",
  // bg-accent/20
  "#11eee733",
];
const BackgroundLight = () => {
  const color_left = useMotionValue(COLORS[0]);
  const color_right = useMotionValue(COLORS[1]);

  useEffect(() => {
    const animateOptions: ValueAnimationTransition<string> = {
      ease: "easeInOut",
      duration: 15,
      repeat: Infinity,
      repeatType: "mirror",
    };
    animate(color_left, COLORS, animateOptions);
    animate(color_right, COLORS.reverse(), animateOptions);
  }, []);
  return (
    <>
      <motion.div
        style={{
          backgroundColor: color_left,
        }}
        className="absolute -top-24 flex-1 right-44 h-125 w-125 rounded-full blur-[10rem] xl:w-275"
      ></motion.div>
      <motion.div
        style={{
          backgroundColor: color_right,
        }}
        className=" absolute -top-4 flex-1 -left-140 h-125 w-200 rounded-full blur-[10rem] sm:w-275 md:-left-132 lg:-left-112 xl:-left-60 2xl:-left-20"
      ></motion.div>
    </>
  );
};

export default BackgroundLight;
