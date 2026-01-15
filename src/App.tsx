import { Code2, SunMoon } from "lucide-react";
import Button from "./components/ui/button";
import { useTheme } from "./components/theme-providers";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import BackgroundLight from "./components/background-light";
import Switch from "./components/ui/switch";
import CheckBox from "./components/ui/checkbox";
import Slider from "./components/ui/slider";
import Input from "./components/ui/input";

function App() {
  const { setTheme, theme } = useTheme();
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <>
      <main className="w-full h-screen flex justify-center items-center gap-x-10">
        <BackgroundLight />
        <Card className="w-xl">
          <CardHeader>
            <CardTitle>Some Buttons</CardTitle>
            <CardDescription>
              In the stillness of the night, I'm all by myself, staring at the
              dancing RGB lights on my computer case.Between the interwearing
              light and shadow lies the midnight romance that belongs to me
              alone.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="flex items-center gap-x-5">
              <span>关</span>
              <Switch />
              <span>开</span>
            </div>
            <div className="flex items-center gap-x-5">
              <label className="flex items-center gap-x-3">
                <CheckBox />
                yes
              </label>
              <label className="flex items-center gap-x-3">
                <CheckBox />
                no
              </label>
            </div>
            <div>
              <Slider />
              <Slider variant="secondary" className="mt-5" />
            </div>
            <div>
              <Input placeholder="You should input some text"/>
            </div>
          </CardContent>
          <CardFooter className="flex flex-wrap gap-10">
            <Button>Click Me!</Button>
            <Button variant="primary">Click Me!</Button>
            <Button variant="warning">Click Me!</Button>
            <Button variant="destructive">Click Me!</Button>
            <Button shape="circle" size="icon" onClick={toggleTheme}>
              <SunMoon />
            </Button>
            <Button shape="circle" size="icon">
              <Code2 />
            </Button>
          </CardFooter>
        </Card>
      </main>
    </>
  );
}

export default App;
