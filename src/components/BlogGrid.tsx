import { BlogCard } from "./BlogCard";
import heroCityImage from "@/assets/hero-city.jpg";
import techAbstractImage from "@/assets/tech-abstract.jpg";
import workspaceImage from "@/assets/workspace.jpg";

const blogPosts = [
  {
    id: 1,
    image: heroCityImage,
    title: "Sixers vs Wizards Player Grades",
    excerpt:
      "Breaking down individual performances as the Sixers take on the Wizards. See who stood out and who needs to step up.",
    author: "Sixer sHoops",
    date: "March 06, 2025",
    categories: ["News", "Player Grades"],
    featured: true,
  },
  {
    id: 2,
    image: techAbstractImage,
    title: "Sixers vs Magic Player Grades",
    excerpt:
      "Complete player analysis from the matchup against Orlando. Grading every performance from the game.",
    author: "Sixer sHoops",
    date: "March 05, 2025",
    categories: ["News", "Player Grades"],
  },
  {
    id: 3,
    image: workspaceImage,
    title: "Sixers vs Hornets Player Grades",
    excerpt:
      "How did each Sixer perform against Charlotte? Full breakdown of individual grades and key takeaways.",
    author: "Sixer sHoops",
    date: "March 04, 2025",
    categories: ["News", "Player Grades"],
  },
  {
    id: 4,
    image: techAbstractImage,
    title: "Sixers vs Celtics Player Grades",
    excerpt:
      "The big rivalry matchup analyzed. See which players rose to the occasion against Boston.",
    author: "Sixer sHoops",
    date: "March 03, 2025",
    categories: ["News", "Player Grades"],
  },
  {
    id: 5,
    image: workspaceImage,
    title: "Sixers vs Celtics Player Grades",
    excerpt:
      "Another intense battle with the Celtics. Comprehensive grades for every player on the court.",
    author: "Sixer sHoops",
    date: "March 02, 2025",
    categories: ["News", "Player Grades"],
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
