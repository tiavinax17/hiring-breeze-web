
import { useState } from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeading from "@/components/ui/custom/SectionHeading";
import JobCard, { JobCardProps } from "@/components/ui/custom/JobCard";
import ApplicationForm from "@/components/forms/ApplicationForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Briefcase, Check, Coffee, Heart } from "lucide-react";
import BlurImage from "@/components/animations/BlurImage";

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);
  
  const departments = [
    "All", 
    "Engineering", 
    "Design", 
    "Marketing", 
    "Product", 
    "HR", 
    "Sales", 
    "Customer Success"
  ];
  
  const jobListings: JobCardProps[] = [
    {
      id: "sr-frontend-dev",
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "San Francisco, CA (Remote Option)",
      type: "Full-time",
      salary: "$120K - $160K",
      postedAt: "2 days ago",
    },
    {
      id: "ux-designer",
      title: "UX Designer",
      department: "Design",
      location: "New York, NY",
      type: "Full-time",
      salary: "$90K - $120K",
      postedAt: "1 week ago",
    },
    {
      id: "product-manager",
      title: "Product Manager",
      department: "Product",
      location: "Remote",
      type: "Full-time",
      salary: "$110K - $140K",
      postedAt: "2 weeks ago",
    },
    {
      id: "marketing-specialist",
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$80K - $95K",
      postedAt: "3 days ago",
    },
    {
      id: "backend-engineer",
      title: "Backend Engineer",
      department: "Engineering",
      location: "Seattle, WA",
      type: "Full-time",
      salary: "$130K - $170K",
      postedAt: "1 day ago",
    },
    {
      id: "hr-manager",
      title: "HR Manager",
      department: "HR",
      location: "Chicago, IL",
      type: "Full-time",
      salary: "$90K - $110K",
      postedAt: "1 week ago",
    },
  ];
  
  const filteredJobs = jobListings.filter((job) => {
    const matchesSearch = 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesDepartment = 
      selectedDepartment === null || 
      selectedDepartment === "All" || 
      job.department === selectedDepartment;
      
    return matchesSearch && matchesDepartment;
  });
  
  const benefits = [
    {
      title: "Competitive Compensation",
      description: "Attractive salary and equity packages that reward your contributions.",
      icon: <Briefcase size={24} className="text-primary" />,
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health insurance, wellness programs, and gym stipends.",
      icon: <Heart size={24} className="text-primary" />,
    },
    {
      title: "Work-Life Balance",
      description: "Flexible working hours, generous PTO, and family leave policies.",
      icon: <Coffee size={24} className="text-primary" />,
    },
    {
      title: "Growth Opportunities",
      description: "Career development, educational stipends, and mentorship programs.",
      icon: <Check size={24} className="text-primary" />,
    },
  ];
  
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-20 pb-32 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary animate-fadeIn">
                Join Our Team
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slideDown" style={{ animationDelay: "0.1s" }}>
                Build Your Career With Purpose
              </h1>
              <p className="text-lg text-muted-foreground mb-8 animate-slideDown" style={{ animationDelay: "0.2s" }}>
                We're looking for talented individuals who are passionate about making a difference. 
                Explore our open positions and find your perfect fit.
              </p>
              <a href="#open-positions" className="animate-slideDown" style={{ animationDelay: "0.3s" }}>
                <Button size="lg" className="rounded-full px-8">
                  View Open Positions
                </Button>
              </a>
            </div>
            
            <div className="animate-scaleIn" style={{ animationDelay: "0.3s" }}>
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <BlurImage 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80" 
                  alt="Team collaboration" 
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-24 bg-white" id="benefits">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            chip="Benefits"
            title="What We Offer"
            subtitle="We believe in taking care of our team with comprehensive benefits and perks."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="p-6 rounded-xl group hover:shadow-md transition-all duration-300 bg-secondary border border-border/50"
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-medium mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Job Listings Section */}
      <section className="py-24 bg-secondary" id="open-positions">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            chip="Open Positions"
            title="Find Your Perfect Role"
            subtitle="Browse our current openings and join our talented team."
          />
          
          <div className="max-w-5xl mx-auto mt-16">
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search by title, department, or location..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Filter size={16} /> Filter:
                </span>
                {departments.map((department) => (
                  <Badge
                    key={department}
                    variant={selectedDepartment === department || (department === "All" && selectedDepartment === null) ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setSelectedDepartment(department === "All" ? null : department)}
                  >
                    {department}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Job Results */}
            <div className="space-y-4">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <JobCard key={job.id} {...job} />
                ))
              ) : (
                <div className="text-center py-12 bg-white rounded-xl">
                  <p className="text-lg text-muted-foreground mb-2">No matching jobs found</p>
                  <p className="text-muted-foreground mb-4">Try adjusting your search or filters</p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedDepartment(null);
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Application Form Section */}
      <section className="py-24 bg-white" id="apply">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <SectionHeading
            chip="Apply Now"
            title="Ready to Join Our Team?"
            subtitle="Fill out the form below to apply for a position or to be considered for future opportunities."
          />
          
          <div className="mt-16 p-8 bg-secondary rounded-xl shadow-sm">
            <ApplicationForm />
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Careers;
