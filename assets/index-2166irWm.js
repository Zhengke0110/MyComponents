import{d as tt,r as p,c as L,o as lt,b as n,y as X,B as j,f as i,g as t,l as ot,x as q,j as g,F as T,h as F,A as z,p as D,t as u,i as E,e as S,m as o}from"./index-BSjwMPY1.js";import{d as k}from"./dayjs.min-BKp1R7gU.js";import{C as U}from"./index-avqKUV0z.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-7KcOdQtH.js";const nt={slate:"bg-slate-500 text-white dark:bg-slate-600",gray:"bg-gray-500 text-white dark:bg-gray-600",zinc:"bg-zinc-500 text-white dark:bg-zinc-600",neutral:"bg-neutral-500 text-white dark:bg-neutral-600",stone:"bg-stone-500 text-white dark:bg-stone-600",red:"bg-red-500 text-white dark:bg-red-600",orange:"bg-orange-500 text-white dark:bg-orange-600",amber:"bg-amber-500 text-white dark:bg-amber-600",yellow:"bg-yellow-500 text-white dark:bg-yellow-600",lime:"bg-lime-500 text-white dark:bg-lime-600",green:"bg-green-500 text-white dark:bg-green-600",emerald:"bg-emerald-500 text-white dark:bg-emerald-600",teal:"bg-teal-500 text-white dark:bg-teal-600",cyan:"bg-cyan-500 text-white dark:bg-cyan-600",sky:"bg-sky-500 text-white dark:bg-sky-600",blue:"bg-blue-500 text-white dark:bg-blue-600",indigo:"bg-indigo-500 text-white dark:bg-indigo-600",violet:"bg-violet-500 text-white dark:bg-violet-600",purple:"bg-purple-500 text-white dark:bg-purple-600",fuchsia:"bg-fuchsia-500 text-white dark:bg-fuchsia-600",pink:"bg-pink-500 text-white dark:bg-pink-600",rose:"bg-rose-500 text-white dark:bg-rose-600"},O={gray:["slate","gray","zinc","neutral","stone"],warm:["red","orange","amber","yellow"],green:["lime","green","emerald","teal"],blue:["cyan","sky","blue","indigo"],purple:["violet","purple","fuchsia","pink","rose"]},w={getWeekDays(r){return r==="zh-cn"?["日","一","二","三","四","五","六"]:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},getMonthLabel(r){return r.format("YYYY年MM月")},getDayNumber(r){return k(r).date()},formatDate(r,m){return k(r).format(m)},getCalendarDays(r,m){const d=[],h=r.startOf("month"),y=r.endOf("month"),b=h.startOf("week"),$=y.endOf("week");let x=b;for(;x.isBefore($)||x.isSame($,"day");)d.push({date:x.format("YYYY-MM-DD"),isCurrentMonth:x.month()===r.month(),isToday:x.isSame(k(),"day"),isSelected:m?x.isSame(k(m),"day"):!1,isInRange:!1,isRangeStart:!1,isRangeEnd:!1}),x=x.add(1,"day");return d},getCalendarDaysWithRange(r,m,d,h){const y=this.getCalendarDays(r,m);return d&&h?y.map(b=>({...b,isInRange:k(b.date).isAfter(d)&&k(b.date).isBefore(h),isRangeStart:b.date===d,isRangeEnd:b.date===h})):y}};function it(r){return nt[r]||"bg-blue-500 text-white"}const _=tt({name:"Calendars",props:{initialDate:{type:String,default:()=>k().format("YYYY-MM-DD")},dateFormat:{type:String,default:"YYYY-MM-DD"},disableOutsideDays:{type:Boolean,default:!0},locale:{type:String,default:"en"},mode:{type:String,default:"single"},selectedDate:String,startDate:String,endDate:String,color:{type:String,default:"blue"}},emits:["update:selectedDate","update:startDate","update:endDate","dateSelect","rangeSelect"],setup(r,{emit:m}){const d=p(k(r.initialDate)),h=p(r.initialDate),y=p(r.startDate||null),b=p(r.endDate||null),$=L(()=>w.getWeekDays(r.locale)),x=L(()=>w.getMonthLabel(d.value)),V=L(()=>r.mode==="range"?w.getCalendarDaysWithRange(d.value,h.value,y.value,b.value):w.getCalendarDays(d.value,h.value)),f=L(()=>{const a=r.color;return{primary:`bg-${a}-500 text-white dark:bg-${a}-600`,lightBg:`bg-${a}-50 dark:bg-${a}-900/30`,todayText:`text-${a}-600 dark:text-${a}-400`,focus:`focus:ring-${a}-500 dark:focus:ring-${a}-400`,hover:`hover:bg-${a}-50 dark:hover:bg-${a}-900/30`,selected:`bg-${a}-500 text-white dark:bg-${a}-600 dark:text-white shadow-md`}}),Y=a=>{!a.isCurrentMonth&&r.disableOutsideDays||(r.mode==="single"?(h.value=a.date,m("update:selectedDate",w.formatDate(a.date,r.dateFormat)),m("dateSelect",w.formatDate(a.date,r.dateFormat))):!y.value||y.value&&b.value?(y.value=a.date,b.value=null,m("update:startDate",w.formatDate(a.date,r.dateFormat)),m("update:endDate","")):(k(a.date).isBefore(y.value)?(b.value=y.value,y.value=a.date):b.value=a.date,m("update:startDate",w.formatDate(y.value,r.dateFormat)),m("update:endDate",w.formatDate(b.value,r.dateFormat)),m("rangeSelect",w.formatDate(y.value,r.dateFormat),w.formatDate(b.value,r.dateFormat))))},B=()=>{d.value=d.value.subtract(1,"month")},I=()=>{d.value=d.value.add(1,"month")};return lt(()=>{r.initialDate&&(d.value=k(r.initialDate),h.value=r.initialDate)}),()=>n("div",{class:"calendar-container relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 transition-colors duration-200"},[n("div",{class:"flex items-center justify-between p-4 md:p-6"},[n("div",{class:"relative h-7 md:h-8 overflow-hidden"},[n(X,{tag:"div",enterActiveClass:"transition-all duration-300 ease-out transform-gpu absolute w-full",enterFromClass:"opacity-0 -translate-x-4",enterToClass:"opacity-100 translate-x-0",leaveActiveClass:"transition-all duration-300 ease-in transform-gpu absolute w-full",leaveFromClass:"opacity-100 translate-x-0",leaveToClass:"opacity-0 translate-x-4",moveClass:"transition-transform duration-300"},{default:()=>[n("h2",{key:x.value,class:"calendar-title text-base font-medium md:text-lg text-gray-800 dark:text-gray-100 whitespace-nowrap"},[x.value])],_:1})]),n("div",{class:"flex space-x-2"},[n("button",{type:"button",onClick:B,class:`group rounded-full p-2 text-gray-400 transition-all duration-300 hover:bg-gray-50 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-300 ${f.value.focus} focus:ring-2 focus:ring-offset-2 focus:outline-none dark:focus:ring-offset-gray-800`,"aria-label":"上个月"},[n("i",{class:"icon-[material-symbols--chevron-left-rounded] size-5 transition-transform duration-300 group-hover:-translate-x-0.5 md:size-6"},null)],8,["onClick"]),n("button",{type:"button",onClick:I,class:`group rounded-full p-2 text-gray-400 transition-all duration-300 hover:bg-gray-50 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-300 ${f.value.focus} focus:ring-2 focus:ring-offset-2 focus:outline-none dark:focus:ring-offset-gray-800`,"aria-label":"下个月"},[n("i",{class:"icon-[material-symbols--chevron-right-rounded] size-5 transition-transform duration-300 group-hover:translate-x-0.5 md:size-6"},null)],8,["onClick"])])]),n("div",{class:"px-4 pb-6 md:px-6"},[n("div",{class:"mb-4 grid grid-cols-7"},[$.value.map(a=>n("div",{key:a,class:"py-2 text-center text-xs font-medium text-gray-500 md:text-sm dark:text-gray-400"},[a]))]),n("div",{class:"grid grid-cols-7 gap-1 md:gap-2"},[n(X,{enterActiveClass:"transition-all duration-300 ease-out transform-gpu",enterFromClass:"opacity-0 scale-90 blur-[1px]",enterToClass:"opacity-100 scale-100 blur-0",leaveActiveClass:"transition-all duration-200 ease-in transform-gpu",leaveFromClass:"opacity-100 scale-100 blur-0",leaveToClass:"opacity-0 scale-90 blur-[1px]",moveClass:"transition-all duration-300 ease-out"},{default:()=>V.value.map(a=>n("div",{key:`${d.value.format("YYYY-MM")}-${a.date}`,class:"aspect-square p-0.5"},[n("button",{type:"button",onClick:()=>Y(a),disabled:!a.isCurrentMonth&&r.disableOutsideDays,class:["relative flex h-full w-full items-center justify-center rounded-full transition-all duration-300 focus:ring-2 focus:ring-offset-1 focus:outline-none disabled:cursor-not-allowed disabled:opacity-40 dark:focus:ring-offset-gray-800",f.value.focus,!a.isCurrentMonth&&"text-gray-300 dark:text-gray-600",!a.isSelected&&!a.isInRange&&!a.isToday&&a.isCurrentMonth&&"text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700",!a.isSelected&&!a.isInRange&&a.isToday&&`font-semibold ${f.value.todayText}`,(r.mode==="single"&&a.isSelected||r.mode==="range"&&(a.isRangeStart||a.isRangeEnd))&&`${f.value.selected} transform scale-105`,r.mode==="range"&&a.isInRange&&!a.isRangeStart&&!a.isRangeEnd&&f.value.lightBg,a.isCurrentMonth?"cursor-pointer":"cursor-default"]},[n("time",{datetime:a.date,class:["relative z-10 text-sm md:text-base",(a.isSelected||a.isRangeStart||a.isRangeEnd)&&"font-semibold"]},[w.getDayNumber(a.date)],10,["datetime"])],10,["onClick","disabled"])])),_:1})])]),n("style",{scoped:!0},[`
          .calendar-container {
            will-change: transform, opacity;
            animation: calendarAppear 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          }

          @keyframes calendarAppear {
            from {
              opacity: 0;
              transform: scale(0.95) translateY(-5px);
            }
            to {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }

          * {
            backface-visibility: hidden;
            -webkit-font-smoothing: antialiased;
          }
        `],8,["scoped"])])}}),gt=`\`\`\`vue
<template>
  <Calendars v-model:selectedDate="date" mode="single" />
</template>

<script setup>
import { ref } from 'vue';

const date = ref('');
<\/script>
\`\`\``,ct=`\`\`\`vue
<template>
  <Calendars 
    v-model:startDate="startDate" 
    v-model:endDate="endDate" 
    mode="range"
    @rangeSelect="handleRangeSelect" 
  />
</template>

<script setup>
import { ref } from 'vue';

const startDate = ref('');
const endDate = ref('');

const handleRangeSelect = (start, end) => {
  console.log('选择的日期范围:', { start, end });
};
<\/script>
\`\`\``,ut=`\`\`\`vue
<template>
  <div class="flex flex-col gap-4">
    <Calendars v-model:selectedDate="date" mode="single" color="indigo" />
    <Calendars v-model:selectedDate="date" mode="single" color="emerald" />
    <Calendars v-model:selectedDate="date" mode="single" color="amber" />
    <Calendars v-model:selectedDate="date" mode="single" color="rose" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const date = ref('');
<\/script>
\`\`\``,mt=`\`\`\`vue
<template>
  <div class="flex flex-col gap-4">
    <h3>英文 (en)</h3>
    <Calendars v-model:selectedDate="date" locale="en" />
    
    <h3>中文 (zh-cn)</h3>
    <Calendars v-model:selectedDate="date" locale="zh-cn" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const date = ref('');
<\/script>
\`\`\``,xt=`\`\`\`vue
<template>
  <Calendars 
    v-model:selectedDate="date" 
    :initialDate="initialDate"
    dateFormat="YYYY/MM/DD" 
    @dateSelect="handleDateSelect"
  />
  <div v-if="date" class="mt-2">
    选中日期：{{ date }}
  </div>
</template>

<script setup>
import { ref } from 'vue';

const initialDate = '2023-05-15'; // 初始日期
const date = ref('');

const handleDateSelect = (selectedDate) => {
  console.log('格式化后的日期:', selectedDate);
};
<\/script>
\`\`\``,yt=`\`\`\`vue
<template>
  <Calendars
    v-model:selectedDate="selectedDate"
    mode="single"
    @dateSelect="handleDateSelect"
  />

  <div v-if="eventLog" class="mt-3 p-3 bg-gray-100 rounded text-sm">
    <div>事件记录: {{ eventLog }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedDate = ref('');
const eventLog = ref('');

const handleDateSelect = (date) => {
  eventLog.value = \`选择了日期: \${date} (\${new Date().toLocaleTimeString()})\`;
};
<\/script>
\`\`\``,bt={class:"mx-auto max-w-7xl p-4 md:p-8"},pt={class:"mb-12"},vt={class:"grid grid-cols-1 gap-6 md:grid-cols-2"},ft={class:"rounded-xl border border-gray-100 bg-white p-4 shadow-md transition-all duration-200 ease-in-out dark:border-gray-700 dark:bg-gray-800"},kt={key:0,class:"mt-3 rounded bg-gray-50 p-2 text-sm dark:bg-gray-700"},ht={class:"font-medium text-gray-700 dark:text-gray-300"},Dt={class:"text-gray-500 dark:text-gray-400"},wt={class:"rounded-xl border border-gray-100 bg-white p-4 shadow-md transition-all duration-200 ease-in-out dark:border-gray-700 dark:bg-gray-800"},Ct={key:0,class:"mt-3 rounded bg-gray-50 p-2 text-sm dark:bg-gray-700"},St={class:"font-medium text-gray-700 dark:text-gray-300"},_t={key:0,class:"text-gray-500 dark:text-gray-400"},Yt={key:1,class:"mt-1 text-xs text-gray-500 dark:text-gray-400"},Mt={class:"mb-12"},$t={class:"rounded-xl border border-gray-100 bg-white p-4 shadow-md transition-all duration-200 ease-in-out dark:border-gray-700 dark:bg-gray-800"},Rt={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},qt={class:"flex flex-col"},Tt={class:"grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4"},Ft={class:"mb-1 text-sm font-medium text-gray-600 dark:text-gray-300"},zt={class:"space-y-1"},Ut=["onClick"],Bt={key:0,class:"icon-[material-symbols--check-rounded] h-4 w-4 text-white"},Et={class:"flex flex-col"},Lt={class:"mb-3 text-lg font-semibold"},At={class:"mb-12"},jt={class:"grid grid-cols-1 gap-6 md:grid-cols-2"},Ot={class:"rounded-xl border border-gray-100 bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800"},Vt={class:"rounded-xl border border-gray-100 bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800"},It={class:"mb-12"},Nt={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},Wt={class:"rounded-xl border border-gray-100 bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800"},Pt={key:0,class:"mt-3 rounded bg-gray-50 p-2 text-sm dark:bg-gray-700"},Gt={class:"font-medium text-gray-700 dark:text-gray-300"},Ht={class:"mb-12"},Zt={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},Jt={class:"rounded-xl border border-gray-100 bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800"},Kt={key:0,class:"mt-3 rounded bg-gray-50 p-2 text-sm dark:bg-gray-700"},Qt={class:"text-gray-500 dark:text-gray-400"},Xt={class:"mb-12"},te={class:"mb-4 border-b pb-2 text-lg font-semibold"},ee={class:"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"},ae={class:"mb-2 flex items-center justify-between"},se={key:0,class:"mt-2 rounded bg-gray-50 p-1.5 text-xs dark:bg-gray-700"},re={class:"font-medium"},de={class:"text-gray-500 dark:text-gray-400"},le={key:0,class:"mt-0.5 text-xs text-gray-500 dark:text-gray-400"},oe={class:"mb-12"},ne={class:"mb-4 border-b pb-2 text-lg font-semibold"},ie={class:"grid grid-cols-1 gap-4 md:grid-cols-2"},ge={class:"mb-2 flex items-center justify-between"},ce={key:0,class:"mt-2 rounded bg-gray-50 p-1.5 text-xs dark:bg-gray-700"},ue={class:"font-medium"},me={key:0,class:"text-gray-500 dark:text-gray-400"},xe={key:1,class:"mt-0.5 text-xs text-gray-500 dark:text-gray-400"},ke=tt({__name:"View",setup(r){const m={gray:"灰色系",warm:"暖色系",green:"绿色系",blue:"蓝色系",purple:"紫粉色系"},d=p("blue"),h=(()=>{let l=null;return e=>{l&&clearTimeout(l),y.value=!0,l=setTimeout(()=>{d.value=e,setTimeout(()=>{y.value=!1},50)},100)}})(),y=p(!1),b=l=>{l!==d.value&&h(l)},$=L(()=>({text:`text-${d.value}-500 dark:text-${d.value}-400`,bg:`bg-${d.value}-500 dark:bg-${d.value}-600`,border:`border-${d.value}-500 dark:border-${d.value}-400`})),x=p(""),V=l=>{x.value=l},f=p(""),Y=p(""),B=p(""),I=(l,e)=>{B.value=new Date().toLocaleTimeString()},a=l=>l?k(l).format("YYYY年MM月DD日 dddd"):"",N=l=>l,H=(l,e)=>!l||!e?0:k(e).diff(k(l),"day")+1,R=j({}),W=j({}),et=(l,e)=>{R[l]=e,W[l]=new Date().toLocaleTimeString()},v=j({}),P=j({});Object.values(O).forEach(l=>{l.forEach(e=>{v[e]={start:"",end:""}})});const at=(l,e,c)=>{v[l].start=e,v[l].end=c,P[l]=new Date().toLocaleTimeString()},Z=p(""),J=p(""),K=p(""),A=p(""),Q=p(""),G=p(""),st=l=>{G.value=`选择了日期: ${l} (${new Date().toLocaleTimeString()})`},rt=l=>{console.log("格式化后的日期:",l)};return(l,e)=>(o(),i("div",bt,[e[27]||(e[27]=t("h1",{class:"mb-8 text-2xl font-bold"},"日历组件展示",-1)),t("section",pt,[e[10]||(e[10]=t("h2",{class:"mb-4 text-xl font-semibold"},"基础用法",-1)),t("div",vt,[n(g(U),{code:g(gt)},{default:q(()=>[t("div",ft,[e[8]||(e[8]=t("h3",{class:"mb-3 text-lg font-semibold"},"单选模式",-1)),(o(),z(g(_),{selectedDate:x.value,"onUpdate:selectedDate":e[0]||(e[0]=c=>x.value=c),mode:"single",color:d.value,key:"single-calendar",onDateSelect:V},null,8,["selectedDate","color"])),x.value?(o(),i("div",kt,[t("div",ht," 选中日期："+u(x.value),1),t("div",Dt,u(a(x.value)),1)])):D("",!0)])]),_:1},8,["code"]),n(g(U),{code:g(ct)},{default:q(()=>[t("div",wt,[e[9]||(e[9]=t("h3",{class:"mb-3 text-lg font-semibold"},"范围选择模式",-1)),(o(),z(g(_),{startDate:f.value,"onUpdate:startDate":e[1]||(e[1]=c=>f.value=c),endDate:Y.value,"onUpdate:endDate":e[2]||(e[2]=c=>Y.value=c),mode:"range",color:d.value,key:"range-dynamic",onRangeSelect:I},null,8,["startDate","endDate","color"])),f.value||Y.value?(o(),i("div",Ct,[t("div",St," 选择范围："+u(f.value||"未选择")+" 至 "+u(Y.value||"未选择"),1),f.value&&Y.value?(o(),i("div",_t," 共 "+u(H(f.value,Y.value))+" 天 ",1)):D("",!0),B.value?(o(),i("div",Yt," 最后选择时间："+u(N(B.value)),1)):D("",!0)])):D("",!0)])]),_:1},8,["code"])])]),t("section",Mt,[e[13]||(e[13]=t("h2",{class:"mb-4 text-xl font-semibold"},"颜色主题",-1)),n(g(U),{code:g(ut)},{default:q(()=>[t("div",$t,[t("div",Rt,[t("div",qt,[e[11]||(e[11]=t("h3",{class:"mb-3 text-lg font-semibold"},"选择颜色主题",-1)),t("div",Tt,[(o(!0),i(T,null,F(g(O),(c,M)=>(o(),i("div",{key:M,class:"flex flex-col"},[t("h3",Ft,u(m[M]),1),t("div",zt,[(o(!0),i(T,null,F(c,s=>(o(),i("div",{key:s,class:E(["flex w-full cursor-pointer items-center justify-between rounded-md px-2 py-0.5 transition-all",[g(it)(s),d.value===s?"ring-2 ring-offset-1":"hover:opacity-80"]]),onClick:C=>b(s)},[t("span",null,u(s),1),d.value===s?(o(),i("span",Bt)):D("",!0)],10,Ut))),128))])]))),128))])]),t("div",Et,[t("h3",Lt,[e[12]||(e[12]=S(" 当前选中颜色: ")),t("span",{class:E($.value.text)},u(d.value),3)]),(o(),z(g(_),{selectedDate:Z.value,"onUpdate:selectedDate":e[3]||(e[3]=c=>Z.value=c),color:d.value,key:"preview-calendar"},null,8,["selectedDate","color"]))])])])]),_:1},8,["code"])]),t("section",At,[e[16]||(e[16]=t("h2",{class:"mb-4 text-xl font-semibold"},"语言本地化",-1)),n(g(U),{code:g(mt)},{default:q(()=>[t("div",jt,[t("div",Ot,[e[14]||(e[14]=t("h3",{class:"mb-3 text-lg font-semibold"},"英文 (en)",-1)),n(g(_),{selectedDate:J.value,"onUpdate:selectedDate":e[4]||(e[4]=c=>J.value=c),locale:"en",color:"blue"},null,8,["selectedDate"])]),t("div",Vt,[e[15]||(e[15]=t("h3",{class:"mb-3 text-lg font-semibold"},"中文 (zh-cn)",-1)),n(g(_),{selectedDate:K.value,"onUpdate:selectedDate":e[5]||(e[5]=c=>K.value=c),locale:"zh-cn",color:"blue"},null,8,["selectedDate"])])])]),_:1},8,["code"])]),t("section",It,[e[20]||(e[20]=t("h2",{class:"mb-4 text-xl font-semibold"},"日期格式与初始值",-1)),n(g(U),{code:g(xt)},{default:q(()=>[t("div",Nt,[t("div",Wt,[e[18]||(e[18]=t("h3",{class:"mb-3 text-lg font-semibold"},"自定义日期格式",-1)),n(g(_),{selectedDate:A.value,"onUpdate:selectedDate":e[6]||(e[6]=c=>A.value=c),initialDate:"2023-05-15",dateFormat:"YYYY/MM/DD",color:d.value,onDateSelect:rt},null,8,["selectedDate","color"]),A.value?(o(),i("div",Pt,[t("div",Gt," 选中日期："+u(A.value),1),e[17]||(e[17]=t("div",{class:"text-gray-500 dark:text-gray-400"}," 初始日期为: 2023-05-15 ",-1))])):D("",!0)]),e[19]||(e[19]=t("div",{class:"rounded-xl border border-gray-100 bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800"},[t("h3",{class:"mb-3 text-lg font-semibold"},"使用说明"),t("div",{class:"text-gray-700 dark:text-gray-300 space-y-3"},[t("p",null,[S("通过 "),t("code",{class:"px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded"},"initialDate"),S(" 属性设置日历初始显示的月份和日期。")]),t("p",null,[S("通过 "),t("code",{class:"px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded"},"dateFormat"),S(" 属性自定义返回的日期格式，支持多种格式化模式。")]),t("div",{class:"bg-gray-50 dark:bg-gray-800 p-3 rounded"},[t("div",{class:"font-medium mb-1"},"支持的格式:"),t("ul",{class:"list-disc pl-5 text-sm"},[t("li",null,"YYYY-MM-DD (默认)"),t("li",null,"YYYY/MM/DD"),t("li",null,"MM/DD/YYYY"),t("li",null,"DD/MM/YYYY"),t("li",null,"等其他 dayjs 支持的格式")])])])],-1))])]),_:1},8,["code"])]),t("section",Ht,[e[24]||(e[24]=t("h2",{class:"mb-4 text-xl font-semibold"},"事件处理",-1)),n(g(U),{code:g(yt)},{default:q(()=>[t("div",Zt,[t("div",Jt,[e[22]||(e[22]=t("h3",{class:"mb-3 text-lg font-semibold"},"事件监听示例",-1)),(o(),z(g(_),{selectedDate:Q.value,"onUpdate:selectedDate":e[7]||(e[7]=c=>Q.value=c),mode:"single",color:"indigo",key:"event-demo",onDateSelect:st},null,8,["selectedDate"])),G.value?(o(),i("div",Kt,[e[21]||(e[21]=t("div",{class:"font-medium text-gray-700 dark:text-gray-300"},"事件记录:",-1)),t("div",Qt,u(G.value),1)])):D("",!0)]),e[23]||(e[23]=t("div",{class:"rounded-xl border border-gray-100 bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800"},[t("h3",{class:"mb-3 text-lg font-semibold"},"事件说明"),t("div",{class:"text-gray-700 dark:text-gray-300 space-y-3"},[t("p",null,"Calendars 组件提供了丰富的事件回调，可以监听用户的各种交互行为。"),t("div",{class:"bg-gray-50 dark:bg-gray-800 p-3 rounded"},[t("div",{class:"font-medium mb-1"},"可用事件:"),t("ul",{class:"list-disc pl-5 text-sm space-y-2"},[t("li",null,[t("span",{class:"font-medium"},"dateSelect"),S(": 单选模式下选择日期时触发")]),t("li",null,[t("span",{class:"font-medium"},"rangeSelect"),S(": 范围模式下完成选择时触发")]),t("li",null,[t("span",{class:"font-medium"},"update:selectedDate"),S(": 数据绑定更新")]),t("li",null,[t("span",{class:"font-medium"},"update:startDate/endDate"),S(": 范围数据绑定更新")])])]),t("p",{class:"text-sm text-gray-500 dark:text-gray-400"},"点击左侧日历选择日期，可查看事件触发效果")])],-1))])]),_:1},8,["code"])]),t("section",Xt,[e[25]||(e[25]=t("h2",{class:"mb-4 text-xl font-semibold"},"全部颜色主题预览",-1)),(o(!0),i(T,null,F(g(O),(c,M)=>(o(),i("div",{key:M,class:"mb-8"},[t("h3",te,u(m[M]),1),t("div",ee,[(o(!0),i(T,null,F(c,s=>(o(),i("div",{key:s,class:"rounded-xl border border-gray-100 bg-white p-3 shadow-md dark:border-gray-700 dark:bg-gray-800"},[t("div",ae,[t("h4",{class:E(["text-base font-medium",`text-${s}-600 dark:text-${s}-400`])},u(s),3),t("span",{class:E(`rounded px-2 py-0.5 text-xs text-white bg-${s}-500 dark:bg-${s}-600`)},u(s),3)]),(o(),z(g(_),{selectedDate:R[s],"onUpdate:selectedDate":C=>R[s]=C,mode:"single",color:s,key:`single-${s}`,class:"mb-2",onDateSelect:C=>et(s,C)},null,8,["selectedDate","onUpdate:selectedDate","color","onDateSelect"])),R[s]?(o(),i("div",se,[t("div",re,"已选日期："+u(R[s]),1),t("div",de,u(a(R[s])),1),W[s]?(o(),i("div",le," 选择时间："+u(N(W[s])),1)):D("",!0)])):D("",!0)]))),128))])]))),128))]),t("section",oe,[e[26]||(e[26]=t("h2",{class:"mb-4 text-xl font-semibold"},"范围选择模式 - 全部颜色",-1)),(o(!0),i(T,null,F(g(O),(c,M)=>(o(),i("div",{key:`range-${M}`,class:"mb-8"},[t("h3",ne,u(m[M])+" - 范围选择 ",1),t("div",ie,[(o(!0),i(T,null,F(c,s=>(o(),i("div",{key:`range-${s}`,class:"rounded-xl border border-gray-100 bg-white p-3 shadow-md dark:border-gray-700 dark:bg-gray-800"},[t("div",ge,[t("h4",{class:E(["text-base font-medium",`text-${s}-600 dark:text-${s}-400`])},u(s),3)]),(o(),z(g(_),{startDate:v[s].start,"onUpdate:startDate":C=>v[s].start=C,endDate:v[s].end,"onUpdate:endDate":C=>v[s].end=C,mode:"range",color:s,key:`range-${s}`,onRangeSelect:(C,dt)=>at(s,C,dt)},null,8,["startDate","onUpdate:startDate","endDate","onUpdate:endDate","color","onRangeSelect"])),v[s].start||v[s].end?(o(),i("div",ce,[t("div",ue," 范围："+u(v[s].start||"未选择")+" 至 "+u(v[s].end||"未选择"),1),v[s].start&&v[s].end?(o(),i("div",me," 共计 "+u(H(v[s].start,v[s].end))+" 天 ",1)):D("",!0),P[s]?(o(),i("div",xe," 选择时间："+u(N(P[s])),1)):D("",!0)])):D("",!0)]))),128))])]))),128))]),e[28]||(e[28]=ot(`<section class="mb-10"><h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white"> 组件API </h2><div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800"><h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white"> 属性 (Props) </h3><div class="mb-6 overflow-x-auto"><table class="min-w-full border-collapse"><thead><tr class="border-b border-gray-200 dark:border-gray-700"><th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white"> 属性名 </th><th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white"> 类型 </th><th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white"> 默认值 </th><th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white"> 描述 </th></tr></thead><tbody class="divide-y divide-gray-200 dark:divide-gray-700"><tr><td class="px-4 py-2 font-medium text-gray-900 dark:text-white"> mode </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> &#39;single&#39; | &#39;range&#39; </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> &#39;single&#39; </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> 选择模式：单选或范围选择 </td></tr><tr><td class="px-4 py-2 font-medium text-gray-900 dark:text-white"> color </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> ColorType </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> &#39;blue&#39; </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> 日历主题颜色 </td></tr><tr><td class="px-4 py-2 font-medium text-gray-900 dark:text-white"> selectedDate </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> string </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> undefined </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> 单选模式下选中的日期 </td></tr><tr><td class="px-4 py-2 font-medium text-gray-900 dark:text-white"> startDate/endDate </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> string </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> undefined </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> 范围选择的开始和结束日期 </td></tr><tr><td class="px-4 py-2 font-medium text-gray-900 dark:text-white"> dateFormat </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> string </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> &#39;YYYY-MM-DD&#39; </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> 日期格式 </td></tr><tr><td class="px-4 py-2 font-medium text-gray-900 dark:text-white"> locale </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> &#39;en&#39; | &#39;zh-cn&#39; </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">&#39;en&#39;</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> 日历语言 </td></tr><tr><td class="px-4 py-2 font-medium text-gray-900 dark:text-white"> disableOutsideDays </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> boolean </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300">true</td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> 是否禁用非当前月份的日期 </td></tr><tr><td class="px-4 py-2 font-medium text-gray-900 dark:text-white"> initialDate </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> string </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> 当前日期 </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> 初始显示的日期 </td></tr></tbody></table></div><h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white"> 事件 (Events) </h3><div class="mb-6 overflow-x-auto"><table class="min-w-full border-collapse"><thead><tr class="border-b border-gray-200 dark:border-gray-700"><th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white"> 事件名 </th><th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white"> 回调参数 </th><th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white"> 描述 </th></tr></thead><tbody class="divide-y divide-gray-200 dark:divide-gray-700"><tr><td class="px-4 py-2 font-medium text-gray-900 dark:text-white"> dateSelect </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> (date: string) </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> 单选模式下选择日期时触发 </td></tr><tr><td class="px-4 py-2 font-medium text-gray-900 dark:text-white"> rangeSelect </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> (start: string, end: string) </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> 范围模式下完成选择时触发 </td></tr><tr><td class="px-4 py-2 font-medium text-gray-900 dark:text-white"> update:selectedDate </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> (date: string) </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> 单选模式下更新选中日期时触发 </td></tr><tr><td class="px-4 py-2 font-medium text-gray-900 dark:text-white"> update:startDate/endDate </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> (date: string) </td><td class="px-4 py-2 text-gray-700 dark:text-gray-300"> 范围模式下更新起止日期时触发 </td></tr></tbody></table></div><h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white"> 使用示例 </h3><div class="mb-6 space-y-4"><h4 class="text-base font-medium text-gray-800 dark:text-gray-200"> 单选模式 </h4><pre class="overflow-x-auto rounded-lg bg-gray-50 p-4 text-sm dark:bg-gray-800/50">  <code>&lt;template&gt;
    &lt;Calendars
      v-model:selectedDate=&quot;date&quot;
      mode=&quot;single&quot;
      color=&quot;blue&quot;
      locale=&quot;zh-cn&quot;
      @dateSelect=&quot;handleDateSelect&quot;
    /&gt;
  &lt;/template&gt;
  
  &lt;script setup lang=&quot;ts&quot;&gt;
  import { ref } from &#39;vue&#39;;
  
  const date = ref(&#39;&#39;);
  const handleDateSelect = (date: string) =&gt; {
    console.log(&#39;选择的日期:&#39;, date);
  };
  &lt;/script&gt;</code></pre><h4 class="text-base font-medium text-gray-800 dark:text-gray-200"> 范围选择模式 </h4><pre class="overflow-x-auto rounded-lg bg-gray-50 p-4 text-sm dark:bg-gray-800/50">  <code>&lt;template&gt;
    &lt;Calendars
      v-model:startDate=&quot;startDate&quot;
      v-model:endDate=&quot;endDate&quot;
      mode=&quot;range&quot;
      color=&quot;indigo&quot;
      locale=&quot;zh-cn&quot;
      @rangeSelect=&quot;handleRangeSelect&quot;
    /&gt;
  &lt;/template&gt;
  
  &lt;script setup lang=&quot;ts&quot;&gt;
  import { ref } from &#39;vue&#39;;
  
  const startDate = ref(&#39;&#39;);
  const endDate = ref(&#39;&#39;);
  const handleRangeSelect = (start: string, end: string) =&gt; {
    console.log(&#39;日期范围:&#39;, { start, end });
  };
  &lt;/script&gt;</code></pre></div></div></section><section class="mb-10"><h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white"> 小结与最佳实践 </h2><div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800"><div class="space-y-4"><p class="text-gray-700 dark:text-gray-300"> Calendars 组件是一个功能丰富的日历选择器，支持单选和范围选择，并提供多种颜色主题和语言选项。下面是一些使用建议： </p><ul class="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300"><li>根据业务需求选择合适的选择模式（单选或范围选择）</li><li>配合项目设计风格选择合适的颜色主题</li><li>针对国际化需求设置适当的语言 (locale) 和日期格式 (dateFormat)</li><li>利用 initialDate 属性设置默认显示的月份，提高用户体验</li><li>在复杂表单中，可以利用事件回调进行表单验证或联动操作</li></ul><div class="rounded-lg border border-blue-100 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-900/20"><h4 class="mb-2 flex items-center text-blue-800 dark:text-blue-300"><span class="icon-[material-symbols--info-outline-rounded] mr-2 h-5 w-5"></span> 提示 </h4><p class="text-sm text-blue-700 dark:text-blue-300"> Calendars 组件已完全适配暗色模式，无需额外配置。通过设置 HTML 根元素上的 <code class="rounded bg-blue-100 px-1 py-0.5 font-mono dark:bg-blue-800/60">dark</code> 类即可启用暗色主题。 </p></div></div></div></section>`,2))]))}});export{_ as Calendars,ke as default};
//# sourceMappingURL=index-2166irWm.js.map
