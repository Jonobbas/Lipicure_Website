const trls = [
  ['TRL 3','Analytical and experimental proof of concept'],
  ['TRL 4','Laboratory validation of components and process logic'],
  ['TRL 5','Validation in a relevant, integrated environment'],
  ['TRL 6','Pilot demonstration and process integration'],
  ['TRL 7','Operational demonstration with user and regulatory inputs'],
  ['TRL 8','Qualified technology package and readiness evidence'],
  ['TRL 9','Commercially proven application']
];

export default function TRLTimeline(){
  return <div className="trl-timeline">{trls.map(([trl,text],index)=><article key={trl}><span>{trl}</span><div className="trl-line"><i style={{width:`${index===trls.length-1?100:58}%`}}/></div><p>{text}</p></article>)}</div>;
}
