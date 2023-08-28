import RightPanel from '@/components/RightPanel';
import ServerRender from '@/components/ServerRender';

const fetchNotion = async () => {
    const res = await fetch(`${process.env.FETCH_URL}/api/notion`, {
        cache: 'no-store',
    });
    try {
        return await res.json();
    } catch (err) {
        console.log('err: ', err);
        return undefined;
    }
};

const InstanceHas = ({ data }) => {
    let mwidth = 1000;
    return (
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
    );
};

export default async function subpage() {
    let data = [];
    try {
        let data_ = await fetchNotion();
        data = data_.message;
    } catch (e) {
        console.log('errbucac2: ', e);
        data = [];
    }
    const title = `Instance Repository`;

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
            <InstanceHas data={data}></InstanceHas>
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
