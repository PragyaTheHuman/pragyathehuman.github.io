import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Research } from "@/components/Research";
import { Blogs } from "@/components/Blogs";
import { Art } from "@/components/Art";
import { Animation } from "@/components/Animation";
import { Game } from "@/components/Game";
import { MobileApps } from "@/components/MobileApps";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Research />
        <Blogs />
        <Art />
        <Animation />
        <Game />
        <MobileApps />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
