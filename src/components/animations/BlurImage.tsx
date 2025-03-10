
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface BlurImageProps {
  src: string;
  alt: string;
  className?: string;
}

const BlurImage = ({ src, alt, className }: BlurImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoaded(true);
    };
  }, [src]);
  
  return (
    <div className={cn("overflow-hidden relative", className)}>
      <div 
        className={cn(
          "absolute inset-0 bg-muted/20 backdrop-blur-xl",
          isLoaded ? "opacity-0" : "opacity-100",
          "transition-opacity duration-700"
        )}
      />
      <img 
        src={src} 
        alt={alt}
        className={cn(
          "w-full h-full object-cover",
          isLoaded ? "opacity-100" : "opacity-0",
          "transition-opacity duration-700"
        )}
      />
    </div>
  );
};

export default BlurImage;
