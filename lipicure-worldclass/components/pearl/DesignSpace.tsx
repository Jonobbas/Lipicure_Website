const items = [
  ['CPP','Critical Process Parameters','Variables that can influence process performance and product quality.'],
  ['CQA','Critical Quality Attributes','Measurable outputs that define whether the process is delivering the intended quality.'],
  ['DOE','Design of Experiments','Structured experiments that reveal interactions and reduce trial-and-error.'],
  ['Design Space','Operating Knowledge','The multidimensional region where acceptable performance is predicted and then verified.']
];

export default function DesignSpace(){
  return <div className="design-space-grid">{items.map(([code,title,text])=><article key={code}><span>{code}</span><h3>{title}</h3><p>{text}</p></article>)}</div>;
}
