import ContentIndex from '@/components/content/ContentIndex'; import { getByKind } from '@/lib/content';
export const metadata={title:"Founder's Desk | LipiCure",description:'Monthly reflections from the founder on LipiCure progress, learning and direction.'};
export default function Page(){return <ContentIndex kicker="From the Founder's Desk" title="What we are building, learning and exploring" description="A monthly record of the ideas, decisions, progress and open questions shaping LipiCure." items={getByKind('founder')}/>}
