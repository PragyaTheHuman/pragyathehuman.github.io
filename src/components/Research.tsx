import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, ExternalLink } from "lucide-react";

const papers = [
  {
    title: "OpenFoam-Based Analysis of Incompressible Flows Over Solid Bodies",
    description:
      "Fluid flow around solid bodies is a common phenomenon in everyday life. This study focuses on incompressible, steady, and laminar fluid flow over three geometries: a circular cylinder, a square cylinder, and a thin flat plate.",
    details:
      "Numerical simulations were performed using OpenFOAM. The results were analysed for different Reynolds numbers, and the changes in drag and lift were compared across conditions.",
    tags: ["Fluid Dynamics", "OpenFOAM", "CFD"],
    link: "https://www.pragyagoyal.com/docs/fluid.pdf",
  },
  {
    title: "Parkinson's Resting Tremors: A NetLogo-Based Neural Simulation",
    description:
      "This paper visualises the neural activity during resting tremors and the effects of different treatments using a custom-built agent-based simulation in NetLogo.",
    details:
      "The simulation demonstrates that Deep Brain Stimulation (DBS) is significantly more effective at suppressing Parkinsonian tremors when applied to the thalamic region compared to the cortical region.",
    tags: ["Neuroscience", "NetLogo", "Medical Research"],
    link: "https://www.pragyagoyal.com/docs/parkinson.pdf",
  },
  {
    title: "Accelerating Stubble Decomposition: A Bio-Enzyme Approach",
    description:
      "Stubble burning remains a critical environmental concern in Northern India. This study evaluates the potential of bio-enzymes as a cost-effective, scalable, and eco-friendly alternative.",
    details:
      "Using controlled experiments with three distinct enzyme compositions, we observed that increased concentrations of jaggery and yeast significantly enhanced microbial activity and accelerated decomposition.",
    tags: ["Environmental Science", "Bio-Engineering", "Sustainability"],
    link: "https://www.pragyagoyal.com/docs/stubble.pdf",
  },
];

export const Research = () => {
  return (
    <section id="research" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Research <span className="bg-gradient-primary bg-clip-text text-transparent">Publications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Exploring computational modeling, neural simulations, and environmental solutions through
            interdisciplinary research.
          </p>
        </div>

        <div className="space-y-6">
          {papers.map((paper, index) => (
            <Card
              key={index}
              className="bg-card border-0 shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl sm:text-2xl mb-2">{paper.title}</CardTitle>
                    <CardDescription className="text-base">{paper.description}</CardDescription>
                  </div>
                  <div className="hidden sm:flex p-3 bg-primary/10 rounded-xl">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{paper.details}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {paper.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-primary/10 text-primary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  <a href={paper.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                    <span>Read Paper</span>
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
