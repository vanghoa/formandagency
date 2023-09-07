export const dynamic = 'force-static';
export const fetchCache = 'force-cache';

export default function ServerRender({
    text,
    mwidth,
    fontsz = 'inherit',
    justify = 'flex-end',
    class_ = '',
}) {
    let maparr = text.split('\n');
    return (
        <div
            className={`flex ${class_}`}
            style={{ fontSize: fontsz, justifyContent: justify }}
        >
            <div
                className="wrapper anim"
                style={{ '--min_w': `${(mwidth / 1800) * 100}vmax` }}
            >
                <div className="backend">
                    {maparr.map((line, index) => {
                        if (line == '') {
                            line = ' ';
                        }
                        return (
                            <>
                                <p key={index}>{line}</p>
                            </>
                        );
                    })}
                </div>
                <div className="frontend">
                    {maparr.map((line, index) => {
                        if (line.trim().replace(/\s+/g, ' ') == '') {
                            return (
                                <p key={index}>
                                    <br></br>
                                </p>
                            );
                        }
                        return (
                            <>
                                <p key={index}>{line}</p>
                            </>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
