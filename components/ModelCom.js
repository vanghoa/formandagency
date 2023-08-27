import Image from 'next/image';
import RightPanel from './RightPanel';
import ServerRender from './ServerRender';

export const dynamic = 'force-static';
export const fetchCache = 'force-cache';

export default function ModelCom({ img, title, spec, des }) {
    return (
        <>
            <br></br>
            <ServerRender
                text={title}
                mwidth={800}
                fontsz={'1.8em'}
                justify={'flex-start'}
                class_="title"
            ></ServerRender>
            <div
                className="image model_img"
                style={{
                    height: 'auto',
                    width: '100%',
                }}
            >
                <Image
                    src={`/image/${img}.jpg`}
                    alt="bip"
                    width={0}
                    height={0}
                    sizes="50vmax"
                    style={{
                        height: 'auto',
                        width: '400px',
                        maxWidth: '100%',
                    }}
                    priority={true}
                ></Image>
            </div>
            <br></br>
            <ServerRender text={spec} mwidth={800}></ServerRender>
            <br></br>
            <ServerRender text={des} mwidth={800}></ServerRender>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <RightPanel></RightPanel>
        </>
    );
}
