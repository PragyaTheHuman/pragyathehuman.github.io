import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Palette } from "lucide-react";

const artworks = [
  {
    title: "Mental Health",
    description: "Exploring invisible struggles through visual art",
    details:
      "Mental health conditions like depression and anxiety are silent yet ever-present. My portfolio creates artwork that resonates with viewers, reflecting the inner turmoil often hidden beneath the surface.",
    image: "https://www.pragyagoyal.com/images/art1.jpg",
    link: "https://www.pragyagoyal.com/artwork/index.html#mental-health",
  },
  {
    title: "Departure",
    description: "Departure as both an ending and a powerful beginning",
    details:
      "When we leave one place, situation, or relationship behind, we open ourselves to new journeys, growth, and experiences. This artwork illustrates how departure can be bittersweet yet transformative.",
    image: "https://www.pragyagoyal.com/images/art2.jpg",
    link: "https://www.pragyagoyal.com/artwork/index.html#departure",
  },
];

export const Art = () => {
  return (
    <section id="art" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Art <span className="bg-gradient-primary bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visual storytelling that explores complex emotions, human experiences, and transformative journeys.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {artworks.map((artwork, index) => (
            <Card
              key={index}
              className="bg-card border-0 shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="p-3 bg-background/90 backdrop-blur-sm rounded-xl">
                    <Palette className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{artwork.title}</h3>
                </div>
              </div>
              <CardHeader>
                <CardDescription className="text-base">{artwork.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{artwork.details}</p>
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/5 w-full">
                  <a href={artwork.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                    <span>Explore Artwork</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
