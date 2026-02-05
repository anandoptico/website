import { Link } from "react-router-dom";
import { Brand } from "@/lib/brands";
import { cn } from "@/lib/utils";

interface BrandCardProps {
  brand: Brand;
  className?: string;
}

const BrandCard = ({ brand, className }: BrandCardProps) => {
  return (
    <Link
      to={`/brand/${brand.slug}`}
      className={cn(
        "group relative bg-card rounded-lg p-4 flex flex-col items-center justify-center elegant-shadow hover-lift active:scale-95 active:border-gold/50 min-h-[160px] border border-border hover:border-gold/50 transition-all duration-300",
        className
      )}
    >
      {/* Logo */}
      <div className="w-full h-24 flex items-center justify-center mb-2 overflow-hidden px-2">
        {brand.logo ? (
          <img
            src={brand.logo}
            alt={`${brand.name} logo`}
            className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
            <span className="text-2xl font-serif font-bold text-muted-foreground">
              {brand.name.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Brand Name */}
      <span className="font-serif font-semibold text-foreground group-hover:text-gold transition-colors duration-300 text-center text-sm">
        {brand.name}
      </span>

      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-16 h-16 bg-gold/10 rotate-45 translate-x-8 -translate-y-8 group-hover:bg-gold/20 transition-colors duration-300" />
      </div>
    </Link>
  );
};

export default BrandCard;
