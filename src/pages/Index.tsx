import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { TrendingTopics } from "@/components/TrendingTopics";
import { BlogGrid } from "@/components/BlogGrid";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <TrendingTopics />
        <BlogGrid />
      </main>
    </div>
  );
};

export default Index;
