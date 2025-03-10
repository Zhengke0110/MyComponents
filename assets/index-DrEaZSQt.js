import{d as p,s as b,e as r,m as w,p as C,v as _,r as i,c as k,a,k as v,t as P,F as j,f as B,b as N,_ as $}from"./index-BdXq4RCm.js";const q={primary:{border:"border-indigo-500",text:"text-indigo-600",hover:"hover:border-indigo-300 hover:text-indigo-700"},success:{border:"border-green-500",text:"text-green-600",hover:"hover:border-green-300 hover:text-green-700"},warning:{border:"border-yellow-500",text:"text-yellow-600",hover:"hover:border-yellow-300 hover:text-yellow-700"},danger:{border:"border-red-500",text:"text-red-600",hover:"hover:border-red-300 hover:text-red-700"},info:{border:"border-blue-500",text:"text-blue-600",hover:"hover:border-blue-300 hover:text-blue-700"}},z=p({name:"PageButton",props:{item:{type:Object,required:!0},current:Number,disabled:Boolean,themeClasses:Object,onClick:Function},setup(t){return()=>{var d,o,u;return r("button",{class:["inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium transition-all duration-200 ease-in-out",t.current===t.item.value?`${((d=t.themeClasses)==null?void 0:d.border)||""} ${((o=t.themeClasses)==null?void 0:o.text)||""}`:`border-transparent text-gray-500 ${((u=t.themeClasses)==null?void 0:u.hover)||""}`,t.disabled?"cursor-not-allowed opacity-50":"cursor-pointer"],disabled:t.disabled,onClick:()=>{var c;return typeof t.item.value=="number"&&((c=t.onClick)==null?void 0:c.call(t,t.item.value))}},[t.item.value],10,["disabled","onClick"])}}}),h=p({name:"Pagination",props:{total:{type:Number,required:!0},current:{type:Number,required:!0},pageSize:{type:Number,default:20},disabled:{type:Boolean,default:!1},showQuickJumper:{type:Boolean,default:!1},theme:{type:String,default:"primary"}},emits:["update:current","change"],setup(t,{emit:d}){const o=b(()=>Math.ceil(t.total/t.pageSize)),u=b(()=>t.current<=1),c=b(()=>t.current>=o.value),x=b(()=>{const n=o.value,e=t.current,s=2,m=[];for(let y=Math.max(2,e-s);y<=Math.min(n-1,e+s);y++)m.push({value:y,key:`page-${y}`});return e-s>2&&m.unshift({value:"...",key:"ellipsis-start"}),e+s<n-1&&m.push({value:"...",key:"ellipsis-end"}),m.unshift({value:1,key:"page-1"}),n>1&&m.push({value:n,key:`page-${n}`}),m}),g=n=>{t.disabled||n===t.current||n>=1&&n<=o.value&&(d("update:current",n),d("change",n))},f=n=>{const e=Number(n.target.value);!isNaN(e)&&e>=1&&e<=o.value&&g(e)},l=b(()=>q[t.theme]);return()=>r("nav",{class:"flex items-center justify-between border-t border-gray-200 mt-2 px-4 sm:px-0"},[r("div",{class:"-mt-px flex w-0 flex-1"},[r("button",{disabled:u.value||t.disabled,class:["inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium transition-colors duration-200 ease-in-out",u.value||t.disabled?"text-gray-300 cursor-not-allowed":`text-gray-500 ${l.value.hover}`],onClick:()=>g(t.current-1)},[r("i",{class:"i-tabler-arrow-move-left size-5 mr-3"},null),w("Previous")],10,["disabled","onClick"])]),r("div",{class:"hidden md:-mt-px md:flex"},[C(_,{name:"fade",tag:"div",class:"flex"},()=>x.value.map(n=>C(z,{key:n.key,item:n,current:t.current,disabled:t.disabled,themeClasses:l.value,onClick:g})))]),t.showQuickJumper&&r("div",{class:"hidden md:flex items-center"},[r("input",{type:"number",value:t.current,disabled:t.disabled,min:"1",max:o.value,class:["w-16 px-2 py-1 text-sm border rounded-md",`focus:ring-1 focus:${l.value.border} focus:border-${t.theme}-500`],onChange:f},null,40,["value","disabled","max","onChange"])]),r("div",{class:"-mt-px flex w-0 flex-1 justify-end"},[r("button",{disabled:c.value||t.disabled,class:["inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium transition-colors duration-200 ease-in-out",c.value||t.disabled?"text-gray-300 cursor-not-allowed":`text-gray-500 ${l.value.hover}`],onClick:()=>g(t.current+1)},[w("Next"),r("i",{class:"i-tabler-arrow-move-right size-5 ml-3"},null)],10,["disabled","onClick"])]),r("style",{scoped:!0},[`
          .fade-enter-active,
          .fade-leave-active {
            transition: all 0.3s ease;
          }

          .fade-enter-from,
          .fade-leave-to {
            opacity: 0;
            transform: translateY(30px);
          }

          .fade-move {
            transition: transform 0.3s ease;
          }
        `],8,["scoped"])])}}),U={class:"w-full max-w-4xl mx-auto p-6 space-y-8"},S={class:"space-y-4"},T={class:"bg-white p-4 rounded-lg shadow"},Q={class:"mt-2 text-sm text-gray-500"},J={class:"space-y-4"},V={class:"bg-white p-4 rounded-lg shadow"},F={class:"space-y-4"},M={class:"bg-white p-4 rounded-lg shadow"},A={class:"space-y-4"},D={class:"bg-white p-4 rounded-lg shadow"},E={class:"space-y-4"},I={class:"bg-white p-4 rounded-lg shadow space-y-4"},L={class:"text-sm font-medium capitalize"},O={class:"space-y-4"},W={class:"bg-white p-4 rounded-lg shadow"},G=p({__name:"View",setup(t){const d=i(1),o=i(1),u=i(1),c=i(1),x=i(1),g=["primary","success","warning","danger","info"],f={primary:i(1),success:i(1),warning:i(1),danger:i(1),info:i(1)},l=n=>{console.log("Page changed to:",n)};return(n,e)=>(N(),k("div",U,[a("section",S,[e[5]||(e[5]=a("h2",{class:"text-xl font-semibold"},"Basic Usage",-1)),a("div",T,[r(v(h),{current:d.value,"onUpdate:current":e[0]||(e[0]=s=>d.value=s),total:100,onChange:l},null,8,["current"]),a("div",Q," Current Page: "+P(d.value),1)])]),a("section",J,[e[7]||(e[7]=a("h2",{class:"text-xl font-semibold"},"Custom Page Size",-1)),a("div",V,[r(v(h),{current:o.value,"onUpdate:current":e[1]||(e[1]=s=>o.value=s),total:200,"page-size":10,onChange:l},null,8,["current"]),e[6]||(e[6]=a("div",{class:"mt-2 text-sm text-gray-500"}," Items per page: 10, Total pages: 20 ",-1))])]),a("section",F,[e[9]||(e[9]=a("h2",{class:"text-xl font-semibold"},"With Quick Jumper",-1)),a("div",M,[r(v(h),{current:u.value,"onUpdate:current":e[2]||(e[2]=s=>u.value=s),total:500,"show-quick-jumper":!0,onChange:l},null,8,["current"]),e[8]||(e[8]=a("div",{class:"mt-2 text-sm text-gray-500"}," Quick jump to any page within range ",-1))])]),a("section",A,[e[11]||(e[11]=a("h2",{class:"text-xl font-semibold"},"Disabled State",-1)),a("div",D,[r(v(h),{current:c.value,"onUpdate:current":e[3]||(e[3]=s=>c.value=s),total:100,disabled:""},null,8,["current"]),e[10]||(e[10]=a("div",{class:"mt-2 text-sm text-gray-500"}," All interactions are disabled ",-1))])]),a("section",E,[e[12]||(e[12]=a("h2",{class:"text-xl font-semibold"},"Theme Colors",-1)),a("div",I,[(N(),k(j,null,B(g,s=>a("div",{key:s,class:"space-y-2"},[a("h3",L,P(s)+" Theme",1),r(v(h),{current:f[s].value,"onUpdate:current":m=>f[s].value=m,total:100,theme:s,onChange:l},null,8,["current","onUpdate:current","theme"])])),64))])]),a("section",O,[e[14]||(e[14]=a("h2",{class:"text-xl font-semibold"},"Theme with Quick Jumper",-1)),a("div",W,[r(v(h),{current:x.value,"onUpdate:current":e[4]||(e[4]=s=>x.value=s),total:500,theme:"success","show-quick-jumper":!0,onChange:l},null,8,["current"]),e[13]||(e[13]=a("div",{class:"mt-2 text-sm text-gray-500"}," Success theme with quick jumper ",-1))])]),e[15]||(e[15]=a("section",{class:"space-y-4"},[a("h2",{class:"text-xl font-semibold"},"Code Example"),a("div",{class:"bg-gray-50 p-4 rounded-lg"},[a("pre",{class:"text-sm text-gray-700"},`import { Pagination } from '@your-library/components';

// Basic usage
<Pagination
  v-model:current="currentPage"
  :total="100"
  @change="(page) => console.log('Page changed:', page)"
/>

// With all options
<Pagination
  v-model:current="currentPage"
  :total="500"
  :page-size="10"
  :show-quick-jumper="true"
  :disabled="false"
  @change="handlePageChange"
/>

// Theme usage
<Pagination
  v-model:current="currentPage"
  :total="100"
  theme="success"
  @change="handleChange"
/>

// Available themes: 'primary', 'success', 'warning', 'danger', 'info'
<Pagination
  v-model:current="currentPage"
  :total="500"
  theme="warning"
  :show-quick-jumper="true"
  @change="handleChange"
/>`)])],-1))]))}}),H=$(G,[["__scopeId","data-v-40ae38ac"]]);export{H as default};
//# sourceMappingURL=index-DrEaZSQt.js.map
