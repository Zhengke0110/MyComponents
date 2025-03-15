import{B as n}from"./index-DKXyeOTD.js";import{d as z,r as v,i as h,o as L,C as H,e as o,V as P,T as N,B as _,c as B,a as t,w as s,q as r,t as c,l as i,b as C,_ as R}from"./index-BaMIbURk.js";const l=z({name:"Tooltip",props:{content:{type:String,default:""},position:{type:String,default:"top"},offset:{type:Number,default:10}},setup(f,{slots:p}){const y=v(null),k=v(null),e=v(!1),T=v({}),u=v(f.position),j=h(()=>["absolute px-5 py-3 text-center text-gray-600 bg-white rounded-lg shadow-lg dark:text-white dark:bg-gray-800 dark:shadow-none shadow-gray-200","transition-all duration-200 ease-out z-50","min-w-[12rem] max-w-xs",`tooltip-${u.value}`]),E=h(()=>[`tooltip-arrow-${u.value}`]),S=h(()=>({position:"fixed",top:T.value.top,left:T.value.left,zIndex:9999})),m=()=>{if(!y.value||!k.value)return;u.value=f.position;const b=y.value.getBoundingClientRect(),g=k.value.getBoundingClientRect(),M=document.documentElement.clientWidth,w=document.documentElement.clientHeight,d=8;let a=0,x=0;x=b.left+(b.width-g.width)/2,u.value==="top"?a=b.top-g.height-f.offset:a=b.bottom+f.offset,a<d&&u.value==="top"?(u.value="bottom",a=b.bottom+f.offset):a+g.height>w-d&&u.value==="bottom"&&(u.value="top",a=b.top-g.height-f.offset),x<d?x=d:x+g.width>M-d&&(x=M-g.width-d),a<d&&a+g.height>w-d?u.value==="top"?a=d:a=w-g.height-d:(a<d&&(a=d),a+g.height>w-d&&(a=w-g.height-d)),T.value={position:"fixed",top:`${a}px`,left:`${x}px`,zIndex:"9999"}},V=()=>{e.value=!0,_(()=>{m(),_(()=>{m()})})},D=()=>{e.value=!1};return L(()=>{window.addEventListener("resize",m),window.addEventListener("scroll",m,{passive:!0})}),H(()=>{window.removeEventListener("resize",m),window.removeEventListener("scroll",m)}),()=>o("div",{class:"relative inline-block",ref:y},[o("div",{onMouseenter:V,onMouseleave:D,class:"w-full"},[p.trigger?p.trigger():o("button",{type:"button",class:"text-gray-600 transition-colors duration-200 focus:outline-none dark:text-gray-300 dark:hover:text-blue-400 hover:text-blue-500"},[o("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",class:"w-6 h-6"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"},null)])])],40,["onMouseenter","onMouseleave"]),o(P,{to:"body"},{default:()=>[o(N,{name:"tooltip-fade",enterActiveClass:"transition ease-out duration-200",enterFromClass:"opacity-0 scale-95",enterToClass:"opacity-100 scale-100",leaveActiveClass:"transition ease-in duration-150",leaveFromClass:"opacity-100 scale-100",leaveToClass:"opacity-0 scale-95"},{default:()=>[e.value&&o("div",{ref:k,class:j.value,style:S.value},[p.content?p.content():o("p",{class:"text-sm"},[f.content]),o("span",{class:E.value},null,2)],6)]})]}),o("style",{scoped:!0},[`
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
        `],8,["scoped"])],512)}}),$={class:"p-8 space-y-12"},A={class:"bg-gray-50 p-6 rounded-lg dark:bg-gray-800"},I={class:"flex items-center gap-4"},F={class:"bg-gray-50 p-6 rounded-lg dark:bg-gray-800"},J={class:"flex flex-wrap gap-4"},W={class:"bg-gray-50 p-6 rounded-lg dark:bg-gray-800"},q={class:"flex items-center gap-4"},O={class:"bg-gray-50 p-6 rounded-lg dark:bg-gray-800"},U={class:"flex gap-6 items-center flex-wrap"},G={class:"bg-gray-50 p-6 rounded-lg dark:bg-gray-800"},K={class:"flex gap-4 items-center flex-wrap"},Q={class:"w-full mt-3"},X={class:"flex gap-4 items-center"},Y={class:"bg-gray-50 p-6 rounded-lg dark:bg-gray-800"},Z={class:"h-48 flex items-start"},tt={class:"mt-2"},et={class:"flex justify-end"},ot={class:"bg-gray-50 p-6 rounded-lg dark:bg-gray-800"},st={class:"flex flex-col gap-4"},rt={class:"flex items-center gap-2"},lt={class:"mt-4"},nt={class:"min-w-full border-collapse border border-gray-300 dark:border-gray-700"},it={class:"bg-gray-100 dark:bg-gray-700"},at={class:"p-2 border border-gray-300 dark:border-gray-600 text-left"},dt={class:"flex items-center gap-1"},pt={class:"p-2 border border-gray-300 dark:border-gray-600"},gt={class:"p-2 border border-gray-300 dark:border-gray-600"},ut={class:"bg-gray-50 p-6 rounded-lg dark:bg-gray-800"},ct={class:"flex items-center gap-4"},ft={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},mt={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},bt={class:"mt-6 p-4 bg-white dark:bg-gray-900 rounded border dark:border-gray-700"},xt={class:"flex gap-4"},vt=`<Tooltip content="这是一个简单的提示">
  <template #trigger>
    <Button>悬停查看提示</Button>
  </template>
</Tooltip>

<!-- 使用默认问号图标 -->
<Tooltip content="默认使用问号图标作为触发器">
  <!-- 使用默认问号图标 -->
</Tooltip>`,yt=`<Tooltip content="上方提示" position="top">
  <template #trigger>
    <Button type="secondary">上方显示</Button>
  </template>
</Tooltip>

<Tooltip content="下方提示" position="bottom">
  <template #trigger>
    <Button type="secondary">下方显示</Button>
  </template>
</Tooltip>

<!-- 当空间不足时，会自动切换方向 -->`,wt=`<Tooltip position="bottom">
  <template #trigger>
    <Button type="success">产品详情</Button>
  </template>
  <template #content>
    <div class="flex flex-col gap-2">
      <h3 class="font-bold border-b pb-2">高级智能手表</h3>
      <p>全新一代智能手表，支持健康监测和运动追踪</p>
      <div class="flex items-center gap-2">
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
</Tooltip>`,kt=`<!-- 图标触发器 -->
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
</Tooltip>`,Tt=`<!-- 上方不同偏移距离 -->
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

<!-- 下方不同偏移距离 -->
<Tooltip content="下方默认偏移 (10px)" position="bottom">
  <template #trigger>
    <Button type="secondary">下方默认偏移</Button>
  </template>
</Tooltip>

<Tooltip content="下方较大偏移 (20px)" position="bottom" :offset="20">
  <template #trigger>
    <Button type="secondary">下方较大偏移 (20px)</Button>
  </template>
</Tooltip>`,ht=`<!-- 靠近边缘时的智能调整 -->
<Tooltip content="我在顶部时会自动避免被截断" position="top">
  <template #trigger>
    <Button type="warning">靠近顶部的元素</Button>
  </template>
</Tooltip>

<Tooltip content="我会避免超出右侧边界" position="top">
  <template #trigger>
    <Button type="warning">靠近右侧的元素</Button>
  </template>
</Tooltip>`,Bt=`<!-- 表单帮助信息 -->
<div class="flex items-center gap-2">
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
        <div class="flex items-center gap-1">
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
</table>`,Ct=`<!-- 深色模式自动适配 -->
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
</Tooltip>`,Mt=z({__name:"View",setup(f){const p=v(!1),y=()=>{p.value=!p.value,p.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")};return(k,e)=>(C(),B("div",$,[e[48]||(e[48]=t("h1",{class:"text-3xl font-bold mb-8"},"Tooltip 文字提示组件",-1)),e[49]||(e[49]=t("p",{class:"text-gray-600 dark:text-gray-300 mb-8 text-lg"}," Tooltip 组件用于在用户悬停在元素上时显示提示信息，提高用户体验和界面可用性。支持自定义内容、多种显示位置和暗黑模式。 ",-1)),t("section",null,[e[1]||(e[1]=t("h2",{class:"text-xl font-bold mb-4"},"基础用法",-1)),t("div",A,[t("div",I,[o(r(l),{content:"这是一个简单的提示"},{trigger:s(()=>[o(r(n),null,{default:s(()=>e[0]||(e[0]=[i("悬停查看提示")])),_:1})]),_:1}),o(r(l),{content:"默认使用问号图标作为触发器"})]),t("div",{class:"mt-4 bg-gray-100 p-3 rounded dark:bg-gray-700"},[t("pre",{class:"text-sm"},c(vt))])])]),t("section",null,[e[5]||(e[5]=t("h2",{class:"text-xl font-bold mb-4"},"提示方向",-1)),t("div",F,[t("div",J,[o(r(l),{content:"上方提示",position:"top"},{trigger:s(()=>[o(r(n),{type:"secondary"},{default:s(()=>e[2]||(e[2]=[i("上方显示")])),_:1})]),_:1}),o(r(l),{content:"下方提示",position:"bottom"},{trigger:s(()=>[o(r(n),{type:"secondary"},{default:s(()=>e[3]||(e[3]=[i("下方显示")])),_:1})]),_:1}),e[4]||(e[4]=t("div",{class:"w-full mt-2 text-sm text-gray-500 dark:text-gray-400"},[t("p",null,"注意：当空间不足时，Tooltip 会自动切换到合适的方向")],-1))]),t("div",{class:"mt-4 bg-gray-100 p-3 rounded dark:bg-gray-700"},[t("pre",{class:"text-sm"},c(yt))])])]),t("section",null,[e[10]||(e[10]=t("h2",{class:"text-xl font-bold mb-4"},"自定义内容",-1)),t("div",W,[t("div",q,[o(r(l),{position:"bottom"},{trigger:s(()=>[o(r(n),{type:"success"},{default:s(()=>e[6]||(e[6]=[i("产品详情")])),_:1})]),content:s(()=>e[7]||(e[7]=[t("div",{class:"flex flex-col gap-2"},[t("h3",{class:"font-bold border-b pb-2"},"高级智能手表"),t("p",null,"全新一代智能手表，支持健康监测和运动追踪"),t("div",{class:"flex items-center gap-2"},[t("span",null,"⭐️"),t("span",null,"4.8 评分 (128条评价)")]),t("div",{class:"flex items-center gap-2"},[t("span",null,"📅"),t("span",null,"2024-05-10 发布")]),t("div",{class:"flex items中心 gap-2 text-green-600 font-medium"},[t("span",null,"💰"),t("span",null,"¥1,299")])],-1)])),_:1}),o(r(l),{position:"bottom"},{trigger:s(()=>[o(r(n),{type:"warning"},{default:s(()=>e[8]||(e[8]=[i("用户信息")])),_:1})]),content:s(()=>e[9]||(e[9]=[t("div",{class:"flex items-center gap-3"},[t("div",{class:"w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold"}," JD "),t("div",null,[t("div",{class:"font-medium"},"John Doe"),t("div",{class:"text-xs text-gray-500 dark:text-gray-400"},"产品设计师")])],-1)])),_:1})]),t("div",{class:"mt-4 bg-gray-100 p-3 rounded dark:bg-gray-700"},[t("pre",{class:"text-sm"},c(wt))])])]),t("section",null,[e[15]||(e[15]=t("h2",{class:"text-xl font-bold mb-4"},"自定义触发器",-1)),t("div",O,[t("div",U,[o(r(l),{content:"图标触发的提示"},{trigger:s(()=>e[11]||(e[11]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 text-blue-500 hover:text-blue-600 cursor-pointer"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"})],-1)])),_:1}),o(r(l),{content:"文本链接提示"},{trigger:s(()=>e[12]||(e[12]=[t("span",{class:"text-blue-500 hover:text-blue-600 cursor-pointer underline"}," 帮助文档 ",-1)])),_:1}),o(r(l),{content:"图片作为触发器"},{trigger:s(()=>e[13]||(e[13]=[t("div",{class:"w-10 h-10 rounded overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"},[t("img",{src:"https://placekitten.com/100/100",alt:"猫咪图片",class:"w-full h-full object-cover"})],-1)])),_:1}),o(r(l),{content:"自定义按钮作为触发器"},{trigger:s(()=>e[14]||(e[14]=[t("button",{class:"px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"}," 自定义按钮 ",-1)])),_:1}),o(r(l),{content:"默认触发器"})]),t("div",{class:"mt-4 bg-gray-100 p-3 rounded dark:bg-gray-700"},[t("pre",{class:"text-sm"},c(kt))])])]),t("section",null,[e[21]||(e[21]=t("h2",{class:"text-xl font-bold mb-4"},"不同偏移距离",-1)),t("div",G,[t("div",K,[o(r(l),{content:"默认偏移 (10px)",position:"top"},{trigger:s(()=>[o(r(n),{type:"info"},{default:s(()=>e[16]||(e[16]=[i("默认偏移")])),_:1})]),_:1}),o(r(l),{content:"较大偏移 (20px)",position:"top",offset:20},{trigger:s(()=>[o(r(n),{type:"info"},{default:s(()=>e[17]||(e[17]=[i("较大偏移 (20px)")])),_:1})]),_:1}),o(r(l),{content:"更大偏移 (30px)",position:"top",offset:30},{trigger:s(()=>[o(r(n),{type:"info"},{default:s(()=>e[18]||(e[18]=[i("更大偏移 (30px)")])),_:1})]),_:1}),t("div",Q,[t("div",X,[o(r(l),{content:"下方默认偏移 (10px)",position:"bottom"},{trigger:s(()=>[o(r(n),{type:"secondary"},{default:s(()=>e[19]||(e[19]=[i("下方默认偏移")])),_:1})]),_:1}),o(r(l),{content:"下方较大偏移 (20px)",position:"bottom",offset:20},{trigger:s(()=>[o(r(n),{type:"secondary"},{default:s(()=>e[20]||(e[20]=[i("下方较大偏移 (20px)")])),_:1})]),_:1})])])]),t("div",{class:"mt-4 bg-gray-100 p-3 rounded dark:bg-gray-700"},[t("pre",{class:"text-sm"},c(Tt))])])]),t("section",null,[e[25]||(e[25]=t("h2",{class:"text-xl font-bold mb-4"},"智能位置调整",-1)),t("div",Y,[e[24]||(e[24]=t("div",{class:"flex items-center mb-4"},[t("p",{class:"text-sm text-gray-600 dark:text-gray-300"}," 当屏幕空间不足时，Tooltip 会智能调整显示位置，确保内容始终可见。尝试将窗口滚动到边缘，或调整浏览器大小，观察提示框的位置变化。 ")],-1)),t("div",Z,[t("div",tt,[o(r(l),{content:"我在顶部时会自动避免被截断",position:"top"},{trigger:s(()=>[o(r(n),{type:"warning"},{default:s(()=>e[22]||(e[22]=[i("靠近顶部的元素")])),_:1})]),_:1})])]),t("div",et,[o(r(l),{content:"我会避免超出右侧边界",position:"top"},{trigger:s(()=>[o(r(n),{type:"warning"},{default:s(()=>e[23]||(e[23]=[i("靠近右侧的元素")])),_:1})]),_:1})]),t("div",{class:"mt-4 bg-gray-100 p-3 rounded dark:bg-gray-700"},[t("pre",{class:"text-sm"},c(ht))])])]),t("section",null,[e[39]||(e[39]=t("h2",{class:"text-xl font-bold mb-4"},"复杂场景应用",-1)),t("div",ot,[t("div",st,[t("div",rt,[e[27]||(e[27]=t("label",{for:"username",class:"min-w-32 text-gray-700 dark:text-gray-300"},"用户名",-1)),e[28]||(e[28]=t("input",{id:"username",type:"text",class:"px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600",placeholder:"请输入用户名"},null,-1)),o(r(l),{content:"用户名长度需要在3-20个字符之间，只能包含字母、数字和下划线"},{trigger:s(()=>e[26]||(e[26]=[t("span",{class:"cursor-pointer text-gray-500"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})])],-1)])),_:1})]),t("div",lt,[t("table",nt,[t("thead",null,[t("tr",it,[e[31]||(e[31]=t("th",{class:"p-2 border border-gray-300 dark:border-gray-600 text-left"},"产品名称",-1)),t("th",at,[t("div",dt,[e[30]||(e[30]=t("span",null,"库存状态",-1)),o(r(l),{content:"绿色表示库存充足，黄色表示库存较低，红色表示缺货"},{trigger:s(()=>e[29]||(e[29]=[t("span",{class:"cursor-pointer text-gray-500"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})])],-1)])),_:1})])]),e[32]||(e[32]=t("th",{class:"p-2 border border-gray-300 dark:border-gray-600 text-left"},"操作",-1))])]),t("tbody",null,[t("tr",null,[e[34]||(e[34]=t("td",{class:"p-2 border border-gray-300 dark:border-gray-600"},"智能手表 Pro",-1)),e[35]||(e[35]=t("td",{class:"p-2 border border-gray-300 dark:border-gray-600"},[t("span",{class:"inline-block w-3 h-3 rounded-full bg-green-500"})],-1)),t("td",pt,[o(r(l),{content:"点击查看详细库存信息和历史变动"},{trigger:s(()=>[o(r(n),{type:"secondary",size:"sm"},{default:s(()=>e[33]||(e[33]=[i("查看详情")])),_:1})]),_:1})])]),t("tr",null,[e[37]||(e[37]=t("td",{class:"p-2 border border-gray-300 dark:border-gray-600"},"无线耳机",-1)),e[38]||(e[38]=t("td",{class:"p-2 border border-gray-300 dark:border-gray-600"},[t("span",{class:"inline-block w-3 h-3 rounded-full bg黄色-500"})],-1)),t("td",gt,[o(r(l),{content:"点击查看详细库存信息和历史变动"},{trigger:s(()=>[o(r(n),{type:"secondary",size:"sm"},{default:s(()=>e[36]||(e[36]=[i("查看详情")])),_:1})]),_:1})])])])])])]),t("div",{class:"mt-4 bg-gray-100 p-3 rounded dark:bg-gray-700"},[t("pre",{class:"text-sm"},c(Bt))])])]),t("section",null,[e[47]||(e[47]=t("h2",{class:"text-xl font-bold mb-4"},"深色模式切换",-1)),t("div",ut,[t("div",ct,[o(r(n),{onClick:y,type:"info",class:"flex items-center gap-2"},{default:s(()=>[p.value?(C(),B("svg",ft,e[40]||(e[40]=[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"},null,-1)]))):(C(),B("svg",mt,e[41]||(e[41]=[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"},null,-1)]))),i(" 切换"+c(p.value?"浅色":"深色")+"模式 ",1)]),_:1}),o(r(l),{content:"Tooltip 会自动适应当前主题模式，无需额外配置"},{trigger:s(()=>e[42]||(e[42]=[t("span",{class:"text-blue-500 hover:text-blue-600 cursor-pointer"}," 查看效果 ",-1)])),_:1})]),t("div",bt,[e[46]||(e[46]=t("p",{class:"text-sm text-gray-600 dark:text-gray-300 mb-4"}," Tooltip 组件会自动检测并适应当前的主题模式，当网站切换到深色模式时，提示框会相应地调整颜色和样式。 ",-1)),t("div",xt,[o(r(l),{content:"深色模式下我会更换颜色"},{trigger:s(()=>[o(r(n),null,{default:s(()=>e[43]||(e[43]=[i("查看深色模式适配")])),_:1})]),_:1}),o(r(l),{position:"bottom"},{trigger:s(()=>[o(r(n),{type:"secondary"},{default:s(()=>e[44]||(e[44]=[i("自定义内容示例")])),_:1})]),content:s(()=>e[45]||(e[45]=[t("div",{class:"flex flex-col gap-2"},[t("h3",{class:"font-bold"},"深色模式支持"),t("p",null,"此提示框在深色模式下会自动调整样式"),t("div",{class:"p-2 bg-gray-100 dark:bg-gray-700 rounded"},[t("code",{class:"text-xs"},"自动适配主题")])],-1)])),_:1})])]),t("div",{class:"mt-4 bg-gray-100 p-3 rounded dark:bg-gray-700"},[t("pre",{class:"text-sm"},c(Ct))])])])]))}}),jt=R(Mt,[["__scopeId","data-v-1effa212"]]);export{jt as default};
//# sourceMappingURL=index-Dw_OgtVy.js.map
