import { useState, useEffect } from 'react';

const useResponsiveSize = (responsiveTemplate) => {
    const [size, setSize] = useState(responsiveTemplate[0].value);

    useEffect(() => {
        const updateSize = () => {
            responsiveTemplate.map(item => {
                if (window.matchMedia(`(min-width: ${item.breakpoint}px)`).matches) {
                    setSize(item.value);
                }
            })
        };

        updateSize(); // Set initial size
        window.addEventListener('resize', updateSize);

        return () => {
            window.removeEventListener('resize', updateSize);
        };
    }, [responsiveTemplate]);

    return size;
};

export default useResponsiveSize;
