import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen } from "lucide-react";

const mathsBlogs = [
  {
    title: "Why Numbers Lie: Floating Point Errors and How to Tame Them",
    description: "In numerical computation, precision is both a goal and a challenge. Due to the finite nature of digital systems, real numbers are represented using floating point arithmetic, a format that inherently introduces approximation and rounding errors. This article delves into the foundations of error analysis—from the role of machine epsilon and the dangers of catastrophic cancellation to strategies like pairwise summation and partial pivoting in Gaussian elimination.",
    link: "https://www.pragyagoyal.com/blogs/maths/error.pdf"
  },
  {
    title: "Math Meets Melody: Patterns, Iterations & Recursions in Indian Classical Arts",
    description: "This blog unpacks the mathematical foundations underlying classical Indian poetry and music. Beginning with the decomposition of syllables into Guru and Laghu (long and short), it introduces Prastāra, the recursive generation of metrical patterns. Together, these structures demonstrate how poetry, rhythm, and mathematics are deeply intertwined in India's intellectual heritage.",
    link: "https://www.pragyagoyal.com/blogs/maths/pattern.pdf"
  },
  {
    title: "Geometry in Daily Life",
    description: "Exploring the geometric patterns and principles that surround us in everyday life, from architecture to nature. Discover how mathematical beauty manifests in the world around us.",
    link: "#"
  }
];

const financeBlogs = [
  {
    title: "A Simple Lemonade Stand Can Teach You Everything About Money",
    description: "In school, we learn how to solve algebra problems, recite historical dates, and balance chemical equations. But we're rarely taught how to manage money. This article uses the story of a humble lemonade stand to explain money, business ownership, profit, depreciation, and valuation—in plain, everyday language.",
    link: "https://www.pragyagoyal.com/blogs/fl/lemonade.pdf"
  },
  {
    title: "The Fundamentals of Investing",
    description: "Investing may feel overwhelming at first, but once you understand a few basic ideas, it becomes much simpler—and even exciting. This article breaks down key concepts so you can make confident, informed money decisions.",
    link: "https://www.pragyagoyal.com/blogs/fl/investing.pdf"
  },
  {
    title: "Inflation: A Silent Killer of Wealth",
    description: "When we think about threats to our finances, we often imagine market crashes, job loss, or bad investments. But one of the most insidious and underestimated dangers is inflation — the silent killer of wealth. Inflation is like rust — it slowly eats away at your financial strength if left unchecked.",
    link: "https://www.pragyagoyal.com/blogs/fl/inflation.pdf"
  },
  {
    title: "Financial Literacy",
    description: "Building a strong foundation in financial literacy. Learn the essential skills and knowledge needed to make informed financial decisions and secure your financial future.",
    link: "#"
  }
];

const BlogsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
          <div className="container mx-auto max-w-6xl text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 text-primary">
              <BookOpen className="h-5 w-5" />
              <span className="text-sm font-medium">Educational Content</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Blog Posts
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Exploring mathematics, finance, and the intersection of technical knowledge with practical wisdom
            </p>
          </div>
        </section>

        {/* Maths Section */}
        <section id="maths" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Mathematics</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Deep dives into mathematical concepts, from numerical computation to the mathematical foundations of classical arts
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mathsBlogs.map((blog, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-hover transition-all duration-300 bg-gradient-card border-border/50 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {blog.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-sm leading-relaxed">
                      {blog.description}
                    </CardDescription>
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      asChild
                    >
                      <a href={blog.link} target="_blank" rel="noopener noreferrer">
                        Read Full Blog
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Finance Section */}
        <section id="finance" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Finance & Economics</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Practical insights into personal finance, investing, and economic principles explained in accessible language
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {financeBlogs.map((blog, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-hover transition-all duration-300 bg-gradient-card border-border/50 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {blog.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-sm leading-relaxed">
                      {blog.description}
                    </CardDescription>
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      asChild
                    >
                      <a href={blog.link} target="_blank" rel="noopener noreferrer">
                        Read Full Blog
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
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

export default BlogsPage;
