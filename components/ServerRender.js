'use client';
import { useEffect, useRef } from 'react';

export const dynamic = 'force-static';
export const fetchCache = 'force-cache';

export default function ServerRender({
    text,
    mwidth,
    fontsz = 'inherit',
    justify = 'flex-end',
    class_ = '',
}) {
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
    let maparr = text.split('\n');
    return (
        <div
            className={`flex ${class_}`}
            style={{ fontSize: fontsz, justifyContent: justify }}
        >
            <div
                className="wrapper anim"
                style={{ '--min_w': `${(mwidth / 1800) * 100}vmax` }}
            >
                <div className="backend">
                    {maparr.map((line, index) => {
                        if (line == '') {
                            line = ' ';
                        }
                        return <p key={index}>{line}</p>;
                    })}
                </div>
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
            </div>
        </div>
    );
}
