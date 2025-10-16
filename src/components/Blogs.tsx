import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calculator, TrendingUp } from "lucide-react";

const blogs = [
  {
    title: "Maths",
    description: "Discover the beauty of numbers beyond textbooks!",
    details:
      "This blog simplifies complex mathematical ideas into real-world logic, making math approachable, practical, and even fun.",
    icon: Calculator,
    image: "https://www.pragyagoyal.com/images/maths.jpg",
    link: "https://www.pragyagoyal.com/blogs/index.html#maths",
  },
  {
    title: "Finance and Economy",
    description: "Money decisions shape your future—learn how to make them wisely.",
    details:
      "From saving smart to understanding investments, this blog breaks down financial concepts into clear, everyday lessons.",
    icon: TrendingUp,
    image: "https://www.pragyagoyal.com/images/fl.jpg",
    link: "https://www.pragyagoyal.com/blogs/index.html#fl",
  },
];

export const Blogs = () => {
  return (
    <section id="blogs" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Educational <span className="bg-gradient-primary bg-clip-text text-transparent">Blogs</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Breaking down complex concepts into accessible, engaging content for curious minds.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <Card
              key={index}
              className="bg-gradient-card border-0 shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 p-3 bg-background/90 backdrop-blur-sm rounded-xl">
                  <blog.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{blog.title}</CardTitle>
                <CardDescription className="text-base">{blog.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{blog.details}</p>
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/5 w-full">
                  <a href={blog.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                    <span>Explore Blogs</span>
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
