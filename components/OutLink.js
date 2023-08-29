export const dynamic = 'force-static';
export const fetchCache = 'force-cache';

export default function OutLink({
    link,
    class_ = 'flex_sta',
    fontsz = 'inherit',
}) {
    return (
        <a
            href={`http://${link}/`}
            target="_blank"
            className={class_}
            style={{ fontSize: fontsz }}
        >
            {link}
        </a>
    );
}
