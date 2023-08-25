import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
    return (
        <iframe
            id="landingvideo"
            src="https://player.vimeo.com/video/856126350?background=1"
            width="1920"
            height="1080"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen=""
        ></iframe>
    );
}
