import RightPanel from '@/components/RightPanel';
import ServerRender from '@/components/ServerRender';

export const dynamic = 'force-static';
export const fetchCache = 'force-cache';

export default function subpage() {
    let title = `Instance Repository (WIP)`;
    let txt = `As an extension of the exhibition, Yeo Workshop and new-media collective TO NEW ENTITIES, will be co-presenting a programme comprising a screening and artist talk. Titled <M>across Cultures, the talk will be introduced by the exhibition’s curator, Rafi Abdullah, who will also be moderating the conversation between the artist Brandon Tay, with writer, media-art professor, as well as the exhibition’s text contributor, Bogna Konior. The conversation will unpack the premises of the exhibition, straddling thematic considerations across the individual and relational aspects of and between agencies and sentience. The session will end with a screening of the Japanese anime television series Parasyte (Madhouse, 2014).

    Saturday, 16th September 2023, 1 - 3pm
    NTU CCA, The Screening Room, Block 38 Malan Road, #01-06`;
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
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <RightPanel></RightPanel>
        </>
    );
}
