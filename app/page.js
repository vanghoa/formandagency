import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
    return (
        <iframe
            src="https://player.vimeo.com/video/856126350?background=1"
            width="1920"
            height="1080"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen=""
            style={{
                width: '100vw',
                height: '56.25vw',
                minHeight: '100vh',
                minWidth: '177.77vh',
                position: 'relative',
                pointerEvents: 'none',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                padding: '0',
            }}
        ></iframe>
    );
}
