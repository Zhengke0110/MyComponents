import{B as r}from"./Badge-Bky_noPM.js";import{C as l}from"./index-avqKUV0z.js";import{d as p,r as u,f as m,g as d,l as c,b as e,x as s,j as t,e as o,p as f,t as v,m as y}from"./index-BSjwMPY1.js";import"./index-7KcOdQtH.js";import"./_commonjsHelpers-CqkleIqs.js";const b=`\`\`\`vue
<template>
  <div class="flex flex-wrap gap-3">
    <Badge text="默认蓝色" />
    <Badge text="红色" color="red" />
    <Badge text="橙色" color="orange" />
    <Badge text="琥珀色" color="amber" />
    <Badge text="黄色" color="yellow" />
    <Badge text="青柠色" color="lime" />
    <Badge text="绿色" color="green" />
    <Badge text="翠绿色" color="emerald" />
    <Badge text="蓝绿色" color="teal" />
    <Badge text="青色" color="cyan" />
    <Badge text="天蓝色" color="sky" />
    <Badge text="靛青色" color="indigo" />
    <Badge text="紫罗兰" color="violet" />
    <Badge text="紫色" color="purple" />
    <Badge text="品红色" color="fuchsia" />
    <Badge text="粉色" color="pink" />
    <Badge text="玫瑰色" color="rose" />
  </div>
</template>
\`\`\``,h=`\`\`\`vue
<template>
  <div class="flex flex-wrap gap-3">
    <Badge text="石板灰" color="slate" />
    <Badge text="灰色" color="gray" />
    <Badge text="锌灰" color="zinc" />
    <Badge text="中性灰" color="neutral" />
    <Badge text="石灰" color="stone" />
  </div>
</template>
\`\`\``,k=`\`\`\`vue
<template>
  <div class="flex flex-wrap gap-3">
    <Badge text="默认" />
    <Badge text="主要" theme="primary" />
    <Badge text="次要" theme="secondary" />
    <Badge text="成功" theme="success" />
    <Badge text="警告" theme="warning" />
    <Badge text="危险" theme="danger" />
    <Badge text="信息" theme="info" />
  </div>
</template>
\`\`\``,w=`\`\`\`vue
<template>
  <div class="flex flex-wrap gap-3">
    <Badge text="主要" theme="primary" variant="soft" />
    <Badge text="次要" theme="secondary" variant="soft" />
    <Badge text="成功" theme="success" variant="soft" />
    <Badge text="警告" theme="warning" variant="soft" />
    <Badge text="危险" theme="danger" variant="soft" />
    <Badge text="信息" theme="info" variant="soft" />
  </div>
</template>
\`\`\``,B=`\`\`\`vue
<template>
  <div class="flex flex-wrap gap-3">
    <Badge text="主要" theme="primary" variant="solid" />
    <Badge text="次要" theme="secondary" variant="solid" />
    <Badge text="成功" theme="success" variant="solid" />
    <Badge text="警告" theme="warning" variant="solid" />
    <Badge text="危险" theme="danger" variant="solid" />
    <Badge text="信息" theme="info" variant="solid" />
  </div>
</template>
\`\`\``,C=`\`\`\`vue
<template>
  <div class="flex flex-wrap gap-3">
    <Badge text="主要" theme="primary" variant="outline" />
    <Badge text="次要" theme="secondary" variant="outline" />
    <Badge text="成功" theme="success" variant="outline" />
    <Badge text="警告" theme="warning" variant="outline" />
    <Badge text="危险" theme="danger" variant="outline" />
    <Badge text="信息" theme="info" variant="outline" />
  </div>
</template>
\`\`\``,z=`\`\`\`vue
<template>
  <div class="flex items-center gap-3">
    <Badge text="小号标签" size="sm" theme="primary" />
    <Badge text="中号标签" size="md" theme="primary" />
    <Badge text="大号标签" size="lg" theme="primary" />
  </div>
</template>
\`\`\``,_=`\`\`\`vue
<template>
  <div class="flex flex-wrap gap-3">
    <Badge text="方角 (sm)" rounded="sm" theme="primary" />
    <Badge text="中等圆角 (md)" rounded="md" theme="primary" />
    <Badge text="大圆角 (lg)" rounded="lg" theme="primary" />
    <Badge text="胶囊形状 (full)" rounded="full" theme="primary" />
  </div>
</template>
\`\`\``,j=`\`\`\`vue
<template>
  <div>
    <div class="flex flex-wrap gap-3">
      <Badge text="可点击" clickable @click="handleBadgeClick('普通点击')" theme="primary" title="点击我试试" />
      <Badge text="带图标" clickable @click="handleBadgeClick('带图标点击')" theme="success" rounded="full">
        <template #prefix>
          <div class="icon-[material-symbols--check-circle-rounded] mr-1 h-3 w-3" />
        </template>
      </Badge>
      <Badge text="删除标签" theme="danger" clickable @click="handleBadgeClick('删除')" rounded="full">
        <template #suffix>
          <div class="icon-[material-symbols--close-rounded] ml-1 h-3 w-3" />
        </template>
      </Badge>
    </div>
    <div class="mt-4 text-sm text-gray-600 dark:text-gray-400" v-if="lastClicked">
      最后点击: {{ lastClicked }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const lastClicked = ref('');

const handleBadgeClick = (name) => {
  lastClicked.value = name;
};
<\/script>
\`\`\``,T=`\`\`\`vue
<template>
  <div class="flex flex-wrap gap-3">
    <Badge text="新品" theme="primary" variant="solid" rounded="full" />
    <Badge text="热销" color="rose" variant="solid" rounded="full" />
    <Badge text="限时折扣" color="amber" variant="solid" rounded="full" />
    <Badge text="库存紧张" theme="danger" variant="soft" rounded="full" />
    <Badge text="预售" color="purple" variant="outline" rounded="full" />
  </div>
</template>
\`\`\``,D=`\`\`\`vue
<template>
  <div class="flex flex-wrap gap-3">
    <div class="flex items-center gap-2">
      <div class="h-2 w-2 rounded-full bg-green-500"></div>
      <Badge text="在线" theme="success" variant="soft" />
    </div>
    <div class="flex items-center gap-2">
      <div class="h-2 w-2 rounded-full bg-yellow-500"></div>
      <Badge text="离开" theme="warning" variant="soft" />
    </div>
    <div class="flex items-center gap-2">
      <div class="h-2 w-2 rounded-full bg-gray-400"></div>
      <Badge text="离线" theme="secondary" variant="soft" />
    </div>
    <div class="flex items-center gap-2">
      <div class="h-2 w-2 animate-pulse rounded-full bg-red-500"></div>
      <Badge text="错误" theme="danger" variant="soft" />
    </div>
  </div>
</template>
\`\`\``,S=`\`\`\`vue
<template>
  <div class="flex items-center gap-8">
    <div class="relative">
      <button class="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
        <div class="icon-[material-symbols--circle-notifications-outline-rounded] h-6 w-6 text-gray-800 dark:text-white" />
      </button>
      <Badge text="3" theme="danger" variant="solid" rounded="full" size="sm" class="absolute -right-1 -top-1" />
    </div>

    <div class="relative">
      <button class="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
        <div class="icon-[material-symbols--mark-email-unread-outline-rounded] h-6 w-6 text-gray-800 dark:text-white" />
      </button>
      <Badge text="12" theme="primary" variant="solid" rounded="full" size="sm" class="absolute -right-1 -top-1" />
    </div>

    <div class="relative">
      <button class="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
        <div class="icon-[material-symbols--shopping-cart-outline-rounded] h-6 w-6 text-gray-800 dark:text-white" />
      </button>
      <Badge text="购物车" color="emerald" variant="soft" rounded="full" size="sm" class="absolute -right-12 -top-2" />
    </div>
  </div>
</template>
\`\`\``,I=`\`\`\`vue
<template>
  <div class="max-w-md rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
    <div class="mb-3 flex items-center gap-3">
      <div class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
        <div class="icon-[material-symbols--supervised-user-circle-outline] h-6 w-6 text-blue-600 dark:text-blue-400" />
      </div>
      <div>
        <div class="font-medium text-gray-900 dark:text-white">用户状态</div>
        <div class="text-sm text-gray-500 dark:text-gray-400">简单的用户信息卡片</div>
      </div>
    </div>
    <div class="flex flex-wrap gap-2">
      <Badge text="正常" theme="success" />
      <Badge text="已认证" theme="info" />
      <Badge text="会员" color="amber" />
    </div>
  </div>
</template>
\`\`\``,P=`\`\`\`vue
<template>
  <div class="max-w-md rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
    <div class="mb-3 flex items-center justify-between">
      <div class="font-medium text-gray-900 dark:text-white">系统状态</div>
      <Badge text="正常运行" theme="success" variant="soft" rounded="full" />
    </div>
    <div class="space-y-2">
      <div class="flex items-center justify-between">
        <span class="text-sm text-gray-700 dark:text-gray-300">API 服务</span>
        <Badge text="在线" theme="success" size="sm" />
      </div>
      <div class="flex items-center justify-between">
        <span class="text-sm text-gray-700 dark:text-gray-300">数据库</span>
        <Badge text="在线" theme="success" size="sm" />
      </div>
      <div class="flex items-center justify-between">
        <span class="text-sm text-gray-700 dark:text-gray-300">存储服务</span>
        <Badge text="维护中" theme="warning" size="sm" />
      </div>
    </div>
  </div>
</template>
\`\`\``,V=`\`\`\`vue
<template>
  <div class="max-w-md rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
    <div class="mb-3 flex items-center justify-between">
      <div class="font-medium text-gray-900 dark:text-white">项目标签</div>
      <Badge text="5 个标签" color="gray" variant="soft" size="sm" />
    </div>
    <div class="flex flex-wrap gap-2">
      <Badge text="前端" color="sky" variant="soft" rounded="lg" clickable />
      <Badge text="后端" color="emerald" variant="soft" rounded="lg" clickable />
      <Badge text="设计" color="purple" variant="soft" rounded="lg" clickable />
      <Badge text="UI/UX" color="fuchsia" variant="soft" rounded="lg" clickable />
      <Badge text="产品" color="amber" variant="soft" rounded="lg" clickable />
    </div>
  </div>
</template>
\`\`\``,E={class:"container mx-auto px-4 py-8 text-gray-900 dark:text-white"},A={class:"mb-10"},N={class:"flex flex-wrap gap-3 p-6 rounded-md bg-white dark:bg-gray-800 shadow-sm"},U={class:"mb-10"},L={class:"flex flex-wrap gap-3 p-6 rounded-md bg-white dark:bg-gray-800 shadow-sm"},O={class:"mb-10"},$={class:"flex flex-wrap gap-3 p-6 rounded-md bg-white dark:bg-gray-800 shadow-sm"},q={class:"mb-10"},R={class:"flex flex-wrap gap-3 p-6 rounded-md bg-white dark:bg-gray-800 shadow-sm"},X={class:"flex flex-wrap gap-3 p-6 rounded-md bg-white dark:bg-gray-800 shadow-sm"},M={class:"flex flex-wrap gap-3 p-6 rounded-md bg-white dark:bg-gray-800 shadow-sm"},F={class:"mb-10"},G={class:"flex items-center gap-3 p-6 rounded-md bg-white dark:bg-gray-800 shadow-sm"},H={class:"mb-10"},J={class:"flex flex-wrap gap-3 p-6 rounded-md bg-white dark:bg-gray-800 shadow-sm"},K={class:"mb-10"},Q={class:"p-6 rounded-md bg-white dark:bg-gray-800 shadow-sm"},W={class:"flex flex-wrap gap-3"},Y={key:0,class:"mt-4 text-sm text-gray-600 dark:text-gray-400"},Z={class:"mb-10"},tt={class:"mb-6 flex flex-wrap gap-3 p-6 rounded-md bg-white dark:bg-gray-800 shadow-sm"},et={class:"mb-6 flex flex-wrap gap-3 p-6 rounded-md bg-white dark:bg-gray-800 shadow-sm"},at={class:"flex items-center gap-2"},dt={class:"flex items-center gap-2"},rt={class:"flex items-center gap-2"},st={class:"flex items-center gap-2"},lt={class:"mb-6 flex items-center gap-8 p-6 rounded-md bg-white dark:bg-gray-800 shadow-sm"},ot={class:"relative"},it={class:"relative"},xt={class:"relative"},nt={class:"mb-10"},gt={class:"mb-6 max-w-md rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800"},mt={class:"flex flex-wrap gap-2"},ct={class:"mb-6 max-w-md rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800"},yt={class:"mb-3 flex items-center justify-between"},pt={class:"space-y-2"},ut={class:"flex items-center justify-between"},ft={class:"flex items-center justify-between"},vt={class:"flex items-center justify-between"},bt={class:"max-w-md rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800"},ht={class:"mb-3 flex items-center justify-between"},kt={class:"flex flex-wrap gap-2"},wt={class:"mb-10"},Bt={class:"rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800"},Ct={class:"space-y-4"},zt={class:"ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300"},Pt=p({__name:"View",setup(_t){const i=u(""),x=n=>{i.value=n};return(n,a)=>(y(),m("div",E,[a[44]||(a[44]=d("h1",{class:"mb-8 text-3xl font-bold"},"Badge 徽章组件",-1)),d("section",A,[a[3]||(a[3]=d("h2",{class:"mb-4 text-xl font-semibold text-gray-900 dark:text-white"},"基础颜色",-1)),e(t(l),{code:t(b)},{default:s(()=>[d("div",N,[e(t(r),{text:"默认蓝色"}),e(t(r),{text:"红色",color:"red"}),e(t(r),{text:"橙色",color:"orange"}),e(t(r),{text:"琥珀色",color:"amber"}),e(t(r),{text:"黄色",color:"yellow"}),e(t(r),{text:"青柠色",color:"lime"}),e(t(r),{text:"绿色",color:"green"}),e(t(r),{text:"翠绿色",color:"emerald"}),e(t(r),{text:"蓝绿色",color:"teal"}),e(t(r),{text:"青色",color:"cyan"}),e(t(r),{text:"天蓝色",color:"sky"}),e(t(r),{text:"靛青色",color:"indigo"}),e(t(r),{text:"紫罗兰",color:"violet"}),e(t(r),{text:"紫色",color:"purple"}),e(t(r),{text:"品红色",color:"fuchsia"}),e(t(r),{text:"粉色",color:"pink"}),e(t(r),{text:"玫瑰色",color:"rose"})])]),_:1},8,["code"])]),d("section",U,[a[4]||(a[4]=d("h2",{class:"mb-4 text-xl font-semibold text-gray-900 dark:text-white"},"灰度色系",-1)),e(t(l),{code:t(h)},{default:s(()=>[d("div",L,[e(t(r),{text:"石板灰",color:"slate"}),e(t(r),{text:"灰色",color:"gray"}),e(t(r),{text:"锌灰",color:"zinc"}),e(t(r),{text:"中性灰",color:"neutral"}),e(t(r),{text:"石灰",color:"stone"})])]),_:1},8,["code"])]),d("section",O,[a[5]||(a[5]=d("h2",{class:"mb-4 text-xl font-semibold text-gray-900 dark:text-white"},"语义化主题",-1)),e(t(l),{code:t(k)},{default:s(()=>[d("div",$,[e(t(r),{text:"默认"}),e(t(r),{text:"主要",theme:"primary"}),e(t(r),{text:"次要",theme:"secondary"}),e(t(r),{text:"成功",theme:"success"}),e(t(r),{text:"警告",theme:"warning"}),e(t(r),{text:"危险",theme:"danger"}),e(t(r),{text:"信息",theme:"info"})])]),_:1},8,["code"])]),d("section",q,[a[6]||(a[6]=d("h2",{class:"mb-4 text-xl font-semibold text-gray-900 dark:text-white"},"样式变体",-1)),a[7]||(a[7]=d("h3",{class:"mb-3 text-lg font-medium text-gray-900 dark:text-white"},"柔和风格 (soft)",-1)),e(t(l),{code:t(w)},{default:s(()=>[d("div",R,[e(t(r),{text:"主要",theme:"primary",variant:"soft"}),e(t(r),{text:"次要",theme:"secondary",variant:"soft"}),e(t(r),{text:"成功",theme:"success",variant:"soft"}),e(t(r),{text:"警告",theme:"warning",variant:"soft"}),e(t(r),{text:"危险",theme:"danger",variant:"soft"}),e(t(r),{text:"信息",theme:"info",variant:"soft"})])]),_:1},8,["code"]),a[8]||(a[8]=d("h3",{class:"mb-3 mt-6 text-lg font-medium text-gray-900 dark:text-white"},"实心风格 (solid)",-1)),e(t(l),{code:t(B)},{default:s(()=>[d("div",X,[e(t(r),{text:"主要",theme:"primary",variant:"solid"}),e(t(r),{text:"次要",theme:"secondary",variant:"solid"}),e(t(r),{text:"成功",theme:"success",variant:"solid"}),e(t(r),{text:"警告",theme:"warning",variant:"solid"}),e(t(r),{text:"危险",theme:"danger",variant:"solid"}),e(t(r),{text:"信息",theme:"info",variant:"solid"})])]),_:1},8,["code"]),a[9]||(a[9]=d("h3",{class:"mb-3 mt-6 text-lg font-medium text-gray-900 dark:text-white"},"描边风格 (outline)",-1)),e(t(l),{code:t(C)},{default:s(()=>[d("div",M,[e(t(r),{text:"主要",theme:"primary",variant:"outline"}),e(t(r),{text:"次要",theme:"secondary",variant:"outline"}),e(t(r),{text:"成功",theme:"success",variant:"outline"}),e(t(r),{text:"警告",theme:"warning",variant:"outline"}),e(t(r),{text:"危险",theme:"danger",variant:"outline"}),e(t(r),{text:"信息",theme:"info",variant:"outline"})])]),_:1},8,["code"])]),d("section",F,[a[10]||(a[10]=d("h2",{class:"mb-4 text-xl font-semibold text-gray-900 dark:text-white"},"尺寸选项",-1)),e(t(l),{code:t(z)},{default:s(()=>[d("div",G,[e(t(r),{text:"小号标签",size:"sm",theme:"primary"}),e(t(r),{text:"中号标签",size:"md",theme:"primary"}),e(t(r),{text:"大号标签",size:"lg",theme:"primary"})])]),_:1},8,["code"])]),d("section",H,[a[11]||(a[11]=d("h2",{class:"mb-4 text-xl font-semibold text-gray-900 dark:text-white"},"圆角选项",-1)),e(t(l),{code:t(_)},{default:s(()=>[d("div",J,[e(t(r),{text:"方角 (sm)",rounded:"sm",theme:"primary"}),e(t(r),{text:"中等圆角 (md)",rounded:"md",theme:"primary"}),e(t(r),{text:"大圆角 (lg)",rounded:"lg",theme:"primary"}),e(t(r),{text:"胶囊形状 (full)",rounded:"full",theme:"primary"})])]),_:1},8,["code"])]),d("section",K,[a[14]||(a[14]=d("h2",{class:"mb-4 text-xl font-semibold text-gray-900 dark:text-white"},"可交互徽章",-1)),e(t(l),{code:t(j)},{default:s(()=>[d("div",Q,[d("div",W,[e(t(r),{text:"可点击",clickable:"",onClick:a[0]||(a[0]=g=>x("普通点击")),theme:"primary",title:"点击我试试"}),e(t(r),{text:"带图标",clickable:"",onClick:a[1]||(a[1]=g=>x("带图标点击")),theme:"success",rounded:"full"},{prefix:s(()=>a[12]||(a[12]=[d("div",{class:"icon-[material-symbols--check-circle-rounded] mr-1 h-3 w-3"},null,-1)])),_:1}),e(t(r),{text:"删除标签",theme:"danger",clickable:"",onClick:a[2]||(a[2]=g=>x("删除")),rounded:"full"},{suffix:s(()=>a[13]||(a[13]=[d("div",{class:"icon-[material-symbols--close-rounded] ml-1 h-3 w-3"},null,-1)])),_:1})]),i.value?(y(),m("div",Y," 最后点击: "+v(i.value),1)):f("",!0)])]),_:1},8,["code"])]),d("section",Z,[a[22]||(a[22]=d("h2",{class:"mb-4 text-xl font-semibold text-gray-900 dark:text-white"},"组合使用案例",-1)),a[23]||(a[23]=d("h3",{class:"mb-3 text-lg font-medium text-gray-900 dark:text-white"},"产品标签",-1)),e(t(l),{code:t(T)},{default:s(()=>[d("div",tt,[e(t(r),{text:"新品",theme:"primary",variant:"solid",rounded:"full"}),e(t(r),{text:"热销",color:"rose",variant:"solid",rounded:"full"}),e(t(r),{text:"限时折扣",color:"amber",variant:"solid",rounded:"full"}),e(t(r),{text:"库存紧张",theme:"danger",variant:"soft",rounded:"full"}),e(t(r),{text:"预售",color:"purple",variant:"outline",rounded:"full"})])]),_:1},8,["code"]),a[24]||(a[24]=d("h3",{class:"mb-3 mt-6 text-lg font-medium text-gray-900 dark:text-white"},"状态标签",-1)),e(t(l),{code:t(D)},{default:s(()=>[d("div",et,[d("div",at,[a[15]||(a[15]=d("div",{class:"h-2 w-2 rounded-full bg-green-500"},null,-1)),e(t(r),{text:"在线",theme:"success",variant:"soft"})]),d("div",dt,[a[16]||(a[16]=d("div",{class:"h-2 w-2 rounded-full bg-yellow-500"},null,-1)),e(t(r),{text:"离开",theme:"warning",variant:"soft"})]),d("div",rt,[a[17]||(a[17]=d("div",{class:"h-2 w-2 rounded-full bg-gray-400"},null,-1)),e(t(r),{text:"离线",theme:"secondary",variant:"soft"})]),d("div",st,[a[18]||(a[18]=d("div",{class:"h-2 w-2 animate-pulse rounded-full bg-red-500"},null,-1)),e(t(r),{text:"错误",theme:"danger",variant:"soft"})])])]),_:1},8,["code"]),a[25]||(a[25]=d("h3",{class:"mb-3 mt-6 text-lg font-medium text-gray-900 dark:text-white"},"通知徽章",-1)),e(t(l),{code:t(S)},{default:s(()=>[d("div",lt,[d("div",ot,[a[19]||(a[19]=d("button",{class:"rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800"},[d("div",{class:"icon-[material-symbols--circle-notifications-outline-rounded] h-6 w-6 text-gray-800 dark:text-white"})],-1)),e(t(r),{text:"3",theme:"danger",variant:"solid",rounded:"full",size:"sm",class:"absolute -right-1 -top-1"})]),d("div",it,[a[20]||(a[20]=d("button",{class:"rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800"},[d("div",{class:"icon-[material-symbols--mark-email-unread-outline-rounded] h-6 w-6 text-gray-800 dark:text-white"})],-1)),e(t(r),{text:"12",theme:"primary",variant:"solid",rounded:"full",size:"sm",class:"absolute -right-1 -top-1"})]),d("div",xt,[a[21]||(a[21]=d("button",{class:"rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800"},[d("div",{class:"icon-[material-symbols--shopping-cart-outline-rounded] h-6 w-6 text-gray-800 dark:text-white"})],-1)),e(t(r),{text:"购物车",color:"emerald",variant:"soft",rounded:"full",size:"sm",class:"absolute -right-12 -top-2"})])])]),_:1},8,["code"])]),d("section",nt,[a[32]||(a[32]=d("h2",{class:"mb-4 text-xl font-semibold text-gray-900 dark:text-white"},"实际应用示例",-1)),e(t(l),{code:t(I),initiallyExpanded:!1},{default:s(()=>[d("div",gt,[a[26]||(a[26]=d("div",{class:"mb-3 flex items-center gap-3"},[d("div",{class:"flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30"},[d("div",{class:"icon-[material-symbols--supervised-user-circle-outline] h-6 w-6 text-blue-600 dark:text-blue-400"})]),d("div",null,[d("div",{class:"font-medium text-gray-900 dark:text-white"},"用户状态"),d("div",{class:"text-sm text-gray-500 dark:text-gray-400"},"简单的用户信息卡片")])],-1)),d("div",mt,[e(t(r),{text:"正常",theme:"success"}),e(t(r),{text:"已认证",theme:"info"}),e(t(r),{text:"会员",color:"amber"})])])]),_:1},8,["code"]),e(t(l),{code:t(P),initiallyExpanded:!1},{default:s(()=>[d("div",ct,[d("div",yt,[a[27]||(a[27]=d("div",{class:"font-medium text-gray-900 dark:text-white"},"系统状态",-1)),e(t(r),{text:"正常运行",theme:"success",variant:"soft",rounded:"full"})]),d("div",pt,[d("div",ut,[a[28]||(a[28]=d("span",{class:"text-sm text-gray-700 dark:text-gray-300"},"API 服务",-1)),e(t(r),{text:"在线",theme:"success",size:"sm"})]),d("div",ft,[a[29]||(a[29]=d("span",{class:"text-sm text-gray-700 dark:text-gray-300"},"数据库",-1)),e(t(r),{text:"在线",theme:"success",size:"sm"})]),d("div",vt,[a[30]||(a[30]=d("span",{class:"text-sm text-gray-700 dark:text-gray-300"},"存储服务",-1)),e(t(r),{text:"维护中",theme:"warning",size:"sm"})])])])]),_:1},8,["code"]),e(t(l),{code:t(V),initiallyExpanded:!1},{default:s(()=>[d("div",bt,[d("div",ht,[a[31]||(a[31]=d("div",{class:"font-medium text-gray-900 dark:text-white"},"项目标签",-1)),e(t(r),{text:"5 个标签",color:"gray",variant:"soft",size:"sm"})]),d("div",kt,[e(t(r),{text:"前端",color:"sky",variant:"soft",rounded:"lg",clickable:""}),e(t(r),{text:"后端",color:"emerald",variant:"soft",rounded:"lg",clickable:""}),e(t(r),{text:"设计",color:"purple",variant:"soft",rounded:"lg",clickable:""}),e(t(r),{text:"UI/UX",color:"fuchsia",variant:"soft",rounded:"lg",clickable:""}),e(t(r),{text:"产品",color:"amber",variant:"soft",rounded:"lg",clickable:""})])])]),_:1},8,["code"])]),a[45]||(a[45]=c(`<section class="mb-10"><h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">组件API</h2><div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800"><h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">属性 (Props)</h3><div class="mb-6 overflow-x-auto"><table class="min-w-full border-collapse"><thead><tr class="border-b border-gray-200 dark:border-gray-700"><th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">属性名</th><th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">类型</th><th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">默认值</th><th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">描述</th></tr></thead><tbody class="divide-y divide-gray-200 dark:divide-gray-700"><tr><td class="px-4 py-2 font-medium text-gray-900 dark:text-white">text</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">string</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">-</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">徽章显示的文本内容</td></tr><tr><td class="px-4 py-2 font-medium text-gray-900 dark:text-white">color</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">ColorType</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">&#39;blue&#39;</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">徽章颜色</td></tr><tr><td class="px-4 py-2 font-medium text-gray-900 dark:text-white">theme</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">ThemeColorType</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">undefined</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">语义化主题</td></tr><tr><td class="px-4 py-2 font-medium text-gray-900 dark:text-white">variant</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">&#39;solid&#39; | &#39;soft&#39; | &#39;outline&#39;</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">&#39;soft&#39;</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">样式变体</td></tr><tr><td class="px-4 py-2 font-medium text-gray-900 dark:text-white">size</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">&#39;sm&#39; | &#39;md&#39; | &#39;lg&#39;</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">&#39;md&#39;</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">徽章大小</td></tr><tr><td class="px-4 py-2 font-medium text-gray-900 dark:text-white">rounded</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">&#39;sm&#39; | &#39;md&#39; | &#39;lg&#39; | &#39;full&#39;</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">&#39;md&#39;</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">圆角大小</td></tr><tr><td class="px-4 py-2 font-medium text-gray-900 dark:text-white">title</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">string</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">undefined</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">鼠标悬停提示文本</td></tr><tr><td class="px-4 py-2 font-medium text-gray-900 dark:text-white">clickable</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">boolean</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">false</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">是否可点击</td></tr></tbody></table></div><h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">事件 (Events)</h3><div class="mb-6 overflow-x-auto"><table class="min-w-full border-collapse"><thead><tr class="border-b border-gray-200 dark:border-gray-700"><th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">事件名</th><th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">回调参数</th><th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">描述</th></tr></thead><tbody><tr><td class="px-4 py-2 font-medium text-gray-900 dark:text-white">click</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">(text: string)</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">点击徽章时触发</td></tr></tbody></table></div><h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">插槽 (Slots)</h3><div class="overflow-x-auto"><table class="min-w-full border-collapse"><thead><tr class="border-b border-gray-200 dark:border-gray-700"><th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">插槽名</th><th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">描述</th></tr></thead><tbody><tr><td class="px-4 py-2 font-medium text-gray-900 dark:text-white">prefix</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">徽章内容前置元素</td></tr><tr><td class="px-4 py-2 font-medium text-gray-900 dark:text-white">suffix</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">徽章内容后置元素</td></tr></tbody></table></div></div></section><section class="mb-10"><h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">主题设置工具</h2><div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800"><h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">全局主题管理API</h3><p class="mb-4 text-sm text-gray-600 dark:text-gray-300"> 本组件库提供了基于 VueUse 的全局主题管理工具，可以在任何组件中使用。 </p><div class="mb-6 overflow-x-auto"><table class="min-w-full border-collapse"><thead><tr class="border-b border-gray-200 dark:border-gray-700"><th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">API</th><th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">类型</th><th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">描述</th></tr></thead><tbody class="divide-y divide-gray-200 dark:divide-gray-700"><tr><td class="px-4 py-2 font-medium text-gray-900 dark:text-white">isDark</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">Ref&lt;boolean&gt;</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">当前是否是暗色模式</td></tr><tr><td class="px-4 py-2 font-medium text-gray-900 dark:text-white">toggleDark</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">() =&gt; void</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">切换暗色/亮色模式</td></tr><tr><td class="px-4 py-2 font-medium text-gray-900 dark:text-white">preferredDark</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">Ref&lt;boolean&gt;</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">系统偏好是否是暗色模式</td></tr><tr><td class="px-4 py-2 font-medium text-gray-900 dark:text-white">followSystemTheme</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">() =&gt; void</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">使主题跟随系统偏好</td></tr><tr><td class="px-4 py-2 font-medium text-gray-900 dark:text-white">setLightTheme</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">() =&gt; void</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">强制设置为亮色模式</td></tr><tr><td class="px-4 py-2 font-medium text-gray-900 dark:text-white">setDarkTheme</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">() =&gt; void</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">强制设置为暗色模式</td></tr><tr><td class="px-4 py-2 font-medium text-gray-900 dark:text-white">initTheme</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">() =&gt; void</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">初始化主题设置</td></tr></tbody></table></div><div class="rounded-lg bg-gray-50 p-4 dark:bg-gray-700/30"><h4 class="mb-2 text-base font-medium text-gray-900 dark:text-white">使用示例</h4><pre class="overflow-x-auto rounded bg-gray-100 p-3 text-sm text-gray-800 dark:bg-gray-800 dark:text-gray-200">                import { isDark, toggleDark } from &quot;../utils/theme&quot;;

                // 在模板中使用
                const darkModeEnabled = isDark.value;

                // 切换暗色模式
                function handleToggle() {
                toggleDark();
                }
            </pre></div></div></section>`,2)),d("section",wt,[a[43]||(a[43]=d("h2",{class:"mb-4 text-xl font-semibold text-gray-900 dark:text-white"},"小结与最佳实践",-1)),d("div",Bt,[d("div",Ct,[a[41]||(a[41]=d("p",{class:"text-gray-700 dark:text-gray-300"}," Badge 组件是一个轻量级但功能丰富的组件，适用于多种场景，如状态指示、标签分类、通知计数等。 以下是一些使用建议： ",-1)),d("ul",zt,[d("li",null,[a[33]||(a[33]=o("根据语义选择合适的主题和颜色，如使用 ")),e(t(r),{text:"success",theme:"success",size:"sm"}),a[34]||(a[34]=o(" 表示成功状态 "))]),d("li",null,[a[35]||(a[35]=o("为不同重要性的信息选择不同的变体，如使用 ")),e(t(r),{text:"solid",variant:"solid",size:"sm"}),a[36]||(a[36]=o(" 强调重要信息 "))]),d("li",null,[a[37]||(a[37]=o("根据上下文环境选择合适的尺寸，如在紧凑界面中使用 ")),e(t(r),{text:"sm",size:"sm"})]),d("li",null,[a[38]||(a[38]=o("当需要用户交互时，启用 ")),e(t(r),{text:"clickable",clickable:"",size:"sm"}),a[39]||(a[39]=o(" 属性 "))]),a[40]||(a[40]=d("li",null,"利用 prefix 和 suffix 插槽添加图标增强可读性",-1))]),a[42]||(a[42]=c('<div class="rounded-lg border border-blue-100 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-900/20"><h4 class="mb-2 flex items-center text-blue-800 dark:text-blue-300"><span class="icon-[material-symbols--info-outline-rounded] mr-2 h-5 w-5"></span> 暗色模式提示 </h4><p class="text-sm text-blue-700 dark:text-blue-300"> Badge 组件已内置支持暗色模式，无需额外配置。只要在应用的根元素上添加 <code class="rounded bg-blue-100 px-1 py-0.5 font-mono dark:bg-blue-800/60">.dark</code> 类， 组件就会自动切换为暗色样式。您可以使用我们提供的主题管理工具来轻松地实现这一点。 </p></div><p class="text-gray-700 dark:text-gray-300"> 在设计系统中，保持徽章样式的一致性对于建立清晰、直观的用户界面至关重要。 希望这个组件能够帮助您更好地构建应用的视觉语言系统。 </p>',2))])])])]))}});export{r as Badge,Pt as default};
//# sourceMappingURL=index-BzZV398r.js.map
