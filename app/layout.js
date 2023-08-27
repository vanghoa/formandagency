import './normalize.css';
import './globals.css';
import Script from 'next/script';
import localFont from 'next/font/local';
import Link from 'next/link';
import { Noto_Serif_TC } from 'next/font/google';

const Noto = Noto_Serif_TC({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-noto',
});

const asabovesobelow = localFont({
    weight: '100',
    src: '../public/font/AsAbove,SoBelow(Beta47)VF.ttf',
    display: 'swap',
    variable: '--asabovesobelow',
});

export const metadata = {
    title: 'Form and Agency',
    description: 'website Form and Agency by Bao Anh Bui',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Script src="/script/layout.js" />
            <body className={`${asabovesobelow.variable} ${Noto.variable}`}>
                <Script
                    src="/script/interact.min.js"
                    strategy="beforeInteractive"
                />
                <Script
                    src="/script/opentype.js"
                    strategy="beforeInteractive"
                />
                <Script
                    src="/script/beforeinteractive.js"
                    strategy="beforeInteractive"
                />
                <main id="main">
                    <nav>
                        <div id="nav_handle"></div>
                        <div id="overflow">
                            <div id="logoouter">
                                <Link
                                    id="logo1"
                                    className="logo"
                                    href="/"
                                    prefetch={true}
                                >
                                    <br></br>&nbsp; form&amp;
                                </Link>
                                <Link
                                    id="logo2"
                                    className="logo"
                                    href="/"
                                    prefetch={true}
                                >
                                    <span>
                                        a<span className="mark">g</span>enc
                                        <span className="mark y">y</span>
                                        <br></br>
                                        <br></br>
                                    </span>
                                    <span>
                                        a<span className="des mark">g</span>
                                        enc
                                        <span className="des mark">y</span>
                                    </span>
                                </Link>
                            </div>
                            <Link
                                className="sublink"
                                href="/about"
                                prefetch={true}
                            >
                                <span>a</span>
                                <span>
                                    a<span className="asc mark">b</span>
                                    ou
                                    <span className="des mark">t</span>
                                </span>
                            </Link>
                            <Link
                                className="sublink"
                                href="/curatorialText"
                                prefetch={true}
                            >
                                <span>c</span>
                                <span>
                                    cura
                                    <span className="des mark">t</span>
                                    oria
                                    <span className="asc mark">l</span>{' '}
                                    <span className="des mark">t</span>
                                    ex
                                    <span className="des mark">t</span>
                                </span>
                            </Link>
                            <Link
                                className="sublink"
                                href="/interview"
                                prefetch={true}
                            >
                                <span>i</span>
                                <span>
                                    in
                                    <span className="des mark">t</span>
                                    erview
                                </span>
                            </Link>
                            <Link
                                className="sublink"
                                href="/artistTalk"
                                prefetch={true}
                            >
                                <span>a</span>
                                <span>
                                    ar
                                    <span className="des mark kernl_negav1">
                                        t
                                    </span>
                                    is
                                    <span className="des mark">t</span>{' '}
                                    <span className="des mark">t</span>a
                                    <span className="asc mark">l</span>
                                    <span className="asc mark">k</span>
                                </span>
                            </Link>
                            <Link
                                className="sublink"
                                href="/instanceRepository"
                                prefetch={true}
                            >
                                <span>i</span>
                                <span>
                                    ins
                                    <span className="des mark">t</span>
                                    ance re
                                    <span className="des mark">p</span>
                                    osi
                                    <span className="des mark">t</span>
                                    or
                                    <span className="des mark">y</span>
                                </span>
                            </Link>
                            <button className="sublink">
                                <span id="modelonclick_">m</span>
                                <span id="modelonclick">
                                    mo
                                    <span className="asc mark">d</span>e
                                    <span className="asc mark">l</span>s
                                </span>
                                <Link
                                    className="model"
                                    href="/modelA"
                                    prefetch={true}
                                >
                                    <span>model A</span>
                                    <span>: Adversaries</span>
                                </Link>
                                <Link
                                    className="model"
                                    href="/modelB"
                                    prefetch={true}
                                >
                                    <span>model B</span>
                                    <span>: Orchid Mantis</span>
                                </Link>
                                <Link
                                    className="model"
                                    href="/modelC"
                                    prefetch={true}
                                >
                                    <span>model C</span>
                                    <span>: Marrow Codex</span>
                                </Link>
                                <Link
                                    className="model"
                                    href="/modelD"
                                    prefetch={true}
                                >
                                    <span>model D</span>
                                    <span>: 黑科技</span>
                                </Link>
                                <Link
                                    className="model"
                                    href="/modelE"
                                    prefetch={true}
                                >
                                    <span>model E</span>
                                    <span>: Nomad Lexis </span>
                                </Link>
                            </button>
                            <div id="ontransitionend" className="trans"></div>
                        </div>
                    </nav>
                    <section>{children}</section>
                    <button id="togglelig">
                        <span>{'<ligature'}</span>
                        <span>{'lg'}</span>
                    </button>
                </main>
            </body>
        </html>
    );
}
