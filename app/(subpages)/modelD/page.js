import ModelCom from '@/components/ModelCom';

export const dynamic = 'force-static';
export const fetchCache = 'force-cache';

export default function subpage() {
    let title = 'Model D: 黑科技';
    let spec = `3D Printed Sculpture with Embedded Media Display and LCD Display with Dynamic Video Loop
    28cm x 26cm x 25cm
    2023`;
    let des = `Heikeji 黑科技

    The term 黑科技 (Heikeji) was coined during the early decades of the 21st century, referring to the opacity in the working processes of the ever-accelerating technologies relating to AI, surveillance, and cryptography. This relic, recovered in the ruins of  Neo-Shanghai, represents a now-lost application of these concepts. It's use now obscure to us, it perhaps was an aesthetic object, an evolution of the Chinese Box, representing  a dark mirror to a form of Chinoiserie, in which Western views of the inscrutability of Chinese thought, culture and technology  are reflected in its harsh and  uncanny aggressiveness.
    
    'The Bezos Collection: 21st Century Sinofuturist  Chinese Art and Design''
    `;
    return (
        <ModelCom
            img={'D'}
            next={'E'}
            last={'C'}
            title={title}
            spec={spec}
            des={des}
            no={9}
        ></ModelCom>
    );
}
