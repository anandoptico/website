import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
    const { hash, pathname } = useLocation();
    const isFirstMount = useRef(true);

    // Disable browser's automatic scroll restoration
    useEffect(() => {
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
    }, []);

    useEffect(() => {
        // Check if the page was reloaded
        const isReload =
            performance.getEntriesByType('navigation')
                .map((nav) => (nav as PerformanceNavigationTiming).type)
                .includes('reload');

        if (isFirstMount.current && isReload) {
            // If it's a refresh, always go to top regardless of hash
            window.scrollTo(0, 0);
            // Remove the hash from the URL for a clean entrance
            if (hash) {
                window.history.replaceState(null, '', pathname);
            }
            isFirstMount.current = false;
            return;
        }

        if (hash) {
            const id = hash.replace("#", "");
            const element = document.getElementById(id);
            if (element) {
                // Small delay to ensure the page has rendered after navigation
                const timeoutId = setTimeout(() => {
                    element.scrollIntoView({ behavior: isFirstMount.current ? "auto" : "smooth" });
                }, 100);
                isFirstMount.current = false;
                return () => clearTimeout(timeoutId);
            }
        } else {
            // Default to top if navigating to any page without hash
            // Using "auto" for first mount to avoid visible jump, "smooth" for internal navigation
            window.scrollTo({
                top: 0,
                behavior: isFirstMount.current ? "auto" : "smooth"
            });
        }

        isFirstMount.current = false;
    }, [hash, pathname]);

    return null;
};

export default ScrollToHash;
