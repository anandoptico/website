import { Frame } from "@/lib/brands";
import { cn } from "@/lib/utils";

interface FrameCardProps {
  frame: Frame;
  onClick?: () => void;
  className?: string;
  isActive?: boolean;
}

const FrameCard = ({ frame, onClick, className, isActive = false }: FrameCardProps) => {
  return (
    <div
      className={cn(
        "group relative bg-card rounded-lg overflow-hidden elegant-shadow cursor-pointer transition-all duration-300 border",
        // Apply active styles on mobile when isActive, or hover styles on desktop
        isActive
          ? "scale-[1.03] shadow-2xl shadow-gold/20 border-gold/30"
          : "border-transparent hover:scale-[1.03] hover:shadow-2xl hover:shadow-gold/20 hover:border-gold/30",
        className
      )}
      onClick={onClick}
    >
      {/* Image */}
      <div className="aspect-[4/3] bg-gradient-to-br from-cream to-cream-dark flex items-center justify-center relative overflow-hidden">
        {frame.image ? (
          <img
            src={frame.image}
            alt={frame.name}
            className={cn(
              "w-full h-full object-cover transition-transform duration-300",
              isActive ? "scale-110" : "group-hover:scale-110"
            )}
          />
        ) : (
          <>
            <div className={cn(
              "absolute inset-0 transition-colors duration-300",
              isActive ? "bg-primary/10" : "bg-primary/5 group-hover:bg-primary/10"
            )} />
            <span className="text-muted-foreground/50 text-sm font-medium z-10">Frame Image</span>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className={cn(
          "font-medium transition-colors duration-300 line-clamp-1",
          isActive ? "text-gold" : "text-foreground group-hover:text-gold"
        )}>
          {frame.name}
        </h3>
        <p className="text-sm text-muted-foreground mt-1">{frame.brand}</p>
      </div>
    </div>
  );
};

export default FrameCard;
