import Image from 'next/image';

export const dynamic = 'force-static';
export const fetchCache = 'force-cache';

export default function ImageAbout({
    img,
    size,
    wrappersz,
    justify = 'flex-end',
    class_ = '',
}) {
    return (
        <div className="flex" style={{ justifyContent: justify }}>
            <div
                className="abtwrapper"
                style={{ width: `${(wrappersz / 1800) * 100}vmax` }}
            >
                <div
                    className={`image ${class_}`}
                    style={{
                        height: 'auto',
                        width: '100%',
                    }}
                >
                    <Image
                        src={`/image/${img}`}
                        alt="bip"
                        width={0}
                        height={0}
                        sizes="20vmax"
                        style={{
                            height: 'auto',
                            width: `${size}px`,
                            maxWidth: '100%',
                        }}
                        priority={true}
                    ></Image>
                </div>
            </div>
        </div>
    );
}
