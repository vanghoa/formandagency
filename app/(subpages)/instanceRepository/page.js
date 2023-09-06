import RightPanel from '@/components/RightPanel';
import ServerRender from '@/components/ServerRender';

export const revalidate = 600;

const fetchNotion = async () => {
    const res = await fetch(`${process.env.FETCH_URL}/api/notion`, {
        next: { revalidate: 600 },
    });
    try {
        return await res.json();
    } catch (err) {
        console.log('errbucac3: ', err);
        return { message: [] };
    }
};

export default async function subpage() {
    const { message: data } = await fetchNotion();
    const mwidth = 1000;
    const title = `Instance Repository
    (Work in Progress)`;

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
            <br></br>
            <div className="IR_flex">
                {data.map(({ edit, create, vimeo, des }) => {
                    return (
                        <div key={create} className="flex_item">
                            <iframe
                                src={`https://player.vimeo.com/video/${vimeo}?`}
                                frameBorder="0"
                                allow="autoplay; fullscreen"
                                allowFullScreen=""
                                style={{
                                    '--mwidth': `${(mwidth / 1800) * 100}vmax`,
                                }}
                            ></iframe>
                            <br></br>
                            <ServerRender
                                text={`Created at: ${new Date(
                                    create
                                ).toLocaleString()}
                    Last edited at: ${new Date(edit).toLocaleString()}`}
                                mwidth={mwidth}
                                justify={'flex-start'}
                                class_="timestamp"
                            ></ServerRender>
                            <br></br>
                            <ServerRender
                                text={des}
                                mwidth={mwidth}
                                justify={'flex-start'}
                            ></ServerRender>
                            <br></br>
                        </div>
                    );
                })}
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <RightPanel no={5}></RightPanel>
        </>
    );
}
