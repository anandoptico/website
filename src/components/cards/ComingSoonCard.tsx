import { Clock, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface ComingSoonCardProps {
    categoryName: string;
    className?: string;
    isActive?: boolean;
}

const ComingSoonCard = ({ categoryName, className, isActive = false }: ComingSoonCardProps) => {
    return (
        <div
            className={cn(
                "group relative bg-gradient-to-br from-card via-card to-navy/10 rounded-xl overflow-hidden elegant-shadow transition-all duration-500 border h-full",
                isActive
                    ? "scale-[1.02] shadow-2xl shadow-gold/30 border-gold/40"
                    : "border-gold/20 hover:scale-[1.02] hover:shadow-2xl hover:shadow-gold/30 hover:border-gold/40",
                className
            )}
        >
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(218,165,32,0.3),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(218,165,32,0.2),transparent_50%)]" />
            </div>

            {/* Main Content */}
            <div className="relative aspect-[4/3] flex flex-col items-center justify-center p-6 text-center">
                {/* Animated Icon Container */}
                <div className={cn(
                    "relative mb-4 transition-transform duration-500",
                    isActive ? "scale-110" : "group-hover:scale-110"
                )}>
                    <div className={cn(
                        "absolute inset-0 bg-gold/20 rounded-full blur-xl animate-pulse",
                        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    )} />
                    <div className="relative bg-gradient-to-br from-gold/20 to-gold/10 p-4 rounded-full border border-gold/30">
                        <Clock className={cn(
                            "w-8 h-8 text-gold transition-all duration-300",
                            isActive ? "animate-pulse" : "group-hover:animate-pulse"
                        )} />
                    </div>
                </div>

                {/* Coming Soon Text */}
                <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                        <Sparkles className={cn(
                            "w-4 h-4 text-gold transition-opacity duration-300",
                            isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                        )} />
                        <span className={cn(
                            "text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300",
                            isActive ? "text-gold" : "text-gold/70 group-hover:text-gold"
                        )}>
                            Coming Soon
                        </span>
                        <Sparkles className={cn(
                            "w-4 h-4 text-gold transition-opacity duration-300",
                            isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                        )} />
                    </div>
                    <h3 className={cn(
                        "text-lg font-serif font-semibold transition-colors duration-300",
                        isActive ? "text-gold" : "text-foreground group-hover:text-gold"
                    )}>
                        {categoryName}
                    </h3>
                    <p className="text-xs text-muted-foreground/80 max-w-[200px] leading-relaxed">
                        We're curating the finest collection just for you
                    </p>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="relative px-4 py-3 bg-gradient-to-r from-navy/30 via-transparent to-navy/30 border-t border-gold/10">
                <p className={cn(
                    "text-xs text-center transition-colors duration-300",
                    isActive ? "text-gold/80" : "text-muted-foreground group-hover:text-gold/80"
                )}>
                    Visit our store to explore in person
                </p>
            </div>

            {/* Subtle Corner Accents */}
            <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-gold/30 rounded-tl" />
            <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-gold/30 rounded-tr" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-gold/30 rounded-bl" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-gold/30 rounded-br" />
        </div>
    );
};

export default ComingSoonCard;
