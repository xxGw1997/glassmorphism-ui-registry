import { Moon, Sun } from "lucide-react";
import Button from "./ui/button";
import { useTheme } from "./theme-providers";

export default function Nav() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <nav className="py-8 px-5 flex justify-between items-center">
      <h1 className="font-bold">glass-morph UI</h1>
      <Button shape="circle" size="icon" onClick={toggleTheme}>
        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      </Button>
    </nav>
  );
}
