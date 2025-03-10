
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About", path: "/about" },
        { name: "Team", path: "/about#team" },
        { name: "Values", path: "/about#values" },
        { name: "Contact", path: "/contact" },
      ],
    },
    {
      title: "Careers",
      links: [
        { name: "Open Positions", path: "/careers" },
        { name: "Why Join Us", path: "/careers#why-join" },
        { name: "Benefits", path: "/careers#benefits" },
        { name: "Apply", path: "/careers#apply" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms of Service", path: "/terms-of-service" },
        { name: "Cookie Policy", path: "/cookie-policy" },
      ],
    },
  ];
  
  const socialLinks = [
    { name: "Facebook", icon: <Facebook size={18} />, url: "#" },
    { name: "Twitter", icon: <Twitter size={18} />, url: "#" },
    { name: "Instagram", icon: <Instagram size={18} />, url: "#" },
    { name: "LinkedIn", icon: <Linkedin size={18} />, url: "#" },
  ];
  
  const contactInfo = [
    { 
      icon: <MapPin size={18} />, 
      text: "123 Innovation Way, San Francisco, CA 94103" 
    },
    { 
      icon: <Phone size={18} />, 
      text: "+1 (555) 123-4567" 
    },
    { 
      icon: <Mail size={18} />, 
      text: "hello@companyname.com" 
    },
  ];
  
  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Information */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <h3 className="text-primary font-heading text-2xl font-semibold tracking-tight">
                CompanyName
              </h3>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              We're on a mission to transform the industry with innovative solutions 
              and exceptional talent. Join us in shaping the future.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-white/50 hover:bg-white transition-colors text-foreground/70 hover:text-primary"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-medium text-base mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Contact Information */}
          <div>
            <h4 className="font-medium text-base mb-4">Contact Us</h4>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-3 mt-0.5">{item.icon}</span>
                  <span className="text-muted-foreground text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © {currentYear} CompanyName. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link 
                to="/privacy-policy" 
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Privacy
              </Link>
              <Link 
                to="/terms-of-service" 
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Terms
              </Link>
              <Link 
                to="/sitemap" 
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
