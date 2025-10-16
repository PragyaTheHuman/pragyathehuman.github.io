import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette } from "lucide-react";

const mentalHealthArtworks = [
  {
    title: "Unseen Wounds",
    image: "https://www.pragyagoyal.com/images/mh1.jpg",
    description: "In this artwork, a female figure's face is forcibly stretched into a smile by unseen hands, even as her tear-filled eyes and pained expression reveal the truth beneath. This contrast between a forced exterior and internal suffering captures the core of my theme: the emotional burden of hiding mental illness behind a mask of composure.",
    details: "Surrounding her are distorted versions of herself—expressing grief, numbness, fear—each a reflection of internal chaos. Above, large weeping eyes symbolize silent vulnerability. Below, a smaller figure tears open her own back, revealing a bloodied skeleton—an unflinching representation of inner pain."
  },
  {
    title: "Tangled Thoughts",
    image: "https://www.pragyagoyal.com/images/mh2.jpg",
    description: "This work explores the mental chaos often experienced in anxiety, overthinking, or emotional breakdown. Both figures are consumed by a storm of scribbled lines—visual metaphors for racing thoughts, confusion, and inner turmoil.",
    details: "The first image represents emotional suppression—how one may appear composed while battling mental clutter beneath the surface. The second figure is clawing at their own face, as if trying to pull themselves out of their own mind."
  },
  {
    title: "Pulled in All Directions",
    image: "https://www.pragyagoyal.com/images/mh3.jpg",
    description: "This artwork explores the emotional strain of pretending to be fine while feeling internally torn. The central face, calm and composed, is stretched outward into two opposing expressions—one sorrowful, the other numb—representing the conflict between what we show and what we suppress.",
    details: "The stretched skin symbolizes how mental pressure distorts identity and forces individuals to wear a mask. Through this piece, I aimed to reflect the silent exhaustion of holding yourself together while emotions pull you apart."
  },
  {
    title: "Fake It",
    image: "https://www.pragyagoyal.com/images/mh4.jpg",
    description: "This piece highlights the pressure to hide emotional pain behind a forced or a fake smile—creating a disturbing illusion of happiness. The dark eyeholes and exaggerated grin reflect how masking true emotions can feel hollow and isolating.",
    details: "Through this work, I aimed to show how society often expects people to look happy, even when they're struggling inside."
  },
  {
    title: "Stitching Together",
    image: "https://www.pragyagoyal.com/images/mh5.jpg",
    description: "This piece portrays the emotional pain of healing—slow, raw, and self-inflicted. The figure sews up a long wound down her back, symbolizing how people often mend themselves in silence.",
    details: "Through this work, I aimed to show that recovery from trauma is not neat or painless—it's a lonely, ongoing effort, often hidden from the world."
  },
  {
    title: "The Mask I Wear",
    image: "https://www.pragyagoyal.com/images/mh6.jpg",
    description: "This drawing shows a figure peeling off a smiling face, revealing a tired, emotionless expression beneath. The contrast between the colorful outer mask and the grayscale face beneath highlights the disconnect between how we appear and how we truly feel.",
    details: "I explored the theme of emotional masking—how people often hide their pain behind a smile to meet expectations or avoid judgment."
  },
  {
    title: "Dissolving",
    image: "https://www.pragyagoyal.com/images/mh7.jpg",
    description: "This artwork portrays a face partly melting into the surface, with a fading smile. It symbolizes the feeling of losing oneself—emotionally overwhelmed, slipping into numbness or identity confusion.",
    details: "I wanted to express how mental health struggles can make us feel like we're slowly disappearing, even when we're still physically present."
  },
  {
    title: "Embracing the End",
    image: "https://www.pragyagoyal.com/images/mh8.jpg",
    description: "This piece depicts a figure collapsed into the arms of a grim reaper, who gently cradles them while holding a raised scythe. It symbolises the darkest moments of mental illness—when despair feels overpowering and death seems like a comforting escape rather than a fear.",
    details: "I wanted to represent the dangerous pull of suicidal thoughts and the silent battles many face when hope feels out of reach."
  },
  {
    title: "Trapped Inside",
    image: "https://www.pragyagoyal.com/images/mh9.jpg",
    description: "This piece reflects the emotional and psychological imprisonment caused by mental illness. The upper figure—half skull, half puzzle-faced—symbolizes the disintegration of identity and the complexity of hidden struggles.",
    details: "The lower figure is silenced and strangled by shadowy hands, her eyes filled with pain and resignation. The colorful neural splashes in the background contrast with the grayscale figures, representing the chaos within the mind."
  }
];

