
import PageLayout from "@/components/layout/PageLayout";
import SectionHeading from "@/components/ui/custom/SectionHeading";
import TeamMemberCard from "@/components/ui/custom/TeamMemberCard";
import BlurImage from "@/components/animations/BlurImage";
import { ArrowRight, CheckCircle, Target, Heart, Globe, Users } from "lucide-react";

const About = () => {
  const coreValues = [
    {
      title: "Innovation",
      description: "We challenge the status quo and constantly seek better solutions.",
      icon: <Target size={24} className="text-primary" />,
    },
    {
      title: "Integrity",
      description: "We uphold the highest ethical standards in all our interactions.",
      icon: <CheckCircle size={24} className="text-primary" />,
    },
    {
      title: "Inclusion",
      description: "We embrace diversity and foster a sense of belonging for all.",
      icon: <Users size={24} className="text-primary" />,
    },
    {
      title: "Impact",
      description: "We measure success by the positive difference we make in the world.",
      icon: <Globe size={24} className="text-primary" />,
    },
    {
      title: "Empathy",
      description: "We seek to understand and value different perspectives.",
      icon: <Heart size={24} className="text-primary" />,
    },
  ];
  
  const leadershipTeam = [
    {
      name: "Sarah Reynolds",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
      bio: "Sarah has over 20 years of industry experience and is passionate about building innovative solutions that transform businesses.",
    },
    {
      name: "David Chen",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
      bio: "David leads our technical strategy and ensures we stay at the cutting edge of innovation and technical excellence.",
    },
    {
      name: "Amara Patel",
      role: "Chief Operations Officer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop",
      bio: "Amara oversees our operational efficiency and ensures we deliver consistent quality across all projects.",
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Marketing Officer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop",
      bio: "Michael drives our brand strategy and ensures our message resonates with our audience and clients.",
    },
  ];
  
  const teamMembers = [
    {
      name: "Emma Johnson",
      role: "Lead Product Designer",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop",
    },
    {
      name: "James Wilson",
      role: "Senior Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    },
    {
      name: "Lauren Smith",
      role: "Marketing Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop",
    },
    {
      name: "Raj Patel",
      role: "UX Researcher",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
    },
    {
      name: "Sophie Chen",
      role: "Business Analyst",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
    },
    {
      name: "Lucas Martinez",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=500&fit=crop",
    },
    {
      name: "Olivia Brown",
      role: "Customer Success",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=500&fit=crop",
    },
    {
      name: "Noah Williams",
      role: "Frontend Developer",
      image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=500&fit=crop",
    },
  ];
  
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-20 pb-32 bg-gradient-to-b from-secondary to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-slideUp">
              <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
                Our Story
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                We're Building the Future
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2010, our company has grown from a small startup to a leading innovator 
                in our industry. We're driven by a passion for excellence and a commitment to creating 
                solutions that make a difference.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our team of talented professionals brings diverse skills and perspectives to every 
                challenge, enabling us to deliver exceptional results for our clients and partners.
              </p>
            </div>
            
            <div className="order-1 md:order-2 animate-scaleIn">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl transform rotate-3"></div>
                <div className="overflow-hidden rounded-3xl shadow-xl relative">
                  <BlurImage 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80" 
                    alt="Team collaboration" 
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="py-24 bg-white" id="mission">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div>
                <span className="inline-block px-3 py-1 mb-2 text-sm font-medium rounded-full bg-primary/10 text-primary">
                  Our Mission
                </span>
                <h2 className="text-3xl font-bold mb-4">Empowering Through Innovation</h2>
                <p className="text-lg text-muted-foreground">
                  We're on a mission to transform how businesses operate through innovative solutions 
                  that streamline processes, enhance performance, and drive growth.
                </p>
              </div>
              
              <div>
                <span className="inline-block px-3 py-1 mb-2 text-sm font-medium rounded-full bg-primary/10 text-primary">
                  Our Vision
                </span>
                <h2 className="text-3xl font-bold mb-4">Creating a Better Tomorrow</h2>
                <p className="text-lg text-muted-foreground">
                  We envision a future where technology empowers every organization to achieve its full 
                  potential while making a positive impact on society and the environment.
                </p>
              </div>
            </div>
            
            <div>
              <div className="bg-secondary p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6">Our Core Values</h3>
                <div className="space-y-6">
                  {coreValues.map((value, index) => (
                    <div key={index} className="flex">
                      <div className="mr-4 mt-1">{value.icon}</div>
                      <div>
                        <h4 className="font-medium mb-1">{value.title}</h4>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Leadership Team Section */}
      <section className="py-24 bg-secondary" id="team">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            chip="Leadership"
            title="Meet Our Leadership Team"
            subtitle="Our experienced leaders guide our vision and strategy with expertise and passion."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {leadershipTeam.map((member, index) => (
              <TeamMemberCard
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
                bio={member.bio}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Members Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            chip="Our Team"
            title="The People Behind Our Success"
            subtitle="Our diverse team brings together talent from various backgrounds and specialties."
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
                className="mb-8"
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Company Stats */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-white/20 text-white">
              Our Impact
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Making a Difference Together
            </h2>
            <p className="text-xl text-white/80">
              We're proud of what we've accomplished and excited about the future we're building.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <p className="text-5xl font-bold mb-2">12+</p>
              <p className="text-lg text-white/80">Years of Excellence</p>
            </div>
            <div className="p-6">
              <p className="text-5xl font-bold mb-2">500+</p>
              <p className="text-lg text-white/80">Successful Projects</p>
            </div>
            <div className="p-6">
              <p className="text-5xl font-bold mb-2">150+</p>
              <p className="text-lg text-white/80">Team Members</p>
            </div>
            <div className="p-6">
              <p className="text-5xl font-bold mb-2">25+</p>
              <p className="text-lg text-white/80">Countries Served</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
