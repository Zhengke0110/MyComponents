import{d as D,r as s,c as V,w as S,b as r,T as $,s as A,K as E,f as I,g as a,l as L,x as n,j as x,t as B,m as M,_ as U}from"./index-BSjwMPY1.js";const b=D({name:"Drawer",props:{modelValue:{type:Boolean,default:!1,required:!0},title:{type:String,default:""},placement:{type:String,default:"right"},size:{type:[String,Number],default:"300px"},closable:{type:Boolean,default:!0},mask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},showFooter:{type:Boolean,default:!1},zIndex:{type:Number,default:1e3},destroyOnClose:{type:Boolean,default:!1},lockScroll:{type:Boolean,default:!0}},emits:["update:modelValue","open","close","afterVisibleChange"],setup(d,{slots:l,emit:o}){const y=s(!1),i=s(!1),g=s(null),u=V(()=>{const t=typeof d.size=="number"?`${d.size}px`:d.size;return["left","right"].includes(d.placement)?{width:t}:{height:t}}),C=V(()=>`drawer-${d.placement}`),z=V(()=>({zIndex:d.zIndex})),v=()=>{o("update:modelValue",!1)},p=()=>{d.maskClosable&&v()},c=()=>{i.value=!1,o("afterVisibleChange",!1)},m=()=>{i.value=!1,o("afterVisibleChange",!0)},k=()=>{i.value=!0,o("open")},w=()=>{i.value=!0,o("close")};S(()=>d.modelValue,t=>{t?(y.value=!0,d.lockScroll&&(document.body.style.overflow="hidden")):(d.lockScroll&&(document.body.style.overflow=""),i.value||(y.value=!1))},{immediate:!0});const h=t=>{t.stopPropagation()},f=V(()=>document.documentElement.classList.contains("dark"));return()=>r($,{name:"drawer-fade",appear:!0},{default:()=>[y.value&&r("div",{class:"fixed inset-0 overflow-hidden",style:z.value,"aria-modal":"true",role:"dialog"},[d.mask&&r("div",{class:"absolute inset-0 bg-black bg-opacity-30 dark:bg-opacity-50 transition-opacity tech-drawer-mask",onClick:p},null,8,["onClick"]),r($,{name:C.value,appear:!0,onBeforeEnter:k,onAfterEnter:m,onBeforeLeave:w,onAfterLeave:c},{default:()=>{var t,e;return[A(r("div",{class:`absolute flex flex-col tech-drawer-panel ${d.placement} ${f.value?"dark":"light"} ${N(d.placement)}`,ref:g,style:u.value,onClick:h},[(d.title||d.closable||l.title)&&r("div",{class:"flex items-center justify-between px-6 py-4 drawer-header"},[r("div",{class:"flex-1 font-medium text-gray-800 dark:text-gray-200"},[l.title?l.title():d.title]),d.closable&&r("button",{onClick:v,class:"rounded-full p-1.5 text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 focus:outline-none drawer-close-btn","aria-label":"Close drawer"},[r("svg",{class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null)])],8,["onClick"])]),r("div",{class:"flex-1 overflow-auto p-6 drawer-content"},[!d.destroyOnClose||d.modelValue?(t=l.default)==null?void 0:t.call(l):null]),(d.showFooter||l.footer)&&r("div",{class:"flex justify-end px-6 py-4 drawer-footer"},[(e=l.footer)==null?void 0:e.call(l)])],12,["onClick"]),[[E,d.modelValue]])]}},8,["name","appear","onBeforeEnter","onAfterEnter","onBeforeLeave","onAfterLeave"])],4)]},8,["appear"])}});function N(d){switch(d){case"left":return"top-0 left-0 bottom-0";case"right":return"top-0 right-0 bottom-0";case"top":return"top-0 left-0 right-0";case"bottom":return"bottom-0 left-0 right-0";default:return"top-0 right-0 bottom-0"}}const j={class:"p-6 min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300"},F={class:"mb-10"},P={class:"flex flex-wrap gap-4"},T={class:"mb-10"},O={class:"flex flex-wrap gap-4"},R={class:"mb-10"},q={class:"flex flex-wrap gap-4"},K={class:"mb-10"},W={class:"text-gray-800 dark:text-gray-200"},G={class:"text-gray-800 dark:text-gray-200"},H={class:"text-gray-800 dark:text-gray-200"},J={class:"mt-6"},Q=D({__name:"View",setup(d){const l=s(!1),o=s("right"),y={left:"左侧",right:"右侧",top:"顶部",bottom:"底部"},i=f=>{o.value=f,l.value=!0},g=s(!1),u=s("medium"),C={small:"小",medium:"中",large:"大"},z={small:"250px",medium:"400px",large:"600px"},v=V(()=>z[u.value]),p=f=>{u.value=f,g.value=!0},c=s(!1),m=s(!1),k=s(!1),w=s(!1),h=s(!1);return(f,t)=>(M(),I("div",j,[t[31]||(t[31]=a("h1",{class:"text-2xl font-bold mb-6 text-gray-900 dark:text-white"},"Drawer 抽屉组件",-1)),a("section",F,[t[19]||(t[19]=a("h2",{class:"text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200"},"基础用法",-1)),a("div",P,[a("button",{onClick:t[0]||(t[0]=e=>i("right")),class:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"}," 右侧抽屉 "),a("button",{onClick:t[1]||(t[1]=e=>i("left")),class:"px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"}," 左侧抽屉 "),a("button",{onClick:t[2]||(t[2]=e=>i("top")),class:"px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"}," 顶部抽屉 "),a("button",{onClick:t[3]||(t[3]=e=>i("bottom")),class:"px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors"}," 底部抽屉 ")])]),a("section",T,[t[20]||(t[20]=a("h2",{class:"text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200"},"自定义尺寸",-1)),a("div",O,[a("button",{onClick:t[4]||(t[4]=e=>p("small")),class:"px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition-colors"}," 小尺寸抽屉 "),a("button",{onClick:t[5]||(t[5]=e=>p("medium")),class:"px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition-colors"}," 中等尺寸抽屉 "),a("button",{onClick:t[6]||(t[6]=e=>p("large")),class:"px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition-colors"}," 大尺寸抽屉 ")])]),a("section",R,[t[21]||(t[21]=a("h2",{class:"text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200"},"高级配置",-1)),a("div",q,[a("button",{onClick:t[7]||(t[7]=e=>c.value=!0),class:"px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"}," 无遮罩层抽屉 "),a("button",{onClick:t[8]||(t[8]=e=>m.value=!0),class:"px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"}," 不可点击遮罩关闭 "),a("button",{onClick:t[9]||(t[9]=e=>k.value=!0),class:"px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"}," 带底部抽屉 ")])]),a("section",K,[t[22]||(t[22]=a("h2",{class:"text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200"},"嵌套内容",-1)),a("button",{onClick:t[10]||(t[10]=e=>w.value=!0),class:"px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition-colors"}," 嵌套抽屉 ")]),r(x(b),{modelValue:l.value,"onUpdate:modelValue":t[11]||(t[11]=e=>l.value=e),placement:o.value,title:`${y[o.value]}抽屉`},{default:n(()=>[a("div",W,[a("p",null,"这是一个基础的抽屉组件，位置在"+B(y[o.value]),1),t[23]||(t[23]=a("div",{class:"mt-4"},[a("p",{class:"mb-2"},"抽屉组件特性："),a("ul",{class:"list-disc pl-5"},[a("li",null,"可以从四个方向滑入"),a("li",null,"支持自定义尺寸"),a("li",null,"可配置遮罩层和关闭行为"),a("li",null,"支持亮色和暗色模式")])],-1))])]),_:1},8,["modelValue","placement","title"]),r(x(b),{modelValue:g.value,"onUpdate:modelValue":t[12]||(t[12]=e=>g.value=e),title:"自定义尺寸抽屉",size:v.value,placement:"right"},{default:n(()=>[a("div",G,[a("p",null,"这是一个"+B(C[u.value])+"尺寸的抽屉，宽度为 "+B(v.value),1),t[24]||(t[24]=a("div",{class:"mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded"},[a("p",null,"抽屉大小可以通过传入不同的 size 属性来控制，可以是像素值或百分比。")],-1))])]),_:1},8,["modelValue","size"]),r(x(b),{modelValue:c.value,"onUpdate:modelValue":t[13]||(t[13]=e=>c.value=e),title:"无遮罩层抽屉",mask:!1},{default:n(()=>t[25]||(t[25]=[a("div",{class:"text-gray-800 dark:text-gray-200"},[a("p",null,"这个抽屉没有遮罩层，背景内容可见。"),a("div",{class:"mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded"},[a("p",null,"在某些场景下，可能需要保持与背景内容的交互，此时可以设置 mask 为 false。")])],-1)])),_:1},8,["modelValue"]),r(x(b),{modelValue:m.value,"onUpdate:modelValue":t[14]||(t[14]=e=>m.value=e),title:"不可点击遮罩关闭",maskClosable:!1},{default:n(()=>t[26]||(t[26]=[a("div",{class:"text-gray-800 dark:text-gray-200"},[a("p",null,"点击遮罩层不会关闭这个抽屉。"),a("div",{class:"mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded"},[a("p",null,"设置 maskClosable 为 false 可以防止用户通过点击遮罩层意外关闭抽屉。")])],-1)])),_:1},8,["modelValue"]),r(x(b),{modelValue:k.value,"onUpdate:modelValue":t[15]||(t[15]=e=>k.value=e),title:"带底部的抽屉",showFooter:!0},{footer:n(()=>t[27]||(t[27]=[a("div",{class:"flex gap-2"},[a("button",{class:"px-4 py-2 bg-gray-200 text-gray-800 rounded dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"}," 取消 "),a("button",{class:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"}," 确认 ")],-1)])),default:n(()=>[t[28]||(t[28]=a("div",{class:"text-gray-800 dark:text-gray-200"},[a("p",null,"这个抽屉包含底部操作区域。"),a("div",{class:"mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded"},[a("p",null,"可以在底部添加操作按钮或其他内容。")])],-1))]),_:1},8,["modelValue"]),r(x(b),{modelValue:w.value,"onUpdate:modelValue":t[18]||(t[18]=e=>w.value=e),title:"嵌套抽屉示例",placement:"right",size:"400px"},{default:n(()=>[a("div",H,[t[29]||(t[29]=a("p",null,"这个示例展示了如何在一个抽屉中打开另一个抽屉。",-1)),a("div",J,[a("button",{onClick:t[16]||(t[16]=e=>h.value=!0),class:"px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"}," 打开内层抽屉 ")])]),r(x(b),{modelValue:h.value,"onUpdate:modelValue":t[17]||(t[17]=e=>h.value=e),title:"内层抽屉",placement:"right",size:"300px"},{default:n(()=>t[30]||(t[30]=[a("div",{class:"text-gray-800 dark:text-gray-200"},[a("p",null,"这是嵌套在另一个抽屉内部的抽屉。"),a("div",{class:"mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded"},[a("p",null,"嵌套抽屉在复杂的交互场景中很有用，比如多层级的表单填写或者数据选择。")])],-1)])),_:1},8,["modelValue"])]),_:1},8,["modelValue"]),t[32]||(t[32]=L('<section class="mb-10" data-v-8fb99ae1><h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white" data-v-8fb99ae1>组件API</h2><div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800" data-v-8fb99ae1><h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white" data-v-8fb99ae1>属性 (Props)</h3><div class="mb-6 overflow-x-auto" data-v-8fb99ae1><table class="min-w-full border-collapse" data-v-8fb99ae1><thead data-v-8fb99ae1><tr class="border-b border-gray-200 dark:border-gray-700" data-v-8fb99ae1><th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white" data-v-8fb99ae1>属性名</th><th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white" data-v-8fb99ae1>类型</th><th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white" data-v-8fb99ae1>默认值</th><th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white" data-v-8fb99ae1>描述</th></tr></thead><tbody class="divide-y divide-gray-200 dark:divide-gray-700" data-v-8fb99ae1><tr data-v-8fb99ae1><td class="px-4 py-2 font-medium text-gray-900 dark:text-white" data-v-8fb99ae1>modelValue(v-model)</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-8fb99ae1>boolean</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-8fb99ae1>false</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-8fb99ae1>控制抽屉是否可见</td></tr><tr data-v-8fb99ae1><td class="px-4 py-2 font-medium text-gray-900 dark:text-white" data-v-8fb99ae1>title</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-8fb99ae1>string</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-8fb99ae1>&#39;&#39;</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-8fb99ae1>抽屉标题</td></tr><tr data-v-8fb99ae1><td class="px-4 py-2 font-medium text-gray-900 dark:text-white" data-v-8fb99ae1>placement</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-8fb99ae1>&#39;left&#39; | &#39;right&#39; | &#39;top&#39; | &#39;bottom&#39;</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-8fb99ae1>&#39;right&#39;</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-8fb99ae1>抽屉弹出方向</td></tr><tr data-v-8fb99ae1><td class="px-4 py-2 font-medium text-gray-900 dark:text-white" data-v-8fb99ae1>size</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-8fb99ae1>string | number</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-8fb99ae1>&#39;300px&#39;</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-8fb99ae1>抽屉宽度或高度，取决于方向</td></tr><tr data-v-8fb99ae1><td class="px-4 py-2 font-medium text-gray-900 dark:text-white" data-v-8fb99ae1>closable</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-8fb99ae1>boolean</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-8fb99ae1>true</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-8fb99ae1>是否显示关闭按钮</td></tr><tr data-v-8fb99ae1><td class="px-4 py-2 font-medium text-gray-900 dark:text-white" data-v-8fb99ae1>mask</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-8fb99ae1>boolean</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-8fb99ae1>true</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-8fb99ae1>是否显示遮罩层</td></tr><tr data-v-8fb99ae1><td class="px-4 py-2 font-medium text-gray-900 dark:text-white" data-v-8fb99ae1>maskClosable</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-8fb99ae1>boolean</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-8fb99ae1>true</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-8fb99ae1>点击遮罩层是否可关闭抽屉</td></tr><tr data-v-8fb99ae1><td class="px-4 py-2 font-medium text-gray-900 dark:text-white" data-v-8fb99ae1>showFooter</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-8fb99ae1>boolean</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-8fb99ae1>false</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-8fb99ae1>是否显示底部区域</td></tr><tr data-v-8fb99ae1><td class="px-4 py-2 font-medium text-gray-900 dark:text-white" data-v-8fb99ae1>zIndex</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-8fb99ae1>number</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-8fb99ae1>1000</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-8fb99ae1>设置抽屉的 z-index</td></tr><tr data-v-8fb99ae1><td class="px-4 py-2 font-medium text-gray-900 dark:text-white" data-v-8fb99ae1>destroyOnClose</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-8fb99ae1>boolean</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-8fb99ae1>false</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-8fb99ae1>关闭时是否销毁子元素</td></tr><tr data-v-8fb99ae1><td class="px-4 py-2 font-medium text-gray-900 dark:text-white" data-v-8fb99ae1>lockScroll</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-8fb99ae1>boolean</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-8fb99ae1>true</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-8fb99ae1>是否在抽屉打开时锁定页面滚动</td></tr></tbody></table></div><h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white" data-v-8fb99ae1>事件 (Events)</h3><div class="mb-6 overflow-x-auto" data-v-8fb99ae1><table class="min-w-full border-collapse" data-v-8fb99ae1><thead data-v-8fb99ae1><tr class="border-b border-gray-200 dark:border-gray-700" data-v-8fb99ae1><th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white" data-v-8fb99ae1>事件名</th><th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white" data-v-8fb99ae1>回调参数</th><th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white" data-v-8fb99ae1>描述</th></tr></thead><tbody class="divide-y divide-gray-200 dark:divide-gray-700" data-v-8fb99ae1><tr data-v-8fb99ae1><td class="px-4 py-2 font-medium text-gray-900 dark:text-white" data-v-8fb99ae1>update:modelValue</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-8fb99ae1>(value: boolean)</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-8fb99ae1>抽屉打开状态改变时触发</td></tr><tr data-v-8fb99ae1><td class="px-4 py-2 font-medium text-gray-900 dark:text-white" data-v-8fb99ae1>open</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-8fb99ae1>-</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-8fb99ae1>抽屉打开动画开始时触发</td></tr><tr data-v-8fb99ae1><td class="px-4 py-2 font-medium text-gray-900 dark:text-white" data-v-8fb99ae1>close</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-8fb99ae1>-</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-8fb99ae1>抽屉关闭动画开始时触发</td></tr><tr data-v-8fb99ae1><td class="px-4 py-2 font-medium text-gray-900 dark:text-white" data-v-8fb99ae1>afterVisibleChange</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-8fb99ae1>(visible: boolean)</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-8fb99ae1>抽屉打开/关闭动画结束后触发</td></tr></tbody></table></div><h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white" data-v-8fb99ae1>插槽 (Slots)</h3><div class="overflow-x-auto" data-v-8fb99ae1><table class="min-w-full border-collapse" data-v-8fb99ae1><thead data-v-8fb99ae1><tr class="border-b border-gray-200 dark:border-gray-700" data-v-8fb99ae1><th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white" data-v-8fb99ae1>插槽名</th><th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white" data-v-8fb99ae1>描述</th></tr></thead><tbody class="divide-y divide-gray-200 dark:divide-gray-700" data-v-8fb99ae1><tr data-v-8fb99ae1><td class="px-4 py-2 font-medium text-gray-900 dark:text-white" data-v-8fb99ae1>default</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-8fb99ae1>抽屉内容</td></tr><tr data-v-8fb99ae1><td class="px-4 py-2 font-medium text-gray-900 dark:text-white" data-v-8fb99ae1>title</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-8fb99ae1>自定义标题区域</td></tr><tr data-v-8fb99ae1><td class="px-4 py-2 font-medium text-gray-900 dark:text-white" data-v-8fb99ae1>footer</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-8fb99ae1>自定义底部内容</td></tr></tbody></table></div></div></section><section class="mb-10" data-v-8fb99ae1><h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white" data-v-8fb99ae1>小结与最佳实践</h2><div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800" data-v-8fb99ae1><div class="space-y-4" data-v-8fb99ae1><p class="text-gray-700 dark:text-gray-300" data-v-8fb99ae1> Drawer 抽屉组件是一个从屏幕边缘滑入的浮层面板，可用于展示表单、详情或操作面板等内容，不会打断用户的主要操作流程。 以下是一些使用建议： </p><ul class="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300" data-v-8fb99ae1><li data-v-8fb99ae1>根据内容的类型和重要性选择合适的弹出方向，如表单操作通常使用右侧抽屉</li><li data-v-8fb99ae1>合理设置抽屉的尺寸，既要保证内容展示完整，又不要占据过多屏幕空间</li><li data-v-8fb99ae1>对于需要进行重要操作的场景，请设置 <code class="bg-gray-100 px-1 py-0.5 rounded dark:bg-gray-700" data-v-8fb99ae1>maskClosable</code> 为 <code class="bg-gray-100 px-1 py-0.5 rounded dark:bg-gray-700" data-v-8fb99ae1>false</code> 防止用户误操作</li><li data-v-8fb99ae1>利用插槽自定义标题和底部区域，增强交互体验</li><li data-v-8fb99ae1>抽屉组件适合二级内容的展示，但不适合作为主要内容展示区域</li></ul><div class="rounded-lg border border-blue-100 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-900/20" data-v-8fb99ae1><h4 class="mb-2 flex items-center text-blue-800 dark:text-blue-300" data-v-8fb99ae1><svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-8fb99ae1><circle cx="12" cy="12" r="10" data-v-8fb99ae1></circle><line x1="12" y1="16" x2="12" y2="12" data-v-8fb99ae1></line><line x1="12" y1="8" x2="12.01" y2="8" data-v-8fb99ae1></line></svg> 暗色模式提示 </h4><p class="text-sm text-blue-700 dark:text-blue-300" data-v-8fb99ae1> Drawer 组件已内置支持暗色模式，无需额外配置。只要在应用的根元素上添加 <code class="rounded bg-blue-100 px-1 py-0.5 font-mono dark:bg-blue-800/60" data-v-8fb99ae1>.dark</code> 类， 组件就会自动切换为暗色样式。所有颜色、背景和边框都会自动适配当前主题。 </p></div><h4 class="font-medium text-gray-900 dark:text-white mt-4" data-v-8fb99ae1>适合使用的场景：</h4><ul class="ml-6 list-disc space-y-1 text-gray-700 dark:text-gray-300" data-v-8fb99ae1><li data-v-8fb99ae1>需要从侧面展示详情信息或操作表单</li><li data-v-8fb99ae1>在移动端等窄屏设备上展示更多操作或内容</li><li data-v-8fb99ae1>需要用户输入或查看临时性信息</li><li data-v-8fb99ae1>作为复杂表单的补充界面</li></ul><h4 class="font-medium text-gray-900 dark:text-white mt-4" data-v-8fb99ae1>不适合使用的场景：</h4><ul class="ml-6 list-disc space-y-1 text-gray-700 dark:text-gray-300" data-v-8fb99ae1><li data-v-8fb99ae1>展示简单、少量的信息（可以使用气泡框或普通对话框）</li><li data-v-8fb99ae1>需要用户完整注意力的重要操作（应使用模态对话框）</li><li data-v-8fb99ae1>主要内容展示（应该作为页面主体部分）</li></ul><p class="text-gray-700 dark:text-gray-300 mt-4" data-v-8fb99ae1> 在设计界面时，合理使用抽屉组件可以提升用户体验，减少页面切换成本，同时保持用户注意力的连续性。 Drawer 组件遵循 WAI-ARIA 规范设计，确保良好的可访问性，支持键盘导航和屏幕阅读器。 </p></div></div></section>',2))]))}}),Y=U(Q,[["__scopeId","data-v-8fb99ae1"]]);export{b as Drawer,Y as default};
//# sourceMappingURL=index-Cf30-LNV.js.map