const departureArtworks = [
  {
    title: "At the Crossroads of a Beginning",
    image: "https://www.pragyagoyal.com/images/dep1.jpg",
    description: "This piece symbolizes a personal and emotional journey through the landscape of growth and self-discovery. The central path winds through vibrant, surreal fields — each representing different emotions, memories, and possibilities.",
    details: "At the heart of the journey is the looming presence of a grayscale portrait, reflecting the internal, reflective self. The figure holding a map stands at a crossroads, uncertain but curious, emphasizing themes of choice, transition, and identity."
  },
  {
    title: "Emotional Baggage Left Behind",
    image: "https://www.pragyagoyal.com/images/dep2.jpg",
    description: "This monochrome drawing explores the quiet but powerful moment just before departure — not just from a place, but from a past self. The lone suitcase on the platform symbolizes the emotional baggage we carry.",
    details: "A part of growth is learning to leave things behind — old fears, expectations, or pain — to make room for something new. The emptiness of the platform emphasizes solitude and introspection."
  },
  {
    title: "Alone on the Road Ahead",
    image: "https://www.pragyagoyal.com/images/dep3.jpg",
    description: "This piece reflects the quiet, introspective nature of personal journeys. The lone car on an open road symbolizes the individual's path through life, where moments of departure often mark the beginning of transformation.",
    details: "The fog that envelops the horizon represents the uncertainty of the future — unclear, shifting, and unpredictable. Yet within this solitude lies strength, possibility, and the courage to keep moving forward."
  },
  {
    title: "The Road That Forgets to End",
    image: "https://www.pragyagoyal.com/images/dep4.jpg",
    description: "Inspired by David Hockney's expressive landscape, this piece explores the theme of departure as a vibrant, almost surreal journey. The winding road acts as a metaphor for the path of life — full of unexpected turns, emotional terrain, and shifting perspectives.",
    details: "The bold, exaggerated curves of the road reflect the uncertainty of what lies ahead, while the expansive view emphasizes the feeling of moving forward alone."
  },
  {
    title: "At Dawn, We Let Go",
    image: "https://www.pragyagoyal.com/images/dep5.jpg",
    description: "As the first light stretches across the sky, a flock of birds takes flight — leaving behind the comfort of the known for the promise of the unknown. This image captures the tender, symbolic moment of departure at dawn.",
    details: "The birds represent courage and instinct — a quiet reminder that beginnings often require letting go. The soft morning hues evoke hope, while their silhouettes in motion echo the rhythms of growth and transformation."
  },
  {
    title: "Horizons of Silence",
    image: "https://www.pragyagoyal.com/images/dep6.jpg",
    description: "This contemplative landscape captures a long, winding road that disappears into a softly rendered horizon. Executed with impressionistic brushwork and gentle tonal transitions, the painting evokes a sense of quiet departure and introspection.",
    details: "The composition blends precise geometry with atmospheric depth, using muted earth tones to draw the eye toward an unseen destination. Within the serene expanses lies an invitation to embark on a path of solitude and reflection."
  }
];

const ArtworkPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
          <div className="container mx-auto max-w-6xl text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 text-primary">
              <Palette className="h-5 w-5" />
              <span className="text-sm font-medium">Visual Expression</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Artwork Portfolio
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Exploring the depths of human emotion and experience through visual art
            </p>
          </div>
        </section>

        {/* Mental Health Section */}
        <section id="mental-health" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Mental Health</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              A visual exploration of the emotional burden of hiding mental illness and the silent struggles many face
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mentalHealthArtworks.map((artwork, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-hover transition-all duration-300 bg-gradient-card border-border/50 overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={artwork.image} 
                      alt={artwork.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{artwork.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <CardDescription className="text-sm leading-relaxed">
                      {artwork.description}
                    </CardDescription>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {artwork.details}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Departure Section */}
        <section id="departure" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Departure</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Visual narratives about transitions, growth, and the courage to embark on new journeys
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {departureArtworks.map((artwork, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-hover transition-all duration-300 bg-gradient-card border-border/50 overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={artwork.image} 
                      alt={artwork.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{artwork.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <CardDescription className="text-sm leading-relaxed">
                      {artwork.description}
                    </CardDescription>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {artwork.details}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ArtworkPage;
