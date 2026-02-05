import { Zap, BadgeCheck, IndianRupee } from "lucide-react";
import { cn } from "@/lib/utils";

interface PoweredSunglassesCardProps {
    className?: string;
    isActive?: boolean;
}

const PoweredSunglassesCard = ({ className, isActive = false }: PoweredSunglassesCardProps) => {
    return (
        <div
            className={cn(
                "group relative bg-gradient-to-br from-navy to-navy-light rounded-lg overflow-hidden elegant-shadow p-6 flex flex-col justify-between h-full border transition-all duration-300 cursor-pointer",
                // Apply active styles on mobile when isActive, or hover styles on desktop
                isActive
                    ? "scale-[1.03] shadow-2xl shadow-gold/30 border-gold/40"
                    : "border-gold/20 hover:scale-[1.03] hover:shadow-2xl hover:shadow-gold/30 hover:border-gold/40",
                className
            )}
        >
            <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                    <Zap className="w-6 h-6 fill-current" />
                </div>

                <div className="space-y-2">
                    <h3 className="text-xl font-serif font-bold text-white">
                        Powered <span className="text-gold">Sunglasses</span>
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                        Protect your eyes without compromising on vision. Get your prescription power in the sunglasses you love.
                    </p>
                </div>

                <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-xs text-gray-200">
                        <BadgeCheck className="w-4 h-4 text-gold" />
                        100% UV Protection
                    </li>
                    <li className="flex items-center gap-2 text-xs text-gray-200">
                        <BadgeCheck className="w-4 h-4 text-gold" />
                        Polarized Options Available
                    </li>
                    <li className="flex items-center gap-2 text-xs text-gray-200">
                        <BadgeCheck className="w-4 h-4 text-gold" />
                        Anti-Glare Coating
                    </li>
                </ul>
            </div>

            <div className="mt-6 pt-6 border-t border-gold/10">
                <div className="flex items-baseline gap-1">
                    <span className="text-xs text-gray-400 uppercase tracking-wider">Starts at just</span>
                    <div className="flex items-center text-gold font-bold">
                        <IndianRupee className="w-4 h-4" />
                        <span className="text-2xl">499</span>
                        <span className="text-xs ml-1 text-gray-400 font-normal">extra</span>
                    </div>
                </div>
                <p className="text-[10px] text-gray-500 mt-2 italic">
                    *Cost varies based on lens power and type
                </p>
            </div>

            {/* Decorative background element */}
            <div className={cn(
                "absolute -right-8 -bottom-8 w-32 h-32 rounded-full blur-3xl transition-colors duration-500",
                isActive ? "bg-gold/20" : "bg-gold/10 group-hover:bg-gold/20"
            )} />
        </div>
    );
};

export default PoweredSunglassesCard;
