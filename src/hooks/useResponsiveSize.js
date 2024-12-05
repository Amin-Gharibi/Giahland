import { useState, useEffect } from 'react';

const useResponsiveSize = (defaultSize, smallSize, breakpoint) => {
    const [size, setSize] = useState(defaultSize);

    useEffect(() => {
        const updateSize = () => {
            if (window.matchMedia(`(max-width: ${breakpoint}px)`).matches) {
                setSize(smallSize);
            } else {
                setSize(defaultSize);
            }
        };

        updateSize(); // Set initial size
        window.addEventListener('resize', updateSize);

        return () => {
            window.removeEventListener('resize', updateSize);
        };
    }, [defaultSize, smallSize, breakpoint]);

    return size;
};

export default useResponsiveSize;
