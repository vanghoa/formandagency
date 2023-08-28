export const dynamic = 'force-static';
export const fetchCache = 'force-cache';

export default function OutLink({ link }) {
    return (
        <a href={`http://${link}/`} target="_blank" className="flex_sta">
            {link}
        </a>
    );
}
