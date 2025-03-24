import{A as r}from"./Avatar-BLzG1D9y.js";import{C as d}from"./index-avqKUV0z.js";import{d as o,f as g,g as t,l as c,b as a,x as i,j as e,m as n}from"./index-BSjwMPY1.js";import"./index-7KcOdQtH.js";import"./_commonjsHelpers-CqkleIqs.js";const p=`\`\`\`vue
<template>
  <div class="flex items-center gap-4 flex-wrap">
    <Avatar src="/path/to/avatar.jpg" size="md" />
    <Avatar :src="''" initials="ZK" size="md" />
    <Avatar size="md" />
  </div>
</template>
\`\`\``,m=`\`\`\`vue
<template>
  <div class="flex items-end gap-4 flex-wrap">
    <div class="flex flex-col items-center">
      <Avatar src="/path/to/avatar.jpg" size="xs" />
      <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">xs</span>
    </div>
    <div class="flex flex-col items-center">
      <Avatar src="/path/to/avatar.jpg" size="sm" />
      <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">sm</span>
    </div>
    <div class="flex flex-col items-center">
      <Avatar src="/path/to/avatar.jpg" size="md" />
      <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">md</span>
    </div>
    <div class="flex flex-col items-center">
      <Avatar src="/path/to/avatar.jpg" size="lg" />
      <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">lg</span>
    </div>
    <div class="flex flex-col items-center">
      <Avatar src="/path/to/avatar.jpg" size="xl" />
      <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">xl</span>
    </div>
    <div class="flex flex-col items-center">
      <Avatar src="/path/to/avatar.jpg" size="2xl" />
      <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">2xl</span>
    </div>
  </div>
</template>
\`\`\``,y=`\`\`\`vue
<template>
  <div class="flex gap-8">
    <div class="flex flex-col items-center">
      <Avatar src="/path/to/avatar.jpg" size="lg" shape="circle" />
      <span class="mt-2 text-sm text-gray-500 dark:text-gray-400">圆形</span>
    </div>
    <div class="flex flex-col items-center">
      <Avatar src="/path/to/avatar.jpg" size="lg" shape="square" />
      <span class="mt-2 text-sm text-gray-500 dark:text-gray-400">方形</span>
    </div>
  </div>
</template>
\`\`\``,v=`\`\`\`vue
<template>
  <div class="flex gap-8">
    <div class="flex flex-col items-center">
      <Avatar src="/path/to/avatar.jpg" size="lg" :bordered="false" />
      <span class="mt-2 text-sm text-gray-500 dark:text-gray-400">无边框</span>
    </div>
    <div class="flex flex-col items-center">
      <Avatar src="/path/to/avatar.jpg" size="lg" :bordered="true" />
      <span class="mt-2 text-sm text-gray-500 dark:text-gray-400">有边框</span>
    </div>
  </div>
</template>
\`\`\``,f=`\`\`\`vue
<template>
  <div class="flex gap-4 flex-wrap">
    <div class="flex flex-col items-center">
      <Avatar src="/path/to/avatar.jpg" size="lg" status="online" statusPosition="top-right" />
      <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">在线</span>
    </div>
    <div class="flex flex-col items-center">
      <Avatar src="/path/to/avatar.jpg" size="lg" status="offline" statusPosition="top-right" />
      <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">离线</span>
    </div>
    <div class="flex flex-col items-center">
      <Avatar src="/path/to/avatar.jpg" size="lg" status="busy" statusPosition="top-right" />
      <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">忙碌</span>
    </div>
    <div class="flex flex-col items-center">
      <Avatar src="/path/to/avatar.jpg" size="lg" status="away" statusPosition="top-right" />
      <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">离开</span>
    </div>
  </div>
</template>
\`\`\``,u=`\`\`\`vue
<template>
  <div class="flex gap-4 flex-wrap">
    <div class="flex flex-col items-center">
      <Avatar src="/path/to/avatar.jpg" size="lg" status="online" statusPosition="bottom-right" />
      <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">在线</span>
    </div>
    <div class="flex flex-col items-center">
      <Avatar src="/path/to/avatar.jpg" size="lg" status="offline" statusPosition="bottom-right" />
      <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">离线</span>
    </div>
    <div class="flex flex-col items-center">
      <Avatar src="/path/to/avatar.jpg" size="lg" status="busy" statusPosition="bottom-right" />
      <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">忙碌</span>
    </div>
    <div class="flex flex-col items-center">
      <Avatar src="/path/to/avatar.jpg" size="lg" status="away" statusPosition="bottom-right" />
      <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">离开</span>
    </div>
  </div>
</template>
\`\`\``,k=`\`\`\`vue
<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
    <div>
      <h3 class="text-lg font-medium mb-3 text-gray-700 dark:text-gray-300">圆形头像</h3>
      <div class="flex gap-4 flex-wrap">
        <div class="flex flex-col items-center">
          <Avatar src="/path/to/avatar.jpg" size="lg" shape="circle" status="online" />
          <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">在线</span>
        </div>
      </div>
    </div>
    <div>
      <h3 class="text-lg font-medium mb-3 text-gray-700 dark:text-gray-300">方形头像</h3>
      <div class="flex gap-4 flex-wrap">
        <div class="flex flex-col items-center">
          <Avatar src="/path/to/avatar.jpg" size="lg" shape="square" status="online" />
          <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">在线</span>
        </div>
      </div>
    </div>
  </div>
</template>
\`\`\``,b=`\`\`\`vue
<template>
  <div class="flex items-end gap-4 flex-wrap">
    <div class="flex flex-col items-center">
      <Avatar :src="''" initials="ZK" size="xs" />
      <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">xs</span>
    </div>
    <div class="flex flex-col items-center">
      <Avatar :src="''" initials="ZK" size="sm" />
      <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">sm</span>
    </div>
    <div class="flex flex-col items-center">
      <Avatar :src="''" initials="ZK" size="md" />
      <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">md</span>
    </div>
    <div class="flex flex-col items-center">
      <Avatar :src="''" initials="ZK" size="lg" />
      <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">lg</span>
    </div>
    <div class="flex flex-col items-center">
      <Avatar :src="''" initials="ZK" size="xl" />
      <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">xl</span>
    </div>
    <div class="flex flex-col items-center">
      <Avatar :src="''" initials="ZK" size="2xl" />
      <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">2xl</span>
    </div>
  </div>
</template>
\`\`\``,h=`\`\`\`vue
<template>
  <div class="flex items-end gap-4 flex-wrap">
    <div class="flex flex-col items-center">
      <Avatar size="xs" />
      <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">xs</span>
    </div>
    <div class="flex flex-col items-center">
      <Avatar size="sm" />
      <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">sm</span>
    </div>
    <div class="flex flex-col items-center">
      <Avatar size="md" />
      <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">md</span>
    </div>
    <div class="flex flex-col items-center">
      <Avatar size="lg" />
      <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">lg</span>
    </div>
    <div class="flex flex-col items-center">
      <Avatar size="xl" />
      <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">xl</span>
    </div>
    <div class="flex flex-col items-center">
      <Avatar size="2xl" />
      <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">2xl</span>
    </div>
  </div>
</template>
\`\`\``,w=`\`\`\`vue
<template>
  <div class="space-y-4 max-w-md">
    <!-- 带名称和描述的资料卡片 -->
    <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
      <Avatar 
        src="/path/to/avatar.jpg" 
        name="张三" 
        description="前端工程师" 
        size="md" 
        profile 
        @click="handleProfileClick" 
      />
    </div>

    <!-- 只有名称的资料卡片 -->
    <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
      <Avatar 
        src="/path/to/avatar.jpg" 
        name="李四" 
        size="md" 
        profile 
        @click="handleProfileClick" 
      />
    </div>

    <!-- 使用文字头像的资料卡片 -->
    <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
      <Avatar 
        :src="''" 
        initials="WW" 
        name="王五" 
        description="产品经理" 
        size="md" 
        profile 
        @click="handleProfileClick" 
      />
    </div>

    <!-- 使用默认占位符的资料卡片 -->
    <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
      <Avatar 
        name="匿名用户" 
        description="游客" 
        size="md" 
        profile 
        @click="handleProfileClick" 
      />
    </div>
  </div>
</template>

<script setup>
const handleProfileClick = () => {
  console.log('资料卡片被点击');
};
<\/script>
\`\`\``,z=`\`\`\`vue
<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="p-6 bg-white rounded-lg shadow-sm">
      <h3 class="text-lg font-medium mb-4 text-gray-800">亮色模式</h3>
      <div class="flex gap-4 flex-wrap">
        <Avatar src="/path/to/avatar.jpg" size="md" status="online" />
        <Avatar :src="''" initials="ZK" size="md" />
        <Avatar size="md" />
      </div>
    </div>
    <div class="p-6 bg-gray-900 rounded-lg shadow-sm">
      <h3 class="text-lg font-medium mb-4 text-white">暗黑模式</h3>
      <div class="dark flex gap-4 flex-wrap">
        <Avatar src="/path/to/avatar.jpg" size="md" status="online" />
        <Avatar :src="''" initials="ZK" size="md" />
        <Avatar size="md" />
      </div>
    </div>
  </div>
</template>
\`\`\``,l="/assets/photo-1472099645785-5658abf4ff4e-KDYX0YyB.jpeg",A={class:"container mx-auto px-4 py-8 text-gray-900 dark:text-white"},_={class:"mb-10"},j={class:"flex flex-wrap items-center gap-4 rounded-md bg-white p-6 shadow-sm dark:bg-gray-800"},q={class:"mb-10"},C={class:"flex flex-wrap items-end gap-4 rounded-md bg-white p-6 shadow-sm dark:bg-gray-800"},P={class:"flex flex-col items-center"},K={class:"flex flex-col items-center"},Z={class:"flex flex-col items-center"},B={class:"flex flex-col items-center"},W={class:"flex flex-col items-center"},I={class:"flex flex-col items-center"},S={class:"mb-10"},V={class:"flex gap-8 rounded-md bg-white p-6 shadow-sm dark:bg-gray-800"},E={class:"flex flex-col items-center"},M={class:"flex flex-col items-center"},N={class:"mb-10"},Y={class:"flex gap-8 rounded-md bg-white p-6 shadow-sm dark:bg-gray-800"},D={class:"flex flex-col items-center"},H={class:"flex flex-col items-center"},T={class:"mb-10"},U={class:"mb-6"},X={class:"flex flex-wrap gap-4 rounded-md bg-white p-6 shadow-sm dark:bg-gray-800"},F={class:"flex flex-col items-center"},G={class:"flex flex-col items-center"},J={class:"flex flex-col items-center"},L={class:"flex flex-col items-center"},O={class:"flex flex-wrap gap-4 rounded-md bg-white p-6 shadow-sm dark:bg-gray-800"},Q={class:"flex flex-col items-center"},R={class:"flex flex-col items-center"},$={class:"flex flex-col items-center"},tt={class:"flex flex-col items-center"},st={class:"mb-10"},et={class:"grid grid-cols-1 gap-10 rounded-md bg-white p-6 shadow-sm md:grid-cols-2 dark:bg-gray-800"},at={class:"flex flex-wrap gap-4"},rt={class:"flex flex-col items-center"},lt={class:"flex flex-wrap gap-4"},dt={class:"flex flex-col items-center"},it={class:"mb-10"},xt={class:"flex flex-wrap items-end gap-4 rounded-md bg-white p-6 shadow-sm dark:bg-gray-800"},ot={class:"flex flex-col items-center"},gt={class:"flex flex-col items-center"},ct={class:"flex flex-col items-center"},nt={class:"flex flex-col items-center"},pt={class:"flex flex-col items-center"},mt={class:"flex flex-col items-center"},yt={class:"mb-10"},vt={class:"flex flex-wrap items-end gap-4 rounded-md bg-white p-6 shadow-sm dark:bg-gray-800"},ft={class:"flex flex-col items-center"},ut={class:"flex flex-col items-center"},kt={class:"flex flex-col items-center"},bt={class:"flex flex-col items-center"},ht={class:"flex flex-col items-center"},wt={class:"flex flex-col items-center"},zt={class:"mb-10"},At={class:"max-w-md space-y-4 rounded-md bg-white p-6 shadow-sm dark:bg-gray-800"},_t={class:"rounded-lg border border-gray-200 p-4 dark:border-gray-700"},jt={class:"rounded-lg border border-gray-200 p-4 dark:border-gray-700"},qt={class:"rounded-lg border border-gray-200 p-4 dark:border-gray-700"},Ct={class:"rounded-lg border border-gray-200 p-4 dark:border-gray-700"},Pt={class:"mb-10"},Kt={class:"grid grid-cols-1 gap-6 md:grid-cols-2"},Zt={class:"rounded-lg bg-white p-6 shadow-sm"},Bt={class:"flex flex-wrap gap-4"},Wt={class:"rounded-lg bg-gray-900 p-6 shadow-sm"},It={class:"dark flex flex-wrap gap-4"},Ht=o({__name:"View",setup(St){const x=()=>{console.log("资料卡片被点击")};return(Vt,s)=>(n(),g("div",A,[s[49]||(s[49]=t("h1",{class:"mb-8 text-3xl font-bold"},"Avatar 头像组件",-1)),t("section",_,[s[0]||(s[0]=t("h2",{class:"mb-4 text-xl font-semibold text-gray-900 dark:text-white"}," 基础用法 ",-1)),a(e(d),{code:e(p)},{default:i(()=>[t("div",j,[a(e(r),{src:e(l),size:"md"},null,8,["src"]),a(e(r),{src:"",initials:"ZK",size:"md"}),a(e(r),{size:"md"})])]),_:1},8,["code"]),s[1]||(s[1]=t("div",{class:"mt-2 text-sm text-gray-600 dark:text-gray-400"}," 基础头像支持图片、文字缩写和默认占位符三种形式 ",-1))]),t("section",q,[s[8]||(s[8]=t("h2",{class:"mb-4 text-xl font-semibold text-gray-900 dark:text-white"}," 不同尺寸 ",-1)),a(e(d),{code:e(m)},{default:i(()=>[t("div",C,[t("div",P,[a(e(r),{src:e(l),size:"xs"},null,8,["src"]),s[2]||(s[2]=t("span",{class:"mt-2 text-xs text-gray-500 dark:text-gray-400"},"xs",-1))]),t("div",K,[a(e(r),{src:e(l),size:"sm"},null,8,["src"]),s[3]||(s[3]=t("span",{class:"mt-2 text-xs text-gray-500 dark:text-gray-400"},"sm",-1))]),t("div",Z,[a(e(r),{src:e(l),size:"md"},null,8,["src"]),s[4]||(s[4]=t("span",{class:"mt-2 text-xs text-gray-500 dark:text-gray-400"},"md",-1))]),t("div",B,[a(e(r),{src:e(l),size:"lg"},null,8,["src"]),s[5]||(s[5]=t("span",{class:"mt-2 text-xs text-gray-500 dark:text-gray-400"},"lg",-1))]),t("div",W,[a(e(r),{src:e(l),size:"xl"},null,8,["src"]),s[6]||(s[6]=t("span",{class:"mt-2 text-xs text-gray-500 dark:text-gray-400"},"xl",-1))]),t("div",I,[a(e(r),{src:e(l),size:"2xl"},null,8,["src"]),s[7]||(s[7]=t("span",{class:"mt-2 text-xs text-gray-500 dark:text-gray-400"},"2xl",-1))])])]),_:1},8,["code"])]),t("section",S,[s[11]||(s[11]=t("h2",{class:"mb-4 text-xl font-semibold text-gray-900 dark:text-white"}," 不同形状 ",-1)),a(e(d),{code:e(y)},{default:i(()=>[t("div",V,[t("div",E,[a(e(r),{src:e(l),size:"lg",shape:"circle"},null,8,["src"]),s[9]||(s[9]=t("span",{class:"mt-2 text-sm text-gray-500 dark:text-gray-400"},"圆形",-1))]),t("div",M,[a(e(r),{src:e(l),size:"lg",shape:"square"},null,8,["src"]),s[10]||(s[10]=t("span",{class:"mt-2 text-sm text-gray-500 dark:text-gray-400"},"方形",-1))])])]),_:1},8,["code"])]),t("section",N,[s[14]||(s[14]=t("h2",{class:"mb-4 text-xl font-semibold text-gray-900 dark:text-white"}," 边框效果 ",-1)),a(e(d),{code:e(v)},{default:i(()=>[t("div",Y,[t("div",D,[a(e(r),{src:e(l),size:"lg",bordered:!1},null,8,["src"]),s[12]||(s[12]=t("span",{class:"mt-2 text-sm text-gray-500 dark:text-gray-400"},"无边框",-1))]),t("div",H,[a(e(r),{src:e(l),size:"lg",bordered:!0},null,8,["src"]),s[13]||(s[13]=t("span",{class:"mt-2 text-sm text-gray-500 dark:text-gray-400"},"有边框",-1))])])]),_:1},8,["code"])]),t("section",T,[s[25]||(s[25]=t("h2",{class:"mb-4 text-xl font-semibold text-gray-900 dark:text-white"}," 状态指示器 ",-1)),t("div",null,[t("div",U,[s[19]||(s[19]=t("h3",{class:"mb-3 text-lg font-medium text-gray-700 dark:text-gray-300"}," 顶部位置 ",-1)),a(e(d),{code:e(f)},{default:i(()=>[t("div",X,[t("div",F,[a(e(r),{src:e(l),size:"lg",status:"online",statusPosition:"top-right"},null,8,["src"]),s[15]||(s[15]=t("span",{class:"mt-2 text-xs text-gray-500 dark:text-gray-400"},"在线",-1))]),t("div",G,[a(e(r),{src:e(l),size:"lg",status:"offline",statusPosition:"top-right"},null,8,["src"]),s[16]||(s[16]=t("span",{class:"mt-2 text-xs text-gray-500 dark:text-gray-400"},"离线",-1))]),t("div",J,[a(e(r),{src:e(l),size:"lg",status:"busy",statusPosition:"top-right"},null,8,["src"]),s[17]||(s[17]=t("span",{class:"mt-2 text-xs text-gray-500 dark:text-gray-400"},"忙碌",-1))]),t("div",L,[a(e(r),{src:e(l),size:"lg",status:"away",statusPosition:"top-right"},null,8,["src"]),s[18]||(s[18]=t("span",{class:"mt-2 text-xs text-gray-500 dark:text-gray-400"},"离开",-1))])])]),_:1},8,["code"])]),t("div",null,[s[24]||(s[24]=t("h3",{class:"mb-3 text-lg font-medium text-gray-700 dark:text-gray-300"}," 底部位置 ",-1)),a(e(d),{code:e(u)},{default:i(()=>[t("div",O,[t("div",Q,[a(e(r),{src:e(l),size:"lg",status:"online",statusPosition:"bottom-right"},null,8,["src"]),s[20]||(s[20]=t("span",{class:"mt-2 text-xs text-gray-500 dark:text-gray-400"},"在线",-1))]),t("div",R,[a(e(r),{src:e(l),size:"lg",status:"offline",statusPosition:"bottom-right"},null,8,["src"]),s[21]||(s[21]=t("span",{class:"mt-2 text-xs text-gray-500 dark:text-gray-400"},"离线",-1))]),t("div",$,[a(e(r),{src:e(l),size:"lg",status:"busy",statusPosition:"bottom-right"},null,8,["src"]),s[22]||(s[22]=t("span",{class:"mt-2 text-xs text-gray-500 dark:text-gray-400"},"忙碌",-1))]),t("div",tt,[a(e(r),{src:e(l),size:"lg",status:"away",statusPosition:"bottom-right"},null,8,["src"]),s[23]||(s[23]=t("span",{class:"mt-2 text-xs text-gray-500 dark:text-gray-400"},"离开",-1))])])]),_:1},8,["code"])])])]),t("section",st,[s[30]||(s[30]=t("h2",{class:"mb-4 text-xl font-semibold text-gray-900 dark:text-white"}," 不同形状的状态指示器 ",-1)),a(e(d),{code:e(k)},{default:i(()=>[t("div",et,[t("div",null,[s[27]||(s[27]=t("h3",{class:"mb-3 text-lg font-medium text-gray-700 dark:text-gray-300"}," 圆形头像 ",-1)),t("div",at,[t("div",rt,[a(e(r),{src:e(l),size:"lg",shape:"circle",status:"online"},null,8,["src"]),s[26]||(s[26]=t("span",{class:"mt-2 text-xs text-gray-500 dark:text-gray-400"},"在线",-1))])])]),t("div",null,[s[29]||(s[29]=t("h3",{class:"mb-3 text-lg font-medium text-gray-700 dark:text-gray-300"}," 方形头像 ",-1)),t("div",lt,[t("div",dt,[a(e(r),{src:e(l),size:"lg",shape:"square",status:"online"},null,8,["src"]),s[28]||(s[28]=t("span",{class:"mt-2 text-xs text-gray-500 dark:text-gray-400"},"在线",-1))])])])])]),_:1},8,["code"])]),t("section",it,[s[37]||(s[37]=t("h2",{class:"mb-4 text-xl font-semibold text-gray-900 dark:text-white"}," 文字头像 ",-1)),a(e(d),{code:e(b)},{default:i(()=>[t("div",xt,[t("div",ot,[a(e(r),{src:"",initials:"ZK",size:"xs"}),s[31]||(s[31]=t("span",{class:"mt-2 text-xs text-gray-500 dark:text-gray-400"},"xs",-1))]),t("div",gt,[a(e(r),{src:"",initials:"ZK",size:"sm"}),s[32]||(s[32]=t("span",{class:"mt-2 text-xs text-gray-500 dark:text-gray-400"},"sm",-1))]),t("div",ct,[a(e(r),{src:"",initials:"ZK",size:"md"}),s[33]||(s[33]=t("span",{class:"mt-2 text-xs text-gray-500 dark:text-gray-400"},"md",-1))]),t("div",nt,[a(e(r),{src:"",initials:"ZK",size:"lg"}),s[34]||(s[34]=t("span",{class:"mt-2 text-xs text-gray-500 dark:text-gray-400"},"lg",-1))]),t("div",pt,[a(e(r),{src:"",initials:"ZK",size:"xl"}),s[35]||(s[35]=t("span",{class:"mt-2 text-xs text-gray-500 dark:text-gray-400"},"xl",-1))]),t("div",mt,[a(e(r),{src:"",initials:"ZK",size:"2xl"}),s[36]||(s[36]=t("span",{class:"mt-2 text-xs text-gray-500 dark:text-gray-400"},"2xl",-1))])])]),_:1},8,["code"])]),t("section",yt,[s[44]||(s[44]=t("h2",{class:"mb-4 text-xl font-semibold text-gray-900 dark:text-white"}," 默认占位符 ",-1)),a(e(d),{code:e(h)},{default:i(()=>[t("div",vt,[t("div",ft,[a(e(r),{size:"xs"}),s[38]||(s[38]=t("span",{class:"mt-2 text-xs text-gray-500 dark:text-gray-400"},"xs",-1))]),t("div",ut,[a(e(r),{size:"sm"}),s[39]||(s[39]=t("span",{class:"mt-2 text-xs text-gray-500 dark:text-gray-400"},"sm",-1))]),t("div",kt,[a(e(r),{size:"md"}),s[40]||(s[40]=t("span",{class:"mt-2 text-xs text-gray-500 dark:text-gray-400"},"md",-1))]),t("div",bt,[a(e(r),{size:"lg"}),s[41]||(s[41]=t("span",{class:"mt-2 text-xs text-gray-500 dark:text-gray-400"},"lg",-1))]),t("div",ht,[a(e(r),{size:"xl"}),s[42]||(s[42]=t("span",{class:"mt-2 text-xs text-gray-500 dark:text-gray-400"},"xl",-1))]),t("div",wt,[a(e(r),{size:"2xl"}),s[43]||(s[43]=t("span",{class:"mt-2 text-xs text-gray-500 dark:text-gray-400"},"2xl",-1))])])]),_:1},8,["code"])]),t("section",zt,[s[45]||(s[45]=t("h2",{class:"mb-4 text-xl font-semibold text-gray-900 dark:text-white"}," 资料卡片模式 ",-1)),a(e(d),{code:e(w)},{default:i(()=>[t("div",At,[t("div",_t,[a(e(r),{src:e(l),name:"张三",description:"前端工程师",size:"md",profile:"",onClick:x},null,8,["src"])]),t("div",jt,[a(e(r),{src:e(l),name:"李四",size:"md",profile:"",onClick:x},null,8,["src"])]),t("div",qt,[a(e(r),{src:"",initials:"WW",name:"王五",description:"产品经理",size:"md",profile:"",onClick:x})]),t("div",Ct,[a(e(r),{name:"匿名用户",description:"游客",size:"md",profile:"",onClick:x})])])]),_:1},8,["code"])]),t("section",Pt,[s[48]||(s[48]=t("h2",{class:"mb-4 text-xl font-semibold text-gray-900 dark:text-white"}," 暗黑模式适配 ",-1)),a(e(d),{code:e(z)},{default:i(()=>[t("div",Kt,[t("div",Zt,[s[46]||(s[46]=t("h3",{class:"mb-4 text-lg font-medium text-gray-800"},"亮色模式",-1)),t("div",Bt,[a(e(r),{src:e(l),size:"md",status:"online"},null,8,["src"]),a(e(r),{src:"",initials:"ZK",size:"md"}),a(e(r),{size:"md"})])]),t("div",Wt,[s[47]||(s[47]=t("h3",{class:"mb-4 text-lg font-medium text-white"},"暗黑模式",-1)),t("div",It,[a(e(r),{src:e(l),size:"md",status:"online"},null,8,["src"]),a(e(r),{src:"",initials:"ZK",size:"md"}),a(e(r),{size:"md"})])])])]),_:1},8,["code"])]),s[50]||(s[50]=c(`<section class="mb-10"><h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white"> 组件API </h2><div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800"><h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white"> 属性 (Props) </h3><div class="mb-6 overflow-x-auto"><table class="min-w-full border-collapse"><thead><tr class="border-b border-gray-200 dark:border-gray-700"><th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white"> 属性名 </th><th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white"> 类型 </th><th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white"> 默认值 </th><th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white"> 描述 </th></tr></thead><tbody class="divide-y divide-gray-200 dark:divide-gray-700"><tr><td class="px-4 py-2 font-medium text-gray-900 dark:text-white"> src </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> string </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">&#39;&#39;</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> 头像图片源 </td></tr><tr><td class="px-4 py-2 font-medium text-gray-900 dark:text-white"> alt </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> string </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">&#39;&#39;</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> 图片替代文本 </td></tr><tr><td class="px-4 py-2 font-medium text-gray-900 dark:text-white"> size </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> &#39;xs&#39; | &#39;sm&#39; | &#39;md&#39; | &#39;lg&#39; | &#39;xl&#39; | &#39;2xl&#39; </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">&#39;md&#39;</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> 头像尺寸 </td></tr><tr><td class="px-4 py-2 font-medium text-gray-900 dark:text-white"> shape </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> &#39;circle&#39; | &#39;square&#39; </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> &#39;circle&#39; </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> 头像形状 </td></tr><tr><td class="px-4 py-2 font-medium text-gray-900 dark:text-white"> status </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> &#39;online&#39; | &#39;offline&#39; | &#39;busy&#39; | &#39;away&#39; | null </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">null</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> 状态指示器 </td></tr><tr><td class="px-4 py-2 font-medium text-gray-900 dark:text-white"> statusPosition </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> &#39;top-right&#39; | &#39;bottom-right&#39; </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> &#39;top-right&#39; </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> 状态指示器位置 </td></tr><tr><td class="px-4 py-2 font-medium text-gray-900 dark:text-white"> initials </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> string </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">&#39;&#39;</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> 没有图片时显示的文字 </td></tr><tr><td class="px-4 py-2 font-medium text-gray-900 dark:text-white"> name </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> string </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">&#39;&#39;</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> 显示名称（用于资料卡片） </td></tr><tr><td class="px-4 py-2 font-medium text-gray-900 dark:text-white"> description </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> string </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">&#39;&#39;</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> 显示描述（用于资料卡片） </td></tr><tr><td class="px-4 py-2 font-medium text-gray-900 dark:text-white"> bordered </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> boolean </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> false </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> 是否显示边框 </td></tr><tr><td class="px-4 py-2 font-medium text-gray-900 dark:text-white"> profile </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> boolean </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> false </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> 是否以资料卡片模式显示 </td></tr><tr><td class="px-4 py-2 font-medium text-gray-900 dark:text-white"> customClass </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> string </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">&#39;&#39;</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> 自定义类 </td></tr></tbody></table></div><h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white"> 事件 (Events) </h3><div class="overflow-x-auto"><table class="min-w-full border-collapse"><thead><tr class="border-b border-gray-200 dark:border-gray-700"><th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white"> 事件名 </th><th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white"> 回调参数 </th><th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white"> 描述 </th></tr></thead><tbody><tr><td class="px-4 py-2 font-medium text-gray-900 dark:text-white"> click </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">-</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> 点击头像或资料卡片时触发 </td></tr></tbody></table></div></div></section><section class="mb-10"><h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white"> 小结与最佳实践 </h2><div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800"><div class="space-y-4"><p class="text-gray-700 dark:text-gray-300"> Avatar 组件是一个灵活且功能丰富的用户头像展示组件，适用于多种场景，如用户资料、评论区、团队成员展示等。 以下是一些使用建议： </p><ul class="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300"><li> 根据界面布局选择合适的尺寸，较大的头像适用于个人主页，较小的头像适用于评论区或列表项 </li><li> 当没有用户图片时，使用 <code class="rounded bg-gray-100 px-1 py-0.5 dark:bg-gray-700">initials</code> 属性显示用户名缩写，提高识别度 </li><li> 通过 <code class="rounded bg-gray-100 px-1 py-0.5 dark:bg-gray-700">status</code> 属性展示用户在线状态，增强交互体验 </li><li> 在聊天应用中，结合 <code class="rounded bg-gray-100 px-1 py-0.5 dark:bg-gray-700">status</code> 和 <code class="rounded bg-gray-100 px-1 py-0.5 dark:bg-gray-700">statusPosition</code> 灵活设置状态指示器 </li><li> 使用 <code class="rounded bg-gray-100 px-1 py-0.5 dark:bg-gray-700">profile</code> 模式创建完整的用户信息卡片 </li><li> 在暗色主题中，边框可以帮助区分头像与背景，考虑使用 <code class="rounded bg-gray-100 px-1 py-0.5 dark:bg-gray-700">bordered</code> 属性 </li></ul><div class="rounded-lg border border-blue-100 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-900/20"><h4 class="mb-2 flex items-center text-blue-800 dark:text-blue-300"><svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg> 暗色模式提示 </h4><p class="text-sm text-blue-700 dark:text-blue-300"> Avatar 组件已内置支持暗色模式，无需额外配置。只要在应用的根元素上添加 <code class="rounded bg-blue-100 px-1 py-0.5 font-mono dark:bg-blue-800/60">.dark</code> 类， 组件就会自动切换为暗色样式。头像的边框、背景色和文字颜色都会适应当前主题。 </p></div><p class="text-gray-700 dark:text-gray-300"> 在设计系统中，Avatar 组件是建立用户界面中人物或实体表示的重要元素。 通过合理使用 Avatar 组件的各种特性，可以增强应用的社交属性和用户体验。 </p><div class="rounded-lg bg-gray-50 p-4 dark:bg-gray-700/30"><h4 class="mb-2 text-base font-medium text-gray-900 dark:text-white"> 实用配置示例 </h4><pre class="overflow-x-auto rounded bg-gray-100 p-3 text-sm text-gray-800 dark:bg-gray-800 dark:text-gray-200">// 用户评论区的小头像
&lt;Avatar src=&quot;/user-avatar.jpg&quot; size=&quot;sm&quot; /&gt;

// 用户资料页面的大头像
&lt;Avatar src=&quot;/user-avatar.jpg&quot; size=&quot;xl&quot; bordered /&gt;

// 带在线状态的聊天头像
&lt;Avatar src=&quot;/user-avatar.jpg&quot; status=&quot;online&quot; /&gt;

// 用户资料卡片
&lt;Avatar 
  src=&quot;/user-avatar.jpg&quot; 
  name=&quot;张三&quot; 
  description=&quot;前端工程师&quot; 
  profile 
  @click=&quot;handleProfileClick&quot; 
/&gt;

// 无图片时显示文字缩写
&lt;Avatar :src=&quot;&#39;&#39;&quot; initials=&quot;ZK&quot; /&gt;
                        </pre></div></div></div></section>`,2))]))}});export{r as Avatar,Ht as default};
//# sourceMappingURL=index-DZ16j_tw.js.map
