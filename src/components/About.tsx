import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Brain, Palette, Code } from "lucide-react";

const achievements = [
  { label: "IGCSE", value: "7 A*" },
  { label: "AP Computer Science A", value: "5/5" },
  { label: "SAT", value: "Perfect Scores" },
];

const skills = [
  { icon: Palette, title: "Artist", description: "Animation and Game Development" },
  { icon: Code, title: "UI/UX Design", description: "Interface and Experience Design" },
  { icon: Brain, title: "Researcher", description: "Modelling and Simulation" },
  { icon: Award, title: "AI Specialist", description: "Artificial Intelligence" },
];

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Academic Achievements */}
        <div className="mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
            Academic <span className="bg-gradient-primary bg-clip-text text-transparent">Achievements</span>
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="bg-gradient-card border-0 shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <Award className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <div className="text-sm text-muted-foreground mb-2">{achievement.label}</div>
                  <div className="text-2xl font-bold text-foreground">{achievement.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
            Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="bg-gradient-card border-0 shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                    <skill.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
