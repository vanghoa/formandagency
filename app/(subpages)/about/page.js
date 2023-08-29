import RightPanel from '@/components/RightPanel';
import ServerRender from '@/components/ServerRender';
import ImageAbout from '@/components/ImageAbout';
import OutLink from '@/components/OutLink';

export const dynamic = 'force-static';
export const fetchCache = 'force-cache';

export default async function Subpage() {
    const title = `Form and Agency`;
    const des = `A solo exhibition by Brandon Tay
    Exhibition Dates: 26 August – 1 October 2023
    Artist Talk: 16th September 2023`;
    const txt1 = `Yeo Workshop is pleased to present a solo exhibition by Brandon Tay, a Singaporean artist whose practice is concerned with the emergent complexities related to digital materials. Primarily working through digital media, mediated sculptures, and the moving image, Tay’s works often complicate the distinctions between the tangible and the incorporeal, whilst addressing and contending with the relationality of their complex natures.

    For his inaugural solo exhibition, Form & Agency, Brandon Tay introduces a new body of work that explores the materiality of the digital, through an engagement with 3D-printed sculptures, live-simulations, and virtual ecosystems. Introducing an element of experimentation, the exhibition functions on three different stacks — the physical artworks in the gallery space, the virtual components of the artworks, and a live and interactive game simulation — that operate both independently and in relation to each other.

    At the core of the exhibition are five agents — dynamic actors — that are composed of 3D printed sculptures embedded with screens, sensors, as well as networking capabilities. Taking on different forms, they act as metaphors for various modes of intelligence: from adversarial neural networks, complex systems in nature, blackboxing, cybernetic decision trees, and reinforcement learning. To-gether, the networked sculptures transform the gallery space into an interactive habitat where visitors can affect the behaviours and evolution of a dynamic environment of chimeric hybrid lifeforms, constructed via game-engine technology.

    Accompanying the sculptures is a real-time livestream projection of a digital environment in which the agents react not only with each other, but with the presence of visitors in real time, offering a contextual basis of the agents in their native habitat.

    The exhibition in its entirety takes on the sculptures as portals to the interior life of possible non-human entities that may well point towards other dynamic systems, and how we may think through their hybrid natures, to form new and emergent modes of understanding intelligences.

    Supported By:
    National Arts Council Singapore
    `;
    const txt2 = `Brandon Tay is a Singaporean artist whose work explores emergent complexities in digital materials. Starting out as a prominent figure in Singapore's underground audio-visual scene, he has more recently expanded his practice into one that engages with varying permutations of projection mapping, digital, computer-generated imagery (CGI), time-based and new media, game environment art.

    In his practice, he complicates distinctions between the tangible and incorporeal, both in composition and well as subject matter, often looking into thematics surrounding the relationships between history and futurity, digital materiality, and contemporary philosophies.  Brandon views digital materials as irreducible components that combine dynamically to create a more complex whole. Working with diverse components, whether fragments of 3D geometry, prompt tokens or 3D avatars of human beings, he combines these with out-of-context factors — such as doom-scrolling induced trance states, automatic writing, game physics and the likes — to simulate something that feels larger than its parts in unpredictable ways.

    As a collaborator and individually, his work has been shown at Art Dubai, tanzhaus nrw Düsseldorf, Kyoto Dance Experiment, Singapore International Festival of the Arts, M1 Fringe Festival among others. His works are also in private and public collections such as the Australian Centre for Moving Images (ACMI), Melbourne/Naarm.`;
    const abtcolab = `ABOUT THE COLLABORATORS

    Rafi Abdullah (b. 1991) is a curator based out of Singapore with close to a decade of experience working in varying capacities across cultural institutions and museums (Indian Heritage Centre, Institute of Contemporary Arts Singapore, The Private Museum) and art galleries (Wetterling Teo Gallery, Hatch Art Project) in Singapore. He was a selected participant in the curatorial workshops, Staging and the Exhibition (2018) hosted by Institute of Contemporary Arts (ICA) Singapore in partnership with the Department of Visual Culture, Goldsmiths University of London; as well as the Workshops for Emerging Arts Professionals (2020) hosted by Para Site, Hong Kong. He has also written for several artist catalogues and books, as well as for/in journals, platforms, and institutions such as Yavuz Gallery, Sullivan+Strumpf, National Gallery Singapore, and So Far. Most recently, he was the co-curator of the digital exhibition Many Beliefs, One Future 2.0 (2022), and curator for the digital billboard art festival Crossroads (2022), and the exhibition Poor Imagination (2019).
`;
    const bogna = `
    Bogna Konior is Assistant Professor at the Interactive Media Arts department, and co-director of AI & Culture Center at NYU Shanghai. In 2023, she is a Research Fellow in the Antikythera Program on Speculative Computation at the Berggruen Institute, and a mentor in the Synthetic Intelligence program at Medialab-Matadero Madrid. Her work on digital culture, philosophy of new media, and posthumanism has been presented internationally, recently including the Cambridge Leverhulme Centre for the Future of Intelligence, ZKM | Center for Art and Media, e-flux, and the Ljubljana Biennale. With Benjamin Bratton and Anna Greenspan, she is the co-editor of Machine Decision is Not Final: China and the History and Future of AI, forthcoming from Urbanomic. She is working on two projects concerned with long-term trajectories of technological development. Her current academic project is on Polish science fiction writer and philosopher, Stanislaw Lem, and his neglected contribution to the theory of biotechnological evolution of autonomous reason. She is also working on a multimedia research project on female Catholic mysticism as an early form of cyberfeminism and a predictor of machine erotics, nonhuman personhood, and artificial reproduction.
`;
    const darius = `
    Darius Ou (b. 1993) is a graphic designer based in Singapore. The eponymous studio has worked with local institutions like Asian Film Archive, DesignSingapore Council, NTU CCA Singapore, as well as internationally with Kaleidoscope, Tai Kwun Contemporary and 89plus, amongst others. The studio’s works have been exhibited in the 13th Golden Bee Moscow Biennale, and the 28th Brno Biennial of Graphic Design; selected by Art Directors' Club New York (YG 19 Finalist), ADC Switzerland and Society of Typographic Arts Chicago (STA 100); and shown in Studio 13/16 (Centre Pompidou), CCA Derry~Londonderry, and Institute of Contemporary Arts Singapore.
`;
    const tone = `
    TO NEW ENTITIES is an art and creative collective that builds media worlds. They believe in telling character-driven stories that emphasise and celebrate imagination and creativity in an increasingly complex and intertwined world. They operate through curation, digital environment and exhibition making, digital and tech support for artists, film programming, the production of art, and more. They have received coverage by media platforms both locally and internationally such as Female Magazine, Mens Folio, and Stir World. Most recently, they curated and organised Crossroads (2022) the first digital billboard art festival in Singapore, the exhibition Contemporary Gestures (2022) representing Singapore on international platform The Upside Space. They were also selected for participation in the independent art book fair SPRINT Milano (2022) in Spazzio Maiocchi, Milan; the inaugural BoluevArt Festival, Art in Space, Dubai; and the Rockaway Art Festival, hosted by Rhizome and Do Not Research at The Locker Room, New York.
`;
    const txt3 = `ABOUT THE GALLERY
    
    Yeo Workshop is a leading art gallery based in Gillman Barracks, Singapore since 2013. It shows innovative practices of contemporary artists. Covering a multi-disciplinary approach, the gallery defines itself by its progressive engagements.
`;
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
            <ServerRender
                text={des}
                mwidth={800}
                justify={'flex-start'}
            ></ServerRender>
            <br></br>
            <ServerRender text={txt1} mwidth={800}></ServerRender>
            <ImageAbout img={'NAC.png'} size={150} wrappersz={800}></ImageAbout>
            <ServerRender
                text={`
                Presented by
            Yeo Workshop
            `}
                mwidth={800}
            ></ServerRender>
            <ImageAbout img={'YW.png'} size={150} wrappersz={800}></ImageAbout>
            <br></br>
            <ServerRender
                text={'ABOUT THE ARTIST'}
                mwidth={1000}
                justify="flex-start"
            ></ServerRender>
            <ImageAbout
                img={'brandontay.jpg'}
                size={300}
                wrappersz={1000}
                justify="flex-start"
                class_="model_img"
            ></ImageAbout>
            <br></br>
            <ServerRender
                text={txt2}
                mwidth={1000}
                justify="flex-start"
            ></ServerRender>
            <br></br>
            <OutLink link={'www.brandontay.net'}></OutLink>
            <OutLink
                link={'www.yeoworkshop.com/artists/59-brandon-tay/'}
            ></OutLink>
            <br></br>
            <ServerRender text={abtcolab} mwidth={700}></ServerRender>
            <OutLink
                link={'www.rafiabdullah.com'}
                fontsz={'0.75em'}
                class_="flex_end"
            ></OutLink>
            <ServerRender text={bogna} mwidth={700}></ServerRender>
            <OutLink
                link={'www.bognamk.com'}
                fontsz={'0.75em'}
                class_="flex_end"
            ></OutLink>
            <ServerRender text={darius} mwidth={700}></ServerRender>
            <OutLink
                link={'dariusou.work'}
                fontsz={'0.75em'}
                class_="flex_end"
            ></OutLink>
            <ServerRender text={tone} mwidth={700}></ServerRender>
            <OutLink
                link={'tonewentities.com'}
                fontsz={'0.75em'}
                class_="flex_end"
            ></OutLink>
            <ServerRender text={txt3} mwidth={700}></ServerRender>
            <OutLink
                link={'www.yeoworkshop.com'}
                fontsz={'0.75em'}
                class_="flex_end"
            ></OutLink>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <RightPanel no={1}></RightPanel>
        </>
    );
}
