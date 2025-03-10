
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

export interface JobCardProps {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Remote";
  salary?: string;
  postedAt: string;
}

const JobCard = ({ 
  id, 
  title, 
  department, 
  location, 
  type, 
  salary, 
  postedAt 
}: JobCardProps) => {
  return (
    <div className="p-6 rounded-xl bg-white border border-border/50 transition-all duration-200 hover:shadow-md">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
        <div>
          <h3 className="text-xl font-medium">{title}</h3>
          <p className="text-muted-foreground mb-3">{department}</p>
          
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin size={16} />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Briefcase size={16} />
              <span>{type}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={16} />
              <span>Posted {postedAt}</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          {salary && (
            <Badge variant="outline" className="font-normal text-sm">
              {salary}
            </Badge>
          )}
          <Link to={`/careers/${id}`}>
            <Button variant="outline" size="sm" className="whitespace-nowrap">
              View Details
            </Button>
          </Link>
          <Link to={`/careers/apply/${id}`}>
            <Button size="sm" className="whitespace-nowrap">
              Apply Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
