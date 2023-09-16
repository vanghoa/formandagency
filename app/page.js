import RightPanel from '@/components/RightPanel';

export default function Home() {
    return (
        <>
            <div id="videoload" className="play"></div>
            <iframe
                id="landingvideo"
                src="https://player.vimeo.com/video/856126350?background=1"
                width="1920"
                height="1080"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen=""
                data-ready="true"
            ></iframe>
            <RightPanel no={0}></RightPanel>
        </>
    );
}
