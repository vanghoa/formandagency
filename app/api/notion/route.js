import { Client } from '@notionhq/client';
import { NextResponse } from 'next/server';

export const revalidate = 0;
export const dynamic = 'force-dynamic';
export const fetchCache = 'only-no-store';

const notionSecret = process.env.NOTION_SECRET;
const notionDatabaseId = process.env.NOTION_DATABASE_ID;

const notion = new Client({ auth: notionSecret });

export async function GET() {
    try {
        const query = await notion.databases.query({
            database_id: notionDatabaseId,
        });

        const rows = query.results.map((res) => {
            let vimeo = res.properties['Vimeo id number']?.number;
            let des = res.properties['Description']['rich_text'][0]?.plain_text;
            des = des ? des : `This video's description is not available`;
            return {
                edit: res.properties['Last edited time']['last_edited_time'],
                create: res.properties['Created time']['created_time'],
                vimeo: `${vimeo}`,
                des: `${des}`,
            };
        });

        return NextResponse.json({
            message: rows,
        });
    } catch (e) {
        console.log('errbucac: ', e);
        return NextResponse.json({ message: [] }, { status: 400 });
    }
}
