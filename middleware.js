import { NextResponse } from 'next/server';

// the list of all allowed origins dit con me
const allowedOrigins = [
    //'http://localhost:3000',
    'https://vanghoa.github.io',
    'http://localhost:5501',
    'http://127.0.0.1:5501',
    'http://localhost:5502',
    'http://127.0.0.1:5502',
];

export function middleware(req) {
    // retrieve the current response
    console.log('middleware <3');

    // retrieve the HTTP "Origin" header
    // from the incoming request
    const origin = req.headers.get('origin');
    console.log(origin);

    // if the origin is an allowed one,
    // add it to the 'Access-Control-Allow-Origin' header
    if (allowedOrigins.includes(origin)) {
        const res = NextResponse.next();
        res.headers.append('Access-Control-Allow-Origin', origin);
        // add the remaining CORS headers to the response
        res.headers.append('Access-Control-Allow-Credentials', 'true');
        res.headers.append(
            'Access-Control-Allow-Methods',
            'GET,DELETE,PATCH,POST,PUT'
        );
        res.headers.append(
            'Access-Control-Allow-Headers',
            'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
        );
        return res;
    } else {
        return NextResponse.json(
            { message: 'Aha! Not so fast. wtf is wrong' },
            { status: 401 }
        );
    }
}

// specify the path regex to apply the middleware to
export const config = {
    matcher: '/api/openai/:path*',
};
