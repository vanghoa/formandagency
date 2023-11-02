import OpenAI from 'openai';

export const revalidate = 0;
export const dynamic = 'force-dynamic';
export const fetchCache = 'only-no-store';

const openai = new OpenAI({
    apiKey: process.env['OPEN_AI_API_KEY'],
});

const CORSheader = {
    status: 200,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers':
            'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
    },
};

export async function POST(request) {
    try {
        const { messages } = await request.json();
        console.log(messages);
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [...messages],
            max_tokens: 300,
        });
        return new Response(JSON.stringify({ completion: response }));
    } catch (error) {
        if (error instanceof OpenAI.APIError) {
            console.error(error.status);
            console.error(error.message);
            console.error(error.code);
            console.error(error.type);
        } else {
            console.log(error);
        }
        return new Response(
            JSON.stringify({ error: true, msg: error.message })
        );
    }
}

export async function OPTIONS() {
    return new Response(null);
}
