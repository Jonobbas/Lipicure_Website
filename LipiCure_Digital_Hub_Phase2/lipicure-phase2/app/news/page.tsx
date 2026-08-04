import ContentIndex from '@/components/content/ContentIndex'; import { getByKind } from '@/lib/content';
export const metadata={title:'News & Progress | LipiCure',description:'LipiCure milestones, collaborations and company-building updates.'};
export default function Page(){return <ContentIndex kicker="News & Progress" title="Follow LipiCure as the platform develops" description="A transparent record of research milestones, collaboration discussions, digital-platform releases, events and company-building progress." items={getByKind('news')}/>}
