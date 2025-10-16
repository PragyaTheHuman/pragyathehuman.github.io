import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Film } from "lucide-react";

const animations = [
  {
    title: "Product Animation",
    subtitle: "Coffee Advertisement",
    description: "Created using Adobe After Effects",
    videoId: "eix26LODN98",
  },
  {
    title: "Motion Design Example",
    subtitle: "3D Angel Painting",
    description: "Designed using Adobe After Effects",
    videoId: "3-sYikxuhkI",
  },
];

export const Animation = () => {
  return (
    <section id="animation" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            2D <span className="bg-gradient-primary bg-clip-text text-transparent">Animation</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bringing ideas to life through dynamic motion design and creative storytelling.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {animations.map((animation, index) => (
            <Card
              key={index}
              className="bg-gradient-card border-0 shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Film className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{animation.title}</CardTitle>
                </div>
                <p className="text-sm text-muted-foreground">{animation.description}</p>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${animation.videoId}`}
                    title={animation.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="border-0"
                  />
                </div>
                <p className="text-center text-sm text-muted-foreground mt-4">{animation.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
