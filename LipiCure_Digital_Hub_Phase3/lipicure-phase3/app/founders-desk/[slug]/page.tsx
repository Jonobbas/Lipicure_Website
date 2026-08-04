import { notFound } from 'next/navigation';
import DynamicArticle from '@/components/content/DynamicArticle';
import { getContent, getByKind } from '@/lib/content';
export function generateStaticParams(){ return getByKind('founder').map(item=>({slug:item.slug})); }
export default function Page({params}:{params:{slug:string}}){ const item=getContent('founder',params.slug); if(!item) notFound(); return <DynamicArticle item={item}/>; }
