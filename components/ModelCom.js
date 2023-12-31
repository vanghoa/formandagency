import Image from 'next/image';
import RightPanel from './RightPanel';
import ServerRender from './ServerRender';
import Link from 'next/link';
import SwiperImage from './SwiperImage';

export const dynamic = 'force-static';
export const fetchCache = 'force-cache';

export default function ModelCom({ img, title, spec, des, next, last, no }) {
    return (
        <>
            <br></br>
            <ServerRender
                text={title}
                mwidth={800}
                fontsz={'1rem'}
                justify={'flex-start'}
                class_="title"
            ></ServerRender>
            <SwiperImage img={img}></SwiperImage>
            <br></br>
            <br></br>
            <ServerRender
                fontsz={'0.75em'}
                text={spec}
                mwidth={800}
            ></ServerRender>
            <br></br>
            <ServerRender text={des} mwidth={800}></ServerRender>
            <br></br>
            <div className="flex" style={{ gap: '1em' }}>
                <Link href={`/model${last}/`} className="flex_sta">
                    Previous:<br></br>model {last}
                </Link>
                <Link
                    href={`/model${next}/`}
                    className="flex_end"
                    style={{ textAlign: 'right' }}
                >
                    Next:<br></br>model {next}
                </Link>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <RightPanel modelCom={true} no={no}></RightPanel>
        </>
    );
}
