import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface BlogCardProps {
  image: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  categories: string[];
  featured?: boolean;
}

export const BlogCard = ({
  image,
  title,
  excerpt,
  author,
  date,
  categories,
  featured = false,
}: BlogCardProps) => {
  return (
    <article
      className={`group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 ${
        featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      <div className={`relative overflow-hidden ${featured ? "h-64 md:h-full" : "h-48"}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {categories.map((category) => (
            <Badge key={category} variant="secondary" className="bg-primary text-primary-foreground">
              {category}
            </Badge>
          ))}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
          <span className="font-medium text-foreground">{author}</span>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{date}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{excerpt}</p>
        <Button variant="default" className="bg-accent hover:bg-accent/90">
          Discover More
        </Button>
      </div>
    </article>
  );
};
