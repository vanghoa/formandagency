export default function ServerRender({ text }) {
    return (
        <div className="wrapper">
            <div className="frontend">
                {text.split('\n').map((line, index) => {
                    if (line == '') {
                        return <br key={index}></br>;
                    }
                    return (
                        <>
                            <p key={index}>{line}</p>
                        </>
                    );
                })}
            </div>
            <div className="backend"></div>
        </div>
    );
}
