import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-hero pt-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Hello, I'm{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Pragya Goyal
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              I am a high school student at Leysin American School, Switzerland, passionate about
              exploring the dynamic intersections of design, technology, and science.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              As a researcher in computational projects and machine learning, I strive to apply
              physics, mathematics, and computer science to address real-world challenges—from
              developing mobile apps to tackling environmental issues like stubble burning in India.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Whether I'm simulating fluid dynamics or modeling neurological processes, I'm
              constantly looking for bold, interdisciplinary ways to drive meaningful change.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("#research")}
                className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-hover"
              >
                View Research
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#contact")}
                className="border-primary text-primary hover:bg-primary/5"
              >
                Get in Touch
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="pt-8">
              <button
                onClick={() => scrollToSection("#about")}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
              >
                <span className="text-sm font-medium">Scroll to explore</span>
                <ArrowDown className="h-4 w-4 animate-bounce" />
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-20 animate-float"></div>
              <img
                src="https://www.pragyagoyal.com/images/profile.jpg"
                alt="Pragya Goyal"
                className="relative rounded-full w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover border-4 border-background shadow-hover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
