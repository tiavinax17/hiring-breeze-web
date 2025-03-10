
import { cn } from "@/lib/utils";

interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
  bio?: string;
  className?: string;
}

const TeamMemberCard = ({
  name,
  role,
  image,
  bio,
  className,
}: TeamMemberCardProps) => {
  return (
    <div 
      className={cn(
        "overflow-hidden group",
        className
      )}
    >
      <div className="relative overflow-hidden rounded-xl mb-4 aspect-[3/4]">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
        {bio && (
          <div className="absolute inset-0 bg-foreground/80 flex items-center justify-center p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="text-white text-center text-sm">{bio}</p>
          </div>
        )}
      </div>
      <h4 className="text-lg font-medium">{name}</h4>
      <p className="text-sm text-muted-foreground">{role}</p>
    </div>
  );
};

export default TeamMemberCard;
