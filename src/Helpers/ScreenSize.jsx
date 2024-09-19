import { useEffect, useState } from 'react';

const useScreenSize = () => {
    const [forExtraLargeDevices, setForExtraLargeDevices] = useState(false);
    const [forLargeDevices, setForLargeDevices] = useState(false);
    const [forSmallDevices, setForSmallDevices] = useState(false);
    const [isMediumScreen, setIsMediumScreen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setForExtraLargeDevices(window.innerWidth < 1200);
            setForLargeDevices(window.innerWidth < 992);
            setForSmallDevices(window.innerWidth < 576);
            setIsMediumScreen(window.innerWidth < 1024 && window.innerWidth > 768);
            setIsSmallScreen(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Call it initially to set the correct state
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return { forExtraLargeDevices, forLargeDevices, forSmallDevices, isMediumScreen, isSmallScreen };
};

export default useScreenSize;