import ContentIndex from '@/components/content/ContentIndex'; import { getByKind } from '@/lib/content';
export const metadata={title:'Insights | LipiCure',description:'Research-informed perspectives on marine biotechnology and the blue bioeconomy.'};
export default function Page(){return <ContentIndex kicker="LipiCure Insights" title="Research, markets and the future of marine biotechnology" description="Fortnightly perspectives designed to connect scientific development with industrial need, commercial opportunity and responsible innovation." items={getByKind('insight')}/>}
