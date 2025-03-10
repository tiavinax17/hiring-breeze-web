
import PageLayout from "@/components/layout/PageLayout";
import ContactForm from "@/components/forms/ContactForm";
import SectionHeading from "@/components/ui/custom/SectionHeading";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin size={24} className="text-primary" />,
      title: "Our Location",
      details: [
        "123 Innovation Way",
        "San Francisco, CA 94103",
        "United States"
      ]
    },
    {
      icon: <Mail size={24} className="text-primary" />,
      title: "Email Us",
      details: [
        "info@companyname.com",
        "careers@companyname.com",
        "support@companyname.com"
      ]
    },
    {
      icon: <Phone size={24} className="text-primary" />,
      title: "Call Us",
      details: [
        "+1 (555) 123-4567",
        "+1 (555) 987-6543"
      ]
    },
    {
      icon: <Clock size={24} className="text-primary" />,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9AM - 6PM",
        "Saturday: 10AM - 2PM",
        "Sunday: Closed"
      ]
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-20 pb-20 bg-gradient-to-b from-primary/5 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary animate-fadeIn">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slideDown" style={{ animationDelay: "0.1s" }}>
              We'd Love to Hear From You
            </h1>
            <p className="text-lg text-muted-foreground animate-slideDown" style={{ animationDelay: "0.2s" }}>
              Have questions, feedback, or want to learn more about our company? 
              We're here to help!
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className="p-6 rounded-xl bg-secondary border border-border/50 hover:shadow-md transition-all duration-300"
              >
                <div className="mb-4">
                  {info.icon}
                </div>
                <h3 className="text-xl font-medium mb-3">{info.title}</h3>
                <ul className="space-y-2">
                  {info.details.map((detail, i) => (
                    <li key={i} className="text-muted-foreground">{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading
                chip="Contact Us"
                title="Send Us a Message"
                subtitle="Fill out the form and we'll get back to you as soon as possible."
                align="left"
              />
              
              <div className="mt-12 glass-card p-8">
                <ContactForm />
              </div>
            </div>
            
            <div className="mt-8 md:mt-0">
              <div className="sticky top-24">
                <div className="aspect-square rounded-xl overflow-hidden mb-8 shadow-lg">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0962322301864!2d-122.41941872357441!3d37.77492901555063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1652823694025!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Company Location"
                  ></iframe>
                </div>
                
                <div className="p-6 bg-secondary rounded-xl border border-border/50">
                  <h3 className="text-xl font-medium mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-1">What are your office hours?</h4>
                      <p className="text-muted-foreground text-sm">Our team is available Monday through Friday from 9AM to 6PM PT.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">How quickly will you respond?</h4>
                      <p className="text-muted-foreground text-sm">We aim to respond to all inquiries within 24-48 business hours.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Do you have offices in other locations?</h4>
                      <p className="text-muted-foreground text-sm">Yes, we have additional offices in New York, London, and Singapore.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
