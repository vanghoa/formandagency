'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

export default function SwiperImage({ img }) {
    return (
        <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            style={{
                width: 'calc(var(--border_w)*2 + 400px)',
                height: 'auto',
                maxWidth: '100%',
                margin: '0',
                border: 'var(--border_w) var(--white) solid',
            }}
        >
            {Array.from({ length: 2 }, (v, k) => {
                return (
                    <SwiperSlide key={`${k}swipe`}>
                        <Image
                            src={`/image/slideshow/Model ${img}/${k + 1}.jpg`}
                            alt="bip"
                            width={700}
                            height={875}
                            quality={100}
                            style={{
                                width: '400px',
                                height: '100%',
                                maxWidth: '100%',
                            }}
                            priority={true}
                        ></Image>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}
