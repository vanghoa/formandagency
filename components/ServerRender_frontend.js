'use client';
import { useEffect, useRef } from 'react';
export const dynamic = 'force-static';
export const fetchCache = 'force-cache';

export default function ServerRender_frontend({ maparr }) {
    const targetRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0,
        };

        const callback = async (entries) => {
            for (let entry of entries) {
                if (entry.isIntersecting) {
                    await wait(1000);
                    targetRef?.current?.classList.add('lig');
                } else {
                    targetRef?.current?.classList.remove('lig');
                }
            }
        };

        const observer = new IntersectionObserver(callback, options);

        if (targetRef?.current) {
            observer.observe(targetRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="frontend" ref={targetRef}>
            {maparr.map((line, index) => {
                if (line.trim().replace(/\s+/g, ' ') == '') {
                    return (
                        <p key={index}>
                            <br></br>
                        </p>
                    );
                }
                return <p key={index}>{line}</p>;
            })}
        </div>
    );
}
