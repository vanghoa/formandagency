/* eslint-disable @next/next/no-before-interactive-script-outside-document */
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
                    src="https://cdn.jsdelivr.net/npm/interactjs/dist/interact.min.js"
                    strategy="beforeInteractive"
                />
                <Script
                    src="https://cdn.jsdelivr.net/npm/opentype.js"
                    strategy="beforeInteractive"
                />
                <Script
                    src="https://player.vimeo.com/api/player.js"
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
                            <div id="sobelow">
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
                                        agency
                                        <br></br>
                                        <br></br>
                                    </span>
                                    <span>agency</span>
                                </Link>
                            </div>
                            <div id="logoouter">
                                <Link
                                    id="logo1"
                                    className="logo"
                                    href="/"
                                    prefetch={true}
                                >
                                    <br></br>&nbsp;{' '}
                                    <span className="asc mark">f</span>orm&amp;
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
                                style={{
                                    transform:
                                        'translateX(max(calc(var(--nav1x) * var(--nav_unit) + var(--nav1)),-3em))',
                                }}
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
                                style={{
                                    transform:
                                        'translateX(max(calc(var(--nav2x) * var(--nav_unit) + var(--nav2)),-3em))',
                                }}
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
                                style={{
                                    transform:
                                        'translateX(max(calc(var(--nav3x) * var(--nav_unit) + var(--nav3)),-3em))',
                                }}
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
                                style={{
                                    transform:
                                        'translateX(max(calc(var(--nav4x) * var(--nav_unit) + var(--nav4)),-3em))',
                                }}
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
                                href="/loreArchive"
                                prefetch={true}
                                style={{
                                    transform:
                                        'translateX(max(calc(var(--nav5x) * var(--nav_unit) + var(--nav5)),-3em))',
                                }}
                            >
                                <span>l</span>
                                <span>
                                    <span className="asc mark">l</span>ore arc
                                    <span className="asc mark">h</span>ive
                                </span>
                            </Link>
                            <button
                                className="sublink"
                                style={{
                                    transform:
                                        'translateX(max(calc(var(--nav6x) * var(--nav_unit) + var(--nav6)),-3em))',
                                }}
                            >
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
