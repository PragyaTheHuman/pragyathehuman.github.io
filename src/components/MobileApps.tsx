import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Download, CheckCircle2 } from "lucide-react";

const features = [
  "Smart Task Management",
  "College Application Tracker",
  "Priority Alerts",
  "Google Calendar Sync",
  "Motivational Boost",
];

const screenshots = [
  { src: "https://www.pragyagoyal.com/images/ss1.jpeg", alt: "Summary" },
  { src: "https://www.pragyagoyal.com/images/ss2.jpeg", alt: "Subjects" },
  { src: "https://www.pragyagoyal.com/images/ss3.jpeg", alt: "College App" },
  { src: "https://www.pragyagoyal.com/images/ss4.jpeg", alt: "Capstone Project" },
];

export const MobileApps = () => {
  return (
    <section id="apps" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Mobile <span className="bg-gradient-primary bg-clip-text text-transparent">Applications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Practical solutions designed to simplify daily tasks and boost productivity for students.
          </p>
        </div>

        <Card className="bg-gradient-card border-0 shadow-soft overflow-hidden animate-fade-in">
          <CardHeader className="text-center pb-6">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-primary/10 rounded-2xl">
                <Smartphone className="h-10 w-10 text-primary" />
              </div>
            </div>
            <CardTitle className="text-2xl sm:text-3xl mb-2">Study Buddy</CardTitle>
            <CardDescription className="text-lg">Your All-in-One High School Organiser</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <p className="text-center text-muted-foreground max-w-3xl mx-auto">
              High school can be overwhelming—juggling assignments, tests, college applications, and
              capstone projects while trying to stay on top of deadlines. StudyTracker simplifies your
              academic life by bringing all your tasks into one intuitive dashboard.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-background rounded-lg hover:shadow-soft transition-shadow"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Screenshots */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-center">App Screenshots</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {screenshots.map((screenshot, index) => (
                  <div
                    key={index}
                    className="rounded-lg overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
                  >
                    <img
                      src={screenshot.src}
                      alt={screenshot.alt}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Download Button */}
            <div className="text-center pt-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-hover"
              >
                <a href="https://www.pragyagoyal.com/downloads/study_buddy.apk" download>
                  <Download className="h-5 w-5 mr-2" />
                  Download APK
                </a>
              </Button>
              <p className="text-sm text-muted-foreground mt-3">
                Take control of your high school journey with Study Buddy—your personal academic assistant!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
