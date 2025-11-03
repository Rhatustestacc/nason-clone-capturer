import { 
  Newspaper, 
  Briefcase, 
  Palmtree, 
  Laptop, 
  Radio,
  TrendingUp,
  Users,
  Rocket
} from "lucide-react";

const topics = [
  { icon: Newspaper, label: "Blog", color: "text-orange-500" },
  { icon: Briefcase, label: "Business", color: "text-purple-500" },
  { icon: TrendingUp, label: "Culture", color: "text-red-500" },
  { icon: Palmtree, label: "Travel", color: "text-amber-500" },
  { icon: Radio, label: "News", color: "text-orange-500" },
  { icon: Laptop, label: "Technology", color: "text-blue-500" },
  { icon: Users, label: "Management", color: "text-pink-500" },
  { icon: Rocket, label: "Startups", color: "text-purple-500" },
];

export const TrendingTopics = () => {
  return (
    <section className="py-12 md:py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-xs font-semibold text-muted-foreground text-center mb-8 tracking-widest uppercase">
          Trending Topics
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {topics.map((topic) => {
            const Icon = topic.icon;
            return (
              <a
                key={topic.label}
                href={`#${topic.label.toLowerCase()}`}
                className="group flex flex-col items-center gap-3 p-6 bg-card rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <Icon className={`w-8 h-8 ${topic.color} transition-transform group-hover:scale-110`} />
                <span className="text-sm font-semibold text-foreground">{topic.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
