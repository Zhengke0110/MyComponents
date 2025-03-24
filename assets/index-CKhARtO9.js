import{d as j,r as k,c as T,o as P,E as V,b as r,L as $,T as A,I as E,f as M,g as t,l as D,x as o,j as a,t as f,C as I,e as l,m as z,_ as H}from"./index-BSjwMPY1.js";const s=j({name:"Tooltip",props:{content:{type:String,default:""},position:{type:String,default:"top"},offset:{type:Number,default:10}},setup(u,{slots:d}){const b=k(null),w=k(null),g=k(!1),e=k({}),p=k(u.position),y=T(()=>["absolute px-5 py-3 text-center text-gray-600 bg-white rounded-lg shadow-lg dark:text-white dark:bg-gray-800 dark:shadow-none shadow-gray-200","transition-all duration-200 ease-out z-50","min-w-[12rem] max-w-xs",`tooltip-${p.value}`]),B=T(()=>[`tooltip-arrow-${p.value}`]),C=T(()=>({position:"fixed",top:e.value.top,left:e.value.left,zIndex:9999})),v=()=>{if(!b.value||!w.value)return;p.value=u.position;const m=b.value.getBoundingClientRect(),c=w.value.getBoundingClientRect(),_=document.documentElement.clientWidth,h=document.documentElement.clientHeight,i=8;let n=0,x=0;x=m.left+(m.width-c.width)/2,p.value==="top"?n=m.top-c.height-u.offset:n=m.bottom+u.offset,n<i&&p.value==="top"?(p.value="bottom",n=m.bottom+u.offset):n+c.height>h-i&&p.value==="bottom"&&(p.value="top",n=m.top-c.height-u.offset),x<i?x=i:x+c.width>_-i&&(x=_-c.width-i),n<i&&n+c.height>h-i?p.value==="top"?n=i:n=h-c.height-i:(n<i&&(n=i),n+c.height>h-i&&(n=h-c.height-i)),e.value={position:"fixed",top:`${n}px`,left:`${x}px`,zIndex:"9999"}},S=()=>{g.value=!0,E(()=>{v(),E(()=>{v()})})},L=()=>{g.value=!1};return P(()=>{window.addEventListener("resize",v),window.addEventListener("scroll",v,{passive:!0})}),V(()=>{window.removeEventListener("resize",v),window.removeEventListener("scroll",v)}),()=>r("div",{class:"relative inline-block",ref:b},[r("div",{onMouseenter:S,onMouseleave:L,class:"w-full"},[d.trigger?d.trigger():r("button",{type:"button",class:"text-gray-600 transition-colors duration-200 focus:outline-none dark:text-gray-300 dark:hover:text-blue-400 hover:text-blue-500"},[r("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",class:"w-6 h-6"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"},null)])])],40,["onMouseenter","onMouseleave"]),r($,{to:"body"},{default:()=>[r(A,{name:"tooltip-fade",enterActiveClass:"transition ease-out duration-200",enterFromClass:"opacity-0 scale-95",enterToClass:"opacity-100 scale-100",leaveActiveClass:"transition ease-in duration-150",leaveFromClass:"opacity-100 scale-100",leaveToClass:"opacity-0 scale-95"},{default:()=>[g.value&&r("div",{ref:w,class:y.value,style:C.value},[d.content?d.content():r("p",{class:"text-sm"},[u.content]),r("span",{class:B.value},null,2)],6)]})]}),r("style",{scoped:!0},[`
          /* 箭头样式 - 使用固定类名 */
          .tooltip-top::after,
          .tooltip-arrow-top {
            content: "";
            position: absolute;
            bottom: -8px;
            left: 50%;
            margin-left: -8px;
            border-width: 8px 8px 0;
            border-style: solid;
            border-color: #ffffff transparent transparent transparent;
          }
          
          .tooltip-bottom::after,
          .tooltip-arrow-bottom {
            content: "";
            position: absolute;
            top: -8px;
            left: 50%;
            margin-left: -8px;
            border-width: 0 8px 8px;
            border-style: solid;
            border-color: transparent transparent #ffffff transparent;
          }
          
          /* 暗黑模式箭头颜色 - 使用全局选择器适配 Tailwind dark 模式 */
          :global(.dark) .tooltip-top::after,
          :global(.dark) .tooltip-arrow-top {
            border-color: #1f2937 transparent transparent transparent;
          }
          
          :global(.dark) .tooltip-bottom::after,
          :global(.dark) .tooltip-arrow-bottom {
            border-color: transparent transparent #1f2937 transparent;
          }
        `],8,["scoped"])],512)}}),N={class:"space-y-12 p-8"},R={class:"rounded-lg bg-gray-50 p-6 dark:bg-gray-800"},F={class:"flex items-center gap-6"},J={class:"rounded-lg bg-gray-50 p-6 dark:bg-gray-800"},W={class:"flex flex-wrap justify-center gap-4"},O={class:"rounded-lg bg-gray-50 p-6 dark:bg-gray-800"},U={class:"flex items-center gap-4"},q={class:"rounded-lg bg-gray-50 p-6 dark:bg-gray-800"},G={class:"items中心 flex flex-wrap gap-6"},K={class:"rounded-lg bg-gray-50 p-6 dark:bg-gray-800"},Q={class:"items中心 mb-6 flex flex-wrap gap-4"},X={class:"mb-4"},Y={class:"flex flex-wrap gap-4"},Z={class:"rounded-lg bg-gray-50 p-6 dark:bg-gray-800"},tt={class:"items开始 flex h-48"},et={class:"mt-2"},rt={class:"flex justify-end"},ot={class:"rounded-lg bg-gray-50 p-6 dark:bg-gray-800"},at={class:"flex flex-col gap-4"},st={class:"items中心 flex gap-2"},dt={class:"mt-4"},lt={class:"min-w-full border-collapse border border-gray-300 dark:border-gray-700"},nt={class:"bg-gray-100 dark:bg-gray-700"},it={class:"text左 border border-gray-300 p-2 dark:border-gray-600"},gt={class:"items中心 flex gap-1"},pt={class:"border border-gray-300 p-2 dark:border-gray-600"},ct={class:"border border-gray-300 p-2 dark:border-gray-600"},bt={class:"rounded-lg bg-gray-50 p-6 dark:bg-gray-800"},ft={class:"items中心 flex gap-4"},ut={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},yt={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},vt={class:"mt-6 rounded border bg-white p-4 dark:border-gray-700 dark:bg-gray-900"},mt={class:"flex gap-4"},xt=`<Tooltip content="这是一个简单的提示">
  <template #trigger>
    <Button>悬停查看提示</Button>
  </template>
</Tooltip>

<!-- 使用默认问号图标 -->
<Tooltip content="默认使用问号图标作为触发器">
  <!-- 使用默认问号图标 -->
</Tooltip>

<!-- 带标题的提示 -->
<Tooltip content="带有标题的提示" title="温馨提示">
  <template #trigger>
    <Button type="success">带标题的提示</Button>
  </template>
</Tooltip>`,kt=`<Tooltip content="上方提示" position="top">
  <template #trigger>
    <Button type="secondary">上方显示</Button>
  </template>
</Tooltip>

<Tooltip content="右侧提示" position="right">
  <template #trigger>
    <Button type="secondary">右侧显示</Button>
  </template>
</Tooltip>

<Tooltip content="下方提示" position="bottom">
  <template #trigger>
    <Button type="secondary">下方显示</Button>
  </template>
</Tooltip>

<Tooltip content="左侧提示" position="left">
  <template #trigger>
    <Button type="secondary">左侧显示</Button>
  </template>
</Tooltip>

<!-- 当空间不足时，会自动切换方向 -->`,wt=`<Tooltip position="bottom">
  <template #trigger>
    <Button type="success">产品详情</Button>
  </template>
  <template #content>
    <div class="flex flex-col gap-2 min-w-60">
      <h3 class="font-bold border-b pb-2">高级智能手表</h3>
      <p>全新一代智能手表，支持健康监测和运动追踪</p>
      <div class="flex items中心 gap-2">
        <span>⭐️</span>
        <span>4.8 评分 (128条评价)</span>
      </div>
      <div class="flex items中心 gap-2">
        <span>📅</span>
        <span>2024-05-10 发布</span>
      </div>
      <div class="flex items中心 gap-2 text-green-600 font-medium">
        <span>💰</span>
        <span>¥1,299</span>
      </div>
    </div>
  </template>
</Tooltip>`,ht=`<!-- 图标触发器 -->
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

<!-- 图片触发器 -->
<Tooltip content="图片作为触发器">
  <template #trigger>
    <div class="w-10 h-10 rounded overflow-hidden cursor-pointer hover:opacity-80">
      <img src="..." alt="触发图片" class="w-full h-full object-cover" />
    </div>
  </template>
</Tooltip>

<!-- 默认触发器 -->
<Tooltip content="默认触发器">
  <!-- 使用默认的问号图标 -->
</Tooltip>`,Tt=`<!-- 偏移距离 -->
<Tooltip content="默认偏移 (10px)" position="top">
  <template #trigger>
    <Button type="info">默认偏移</Button>
  </template>
</Tooltip>

<Tooltip content="较大偏移 (20px)" position="top" :offset="20">
  <template #trigger>
    <Button type="info">较大偏移 (20px)</Button>
  </template>
</Tooltip>

<!-- 触发方式 -->
<Tooltip content="鼠标悬停时显示（默认）" trigger="hover">
  <template #trigger>
    <Button type="primary">悬停触发</Button>
  </template>
</Tooltip>

<Tooltip content="点击时显示" trigger="click">
  <template #trigger>
    <Button type="danger">点击触发</Button>
  </template>
</Tooltip>

<Tooltip content="聚焦时显示" trigger="focus">
  <template #trigger>
    <input type="text" placeholder="聚焦时显示提示" 
      class="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
  </template>
</Tooltip>`,Bt=`<!-- 靠近边缘时的智能调整 -->
<Tooltip content="我在顶部时会自动避免被截断" position="top">
  <template #trigger>
    <Button type="warning">靠近顶部的元素</Button>
  </template>
</Tooltip>

<Tooltip content="我会避免超出右侧边界" position="top">
  <template #trigger>
    <Button type="warning">靠近右侧的元素</Button>
  </template>
</Tooltip>`,Ct=`<!-- 表单帮助信息 -->
<div class="flex items中心 gap-2">
  <label for="username">用户名</label>
  <input id="username" type="text" class="px-3 py-2 border rounded" />
  <Tooltip content="用户名长度需要在3-20个字符之间，只能包含字母、数字和下划线">
    <template #trigger>
      <span class="cursor-pointer text-gray-500">
        <svg><!-- 信息图标 --></svg>
      </span>
    </template>
  </Tooltip>
</div>

<!-- 表格中的提示 -->
<table class="min-w-full border-collapse border">
  <thead>
    <tr>
      <th>产品名称</th>
      <th>
        <div class="flex items中心 gap-1">
          <span>库存状态</span>
          <Tooltip content="绿色表示库存充足，黄色表示库存较低，红色表示缺货">
            <template #trigger>
              <span class="cursor-pointer text-gray-500">
                <svg><!-- 信息图标 --></svg>
              </span>
            </template>
          </Tooltip>
        </div>
      </th>
      <th>操作</th>
    </tr>
  </thead>
  <!-- 表格内容... -->
</table>`,Mt=`<!-- 深色模式自动适配 -->
<Tooltip content="深色模式下我会更换颜色">
  <template #trigger>
    <Button>查看深色模式适配</Button>
  </template>
</Tooltip>

<Tooltip position="bottom">
  <template #trigger>
    <Button type="secondary">自定义内容示例</Button>
  </template>
  <template #content>
    <div class="flex flex-col gap-2">
      <h3 class="font-bold">深色模式支持</h3>
      <p>此提示框在深色模式下会自动调整样式</p>
      <div class="p-2 bg-gray-100 dark:bg-gray-700 rounded">
        <code class="text-xs">自动适配主题</code>
      </div>
    </div>
  </template>
</Tooltip>`,zt=j({__name:"View",setup(u){const d=j({props:{type:{type:String,default:"primary",validator:g=>["primary","secondary","success","warning","info","danger"].includes(g)},size:{type:String,default:"md",validator:g=>["sm","md","lg"].includes(g)}},setup(g,{slots:e}){const p=T(()=>{const y="px-4 py-2 rounded font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",B={sm:"px-2 py-1 text-sm",md:"px-4 py-2",lg:"px-6 py-3 text-lg"},C={primary:"bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500",secondary:"bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500",success:"bg-green-600 hover:bg-green-700 text-white focus:ring-green-500",warning:"bg-yellow-500 hover:bg-yellow-600 text-white focus:ring-yellow-500",info:"bg-cyan-500 hover:bg-cyan-600 text-white focus:ring-cyan-500",danger:"bg-red-600 hover:bg-red-700 text-white focus:ring-red-500"};return`${y} ${B[g.size]} ${C[g.type]}`});return()=>{var y;return I("button",{class:p.value},(y=e.default)==null?void 0:y.call(e))}}}),b=k(!1),w=()=>{b.value=!b.value,b.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")};return(g,e)=>(z(),M("div",N,[e[52]||(e[52]=t("h1",{class:"mb-8 text-3xl font-bold"},"Tooltip 文字提示组件",-1)),e[53]||(e[53]=t("p",{class:"mb-8 text-lg text-gray-600 dark:text-gray-300"}," Tooltip 组件用于在用户悬停在元素上时显示提示信息，提高用户体验和界面可用性。支持自定义内容、多种显示位置和暗黑模式。 ",-1)),t("section",null,[e[2]||(e[2]=t("h2",{class:"mb-4 text-xl font-bold"},"基础用法",-1)),t("div",R,[t("div",F,[r(a(s),{content:"这是一个简单的提示"},{trigger:o(()=>[r(a(d),null,{default:o(()=>e[0]||(e[0]=[l("悬停查看提示")])),_:1})]),_:1}),r(a(s),{content:"默认使用问号图标作为触发器"}),r(a(s),{content:"带有标题的提示",title:"温馨提示"},{trigger:o(()=>[r(a(d),{type:"success"},{default:o(()=>e[1]||(e[1]=[l("带标题的提示")])),_:1})]),_:1})]),t("div",{class:"mt-4 rounded bg-gray-100 p-3 dark:bg-gray-700"},[t("pre",{class:"text-sm"},f(xt))])])]),t("section",null,[e[6]||(e[6]=t("h2",{class:"mb-4 text-xl font-bold"},"提示方向",-1)),t("div",J,[t("div",W,[r(a(s),{content:"上方提示",position:"top"},{trigger:o(()=>[r(a(d),{type:"secondary"},{default:o(()=>e[3]||(e[3]=[l("上方显示")])),_:1})]),_:1}),r(a(s),{content:"下方提示",position:"bottom"},{trigger:o(()=>[r(a(d),{type:"secondary"},{default:o(()=>e[4]||(e[4]=[l("下方显示")])),_:1})]),_:1}),e[5]||(e[5]=t("div",{class:"mt-2 w-full text-sm text-gray-500 dark:text-gray-400"},[t("p",null,"注意：当空间不足时，Tooltip 会自动切换到合适的方向")],-1))]),t("div",{class:"mt-4 rounded bg-gray-100 p-3 dark:bg-gray-700"},[t("pre",{class:"text-sm"},f(kt))])])]),t("section",null,[e[11]||(e[11]=t("h2",{class:"mb-4 text-xl font-bold"},"自定义内容",-1)),t("div",O,[t("div",U,[r(a(s),{position:"bottom"},{trigger:o(()=>[r(a(d),{type:"success"},{default:o(()=>e[7]||(e[7]=[l("产品详情")])),_:1})]),content:o(()=>e[8]||(e[8]=[t("div",{class:"flex min-w-60 flex-col gap-2"},[t("h3",{class:"border-b pb-2 font-bold"},"高级智能手表"),t("p",null,"全新一代智能手表，支持健康监测和运动追踪"),t("div",{class:"flex items-center gap-2"},[t("span",null,"⭐️"),t("span",null,"4.8 评分 (128条评价)")]),t("div",{class:"flex items-center gap-2"},[t("span",null,"📅"),t("span",null,"2024-05-10 发布")]),t("div",{class:"items中心 flex gap-2 font-medium text-green-600"},[t("span",null,"💰"),t("span",null,"¥1,299")])],-1)])),_:1}),r(a(s),{position:"bottom"},{trigger:o(()=>[r(a(d),{type:"warning"},{default:o(()=>e[9]||(e[9]=[l("用户信息")])),_:1})]),content:o(()=>e[10]||(e[10]=[t("div",{class:"items中心 flex gap-3"},[t("div",{class:"items中心 flex h-10 w-10 justify-center rounded-full bg-blue-500 font-bold text-white"}," JD "),t("div",null,[t("div",{class:"font-medium"},"John Doe"),t("div",{class:"text-xs text-gray-500 dark:text-gray-400"}," 产品设计师 ")])],-1)])),_:1})]),t("div",{class:"mt-4 rounded bg-gray-100 p-3 dark:bg-gray-700"},[t("pre",{class:"text-sm"},f(wt))])])]),t("section",null,[e[16]||(e[16]=t("h2",{class:"mb-4 text-xl font-bold"},"自定义触发器",-1)),t("div",q,[t("div",G,[r(a(s),{content:"图标触发的提示"},{trigger:o(()=>e[12]||(e[12]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"h-6 w-6 cursor-pointer text-blue-500 hover:text-blue-600"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"})],-1)])),_:1}),r(a(s),{content:"文本链接提示"},{trigger:o(()=>e[13]||(e[13]=[t("span",{class:"cursor-pointer text-blue-500 underline hover:text-blue-600"}," 帮助文档 ",-1)])),_:1}),r(a(s),{content:"图片作为触发器"},{trigger:o(()=>e[14]||(e[14]=[t("div",{class:"h-10 w-10 cursor-pointer overflow-hidden rounded transition-opacity hover:opacity-80"},[t("img",{src:"https://placekitten.com/100/100",alt:"猫咪图片",class:"h-full w-full object-cover"})],-1)])),_:1}),r(a(s),{content:"自定义按钮作为触发器"},{trigger:o(()=>e[15]||(e[15]=[t("button",{class:"rounded bg-purple-500 px-3 py-1 text-white transition-colors hover:bg-purple-600"}," 自定义按钮 ",-1)])),_:1}),r(a(s),{content:"默认触发器"})]),t("div",{class:"mt-4 rounded bg-gray-100 p-3 dark:bg-gray-700"},[t("pre",{class:"text-sm"},f(ht))])])]),t("section",null,[e[25]||(e[25]=t("h2",{class:"mb-4 text-xl font-bold"},"偏移距离和触发方式",-1)),t("div",K,[t("div",Q,[e[20]||(e[20]=t("h3",{class:"mb-2 w-full text-lg font-semibold"},"偏移距离",-1)),r(a(s),{content:"默认偏移 (10px)",position:"top"},{trigger:o(()=>[r(a(d),{type:"info"},{default:o(()=>e[17]||(e[17]=[l("默认偏移")])),_:1})]),_:1}),r(a(s),{content:"较大偏移 (20px)",position:"top",offset:20},{trigger:o(()=>[r(a(d),{type:"info"},{default:o(()=>e[18]||(e[18]=[l("较大偏移 (20px)")])),_:1})]),_:1}),r(a(s),{content:"更大偏移 (30px)",position:"top",offset:30},{trigger:o(()=>[r(a(d),{type:"info"},{default:o(()=>e[19]||(e[19]=[l("更大偏移 (30px)")])),_:1})]),_:1})]),t("div",X,[e[24]||(e[24]=t("h3",{class:"mb-4 w-full text-lg font-semibold"},"触发方式",-1)),t("div",Y,[r(a(s),{content:"鼠标悬停时显示（默认）",trigger:"hover"},{trigger:o(()=>[r(a(d),{type:"primary"},{default:o(()=>e[21]||(e[21]=[l("悬停触发")])),_:1})]),_:1}),r(a(s),{content:"点击时显示",trigger:"click"},{trigger:o(()=>[r(a(d),{type:"danger"},{default:o(()=>e[22]||(e[22]=[l("点击触发")])),_:1})]),_:1}),r(a(s),{content:"聚焦时显示",trigger:"focus"},{trigger:o(()=>e[23]||(e[23]=[t("input",{type:"text",placeholder:"聚焦时显示提示",class:"rounded-md border px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700"},null,-1)])),_:1})])]),t("div",{class:"mt-4 rounded bg-gray-100 p-3 dark:bg-gray-700"},[t("pre",{class:"text-sm"},f(Tt))])])]),t("section",null,[e[29]||(e[29]=t("h2",{class:"mb-4 text-xl font-bold"},"智能位置调整",-1)),t("div",Z,[e[28]||(e[28]=t("div",{class:"items中心 mb-4 flex"},[t("p",{class:"text-sm text-gray-600 dark:text-gray-300"}," 当屏幕空间不足时，Tooltip 会智能调整显示位置，确保内容始终可见。尝试将窗口滚动到边缘，或调整浏览器大小，观察提示框的位置变化。 ")],-1)),t("div",tt,[t("div",et,[r(a(s),{content:"我在顶部时会自动避免被截断",position:"top"},{trigger:o(()=>[r(a(d),{type:"warning"},{default:o(()=>e[26]||(e[26]=[l("靠近顶部的元素")])),_:1})]),_:1})])]),t("div",rt,[r(a(s),{content:"我会避免超出右侧边界",position:"top"},{trigger:o(()=>[r(a(d),{type:"warning"},{default:o(()=>e[27]||(e[27]=[l("靠近右侧的元素")])),_:1})]),_:1})]),t("div",{class:"mt-4 rounded bg-gray-100 p-3 dark:bg-gray-700"},[t("pre",{class:"text-sm"},f(Bt))])])]),t("section",null,[e[43]||(e[43]=t("h2",{class:"mb-4 text-xl font-bold"},"复杂场景应用",-1)),t("div",ot,[t("div",at,[t("div",st,[e[31]||(e[31]=t("label",{for:"username",class:"min-w-32 text-gray-700 dark:text-gray-300"},"用户名",-1)),e[32]||(e[32]=t("input",{id:"username",type:"text",class:"rounded border px-3 py-2 dark:border-gray-600 dark:bg-gray-700",placeholder:"请输入用户名"},null,-1)),r(a(s),{content:"用户名长度需要在3-20个字符之间，只能包含字母、数字和下划线"},{trigger:o(()=>e[30]||(e[30]=[t("span",{class:"cursor-pointer text-gray-500"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})])],-1)])),_:1})]),t("div",dt,[t("table",lt,[t("thead",null,[t("tr",nt,[e[35]||(e[35]=t("th",{class:"border border-gray-300 p-2 text-left dark:border-gray-600"}," 产品名称 ",-1)),t("th",it,[t("div",gt,[e[34]||(e[34]=t("span",null,"库存状态",-1)),r(a(s),{content:"绿色表示库存充足，黄色表示库存较低，红色表示缺货"},{trigger:o(()=>e[33]||(e[33]=[t("span",{class:"cursor-pointer text-gray-500"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})])],-1)])),_:1})])]),e[36]||(e[36]=t("th",{class:"border border-gray-300 p-2 text-left dark:border-gray-600"}," 操作 ",-1))])]),t("tbody",null,[t("tr",null,[e[38]||(e[38]=t("td",{class:"border border-gray-300 p-2 dark:border-gray-600"}," 智能手表 Pro ",-1)),e[39]||(e[39]=t("td",{class:"border border-gray-300 p-2 dark:border-gray-600"},[t("span",{class:"inline-block h-3 w-3 rounded-full bg-green-500"})],-1)),t("td",pt,[r(a(s),{content:"点击查看详细库存信息和历史变动"},{trigger:o(()=>[r(a(d),{type:"secondary",size:"sm"},{default:o(()=>e[37]||(e[37]=[l("查看详情")])),_:1})]),_:1})])]),t("tr",null,[e[41]||(e[41]=t("td",{class:"border border-gray-300 p-2 dark:border-gray-600"}," 无线耳机 ",-1)),e[42]||(e[42]=t("td",{class:"border border-gray-300 p-2 dark:border-gray-600"},[t("span",{class:"bg黄色-500 inline-block h-3 w-3 rounded-full"})],-1)),t("td",ct,[r(a(s),{content:"点击查看详细库存信息和历史变动"},{trigger:o(()=>[r(a(d),{type:"secondary",size:"sm"},{default:o(()=>e[40]||(e[40]=[l("查看详情")])),_:1})]),_:1})])])])])])]),t("div",{class:"mt-4 rounded bg-gray-100 p-3 dark:bg-gray-700"},[t("pre",{class:"text-sm"},f(Ct))])])]),t("section",null,[e[51]||(e[51]=t("h2",{class:"mb-4 text-xl font-bold"},"深色模式切换",-1)),t("div",bt,[t("div",ft,[r(a(d),{onClick:w,type:"info",class:"items中心 flex gap-2"},{default:o(()=>[b.value?(z(),M("svg",ut,e[44]||(e[44]=[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"},null,-1)]))):(z(),M("svg",yt,e[45]||(e[45]=[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"},null,-1)]))),l(" 切换"+f(b.value?"浅色":"深色")+"模式 ",1)]),_:1}),r(a(s),{content:"Tooltip 会自动适应当前主题模式，无需额外配置"},{trigger:o(()=>e[46]||(e[46]=[t("span",{class:"cursor-pointer text-blue-500 hover:text-blue-600"}," 查看效果 ",-1)])),_:1})]),t("div",vt,[e[50]||(e[50]=t("p",{class:"mb-4 text-sm text-gray-600 dark:text-gray-300"}," Tooltip 组件会自动检测并适应当前的主题模式，当网站切换到深色模式时，提示框会相应地调整颜色和样式。 ",-1)),t("div",mt,[r(a(s),{content:"深色模式下我会更换颜色"},{trigger:o(()=>[r(a(d),null,{default:o(()=>e[47]||(e[47]=[l("查看深色模式适配")])),_:1})]),_:1}),r(a(s),{position:"bottom"},{trigger:o(()=>[r(a(d),{type:"secondary"},{default:o(()=>e[48]||(e[48]=[l("自定义内容示例")])),_:1})]),content:o(()=>e[49]||(e[49]=[t("div",{class:"flex flex-col gap-2"},[t("h3",{class:"font-bold"},"深色模式支持"),t("p",null,"此提示框在深色模式下会自动调整样式"),t("div",{class:"rounded bg-gray-100 p-2 dark:bg-gray-700"},[t("code",{class:"text-xs"},"自动适配主题")])],-1)])),_:1})])]),t("div",{class:"mt-4 rounded bg-gray-100 p-3 dark:bg-gray-700"},[t("pre",{class:"text-sm"},f(Mt))])])]),e[54]||(e[54]=D('<section data-v-e0c9efe3><h2 class="mb-4 text-xl font-bold" data-v-e0c9efe3>API 文档</h2><div class="rounded-lg bg-gray-50 p-6 dark:bg-gray-800" data-v-e0c9efe3><div class="space-y-6" data-v-e0c9efe3><div data-v-e0c9efe3><h3 class="mb-3 text-lg font-semibold" data-v-e0c9efe3>属性 Props</h3><table class="min-w-full border-collapse border border-gray-300 dark:border-gray-700" data-v-e0c9efe3><thead data-v-e0c9efe3><tr class="bg-gray-100 dark:bg-gray-700" data-v-e0c9efe3><th class="border border-gray-300 p-2 text-left dark:border-gray-600" data-v-e0c9efe3>属性名</th><th class="border border-gray-300 p-2 text-left dark:border-gray-600" data-v-e0c9efe3>类型</th><th class="border border-gray-300 p-2 text-left dark:border-gray-600" data-v-e0c9efe3>默认值</th><th class="border border-gray-300 p-2 text-left dark:border-gray-600" data-v-e0c9efe3>说明</th></tr></thead><tbody data-v-e0c9efe3><tr data-v-e0c9efe3><td class="border border-gray-300 p-2 dark:border-gray-600" data-v-e0c9efe3>content</td><td class="border border-gray-300 p-2 dark:border-gray-600" data-v-e0c9efe3>string</td><td class="border border-gray-300 p-2 dark:border-gray-600" data-v-e0c9efe3>&#39;&#39;</td><td class="border border-gray-300 p-2 dark:border-gray-600" data-v-e0c9efe3>提示文本内容</td></tr><tr data-v-e0c9efe3><td class="border border-gray-300 p-2 dark:border-gray-600" data-v-e0c9efe3>position</td><td class="border border-gray-300 p-2 dark:border-gray-600" data-v-e0c9efe3> &#39;top&#39; | &#39;right&#39; | &#39;bottom&#39; | &#39;left&#39; </td><td class="border border-gray-300 p-2 dark:border-gray-600" data-v-e0c9efe3>&#39;top&#39;</td><td class="border border-gray-300 p-2 dark:border-gray-600" data-v-e0c9efe3>提示框显示位置</td></tr><tr data-v-e0c9efe3><td class="border border-gray-300 p-2 dark:border-gray-600" data-v-e0c9efe3>offset</td><td class="border border-gray-300 p-2 dark:border-gray-600" data-v-e0c9efe3>number</td><td class="border border-gray-300 p-2 dark:border-gray-600" data-v-e0c9efe3>10</td><td class="border border-gray-300 p-2 dark:border-gray-600" data-v-e0c9efe3> 提示框与触发元素的偏移距离（像素） </td></tr><tr data-v-e0c9efe3><td class="border border-gray-300 p-2 dark:border-gray-600" data-v-e0c9efe3>title</td><td class="border border-gray-300 p-2 dark:border-gray-600" data-v-e0c9efe3>string</td><td class="border border-gray-300 p-2 dark:border-gray-600" data-v-e0c9efe3>undefined</td><td class="border border-gray-300 p-2 dark:border-gray-600" data-v-e0c9efe3>提示框标题（可选）</td></tr><tr data-v-e0c9efe3><td class="border border-gray-300 p-2 dark:border-gray-600" data-v-e0c9efe3>trigger</td><td class="border border-gray-300 p-2 dark:border-gray-600" data-v-e0c9efe3> &#39;hover&#39; | &#39;click&#39; | &#39;focus&#39; </td><td class="border border-gray-300 p-2 dark:border-gray-600" data-v-e0c9efe3>&#39;hover&#39;</td><td class="border border-gray-300 p-2 dark:border-gray-600" data-v-e0c9efe3>触发提示显示的方式</td></tr></tbody></table></div><div data-v-e0c9efe3><h3 class="mb-3 text-lg font-semibold" data-v-e0c9efe3>插槽 Slots</h3><table class="min-w-full border-collapse border border-gray-300 dark:border-gray-700" data-v-e0c9efe3><thead data-v-e0c9efe3><tr class="bg-gray-100 dark:bg-gray-700" data-v-e0c9efe3><th class="border border-gray-300 p-2 text-left dark:border-gray-600" data-v-e0c9efe3>插槽名</th><th class="border border-gray-300 p-2 text-left dark:border-gray-600" data-v-e0c9efe3>说明</th></tr></thead><tbody data-v-e0c9efe3><tr data-v-e0c9efe3><td class="border border-gray-300 p-2 dark:border-gray-600" data-v-e0c9efe3>trigger</td><td class="border border-gray-300 p-2 dark:border-gray-600" data-v-e0c9efe3> 触发提示的元素，默认为问号图标按钮 </td></tr><tr data-v-e0c9efe3><td class="border border-gray-300 p-2 dark:border-gray-600" data-v-e0c9efe3>content</td><td class="border border-gray-300 p-2 dark:border-gray-600" data-v-e0c9efe3> 提示框内容，默认显示 content 属性设置的文本 </td></tr></tbody></table></div><div data-v-e0c9efe3><h3 class="mb-3 text-lg font-semibold" data-v-e0c9efe3>事件 Events</h3><table class="min-w-full border-collapse border border-gray-300 dark:border-gray-700" data-v-e0c9efe3><thead data-v-e0c9efe3><tr class="bg-gray-100 dark:bg-gray-700" data-v-e0c9efe3><th class="border border-gray-300 p-2 text-left dark:border-gray-600" data-v-e0c9efe3>事件名</th><th class="border border-gray-300 p-2 text-left dark:border-gray-600" data-v-e0c9efe3>参数</th><th class="border border-gray-300 p-2 text-left dark:border-gray-600" data-v-e0c9efe3>说明</th></tr></thead><tbody data-v-e0c9efe3><tr data-v-e0c9efe3><td class="border border-gray-300 p-2 dark:border-gray-600" data-v-e0c9efe3>show</td><td class="border border-gray-300 p-2 dark:border-gray-600" data-v-e0c9efe3>-</td><td class="border border-gray-300 p-2 dark:border-gray-600" data-v-e0c9efe3>提示框显示时触发</td></tr><tr data-v-e0c9efe3><td class="border border-gray-300 p-2 dark:border-gray-600" data-v-e0c9efe3>hide</td><td class="border border-gray-300 p-2 dark:border-gray-600" data-v-e0c9efe3>-</td><td class="border border-gray-300 p-2 dark:border-gray-600" data-v-e0c9efe3>提示框隐藏时触发</td></tr></tbody></table></div></div></div></section><section data-v-e0c9efe3><h2 class="mb-4 text-xl font-bold" data-v-e0c9efe3>小结与最佳实践</h2><div class="rounded-lg bg-gray-50 p-6 dark:bg-gray-800" data-v-e0c9efe3><div class="space-y-4" data-v-e0c9efe3><h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200" data-v-e0c9efe3>适用场景</h3><ul class="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2" data-v-e0c9efe3><li data-v-e0c9efe3>当需要为用户提供额外信息或帮助说明但又不想占用页面空间时</li><li data-v-e0c9efe3>为表单字段提供说明，如格式要求、字符限制等</li><li data-v-e0c9efe3>在复杂的数据表格中解释列头或数据含义</li><li data-v-e0c9efe3>为功能按钮提供辅助说明，提升用户理解</li><li data-v-e0c9efe3>在精简界面中隐藏不常用的详细信息</li></ul><h3 class="mt-6 text-lg font-semibold text-gray-800 dark:text-gray-200" data-v-e0c9efe3>最佳实践</h3><ul class="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2" data-v-e0c9efe3><li data-v-e0c9efe3><strong data-v-e0c9efe3>简洁明了</strong>：提示内容应简洁明了，避免冗长的文本。如需展示大量信息，考虑使用其他组件如弹窗或抽屉。 </li><li data-v-e0c9efe3><strong data-v-e0c9efe3>位置选择</strong>：根据页面布局和可用空间选择合适的提示方向，一般上方和下方是最常用的方向。 </li><li data-v-e0c9efe3><strong data-v-e0c9efe3>触发方式</strong>：对于帮助信息，通常使用悬停触发；对于需要保持显示的信息，可使用点击触发；对于表单输入辅助信息，使用聚焦触发更合适。 </li><li data-v-e0c9efe3><strong data-v-e0c9efe3>避免滥用</strong>：不要在页面中过度使用 Tooltip，这会导致用户体验下降，只在真正需要额外解释的元素上使用。 </li><li data-v-e0c9efe3><strong data-v-e0c9efe3>保持一致性</strong>：在整个应用中，对类似元素使用一致的 Tooltip 样式和触发方式，提高用户的可预测性。 </li><li data-v-e0c9efe3><strong data-v-e0c9efe3>无障碍考虑</strong>：确保 Tooltip 可以通过键盘访问，并提供适当的 ARIA 属性以支持屏幕阅读器用户。 </li></ul><div class="mt-6 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/30" data-v-e0c9efe3><h4 class="font-medium text-blue-700 dark:text-blue-300" data-v-e0c9efe3>提示</h4><p class="mt-1 text-blue-600 dark:text-blue-200" data-v-e0c9efe3> Tooltip 组件会自动检测边界，确保提示内容始终可见。在设计界面时，无需担心靠近窗口边缘的元素显示不完整问题。 </p></div></div></div></section>',2))]))}}),_t=H(zt,[["__scopeId","data-v-e0c9efe3"]]);export{s as Tooltip,_t as default};
//# sourceMappingURL=index-CKhARtO9.js.map
