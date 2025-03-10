
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);
  
  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];
  
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-primary font-heading text-2xl font-semibold tracking-tight transition-opacity hover:opacity-90"
          >
            CompanyName
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-all duration-200 hover:text-primary",
                  location.pathname === item.path 
                    ? "text-primary accent-underline after:w-full" 
                    : "text-foreground/80 accent-underline"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button size="sm" className="rounded-full px-6">
              Get Started
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-muted transition-colors"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-background z-40 animate-fadeIn">
          <nav className="container mx-auto px-4 py-8 flex flex-col space-y-6">
            {navigationItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                style={{ animationDelay: `${index * 0.05}s` }}
                className={cn(
                  "text-lg font-medium py-2 transition-colors animate-slideDown",
                  location.pathname === item.path ? "text-primary" : "text-foreground/80"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              size="lg" 
              className="rounded-full w-full mt-4 animate-slideDown"
              style={{ animationDelay: `${navigationItems.length * 0.05}s` }}
            >
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
