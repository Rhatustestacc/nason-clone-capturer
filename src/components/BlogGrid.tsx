import { BlogCard } from "./BlogCard";
import heroCityImage from "@/assets/hero-city.jpg";
import techAbstractImage from "@/assets/tech-abstract.jpg";
import workspaceImage from "@/assets/workspace.jpg";

const blogPosts = [
  {
    id: 1,
    image: heroCityImage,
    title: "Musical improvisation is the spontaneous music",
    excerpt:
      "Discover the art of spontaneous creativity and how musicians create magic in the moment through improvisation techniques.",
    author: "Nason",
    date: "March 06, 2025",
    categories: ["Blog", "Management"],
    featured: true,
  },
  {
    id: 2,
    image: techAbstractImage,
    title: "The Future of Digital Innovation",
    excerpt:
      "Exploring the latest trends in technology and how they're shaping our digital landscape for tomorrow.",
    author: "Nason",
    date: "March 05, 2025",
    categories: ["Technology"],
  },
  {
    id: 3,
    image: workspaceImage,
    title: "Creating Your Perfect Workspace",
    excerpt:
      "Design tips and productivity hacks to build a workspace that inspires creativity and focus.",
    author: "Nason",
    date: "March 04, 2025",
    categories: ["Business"],
  },
  {
    id: 4,
    image: techAbstractImage,
    title: "The Art of Strategic Management",
    excerpt:
      "Learn essential management principles that drive success in modern organizations.",
    author: "Nason",
    date: "March 03, 2025",
    categories: ["Management"],
  },
  {
    id: 5,
    image: workspaceImage,
    title: "Startup Culture: Building from Ground Up",
    excerpt:
      "Insights into creating a thriving startup culture that attracts talent and drives innovation.",
    author: "Nason",
    date: "March 02, 2025",
    categories: ["Startups"],
  },
];

export const BlogGrid = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};
