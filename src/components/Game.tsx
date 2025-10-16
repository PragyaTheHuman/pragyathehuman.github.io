import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gamepad2, Play } from "lucide-react";

export const Game = () => {
  return (
    <section id="game" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            3D <span className="bg-gradient-primary bg-clip-text text-transparent">Game Project</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Immersive gaming experiences combining technical skills with creative design.
          </p>
        </div>

        <Card className="bg-card border-0 shadow-soft hover:shadow-hover transition-all duration-300 overflow-hidden animate-fade-in">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Gamepad2 className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Speed Circuit: Time Attack</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="aspect-video rounded-lg overflow-hidden bg-muted mb-6">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Speed Circuit: Time Attack Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="border-0"
              />
            </div>
            <CardDescription className="text-base mb-6">
              Race against the clock in Rush Horizon, a high-speed 3D racing game where precision and
              speed determine victory! Maneuver through challenging tracks, master tight turns, and push
              your car to the limit to beat the clock. Can you conquer every track and claim the title of
              the ultimate speed champion?
            </CardDescription>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
                <Play className="h-4 w-4 mr-2" />
                Play Demo Version
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                Learn More
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
