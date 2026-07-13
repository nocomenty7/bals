import { GET as rssGet } from '../rss/route';

export const dynamic = 'force-dynamic';

export async function GET() {
  return rssGet();
}
