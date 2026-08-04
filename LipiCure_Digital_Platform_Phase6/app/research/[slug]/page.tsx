import { notFound } from 'next/navigation';
import DynamicArticle from '@/components/content/DynamicArticle';
import { getByKind,getContent } from '@/lib/content';
export function generateStaticParams(){return getByKind('research').map(i=>({slug:i.slug}))}
export default function Page({params}:{params:{slug:string}}){const item=getContent('research',params.slug);if(!item)notFound();return <DynamicArticle item={item}/>}
