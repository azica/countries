import { useState, useEffect } from 'react';

export const useIsMobile = (maxWidth: number): boolean => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const isCurrentMobile = width <= maxWidth;

            setIsMobile(isCurrentMobile);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [maxWidth]);

    return isMobile;
}
