import{d as _,c as y,b as n}from"./index-BSjwMPY1.js";const E=_({name:"Progress",props:{format:{type:Function,default:s=>`${s}%`},percent:{type:Number,default:0},showInfo:{type:Boolean,default:!0},status:{type:String,default:"normal"},strokeColor:{type:[String,Object,Array],default:void 0},strokeLinecap:{type:String,default:"round"},success:{type:Object,default:()=>({})},title:{type:String,default:""},trailColor:{type:String,default:void 0},type:{type:String,default:"line"},size:{type:[Number,String,Array],default:"default"},steps:{type:Number,default:0},strokeWidth:{type:Number,default:6},gapDegree:{type:Number,default:75},gapPosition:{type:String,default:"bottom"}},setup(s){const h=y(()=>Math.max(0,Math.min(100,s.percent))),g=y(()=>{const{success:e}=s;return(e==null?void 0:e.percent)!==void 0?Math.max(0,Math.min(e.percent,100)):0}),k={normal:"var(--progress-color-normal, #1890ff)",success:"var(--progress-color-success, #52c41a)",exception:"var(--progress-color-exception, #ff4d4f)",active:"var(--progress-color-normal, #1890ff)"},d=y(()=>s.strokeColor?s.strokeColor:k[s.status||"normal"]),$=y(()=>{var e;return((e=s.success)==null?void 0:e.strokeColor)||k.success}),b=y(()=>{const{status:e,size:t,type:l}=s;return["relative",l==="line"?"w-full":"",e==="active"&&l==="line"?"progress-active":"",t==="small"?"h-3":"h-5"].filter(Boolean).join(" ")}),w=e=>typeof e=="object"&&e.from&&e.to,P=(e,t)=>{const l={width:`${t}%`,height:"100%"};return typeof e=="string"?l.backgroundColor=e:w(e)&&(l.backgroundImage=`linear-gradient(${e.direction||"to right"}, ${e.from}, ${e.to})`),l},C=()=>{const{status:e}=s;return e==="success"?n("div",{class:"inline-flex items-center justify-center rounded-full bg-green-500 dark:bg-green-600 shadow-sm transition-all duration-300 icon-container"},[n("svg",{viewBox:"0 0 24 24",stroke:"white","stroke-width":"3",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",class:"animate-success-appear icon-svg"},[n("polyline",{points:"6 12 10 16 18 8"},null)])]):e==="exception"?n("div",{class:"inline-flex items-center justify-center rounded-full bg-red-500 dark:bg-red-600 shadow-sm transition-all duration-300 icon-container"},[n("svg",{viewBox:"0 0 24 24",stroke:"white","stroke-width":"3",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",class:"animate-error-appear icon-svg"},[n("line",{x1:"18",y1:"6",x2:"6",y2:"18"},null),n("line",{x1:"6",y1:"6",x2:"18",y2:"18"},null)])]):null},A=()=>{const{steps:e,strokeColor:t,trailColor:l,percent:m}=s;if(!e||e<=0)return null;const c=Math.round(e*(h.value/100)),u=100/e;return n("div",{class:"flex w-full h-full overflow-hidden"},[Array.from({length:e}).map((i,r)=>{const a=r<c;let o=l||"rgba(0, 0, 0, 0.06)";return a&&(Array.isArray(t)?o=t[r%t.length]||t[0]:typeof t=="string"?o=t:w(t)?o=t.from:o=k[s.status||"normal"]),n("div",{key:r,class:`h-full transition-all duration-300 ${s.strokeLinecap==="round"?"rounded-full":""} ${r===0?"rounded-l-full":""} ${r===e-1?"rounded-r-full":""}`,style:{backgroundColor:o,width:`calc(${u}% - ${e>1?2:0}px)`,marginRight:r<e-1?"2px":"0"}},null,4)})])},I=()=>{const{trailColor:e,strokeLinecap:t}=s;return s.steps&&s.steps>0?n("div",{class:`${b.value} overflow-hidden`,style:{backgroundColor:"transparent"}},[A()]):n("div",{class:"flex flex-col w-full"},[n("div",{class:`w-full overflow-hidden transition-all duration-300 ${b.value} ${t==="round"?"rounded-full":""}`,style:{backgroundColor:e||"rgba(0, 0, 0, 0.06)"}},[g.value>0&&n("div",{class:`absolute left-0 top-0 h-full transition-all duration-300 ${t==="round"?"rounded-full":""}`,style:P($.value,g.value)},null,4),n("div",{class:`absolute left-0 top-0 h-full transition-all duration-300 ${t==="round"?"rounded-full":""}`,style:P(d.value,h.value)},null,4)],4)])},j=(e,t,l,m=0)=>{const c=t+s.strokeWidth/2;if(s.type==="circle")return`M ${c},${s.strokeWidth/2} 
                a ${t},${t} 0 1,1 0,${2*t} 
                a ${t},${t} 0 1,1 0,-${2*t}`;const u=m/180*Math.PI;let i=0;switch(l){case"left":i=-Math.PI/2+u;break;case"right":i=-Math.PI/2-u;break;case"bottom":i=Math.PI/2;break;case"top":default:i=-Math.PI/2}const r=2*Math.PI-u*2,a=i+r,o={x:c+t*Math.cos(i),y:c+t*Math.sin(i)},f={x:c+t*Math.cos(a),y:c+t*Math.sin(a)},v=r>=Math.PI?1:0;return`M ${o.x},${o.y} 
              A ${t},${t} 0 ${v},1 ${f.x},${f.y}`},z=()=>{const{type:e,strokeWidth:t,gapDegree:l,gapPosition:m,trailColor:c,strokeLinecap:u,showInfo:i,success:r}=s,a=s.size==="small"?80:s.size==="default"?120:Array.isArray(s.size)?s.size[0]:Number(s.size)||120,o=a/2-t/2,f=2*Math.PI*o,v=e==="dashboard"?l||75:0,D=e==="dashboard"?m||"bottom":"top",L=e==="dashboard"?(360-v)/360:1,x=f*L,p=j(100,o,D,v),N={stroke:c||(s.status==="success"?"#f0f9eb":"#f5f5f5"),strokeDasharray:`${x}px ${f}px`,strokeDashoffset:"0",transition:"stroke-dashoffset 0.3s ease, stroke-dasharray 0.3s ease, stroke 0.3s"},B=()=>{var S;return typeof d.value=="string"?d.value:Array.isArray(d.value)?d.value[0]:((S=d.value)==null?void 0:S.from)||k[s.status||"normal"]},W=h.value/100,V=x*W,F={stroke:B(),strokeDasharray:`${V}px ${f}px`,strokeDashoffset:"0",transition:"stroke-dashoffset 0.3s ease, stroke-dasharray 0.3s ease, stroke 0.3s"},G=g.value/100,O=x*G,R=r!=null&&r.percent?{stroke:$.value,strokeDasharray:`${O}px ${f}px`,strokeDashoffset:"0",transition:"stroke-dashoffset 0.3s ease, stroke-dasharray 0.3s ease, stroke 0.3s"}:{},M={fontSize:a*.16+6};return n("div",{class:"inline-flex items-center justify-center relative",style:{width:`${a}px`,height:`${a}px`}},[n("svg",{viewBox:`0 0 ${a} ${a}`,width:a,height:a},[n("path",{class:"transition-all",d:p,"stroke-linecap":u,"stroke-width":t,fill:"none",style:N},null,12,["d","stroke-linecap","stroke-width"]),(r==null?void 0:r.percent)&&n("path",{class:"transition-all",d:p,"stroke-linecap":u,"stroke-width":t,fill:"none",style:R},null,12,["d","stroke-linecap","stroke-width"]),n("path",{class:"transition-all",d:p,"stroke-linecap":u,"stroke-width":t,fill:"none",style:F},null,12,["d","stroke-linecap","stroke-width"])],8,["width","height"]),i&&n("div",{class:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-full h-full"},[s.status==="success"||s.status==="exception"?n("span",{class:"flex items-center justify-center",style:M},[C()],4):n("span",{class:"text-center",style:M},[s.format(h.value,g.value)],4)])])};return()=>{const{type:e,showInfo:t,title:l}=s;return n("div",{class:`inline-flex items-center transition-all duration-300 dark:text-white ${e==="line"?"w-full flex-col sm:flex-row sm:items-center":""}`,title:l},[n("div",{class:`${e==="line"?"w-full":""}`},[e==="line"?I():z()]),e==="line"&&t&&n("div",{class:`ml-2 whitespace-nowrap min-w-[40px] text-right text-sm flex items-center justify-end ${s.size==="small"?"text-xs":""}`},[s.status==="success"||s.status==="exception"?C():s.format(h.value,g.value)])],8,["title"])}}});export{E as P};
//# sourceMappingURL=Progress-DkwwFPdY.js.map
