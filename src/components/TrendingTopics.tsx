import { 
  Newspaper, 
  Briefcase, 
  Palmtree, 
  Laptop, 
  TrendingUp,
  Users,
  DollarSign,
  Mail
} from "lucide-react";

const topics = [
  { icon: Newspaper, label: "News", color: "text-orange-500" },
  { icon: Briefcase, label: "Roster", color: "text-purple-500" },
  { icon: TrendingUp, label: "Depth Chart", color: "text-red-500" },
  { icon: Palmtree, label: "Future Draft Picks", color: "text-amber-500" },
  { icon: Laptop, label: "Schedule", color: "text-blue-500" },
  { icon: Users, label: "Pick'em", color: "text-pink-500" },
  { icon: DollarSign, label: "Salary Breakdown", color: "text-green-500" },
  { icon: Mail, label: "Contact", color: "text-cyan-500" },
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
