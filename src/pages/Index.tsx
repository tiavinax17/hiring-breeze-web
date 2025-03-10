
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Zap, Star, Heart, ChevronRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeading from "@/components/ui/custom/SectionHeading";
import FeatureCard from "@/components/ui/custom/FeatureCard";
import BlurImage from "@/components/animations/BlurImage";

const Index = () => {
  const features = [
    {
      title: "Innovative Culture",
      description: "We foster creativity and out-of-the-box thinking to solve complex challenges.",
      icon: <Zap size={24} />,
    },
    {
      title: "Diverse Teams",
      description: "Our strength comes from diverse perspectives and inclusive collaboration.",
      icon: <Users size={24} />,
    },
    {
      title: "Excellence Focus",
      description: "We're committed to delivering exceptional quality in everything we do.",
      icon: <Star size={24} />,
    },
    {
      title: "People First",
      description: "We believe in creating an environment where people thrive personally and professionally.",
      icon: <Heart size={24} />,
    },
  ];
  
  const testimonials = [
    {
      quote: "Joining this company was the best career decision I've made. The culture, growth opportunities, and work-life balance are unmatched.",
      author: "Emily Johnson",
      role: "Senior Designer",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=500&fit=crop"
    },
    {
      quote: "I've been with the company for three years, and I'm constantly amazed by the innovative projects and supportive environment.",
      author: "Michael Chen",
      role: "Software Engineer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
    },
    {
      quote: "The collaborative atmosphere and commitment to excellence make this company a truly special place to work.",
      author: "Sarah Rodriguez",
      role: "Product Manager",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=500&fit=crop"
    },
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <span className="inline-block px-3 py-1 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary animate-fadeIn">
              We're hiring talented individuals
            </span>
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold mb-6 animate-slideDown" style={{ animationDelay: "0.1s" }}>
              Join Our Team of <span className="text-primary">Innovators</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl animate-slideDown" style={{ animationDelay: "0.2s" }}>
              We're on a mission to transform the industry with cutting-edge solutions. 
              Join our team of passionate professionals and help shape the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slideDown" style={{ animationDelay: "0.3s" }}>
              <Link to="/careers">
                <Button size="lg" className="rounded-full px-8">
                  View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  About Our Company
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto mt-16 px-4 md:px-6 animate-scaleIn" style={{ animationDelay: "0.4s" }}>
          <div className="aspect-video overflow-hidden rounded-2xl border border-white/20 shadow-xl">
            <BlurImage 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80" 
              alt="Team working together" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-semibold text-primary mb-2">150+</p>
              <p className="text-muted-foreground">Team Members</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-semibold text-primary mb-2">12</p>
              <p className="text-muted-foreground">Global Offices</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-semibold text-primary mb-2">98%</p>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-semibold text-primary mb-2">24/7</p>
              <p className="text-muted-foreground">Support Available</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            chip="Why Join Us"
            title="Build Your Career With Purpose"
            subtitle="Experience a workplace that values innovation, growth, and wellbeing."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            chip="Testimonials"
            title="Hear From Our Team"
            subtitle="Discover what it's like to work with us from the people who know best – our employees."
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-card p-8 relative">
                <div className="mb-6">
                  <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary/20">
                    <path d="M13.5 18H9C9 13.0294 13.0294 9 18 9V13.5C15.5147 13.5 13.5 15.5147 13.5 18ZM31.5 18H27C27 13.0294 31.0294 9 36 9V13.5C33.5147 13.5 31.5 15.5147 31.5 18ZM13.5 36H9C9 31.0294 13.0294 27 18 27V31.5C15.5147 31.5 13.5 33.5147 13.5 36ZM31.5 36H27C27 31.0294 31.0294 27 36 27V31.5C33.5147 31.5 31.5 33.5147 31.5 36Z" fill="currentColor"/>
                  </svg>
                </div>
                
                <p className="text-lg mb-6">{testimonial.quote}</p>
                
                <div className="flex items-center">
                  <div className="rounded-full overflow-hidden w-12 h-12 mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{testimonial.author}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Join Our Team?</h2>
            <p className="text-xl mb-8 text-white/80">
              Explore our open positions and take the next step in your career journey.
            </p>
            <Link to="/careers">
              <Button 
                size="lg" 
                variant="secondary" 
                className="rounded-full px-8 text-primary font-medium"
              >
                Browse Opportunities <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
