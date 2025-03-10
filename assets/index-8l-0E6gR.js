import{B as d}from"./index-CCb7x5Vb.js";import{d as _,r as b,s as z,o as L,j as V,e as o,T as S,G as H,E as B,c as N,a as t,w as n,k as s,t as f,m as g,b as P,_ as R}from"./index-BdXq4RCm.js";const r=_({name:"Tooltip",props:{content:{type:String,default:""},position:{type:String,default:"top"},offset:{type:Number,default:10}},setup(u,{slots:p}){const y=b(null),k=b(null),e=b(!1),h=b({}),c=b(u.position),C=z(()=>["absolute px-5 py-3 text-center text-gray-600 bg-white rounded-lg shadow-lg dark:shadow-none shadow-gray-200 dark:bg-gray-800 dark:text-white","transition-opacity duration-200 z-50","min-w-[12rem] max-w-xs",`tooltip-${c.value}`]),m=()=>{if(!y.value||!k.value)return;c.value=u.position;const v=y.value.getBoundingClientRect(),a=k.value.getBoundingClientRect(),T=document.documentElement.clientWidth,w=document.documentElement.clientHeight,i=8;let l=0,x=0;x=v.left+(v.width-a.width)/2,c.value==="top"?l=v.top-a.height-u.offset:l=v.bottom+u.offset,l<i&&c.value==="top"?(c.value="bottom",l=v.bottom+u.offset):l+a.height>w-i&&c.value==="bottom"&&(c.value="top",l=v.top-a.height-u.offset),x<i?x=i:x+a.width>T-i&&(x=T-a.width-i),l<i&&l+a.height>w-i?c.value==="top"?l=i:l=w-a.height-i:(l<i&&(l=i),l+a.height>w-i&&(l=w-a.height-i)),h.value={position:"fixed",top:`${l}px`,left:`${x}px`,zIndex:"9999"}},M=()=>{e.value=!0,B(()=>{m(),B(()=>{m()})})},E=()=>{e.value=!1};return L(()=>{window.addEventListener("resize",m),window.addEventListener("scroll",m,{passive:!0})}),V(()=>{window.removeEventListener("resize",m),window.removeEventListener("scroll",m)}),()=>o("div",{class:"relative inline-block",ref:y},[o("div",{onMouseenter:M,onMouseleave:E,class:"w-full"},[p.trigger?p.trigger():o("button",{class:"text-gray-600 transition-colors duration-200 focus:outline-none dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"},[o("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",class:"w-6 h-6"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"},null)])])],40,["onMouseenter","onMouseleave"]),o(S,{to:"body"},{default:()=>[o(H,{name:"tooltip-fade"},{default:()=>[e.value&&o("div",{ref:k,class:C.value,style:h.value},[p.content?p.content():o("p",{class:"truncate"},[u.content])],6)]})]}),o("style",{scoped:!0},[`
          .tooltip-fade-enter-active,
          .tooltip-fade-leave-active {
            transition: opacity 0.2s ease, transform 0.2s ease;
          }

          .tooltip-fade-enter-from,
          .tooltip-fade-leave-to {
            opacity: 0;
            transform: scale(0.95);
          }
          
          /* 添加小箭头指向触发元素的样式 */
          .tooltip-top::after {
            content: "";
            position: absolute;
            bottom: -8px;
            left: 50%;
            margin-left: -8px;
            border-width: 8px 8px 0;
            border-style: solid;
            border-color: white transparent transparent transparent;
          }
          
          .tooltip-bottom::after {
            content: "";
            position: absolute;
            top: -8px;
            left: 50%;
            margin-left: -8px;
            border-width: 0 8px 8px;
            border-style: solid;
            border-color: transparent transparent white transparent;
          }
          
          /* 暗黑模式箭头颜色 */
          .dark .tooltip-top::after {
            border-color: #1f2937 transparent transparent transparent;
          }
          
          .dark .tooltip-bottom::after {
            border-color: transparent transparent #1f2937 transparent;
          }
        `],8,["scoped"])],512)}}),j={class:"p-8 space-y-12"},D={class:"bg-gray-50 p-6 rounded-lg dark:bg-gray-800"},$={class:"flex items-center gap-4"},I={class:"bg-gray-50 p-6 rounded-lg dark:bg-gray-800"},W={class:"flex flex-wrap gap-4"},G={class:"bg-gray-50 p-6 rounded-lg dark:bg-gray-800"},O={class:"flex items-center"},U={class:"bg-gray-50 p-6 rounded-lg dark:bg-gray-800"},q={class:"flex gap-6 items-center"},A={class:"bg-gray-50 p-6 rounded-lg dark:bg-gray-800"},F={class:"flex gap-4 items-center"},J={class:"bg-gray-50 p-6 rounded-lg dark:bg-gray-800"},K={class:"flex gap-4"},Q={class:"bg-gray-50 p-6 rounded-lg dark:bg-gray-800"},X={class:"flex items-center gap-4"},Y=`<Tooltip content="这是一个简单的提示">
  <template #trigger>
    <Button>悬停查看提示</Button>
  </template>
</Tooltip>`,Z=`<Tooltip content="上方提示" position="top">
  <template #trigger>
    <Button type="secondary">上方显示</Button>
  </template>
</Tooltip>

<Tooltip content="下方提示" position="bottom">
  <template #trigger>
    <Button type="secondary">下方显示</Button>
  </template>
</Tooltip>`,tt=`<Tooltip position="bottom">
  <template #trigger>
    <Button type="success">查看详细信息</Button>
  </template>
  <template #content>
    <div class="flex flex-col gap-2">
      <h3 class="font-bold border-b pb-2">产品详情</h3>
      <p>这是一个自定义的详细信息面板</p>
      <div class="flex items-center gap-2">
        <span>⭐️</span>
        <span>5.0 评分</span>
      </div>
      <div class="flex items中心 gap-2">
        <span>📅</span>
        <span>2024-01-01</span>
      </div>
    </div>
  </template>
</Tooltip>`,et=`<!-- 图标触发器 -->
<Tooltip content="图标触发的提示">
  <template #trigger>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6 text-blue-500 hover:text-blue-600 cursor-pointer"
    >
      <!-- 图标路径 -->
    </svg>
  </template>
</Tooltip>

<!-- 文本触发器 -->
<Tooltip content="文本链接提示">
  <template #trigger>
    <span class="text-blue-500 hover:text-blue-600 cursor-pointer underline">
      帮助文档
    </span>
  </template>
</Tooltip>

<!-- 默认触发器 -->
<Tooltip content="默认触发器">
  <!-- 使用默认的问号图标 -->
</Tooltip>`,ot=`<Tooltip content="默认偏移 (10px)" position="top">
  <template #trigger>
    <Button type="info">默认偏移</Button>
  </template>
</Tooltip>

<Tooltip content="较大偏移 (20px)" position="top" :offset="20">
  <template #trigger>
    <Button type="info">较大偏移 (20px)</Button>
  </template>
</Tooltip>

<Tooltip content="更大偏移 (30px)" position="top" :offset="30">
  <template #trigger>
    <Button type="info">更大偏移 (30px)</Button>
  </template>
</Tooltip>`,nt=`<Tooltip content="我会根据可用空间自动调整位置" position="top">
  <template #trigger>
    <Button type="warning">智能位置调整</Button>
  </template>
</Tooltip>`,st=_({__name:"View",setup(u){const p=b(!1),y=()=>{p.value=!p.value,p.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")};return(k,e)=>(P(),N("div",j,[e[20]||(e[20]=t("h1",{class:"text-3xl font-bold mb-8"},"Tooltip 文字提示组件",-1)),t("section",null,[e[1]||(e[1]=t("h2",{class:"text-xl font-bold mb-4"},"基础用法",-1)),t("div",D,[t("div",$,[o(s(r),{content:"这是一个简单的提示"},{trigger:n(()=>[o(s(d),null,{default:n(()=>e[0]||(e[0]=[g("悬停查看提示")])),_:1})]),_:1})]),t("div",{class:"mt-4 bg-gray-100 p-3 rounded dark:bg-gray-700"},[t("pre",{class:"text-sm"},f(Y))])])]),t("section",null,[e[4]||(e[4]=t("h2",{class:"text-xl font-bold mb-4"},"提示方向",-1)),t("div",I,[t("div",W,[o(s(r),{content:"上方提示",position:"top"},{trigger:n(()=>[o(s(d),{type:"secondary"},{default:n(()=>e[2]||(e[2]=[g("上方显示")])),_:1})]),_:1}),o(s(r),{content:"下方提示",position:"bottom"},{trigger:n(()=>[o(s(d),{type:"secondary"},{default:n(()=>e[3]||(e[3]=[g("下方显示")])),_:1})]),_:1})]),t("div",{class:"mt-4 bg-gray-100 p-3 rounded dark:bg-gray-700"},[t("pre",{class:"text-sm"},f(Z))])])]),t("section",null,[e[7]||(e[7]=t("h2",{class:"text-xl font-bold mb-4"},"自定义内容",-1)),t("div",G,[t("div",O,[o(s(r),{position:"bottom"},{trigger:n(()=>[o(s(d),{type:"success"},{default:n(()=>e[5]||(e[5]=[g("查看详细信息")])),_:1})]),content:n(()=>e[6]||(e[6]=[t("div",{class:"flex flex-col gap-2"},[t("h3",{class:"font-bold border-b pb-2"},"产品详情"),t("p",null,"这是一个自定义的详细信息面板"),t("div",{class:"flex items-center gap-2"},[t("span",null,"⭐️"),t("span",null,"5.0 评分")]),t("div",{class:"flex items-center gap-2"},[t("span",null,"📅"),t("span",null,"2024-01-01")])],-1)])),_:1})]),t("div",{class:"mt-4 bg-gray-100 p-3 rounded dark:bg-gray-700"},[t("pre",{class:"text-sm"},f(tt))])])]),t("section",null,[e[10]||(e[10]=t("h2",{class:"text-xl font-bold mb-4"},"自定义触发器",-1)),t("div",U,[t("div",q,[o(s(r),{content:"图标触发的提示"},{trigger:n(()=>e[8]||(e[8]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 text-blue-500 hover:text-blue-600 cursor-pointer"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"})],-1)])),_:1}),o(s(r),{content:"文本链接提示"},{trigger:n(()=>e[9]||(e[9]=[t("span",{class:"text-blue-500 hover:text-blue-600 cursor-pointer underline"}," 帮助文档 ",-1)])),_:1}),o(s(r),{content:"默认触发器"})]),t("div",{class:"mt-4 bg-gray-100 p-3 rounded dark:bg-gray-700"},[t("pre",{class:"text-sm"},f(et))])])]),t("section",null,[e[14]||(e[14]=t("h2",{class:"text-xl font-bold mb-4"},"不同偏移距离",-1)),t("div",A,[t("div",F,[o(s(r),{content:"默认偏移 (10px)",position:"top"},{trigger:n(()=>[o(s(d),{type:"info"},{default:n(()=>e[11]||(e[11]=[g("默认偏移")])),_:1})]),_:1}),o(s(r),{content:"较大偏移 (20px)",position:"top",offset:20},{trigger:n(()=>[o(s(d),{type:"info"},{default:n(()=>e[12]||(e[12]=[g("较大偏移 (20px)")])),_:1})]),_:1}),o(s(r),{content:"更大偏移 (30px)",position:"top",offset:30},{trigger:n(()=>[o(s(d),{type:"info"},{default:n(()=>e[13]||(e[13]=[g("更大偏移 (30px)")])),_:1})]),_:1})]),t("div",{class:"mt-4 bg-gray-100 p-3 rounded dark:bg-gray-700"},[t("pre",{class:"text-sm"},f(ot))])])]),t("section",null,[e[17]||(e[17]=t("h2",{class:"text-xl font-bold mb-4"},"智能位置调整",-1)),t("div",J,[e[16]||(e[16]=t("div",{class:"flex items-center mb-4"},[t("p",{class:"text-sm text-gray-600 dark:text-gray-300"}," 当屏幕空间不足时，Tooltip 会智能调整显示位置，确保内容始终可见。尝试将窗口滚动到边缘，观察提示框的位置变化。 ")],-1)),t("div",K,[o(s(r),{content:"我会根据可用空间自动调整位置",position:"top"},{trigger:n(()=>[o(s(d),{type:"warning"},{default:n(()=>e[15]||(e[15]=[g("智能位置调整")])),_:1})]),_:1})]),t("div",{class:"mt-4 bg-gray-100 p-3 rounded dark:bg-gray-700"},[t("pre",{class:"text-sm"},f(nt))])])]),t("section",null,[e[19]||(e[19]=t("h2",{class:"text-xl font-bold mb-4"},"深色模式切换",-1)),t("div",Q,[t("div",X,[o(s(d),{onClick:y,type:"ghost",icon:"icon-[mingcute--moon-line]"},{default:n(()=>[g(" 切换"+f(p.value?"浅色":"深色")+"模式 ",1)]),_:1}),o(s(r),{content:"提示会自动适应当前主题模式"},{trigger:n(()=>e[18]||(e[18]=[t("span",{class:"text-blue-500 hover:text-blue-600 cursor-pointer"}," 查看效果 ",-1)])),_:1})])])])]))}}),rt=R(st,[["__scopeId","data-v-15147074"]]);export{rt as default};
//# sourceMappingURL=index-8l-0E6gR.js.map
