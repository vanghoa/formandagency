'use client';
import { useRef, useEffect } from 'react';

const RightPanel = () => {
    const containerRef = useRef(null);
    useEffect(() => {
        const containerElement = containerRef.current;
        console.log(containerElement);
        /*
            const resizeObserver = new ResizeObserver((entries) => {
                if (onWidthChange) {
                    console.log(containerElement, nav);
                }
            });

            resizeObserver.observe(containerElement);
        */
        return () => {
            //resizeObserver.unobserve(containerElement);
        };
    }, [containerRef.current]);
    return <></>;
};

export default RightPanel;
