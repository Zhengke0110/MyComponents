import{A as r}from"./Alert-9vZwND8j.js";import{d as X,B as J,r as v,a as K,f,g as e,l as P,b as s,t as y,x as l,j as a,F as I,h as N,e as A,A as c,p as d,T as W,y as M,C as O,m as i,_ as Q}from"./index-BSjwMPY1.js";import{C as g}from"./index-avqKUV0z.js";import"./index-7KcOdQtH.js";import"./_commonjsHelpers-CqkleIqs.js";const R='```vue\n<template>\n  <Alert message="这是一个基础的信息提示框" />\n</template>\n```',Y=`\`\`\`vue
<template>
  <Alert type="info" message="这是一个信息提示框" />
  <Alert type="success" message="这是一个成功提示框" />
  <Alert type="warning" message="这是一个警告提示框" />
  <Alert type="danger" message="这是一个危险提示框" />
</template>
\`\`\``,Z='```vue\n<template>\n  <Alert type="success" title="成功" message="操作已成功完成" />\n  <Alert type="warning" title="注意" message="此操作需要谨慎处理" />\n</template>\n```',tt=`\`\`\`vue
<template>
  <transition 
    enter-from-class="opacity-0 -translate-y-4"
    enter-active-class="transition-all duration-300 ease-out"
    enter-to-class="opacity-100 translate-y-0"
    leave-from-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-300 ease-in"
    leave-to-class="opacity-0 translate-y-4">
    <Alert v-if="showAnimatedAlert" type="info" title="动画提示" message="这个提示框有淡入上滑的动画效果" />
  </transition>
</template>

<script setup>
import { ref } from 'vue';
const showAnimatedAlert = ref(true);
<\/script>
\`\`\``,et='```vue\n<template>\n  <Alert color="purple" message="这是紫色提示框" />\n  <Alert color="teal" message="这是蓝绿色提示框" />\n  <Alert color="pink" message="这是粉色提示框" />\n</template>\n```',at=`\`\`\`vue
<template>
  <Alert message="这是可关闭的提示框（默认）" @close="handleClose" />
  <Alert message="这是不可关闭的提示框" :closable="false" />
</template>

<script setup>
const handleClose = () => {
  console.log('Alert closed');
};
<\/script>
\`\`\``,st='```vue\n<template>\n  <Alert message="这是没有图标的提示框" :showIcon="false" />\n</template>\n```',lt='```vue\n<template>\n  <Alert message="这是没有边框的提示框" :bordered="false" />\n</template>\n```',ot=`\`\`\`vue
<template>
  <Alert 
    message="这是应用了渐变背景的提示框" 
    customClass="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-blue-900" 
  />
  <Alert 
    message="这是应用了阴影效果的提示框" 
    customClass="shadow-lg border-indigo-300 dark:border-indigo-700" 
  />
</template>
\`\`\``,rt=`\`\`\`vue
<template>
  <div class="group cursor-pointer">
    <Alert 
      message="鼠标悬浮在此处查看效果" 
      customClass="transition-all duration-300 ease-in-out group-hover:scale-[1.02] group-hover:shadow-lg" 
    />
  </div>
</template>
\`\`\``,nt=`\`\`\`vue
<template>
  <Alert type="info" message="这是自定义图标的提示框">
    <template #icon>
      <i class="icon-[mdi--star] size-5 text-amber-500 animate-spin-slow"></i>
    </template>
  </Alert>
</template>

<style>
@keyframes spin-slow {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 3s linear infinite;
}
</style>
\`\`\``,it=`\`\`\`vue
<template>
  <Alert type="info">
    <div>
      这是通过<span class="font-bold">默认插槽</span>定义的内容
      <a href="#" class="underline text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
        点击这里
      </a>
      了解更多信息
    </div>
  </Alert>
</template>
\`\`\``,dt=`\`\`\`vue
<template>
  <Alert type="warning" title="提示" message="您的账户即将到期">
    <template #extra>
      <div class="flex space-x-2">
        <button class="px-4 py-1 bg-amber-100 hover:bg-amber-200 dark:bg-amber-900 dark:hover:bg-amber-800 rounded text-amber-800 dark:text-amber-200 transition-colors">
          立即续费
        </button>
        <button class="px-4 py-1 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded transition-colors">
          了解详情
        </button>
      </div>
    </template>
  </Alert>
</template>
\`\`\``,ct=`\`\`\`vue
<template>
  <transition 
    enter-from-class="opacity-0 translate-y-4"
    enter-active-class="transition-all duration-500 ease-out"
    enter-to-class="opacity-100 translate-y-0"
    leave-from-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-300 ease-in"
    leave-to-class="opacity-0 translate-y-4">
    <Alert 
      v-if="autoCloseVisible" 
      type="success" 
      message="这个提示框将在3秒后自动关闭" 
      :duration="3000"
      @close="autoCloseVisible = false" 
    />
  </transition>
</template>

<script setup>
import { ref } from 'vue';
const autoCloseVisible = ref(true);
<\/script>
\`\`\``,ut=`\`\`\`vue
<template>
  <div class="cursor-pointer" @click="shakeAlert">
    <Alert 
      ref="shakingAlert" 
      type="danger" 
      title="互动提示" 
      message="点击这个提示框会产生晃动效果！" 
      :closable="false" 
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const shakingAlert = ref(null);
let shakeTimer = null;

const shakeAlert = () => {
  if (shakingAlert.value && shakingAlert.value.$el) {
    // 先清除之前可能存在的定时器
    if (shakeTimer !== null) {
      clearTimeout(shakeTimer);
    }

    // 添加动画类名
    shakingAlert.value.$el.classList.add('animate-shake');

    // 设置新的定时器并保存引用
    shakeTimer = setTimeout(() => {
      shakingAlert.value.$el.classList.remove('animate-shake');
      shakeTimer = null;
    }, 500);
  }
};
<\/script>

<style scoped>
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-8px); }
  40% { transform: translateX(8px); }
  60% { transform: translateX(-5px); }
  80% { transform: translateX(5px); }
}

.animate-shake {
  animation: shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}
</style>
\`\`\``,pt=`\`\`\`vue
<template>
  <!-- 控制按钮 -->
  <div class="mb-4 flex flex-wrap gap-2">
    <button 
      v-for="(type, index) in ['info', 'success', 'warning', 'danger']"
      :key="index" 
      @click="triggerNotification(type)"
      class="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition-colors">
      显示{{ typeLabels[type] }}通知
    </button>
  </div>
  
  <!-- 通知容器 -->
  <div class="notification-container fixed bottom-4 right-4 z-10 space-y-2 w-80">
    <transition-group 
      enter-from-class="opacity-0 translate-x-8"
      enter-active-class="transition-all duration-300 ease-out"
      enter-to-class="opacity-100 translate-x-0"
      leave-from-class="opacity-100 translate-x-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-to-class="opacity-0 translate-x-8">
      <Alert 
        v-for="alert in notifications" 
        :key="alert.id" 
        :type="alert.type" 
        :message="alert.message"
        @close="removeNotification(alert.id)" 
      />
    </transition-group>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 类型标签映射
const typeLabels = {
  'info': '信息',
  'success': '成功',
  'warning': '警告',
  'danger': '危险'
};

// 通知栈
const notifications = ref([]);
let notificationId = 0;

const triggerNotification = (type) => {
  const messages = {
    'info': '这是一条信息通知',
    'success': '操作已成功完成',
    'warning': '请注意此操作的风险',
    'danger': '系统检测到错误'
  };

  // 添加新通知
  notifications.value.push({
    id: notificationId++,
    type,
    message: messages[type]
  });

  // 5秒后自动移除
  setTimeout(() => {
    removeNotification(notificationId - 1);
  }, 5000);
};

const removeNotification = (id) => {
  notifications.value = notifications.value.filter(alert => alert.id !== id);
};
<\/script>
\`\`\``,gt={class:"alert-examples p-6 space-y-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300"},xt={class:"h-20"},yt={class:"mb-4 flex flex-wrap gap-2"},vt=["onClick"],mt={class:"h-20"},bt={class:"mb-4 flex flex-wrap gap-2"},ft={class:"h-42"},kt={class:"flex flex-col gap-4"},ht={class:"h-[80px]"},wt={class:"mb-4 flex flex-wrap gap-2"},At={class:"h-24"},Ct={class:"mb-4 flex flex-wrap gap-2"},$t={class:"space-y-4 h-40"},Tt={class:"h-20"},_t={class:"h-20"},St={class:"mb-4 flex flex-wrap gap-2"},It={class:"h-24"},Nt={class:"h-20"},Vt={key:0,class:"group cursor-pointer"},Bt={class:"h-20"},Lt={class:"h-20"},zt={class:"h-32"},Xt={class:"flex flex-col gap-4"},Pt={class:"h-[80px]"},Wt={class:"h-20"},Et={class:"mb-4 flex flex-wrap gap-2"},Ft=["onClick"],jt={class:"notification-container fixed bottom-4 right-4 z-10 space-y-2 w-80"},Dt={class:"mb-10"},Gt={class:"rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800"},Ut={class:"space-y-4"},qt={class:"ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300"},Ht={class:"flex flex-wrap gap-2 mt-1"},Jt=X({__name:"View",setup(Kt){const u=X({setup(p,{slots:t}){return()=>{var o;return O("transition",{"enter-from-class":"opacity-0 scale-95","enter-active-class":"transition-all duration-300 ease-out","enter-to-class":"opacity-100 scale-100","leave-from-class":"opacity-100 scale-100","leave-active-class":"transition-all duration-200 ease-in","leave-to-class":"opacity-0 scale-95"},(o=t.default)==null?void 0:o.call(t))}}}),n=J({basic:!1,titleSuccess:!1,titleWarning:!1,closable:!1,nonClosable:!1,noIcon:!1,noBorder:!1,customStyle:!1,hover:!1,customIcon:!1,defaultSlot:!1,extraSlot:!1,shake:!1}),x=p=>{n[p]=!n[p]},E=["info","success","warning","danger"],V={info:"信息",success:"成功",warning:"警告",danger:"危险",primary:"主要",secondary:"次要"},k=v(null),F=p=>{k.value=p,setTimeout(()=>{k.value=null},3e3)},j={purple:"紫色",teal:"蓝绿色",pink:"粉色"},h=v(null),_=p=>{h.value=p,setTimeout(()=>{h.value=null},3e3)},C=v(!1),S=v(!1),D=()=>{S.value=!0},w=v(null),B=p=>{w.value===p?w.value=null:w.value=p},m=v(null),G=v(null),b=v(null),U=()=>{m.value&&m.value.$el&&(b.value!==null&&clearTimeout(b.value),m.value.$el.classList.add("animate-shake"),b.value=window.setTimeout(()=>{m.value&&m.value.$el&&m.value.$el.classList&&m.value.$el.classList.remove("animate-shake"),b.value=null},500))};K(()=>{b.value!==null&&clearTimeout(b.value)});const $=v([]);let L=0;const q=p=>{const t={info:"这是一条信息通知",success:"操作已成功完成",warning:"请注意此操作的风险",danger:"系统检测到错误",primary:"这是一条主要通知",secondary:"这是一条次要通知"};$.value.push({id:L++,type:p,message:t[p]}),setTimeout(()=>{z(L-1)},5e3)},z=p=>{$.value=$.value.filter(t=>t.id!==p)};return(p,t)=>(i(),f("div",gt,[t[47]||(t[47]=e("header",{class:"mb-8"},[e("h1",{class:"text-3xl font-bold mb-3"},"Alert 提示组件"),e("p",{class:"text-gray-600 dark:text-gray-400"}," 用于向用户显示重要提示信息的组件，支持多种类型、样式和交互方式。 ")],-1)),e("section",null,[t[20]||(t[20]=e("h2",{class:"text-xl font-bold mb-4 border-l-4 pl-3 border-indigo-500"},"基础用法",-1)),e("button",{onClick:t[0]||(t[0]=o=>x("basic")),class:"mb-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition-colors"},y(n.basic?"隐藏":"显示")+"基础提示框 ",1),s(a(g),{code:a(R)},{default:l(()=>[e("div",xt,[s(a(u),null,{default:l(()=>[n.basic?(i(),c(a(r),{key:0,message:"这是一个基础的信息提示框"})):d("",!0)]),_:1})])]),_:1},8,["code"])]),e("section",null,[t[21]||(t[21]=e("h2",{class:"text-xl font-bold mb-4 border-l-4 pl-3 border-indigo-500"},"不同类型",-1)),e("div",yt,[(i(),f(I,null,N(E,(o,T)=>e("button",{key:T,onClick:H=>F(o),class:"px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition-colors"}," 显示"+y(V[o]),9,vt)),64))]),s(a(g),{code:a(Y)},{default:l(()=>[e("div",mt,[s(a(u),null,{default:l(()=>[k.value?(i(),c(a(r),{key:0,type:k.value,message:`这是一个${V[k.value]}提示框`},null,8,["type","message"])):d("",!0)]),_:1})])]),_:1},8,["code"])]),e("section",null,[t[22]||(t[22]=e("h2",{class:"text-xl font-bold mb-4 border-l-4 pl-3 border-indigo-500"},"带标题的提示框",-1)),e("div",bt,[e("button",{onClick:t[1]||(t[1]=o=>x("titleSuccess")),class:"px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded transition-colors"}," 显示成功提示 "),e("button",{onClick:t[2]||(t[2]=o=>x("titleWarning")),class:"px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded transition-colors"}," 显示警告提示 ")]),s(a(g),{code:a(Z)},{default:l(()=>[e("div",ft,[s(a(u),null,{default:l(()=>[n.titleSuccess?(i(),c(a(r),{key:0,type:"success",title:"成功",message:"操作已成功完成"})):d("",!0)]),_:1}),s(a(u),null,{default:l(()=>[n.titleWarning?(i(),c(a(r),{key:0,type:"warning",title:"注意",message:"此操作需要谨慎处理"})):d("",!0)]),_:1})])]),_:1},8,["code"])]),e("section",null,[t[23]||(t[23]=e("h2",{class:"text-xl font-bold mb-4 border-l-4 pl-3 border-indigo-500"},"动画效果",-1)),e("div",kt,[e("button",{onClick:t[3]||(t[3]=o=>C.value=!C.value),class:"w-fit px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition-colors duration-200"},y(C.value?"隐藏":"显示")+"动画提示框 ",1),s(a(g),{code:a(tt)},{default:l(()=>[e("div",ht,[s(W,{"enter-from-class":"opacity-0 -translate-y-4","enter-active-class":"transition-all duration-300 ease-out","enter-to-class":"opacity-100 translate-y-0","leave-from-class":"opacity-100 translate-y-0","leave-active-class":"transition-all duration-300 ease-in","leave-to-class":"opacity-0 translate-y-4"},{default:l(()=>[C.value?(i(),c(a(r),{key:0,type:"info",title:"动画提示",message:"这个提示框有淡入上滑的动画效果"})):d("",!0)]),_:1})])]),_:1},8,["code"])])]),e("section",null,[t[24]||(t[24]=e("h2",{class:"text-xl font-bold mb-4 border-l-4 pl-3 border-indigo-500"},"自定义颜色",-1)),e("div",wt,[e("button",{onClick:t[4]||(t[4]=o=>_("purple")),class:"px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded transition-colors"}," 显示紫色提示框 "),e("button",{onClick:t[5]||(t[5]=o=>_("teal")),class:"px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded transition-colors"}," 显示蓝绿色提示框 "),e("button",{onClick:t[6]||(t[6]=o=>_("pink")),class:"px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded transition-colors"}," 显示粉色提示框 ")]),s(a(g),{code:a(et)},{default:l(()=>[e("div",At,[s(a(u),null,{default:l(()=>[h.value?(i(),c(a(r),{key:0,color:h.value,message:`这是${j[h.value]}提示框`},null,8,["color","message"])):d("",!0)]),_:1})])]),_:1},8,["code"])]),e("section",null,[t[25]||(t[25]=e("h2",{class:"text-xl font-bold mb-4 border-l-4 pl-3 border-indigo-500"},"可关闭与不可关闭",-1)),e("div",Ct,[e("button",{onClick:t[7]||(t[7]=o=>x("closable")),class:"px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition-colors"}," 显示可关闭提示框 "),e("button",{onClick:t[8]||(t[8]=o=>x("nonClosable")),class:"px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition-colors"}," 显示不可关闭提示框 ")]),s(a(g),{code:a(at)},{default:l(()=>[e("div",$t,[s(a(u),null,{default:l(()=>[n.closable?(i(),c(a(r),{key:0,message:"这是可关闭的提示框（默认）",onClose:t[9]||(t[9]=o=>n.closable=!1)})):d("",!0)]),_:1}),s(a(u),null,{default:l(()=>[n.nonClosable?(i(),c(a(r),{key:0,message:"这是不可关闭的提示框（点击按钮可隐藏）",closable:!1})):d("",!0)]),_:1})])]),_:1},8,["code"])]),e("section",null,[t[26]||(t[26]=e("h2",{class:"text-xl font-bold mb-4 border-l-4 pl-3 border-indigo-500"},"无图标",-1)),e("button",{onClick:t[10]||(t[10]=o=>x("noIcon")),class:"mb-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition-colors"},y(n.noIcon?"隐藏":"显示")+"无图标提示框 ",1),s(a(g),{code:a(st)},{default:l(()=>[e("div",Tt,[s(a(u),null,{default:l(()=>[n.noIcon?(i(),c(a(r),{key:0,message:"这是没有图标的提示框",showIcon:!1})):d("",!0)]),_:1})])]),_:1},8,["code"])]),e("section",null,[t[27]||(t[27]=e("h2",{class:"text-xl font-bold mb-4 border-l-4 pl-3 border-indigo-500"},"无边框",-1)),e("button",{onClick:t[11]||(t[11]=o=>x("noBorder")),class:"mb-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition-colors"},y(n.noBorder?"隐藏":"显示")+"无边框提示框 ",1),s(a(g),{code:a(lt)},{default:l(()=>[e("div",_t,[s(a(u),null,{default:l(()=>[n.noBorder?(i(),c(a(r),{key:0,message:"这是没有边框的提示框",bordered:!1})):d("",!0)]),_:1})])]),_:1},8,["code"])]),e("section",null,[t[28]||(t[28]=e("h2",{class:"text-xl font-bold mb-4 border-l-4 pl-3 border-indigo-500"},"自定义样式",-1)),e("div",St,[e("button",{onClick:t[12]||(t[12]=o=>B("gradient")),class:"px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition-colors"}," 显示渐变背景提示框 "),e("button",{onClick:t[13]||(t[13]=o=>B("shadow")),class:"px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition-colors"}," 显示阴影提示框 ")]),s(a(g),{code:a(ot)},{default:l(()=>[e("div",It,[s(a(u),null,{default:l(()=>[w.value==="gradient"?(i(),c(a(r),{key:0,message:"这是应用了渐变背景的提示框",customClass:"bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-blue-900"})):d("",!0)]),_:1}),s(a(u),null,{default:l(()=>[w.value==="shadow"?(i(),c(a(r),{key:0,message:"这是应用了阴影效果的提示框",customClass:"shadow-lg border-indigo-300 dark:border-indigo-700"})):d("",!0)]),_:1})])]),_:1},8,["code"])]),e("section",null,[t[29]||(t[29]=e("h2",{class:"text-xl font-bold mb-4 border-l-4 pl-3 border-indigo-500"},"悬浮效果",-1)),e("button",{onClick:t[14]||(t[14]=o=>x("hover")),class:"mb-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition-colors"},y(n.hover?"隐藏":"显示")+"悬浮效果提示框 ",1),s(a(g),{code:a(rt)},{default:l(()=>[e("div",Nt,[s(a(u),null,{default:l(()=>[n.hover?(i(),f("div",Vt,[s(a(r),{message:"鼠标悬浮在此处查看效果",customClass:"transition-all duration-300 ease-in-out group-hover:scale-[1.02] group-hover:shadow-lg"})])):d("",!0)]),_:1})])]),_:1},8,["code"])]),e("section",null,[t[31]||(t[31]=e("h2",{class:"text-xl font-bold mb-4 border-l-4 pl-3 border-indigo-500"},"自定义图标",-1)),e("button",{onClick:t[15]||(t[15]=o=>x("customIcon")),class:"mb-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition-colors"},y(n.customIcon?"隐藏":"显示")+"自定义图标提示框 ",1),s(a(g),{code:a(nt)},{default:l(()=>[e("div",Bt,[s(a(u),null,{default:l(()=>[n.customIcon?(i(),c(a(r),{key:0,type:"info",message:"这是自定义图标的提示框"},{icon:l(()=>t[30]||(t[30]=[e("i",{class:"icon-[mdi--star] size-5 text-amber-500 animate-spin-slow"},null,-1)])),_:1})):d("",!0)]),_:1})])]),_:1},8,["code"])]),e("section",null,[t[33]||(t[33]=e("h2",{class:"text-xl font-bold mb-4 border-l-4 pl-3 border-indigo-500"},"使用默认插槽",-1)),e("button",{onClick:t[16]||(t[16]=o=>x("defaultSlot")),class:"mb-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition-colors"},y(n.defaultSlot?"隐藏":"显示")+"默认插槽提示框 ",1),s(a(g),{code:a(it)},{default:l(()=>[e("div",Lt,[s(a(u),null,{default:l(()=>[n.defaultSlot?(i(),c(a(r),{key:0,type:"info"},{default:l(()=>t[32]||(t[32]=[e("div",null,[A(" 这是通过"),e("span",{class:"font-bold"},"默认插槽"),A("定义的内容 "),e("a",{href:"#",class:"underline text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"}," 点击这里 "),A(" 了解更多信息 ")],-1)])),_:1})):d("",!0)]),_:1})])]),_:1},8,["code"])]),e("section",null,[t[35]||(t[35]=e("h2",{class:"text-xl font-bold mb-4 border-l-4 pl-3 border-indigo-500"},"使用额外内容插槽",-1)),e("button",{onClick:t[17]||(t[17]=o=>x("extraSlot")),class:"mb-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition-colors"},y(n.extraSlot?"隐藏":"显示")+"额外插槽提示框 ",1),s(a(g),{code:a(dt)},{default:l(()=>[e("div",zt,[s(a(u),null,{default:l(()=>[n.extraSlot?(i(),c(a(r),{key:0,type:"warning",title:"提示",message:"您的账户即将到期"},{extra:l(()=>t[34]||(t[34]=[e("div",{class:"flex space-x-2"},[e("button",{class:"px-4 py-1 bg-amber-100 hover:bg-amber-200 dark:bg-amber-900 dark:hover:bg-amber-800 rounded text-amber-800 dark:text-amber-200 transition-colors"}," 立即续费 "),e("button",{class:"px-4 py-1 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded transition-colors"}," 了解详情 ")],-1)])),_:1})):d("",!0)]),_:1})])]),_:1},8,["code"])]),e("section",null,[t[36]||(t[36]=e("h2",{class:"text-xl font-bold mb-4 border-l-4 pl-3 border-indigo-500"},"自动关闭",-1)),e("div",Xt,[e("button",{onClick:D,class:"w-fit px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition-colors duration-200"}," 显示自动关闭提示框 (3秒) "),s(a(g),{code:a(ct)},{default:l(()=>[e("div",Pt,[s(W,{"enter-from-class":"opacity-0 translate-y-4","enter-active-class":"transition-all duration-500 ease-out","enter-to-class":"opacity-100 translate-y-0","leave-from-class":"opacity-100 translate-y-0","leave-active-class":"transition-all duration-300 ease-in","leave-to-class":"opacity-0 translate-y-4"},{default:l(()=>[S.value?(i(),c(a(r),{key:0,type:"success",message:"这个提示框将在3秒后自动关闭",duration:3e3,onClose:t[18]||(t[18]=o=>S.value=!1)})):d("",!0)]),_:1})])]),_:1},8,["code"])])]),e("section",null,[t[37]||(t[37]=e("h2",{class:"text-xl font-bold mb-4 border-l-4 pl-3 border-indigo-500"},"交互式动画",-1)),e("button",{onClick:t[19]||(t[19]=o=>x("shake")),class:"mb-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition-colors"},y(n.shake?"隐藏":"显示")+"交互式提示框 ",1),s(a(g),{code:a(ut)},{default:l(()=>[e("div",Wt,[s(a(u),null,{default:l(()=>[n.shake?(i(),f("div",{key:0,ref_key:"shakingAlertContainer",ref:G,class:"cursor-pointer",onClick:U},[s(a(r),{ref_key:"shakingAlert",ref:m,type:"danger",title:"互动提示",message:"点击这个提示框会产生晃动效果！",closable:!1},null,512)],512)):d("",!0)]),_:1})])]),_:1},8,["code"])]),e("section",null,[t[38]||(t[38]=e("h2",{class:"text-xl font-bold mb-4 border-l-4 pl-3 border-indigo-500"},"多重组合效果",-1)),e("div",Et,[(i(),f(I,null,N(["info","success","warning","danger"],(o,T)=>e("button",{key:T,onClick:H=>q(o),class:"px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition-colors"}," 显示"+y({info:"信息",success:"成功",warning:"警告",danger:"危险",primary:"主要",secondary:"次要"}[o])+"通知 ",9,Ft)),64))]),s(a(g),{code:a(pt)},{default:l(()=>[e("div",jt,[s(M,{"enter-from-class":"opacity-0 translate-x-8","enter-active-class":"transition-all duration-300 ease-out","enter-to-class":"opacity-100 translate-x-0","leave-from-class":"opacity-100 translate-x-0","leave-active-class":"transition-all duration-200 ease-in","leave-to-class":"opacity-0 translate-x-8"},{default:l(()=>[(i(!0),f(I,null,N($.value,o=>(i(),c(a(r),{key:o.id,type:o.type,message:o.message,onClose:T=>z(o.id)},null,8,["type","message","onClose"]))),128))]),_:1})])]),_:1},8,["code"])]),t[48]||(t[48]=P('<section class="mb-10" data-v-43907c27><h2 class="text-xl font-bold mb-4 border-l-4 pl-3 border-indigo-500" data-v-43907c27>组件API</h2><div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800" data-v-43907c27><h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white" data-v-43907c27>属性 (Props)</h3><div class="mb-6 overflow-x-auto" data-v-43907c27><table class="min-w-full border-collapse" data-v-43907c27><thead data-v-43907c27><tr class="border-b border-gray-200 dark:border-gray-700" data-v-43907c27><th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white" data-v-43907c27>属性名</th><th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white" data-v-43907c27>类型</th><th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white" data-v-43907c27>默认值</th><th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white" data-v-43907c27>描述</th></tr></thead><tbody class="divide-y divide-gray-200 dark:divide-gray-700" data-v-43907c27><tr data-v-43907c27><td class="px-4 py-2 font-medium text-gray-900 dark:text-white" data-v-43907c27>type</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-43907c27>ThemeColorType</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-43907c27>&#39;info&#39;</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-43907c27>警告类型，可选值为：&#39;primary&#39;, &#39;secondary&#39;, &#39;success&#39;, &#39;warning&#39;, &#39;danger&#39;, &#39;info&#39;</td></tr><tr data-v-43907c27><td class="px-4 py-2 font-medium text-gray-900 dark:text-white" data-v-43907c27>color</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-43907c27>ColorType</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-43907c27>undefined</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-43907c27>自定义颜色，优先级高于type</td></tr><tr data-v-43907c27><td class="px-4 py-2 font-medium text-gray-900 dark:text-white" data-v-43907c27>title</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-43907c27>string</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-43907c27>&#39;&#39;</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-43907c27>警告标题</td></tr><tr data-v-43907c27><td class="px-4 py-2 font-medium text-gray-900 dark:text-white" data-v-43907c27>message</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-43907c27>string</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-43907c27>&#39;&#39;</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-43907c27>警告内容</td></tr><tr data-v-43907c27><td class="px-4 py-2 font-medium text-gray-900 dark:text-white" data-v-43907c27>closable</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-43907c27>boolean</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-43907c27>true</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-43907c27>是否可关闭</td></tr><tr data-v-43907c27><td class="px-4 py-2 font-medium text-gray-900 dark:text-white" data-v-43907c27>showIcon</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-43907c27>boolean</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-43907c27>true</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-43907c27>是否显示图标</td></tr><tr data-v-43907c27><td class="px-4 py-2 font-medium text-gray-900 dark:text-white" data-v-43907c27>bordered</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-43907c27>boolean</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-43907c27>true</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-43907c27>是否显示边框</td></tr><tr data-v-43907c27><td class="px-4 py-2 font-medium text-gray-900 dark:text-white" data-v-43907c27>customClass</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-43907c27>string</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-43907c27>&#39;&#39;</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-43907c27>自定义类名</td></tr><tr data-v-43907c27><td class="px-4 py-2 font-medium text-gray-900 dark:text-white" data-v-43907c27>duration</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-43907c27>number</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-43907c27>1000</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-43907c27>自动关闭时间（毫秒），0表示不自动关闭</td></tr></tbody></table></div><h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white" data-v-43907c27>事件 (Events)</h3><div class="mb-6 overflow-x-auto" data-v-43907c27><table class="min-w-full border-collapse" data-v-43907c27><thead data-v-43907c27><tr class="border-b border-gray-200 dark:border-gray-700" data-v-43907c27><th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white" data-v-43907c27>事件名</th><th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white" data-v-43907c27>回调参数</th><th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white" data-v-43907c27>描述</th></tr></thead><tbody data-v-43907c27><tr data-v-43907c27><td class="px-4 py-2 font-medium text-gray-900 dark:text-white" data-v-43907c27>close</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-43907c27>-</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-43907c27>当警告被关闭时触发</td></tr></tbody></table></div><h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white" data-v-43907c27>插槽 (Slots)</h3><div class="overflow-x-auto" data-v-43907c27><table class="min-w-full border-collapse" data-v-43907c27><thead data-v-43907c27><tr class="border-b border-gray-200 dark:border-gray-700" data-v-43907c27><th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white" data-v-43907c27>插槽名</th><th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white" data-v-43907c27>描述</th></tr></thead><tbody data-v-43907c27><tr data-v-43907c27><td class="px-4 py-2 font-medium text-gray-900 dark:text-white" data-v-43907c27>default</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-43907c27>自定义消息内容</td></tr><tr data-v-43907c27><td class="px-4 py-2 font-medium text-gray-900 dark:text-white" data-v-43907c27>icon</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-43907c27>自定义图标</td></tr><tr data-v-43907c27><td class="px-4 py-2 font-medium text-gray-900 dark:text-white" data-v-43907c27>extra</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300" data-v-43907c27>额外内容，显示在警告底部</td></tr></tbody></table></div></div></section>',1)),e("section",Dt,[t[46]||(t[46]=e("h2",{class:"text-xl font-bold mb-4 border-l-4 pl-3 border-indigo-500"},"小结与最佳实践",-1)),e("div",Gt,[e("div",Ut,[t[44]||(t[44]=e("p",{class:"text-gray-700 dark:text-gray-300"}," Alert 组件是一个用于向用户显示重要信息的轻量级组件，适用于各种场景如状态提醒、操作结果通知、警告信息等。 以下是一些使用建议： ",-1)),e("ul",qt,[e("li",null,[t[39]||(t[39]=A("根据信息的重要程度和语义选择适当的类型： ")),e("div",Ht,[s(a(r),{type:"success",message:"成功消息",class:"inline-flex w-auto",bordered:!1}),s(a(r),{type:"info",message:"信息提示",class:"inline-flex w-auto",bordered:!1}),s(a(r),{type:"warning",message:"警告消息",class:"inline-flex w-auto",bordered:!1}),s(a(r),{type:"danger",message:"危险操作",class:"inline-flex w-auto",bordered:!1})])]),e("li",null,[t[40]||(t[40]=A("对于重要信息，添加标题使其更突出: ")),s(a(r),{type:"warning",title:"注意",message:"这是一个带标题的警告信息",class:"mt-1 mb-2"})]),t[41]||(t[41]=e("li",null,"使用自动关闭功能（duration 属性）处理临时通知",-1)),t[42]||(t[42]=e("li",null,"利用 icon 和 extra 插槽自定义内容，增强信息的表现力",-1)),t[43]||(t[43]=e("li",null,"结合自定义样式（customClass），可以实现更丰富的视觉效果",-1))]),t[45]||(t[45]=P('<div class="rounded-lg border border-blue-100 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-900/20" data-v-43907c27><h4 class="mb-2 flex items-center text-blue-800 dark:text-blue-300" data-v-43907c27><span class="icon-[material-symbols--info-outline-rounded] mr-2 h-5 w-5" data-v-43907c27></span> 暗色模式提示 </h4><p class="text-sm text-blue-700 dark:text-blue-300" data-v-43907c27> Alert 组件已内置支持暗色模式，无需额外配置。只要在应用的根元素上添加 <code class="rounded bg-blue-100 px-1 py-0.5 font-mono dark:bg-blue-800/60" data-v-43907c27>.dark</code> 类， 组件就会自动切换为暗色样式，确保在不同主题环境下都能提供良好的可读性和视觉效果。 </p></div><p class="text-gray-700 dark:text-gray-300" data-v-43907c27> 在设计系统中，合理使用 Alert 组件可以帮助用户更好地注意到重要信息，提高用户体验。同时，通过一致的样式语言，可以让用户更容易理解不同类型信息的紧急程度和重要性。 </p>',2))])])])]))}}),Zt=Q(Jt,[["__scopeId","data-v-43907c27"]]);export{r as Alert,Zt as default};
//# sourceMappingURL=index-CIyXBR-N.js.map
