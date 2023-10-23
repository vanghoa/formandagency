import OpenAI from 'openai';
import { NextResponse } from 'next/server';

export const corsHeaders = {
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers':
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization',
};

export const revalidate = 0;
export const dynamic = 'force-dynamic';
export const fetchCache = 'only-no-store';

const openai = new OpenAI({
    apiKey: process.env['OPEN_AI_API_KEY'],
});

export async function GET(request) {
    try {
        const { messages } = await request.json();
        console.log(messages);
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [...messages],
            max_tokens: 300,
        });
        return NextResponse.json(
            { jsonBody: { completion: response } },
            { headers: corsHeaders }
        );
    } catch (error) {
        if (error instanceof OpenAI.APIError) {
            console.error(error.status); // e.g. 401
            console.error(error.message); // e.g. The authentication token you passed was invalid...
            console.error(error.code); // e.g. 'invalid_api_key'
            console.error(error.type); // e.g. 'invalid_request_error'
        } else {
            // Non-API error fuck
            console.log(error);
        }
        return NextResponse.json(
            {
                jsonBody: { error: true, msg: error.message },
            },
            { headers: corsHeaders }
        );
    }
}
