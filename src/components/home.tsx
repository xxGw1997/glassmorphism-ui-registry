import { useEffect, useRef, useState } from "react";
import { Minus, Pause, Play, Plus, SkipBack, SkipForward } from "lucide-react";
import { Line, LineChart, ResponsiveContainer } from "recharts";
import Nav from "./nav";
import Button from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Checkbox from "./ui/checkbox";
import Input from "./ui/input";
import Progress from "./ui/progress";
import Switch from "./ui/switch";
import Slider from "./ui/slider";
import { Tabs, List, Tab, Indicator } from "./ui/tabs";

const TOTAL_TIME = 329;
const revenueData = [
  { name: "Jan", value: 43000 },
  { name: "Feb", value: 13000 },
  { name: "Mar", value: 70000 },
  { name: "Apr", value: 10000 },
  { name: "May", value: 30000 },
  { name: "Jun", value: 150000 },
];
const singerList = [
  {
    name: "pipi",
    url: "https://r2.88boy.lol/pipi.png",
  },
  {
    name: "shamila",
    url: "https://r2.88boy.lol/s3.jpg",
  },
];

function timeFormat(timestamp: number) {
  let min = Math.floor(timestamp / 60);
  let second = (timestamp % 60).toString().padStart(2, "0");
  return `${min}:${second}`;
}

