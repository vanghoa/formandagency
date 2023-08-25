'use client';
import { useEffect } from 'react';

const RightPanel = ({ lead = 0, elem = 0 }) => {
    useEffect(() => {
        //debounceRight.size = [];
        if (lead != 0) {
            setleading(lead, $(elem));
        }
        rightPanel(false);
        return () => {
            //resizeObserver.unobserve(containerElement);
        };
    }, []);
    return <></>;
};

export default RightPanel;
