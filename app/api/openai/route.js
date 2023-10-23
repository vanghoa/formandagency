import OpenAI from 'openai';
import { NextResponse } from 'next/server';

export const revalidate = 0;
export const dynamic = 'force-dynamic';
export const fetchCache = 'only-no-store';

const openai = new OpenAI({
    apiKey: process.env['OPEN_AI_API_KEY'],
});

export async function POST(request) {
    try {
        const { messages } = await request.json();
        console.log(messages);
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [...messages],
            max_tokens: 300,
        });
        return new Response(
            { jsonBody: { completion: response } },
            {
                status: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods':
                        'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers':
                        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
                },
            }
        );
    } catch (error) {
        if (error instanceof OpenAI.APIError) {
            console.error(error.status); // e.g. 401
            console.error(error.message); // e.g. The authentication token you passed was invalid...
            console.error(error.code); // e.g. 'invalid_api_key'
            console.error(error.type); // e.g. 'invalid_request_error'
        } else {
            // Non-API error
            console.log(error);
        }
        return new Response(
            {
                jsonBody: { error: true, msg: error.message },
            },
            {
                status: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods':
                        'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers':
                        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
                },
            }
        );
    }
}

export async function OPTIONS(request) {
    try {
        const allowedOrigin = request.headers.get('origin');
        return new Response(
            { jsonBody: { error: true, msg: 'OPTIONS' } },
            {
                status: 200,
                headers: {
                    'Access-Control-Allow-Origin': allowedOrigin || '*',
                    'Access-Control-Allow-Methods':
                        'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers':
                        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
                },
            }
        );
    } catch (error) {
        if (error instanceof OpenAI.APIError) {
            console.error(error.status); // e.g. 401
            console.error(error.message); // e.g. The authentication token you passed was invalid...
            console.error(error.code); // e.g. 'invalid_api_key'
            console.error(error.type); // e.g. 'invalid_request_error'
        } else {
            // Non-API error
            console.log(error);
        }
        return new Response(
            {
                jsonBody: { error: true, msg: error.message },
            },
            {
                status: 200,
                headers: {
                    'Access-Control-Allow-Origin': allowedOrigin || '*',
                    'Access-Control-Allow-Methods':
                        'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers':
                        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
                },
            }
        );
    }
}