function App() {
  const [isPlay, setIsPlay] = useState(false);
  const [time, setTime] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState<"starter" | "pro">(
    "starter"
  );

  const [singer, setSinger] = useState<"pipi" | "shamila">("pipi");

  const singerInfo = singerList.find((s) => s.name === singer);

  const toggleSinger = (value: "pipi" | "shamila") => {
    setSinger(value);
    setTime(0);
    setIsPlay(false)
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const intervalRef = useRef<number | null>(null);

  const onPlay = () => {
    setIsPlay(!isPlay);
    if (isPlay) {
      if (intervalRef.current) clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <main className="px-3">
      <Nav />
      {/* HERO SECTION */}
      <section className="max-w-4xl px-5 py-12 pb-12 pt-24 mx-auto text-center">
        <h1 className="md:text-3xl text-xl font-semibold tracking-tight">
          Beautiful components with xxgw design
        </h1>
        <p className="mt-2 md:text-lg text-sm text-muted-foreground">
          Crafter with care and attentation to detail. Build on top of Base UI
          with Tailwind CSS. Accessible, customizable and ready to use in your
          projects.
        </p>
      </section>
      <section className="flex flex-col md:flex-row items-start max-w-7xl mx-auto gap-8 my-12">
        <div className="flex-1 space-y-6 w-full">
          <Card>
            <CardHeader>
              <CardTitle>Music Player</CardTitle>
              <CardDescription>
                Enjoy high quality music streaming
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8 flex flex-col justify-center items-center">
                <div className="flex justify-center">
                  <Tabs onValueChange={toggleSinger}>
                    <List>
                      <Tab value="pipi">pipi</Tab>
                      <Tab value="shamila">shamila</Tab>
                      <Indicator />
                    </List>
                  </Tabs>
                </div>
                <img
                  className={`h-56 w-56 rounded-full object-cover shadow-[var(--shadow-raised)] text-primary/30 animate-spin ${
                    isPlay ? "" : "[animation-play-state:paused]"
                  }`}
                  style={{ animationDuration: "15s" }}
                  src={singerInfo?.url}
                  alt={singerInfo?.name}
                  key={singerInfo?.name}
                />
                <div className="text-center space-y-2">
                  <CardTitle>Meo Meo~ inc.</CardTitle>
                  <CardDescription>{singerInfo?.name}</CardDescription>
                </div>
                <div>
                  <Slider
                    className="mt-5 min-w-xs"
                    thumbAlignment="edge"
                    value={time}
                    max={TOTAL_TIME}
                  />
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    <span>{timeFormat(time)}</span>
                    <span>{timeFormat(TOTAL_TIME)}</span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-6">
                  <Button size="icon" shape="circle" variant="primary">
                    <SkipBack className="h-4 w-4" />
                  </Button>
                  <Button
                    className="h-16 w-16"
                    size="icon"
                    shape="circle"
                    variant="primary"
                    onClick={onPlay}
                  >
                    {isPlay ? (
                      <Pause className="h-6 w-6" />
                    ) : (
                      <Play className="h-6 w-6" />
                    )}
                  </Button>
                  <Button size="icon" shape="circle" variant="primary">
                    <SkipForward className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Upgrade your subscription</CardTitle>
              <CardDescription>
                You are currently on the free plan. Upgrade to the pro plan to
                get access to all features.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <CardTitle>Plan</CardTitle>
                <CardDescription>
                  Select the plan that best fits your needs
                </CardDescription>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div
                    className={`glass-morph flex flex-col p-4 rounded-lg cursor-pointer transition-all duration-350 ${
                      selectedPlan === "starter"
                        ? "bg-primary/10 shadow-[var(--shadow-raised)] text-primary"
                        : ""
                    }`}
                    onClick={() => setSelectedPlan("starter")}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <Checkbox
                        id="starter-plan"
                        checked={selectedPlan === "starter"}
                      />
                      <span className=" text-sm">Starter plan</span>
                    </div>
                  </div>
                  <div
                    className={`glass-morph flex flex-col p-4 rounded-lg cursor-pointer transition-all duration-350 ${
                      selectedPlan === "pro"
                        ? "bg-primary/10 shadow-[var(--shadow-raised)] text-primary"
                        : ""
                    }`}
                    onClick={() => setSelectedPlan("pro")}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <Checkbox
                        id="starter-plan"
                        checked={selectedPlan === "pro"}
                      />
                      <span className=" text-sm">Pro plan</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="notes"
                  className="mb-2 block text-xs text-muted-foreground"
                >
                  Notes
                </label>
                <Input placeholder="Notes" id="notes" />
                <div className="flex items-center gap-x-2 mt-4">
                  <Checkbox id="terms" />
                  <label htmlFor="terms">
                    I agree to the terms and conditions.
                  </label>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex gap-4">
              <Button variant="destructive">Cancel</Button>
              <Button variant="primary">Upgrade Plan</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="flex-1 space-y-6 w-full">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Total Revenue</CardTitle>
              </div>
              <CardTitle className="text-3xl font-bold">$1,000,000</CardTitle>
              <p className="text-sm">+30% from last year</p>
            </CardHeader>
            <CardContent className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData}>
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="var(--color-primary)"
                    strokeWidth={3}
                    dot={{ fill: "var(--color-primary)" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Your move goal</CardTitle>
              <CardDescription>
                Track your weekly move goals here
              </CardDescription>
              <div className="flex gap-4 items-center justify-center mt-4">
                <Button
                  size="icon"
                  shape="circle"
                  aria-label="Decrease daily calorie goal"
                >
                  <Minus />
                </Button>
                <div className="text-center">
                  <CardTitle className="text-2xl">350</CardTitle>
                  <p>CALORIES/DAY</p>
                </div>
                <Button
                  size="icon"
                  shape="circle"
                  aria-label="Decrease daily calorie goal"
                >
                  <Plus />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="flex items-end justify-center gap-4 h-48">
              {[45, 12, 76, 82, 67, 15, 31, 51, 92].map((value) => (
                <Progress key={value} value={value} orientation="vertical" />
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Cookie Settings</CardTitle>
              <CardDescription>
                Manage your cookie settings here.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-base font-medium">Strictly Necessary</p>
                  <p className="text-sm text-muted-foreground">
                    These cookies are essential in order to use the website and
                    use its features.
                  </p>
                </div>
                <Switch className="shrink-0" disabled defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-base font-medium">Strictly Necessary</p>
                  <p className="text-sm text-muted-foreground">
                    These cookies are essential in order to use the website and
                    use its features.
                  </p>
                </div>
                <Switch className="shrink-0" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  );
}

export default App;
