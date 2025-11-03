import { Menu, Search, X, Facebook, Twitter, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#" },
    { label: "Pick'em", href: "#pickem" },
    { label: "Schedule", href: "#schedule" },
    { label: "Contact Us", href: "#contact" },
  ];

  const teamHubItems = [
    { label: "News", href: "#news" },
    { label: "Roster", href: "#roster" },
    { label: "Salary", href: "#salary" },
    { label: "Depth Chart", href: "#depthchart" },
    { label: "Future Draft Picks", href: "#draftpicks" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border backdrop-blur-sm bg-opacity-95">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-primary-foreground font-bold text-lg">N</span>
            </div>
            <span className="text-xl font-bold text-foreground">NASON</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href={navItems[0].href}
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              {navItems[0].label}
            </a>
            <a
              href={navItems[1].href}
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              {navItems[1].label}
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-accent transition-colors">
                Team Hub <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {teamHubItems.map((item) => (
                  <DropdownMenuItem key={item.label} asChild>
                    <a href={item.href}>{item.label}</a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <a
              href={navItems[2].href}
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              {navItems[2].label}
            </a>
            <a
              href={navItems[3].href}
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              {navItems[3].label}
            </a>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Facebook className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Twitter className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Search className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fadeIn">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-3 text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="py-3">
              <div className="text-sm font-medium text-foreground mb-2">Team Hub</div>
              {teamHubItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-2 pl-4 text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
