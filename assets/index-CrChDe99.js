import{g as fe,D as Z}from"./index-CdAIkmQn.js";import{d as oe,r as _,m as te,o as me,e as u,n as re,j as I,c as ge,a as w,w as F,i as T,t as j,b as ve}from"./index-C5fc-OhM.js";var K={exports:{}},he=K.exports,ie;function De(){return ie||(ie=1,function(l,y){(function(f,v){l.exports=v()})(he,function(){var f=1e3,v=6e4,h=36e5,m="millisecond",M="second",D="minute",R="hour",k="day",A="week",$="month",e="quarter",g="year",L="date",ae="Invalid Date",le=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,ue=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,de={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(r){var n=["th","st","nd","rd"],t=r%100;return"["+r+(n[(t-20)%10]||n[t]||n[0])+"]"}},X=function(r,n,t){var s=String(r);return!s||s.length>=n?r:""+Array(n+1-s.length).join(t)+r},ce={s:X,z:function(r){var n=-r.utcOffset(),t=Math.abs(n),s=Math.floor(t/60),a=t%60;return(n<=0?"+":"-")+X(s,2,"0")+":"+X(a,2,"0")},m:function r(n,t){if(n.date()<t.date())return-r(t,n);var s=12*(t.year()-n.year())+(t.month()-n.month()),a=n.clone().add(s,$),i=t-a<0,o=n.clone().add(s+(i?-1:1),$);return+(-(s+(t-a)/(i?a-o:o-a))||0)},a:function(r){return r<0?Math.ceil(r)||0:Math.floor(r)},p:function(r){return{M:$,y:g,w:A,d:k,D:L,h:R,m:D,s:M,ms:m,Q:e}[r]||String(r||"").toLowerCase().replace(/s$/,"")},u:function(r){return r===void 0}},V="en",U={};U[V]=de;var ne="$isDayjsObject",ee=function(r){return r instanceof G||!(!r||!r[ne])},P=function r(n,t,s){var a;if(!n)return V;if(typeof n=="string"){var i=n.toLowerCase();U[i]&&(a=i),t&&(U[i]=t,a=i);var o=n.split("-");if(!a&&o.length>1)return r(o[0])}else{var c=n.name;U[c]=n,a=c}return!s&&a&&(V=a),a||!s&&V},b=function(r,n){if(ee(r))return r.clone();var t=typeof n=="object"?n:{};return t.date=r,t.args=arguments,new G(t)},d=ce;d.l=P,d.i=ee,d.w=function(r,n){return b(r,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var G=function(){function r(t){this.$L=P(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[ne]=!0}var n=r.prototype;return n.parse=function(t){this.$d=function(s){var a=s.date,i=s.utc;if(a===null)return new Date(NaN);if(d.u(a))return new Date;if(a instanceof Date)return new Date(a);if(typeof a=="string"&&!/Z$/i.test(a)){var o=a.match(le);if(o){var c=o[2]-1||0,p=(o[7]||"0").substring(0,3);return i?new Date(Date.UTC(o[1],c,o[3]||1,o[4]||0,o[5]||0,o[6]||0,p)):new Date(o[1],c,o[3]||1,o[4]||0,o[5]||0,o[6]||0,p)}}return new Date(a)}(t),this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return d},n.isValid=function(){return this.$d.toString()!==ae},n.isSame=function(t,s){var a=b(t);return this.startOf(s)<=a&&a<=this.endOf(s)},n.isAfter=function(t,s){return b(t)<this.startOf(s)},n.isBefore=function(t,s){return this.endOf(s)<b(t)},n.$g=function(t,s,a){return d.u(t)?this[s]:this.set(a,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,s){var a=this,i=!!d.u(s)||s,o=d.p(t),c=function(H,C){var E=d.w(a.$u?Date.UTC(a.$y,C,H):new Date(a.$y,C,H),a);return i?E:E.endOf(k)},p=function(H,C){return d.w(a.toDate()[H].apply(a.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(C)),a)},S=this.$W,x=this.$M,Y=this.$D,N="set"+(this.$u?"UTC":"");switch(o){case g:return i?c(1,0):c(31,11);case $:return i?c(1,x):c(0,x+1);case A:var W=this.$locale().weekStart||0,q=(S<W?S+7:S)-W;return c(i?Y-q:Y+(6-q),x);case k:case L:return p(N+"Hours",0);case R:return p(N+"Minutes",1);case D:return p(N+"Seconds",2);case M:return p(N+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,s){var a,i=d.p(t),o="set"+(this.$u?"UTC":""),c=(a={},a[k]=o+"Date",a[L]=o+"Date",a[$]=o+"Month",a[g]=o+"FullYear",a[R]=o+"Hours",a[D]=o+"Minutes",a[M]=o+"Seconds",a[m]=o+"Milliseconds",a)[i],p=i===k?this.$D+(s-this.$W):s;if(i===$||i===g){var S=this.clone().set(L,1);S.$d[c](p),S.init(),this.$d=S.set(L,Math.min(this.$D,S.daysInMonth())).$d}else c&&this.$d[c](p);return this.init(),this},n.set=function(t,s){return this.clone().$set(t,s)},n.get=function(t){return this[d.p(t)]()},n.add=function(t,s){var a,i=this;t=Number(t);var o=d.p(s),c=function(x){var Y=b(i);return d.w(Y.date(Y.date()+Math.round(x*t)),i)};if(o===$)return this.set($,this.$M+t);if(o===g)return this.set(g,this.$y+t);if(o===k)return c(1);if(o===A)return c(7);var p=(a={},a[D]=v,a[R]=h,a[M]=f,a)[o]||1,S=this.$d.getTime()+t*p;return d.w(S,this)},n.subtract=function(t,s){return this.add(-1*t,s)},n.format=function(t){var s=this,a=this.$locale();if(!this.isValid())return a.invalidDate||ae;var i=t||"YYYY-MM-DDTHH:mm:ssZ",o=d.z(this),c=this.$H,p=this.$m,S=this.$M,x=a.weekdays,Y=a.months,N=a.meridiem,W=function(C,E,J,Q){return C&&(C[E]||C(s,i))||J[E].slice(0,Q)},q=function(C){return d.s(c%12||12,C,"0")},H=N||function(C,E,J){var Q=C<12?"AM":"PM";return J?Q.toLowerCase():Q};return i.replace(ue,function(C,E){return E||function(J){switch(J){case"YY":return String(s.$y).slice(-2);case"YYYY":return d.s(s.$y,4,"0");case"M":return S+1;case"MM":return d.s(S+1,2,"0");case"MMM":return W(a.monthsShort,S,Y,3);case"MMMM":return W(Y,S);case"D":return s.$D;case"DD":return d.s(s.$D,2,"0");case"d":return String(s.$W);case"dd":return W(a.weekdaysMin,s.$W,x,2);case"ddd":return W(a.weekdaysShort,s.$W,x,3);case"dddd":return x[s.$W];case"H":return String(c);case"HH":return d.s(c,2,"0");case"h":return q(1);case"hh":return q(2);case"a":return H(c,p,!0);case"A":return H(c,p,!1);case"m":return String(p);case"mm":return d.s(p,2,"0");case"s":return String(s.$s);case"ss":return d.s(s.$s,2,"0");case"SSS":return d.s(s.$ms,3,"0");case"Z":return o}return null}(C)||o.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,s,a){var i,o=this,c=d.p(s),p=b(t),S=(p.utcOffset()-this.utcOffset())*v,x=this-p,Y=function(){return d.m(o,p)};switch(c){case g:i=Y()/12;break;case $:i=Y();break;case e:i=Y()/3;break;case A:i=(x-S)/6048e5;break;case k:i=(x-S)/864e5;break;case R:i=x/h;break;case D:i=x/v;break;case M:i=x/f;break;default:i=x}return a?i:d.a(i)},n.daysInMonth=function(){return this.endOf($).$D},n.$locale=function(){return U[this.$L]},n.locale=function(t,s){if(!t)return this.$L;var a=this.clone(),i=P(t,s,!0);return i&&(a.$L=i),a},n.clone=function(){return d.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},r}(),se=G.prototype;return b.prototype=se,[["$ms",m],["$s",M],["$m",D],["$H",R],["$W",k],["$M",$],["$y",g],["$D",L]].forEach(function(r){se[r[1]]=function(n){return this.$g(n,r[0],r[1])}}),b.extend=function(r,n){return r.$i||(r(n,G,b),r.$i=!0),b},b.locale=P,b.isDayjs=ee,b.unix=function(r){return b(1e3*r)},b.en=U[V],b.Ls=U,b.p={},b})}(K)),K.exports}var pe=De();const z=fe(pe),O={getWeekDays(l){return l==="zh-cn"?["日","一","二","三","四","五","六"]:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},getMonthLabel(l){return l.format("YYYY年MM月")},getDayNumber(l){return z(l).date()},formatDate(l,y){return z(l).format(y)},getCalendarDays(l,y){const f=[],v=l.startOf("month"),h=l.endOf("month"),m=v.startOf("week"),M=h.endOf("week");let D=m;for(;D.isBefore(M)||D.isSame(M,"day");)f.push({date:D.format("YYYY-MM-DD"),isCurrentMonth:D.month()===l.month(),isToday:D.isSame(z(),"day"),isSelected:y?D.isSame(z(y),"day"):!1,isInRange:!1,isRangeStart:!1,isRangeEnd:!1}),D=D.add(1,"day");return f},getCalendarDaysWithRange(l,y,f,v){const h=this.getCalendarDays(l,y);return f&&v?h.map(m=>({...m,isInRange:z(m.date).isAfter(f)&&z(m.date).isBefore(v),isRangeStart:m.date===f,isRangeEnd:m.date===v})):h}},B=oe({name:"Calendars",props:{initialDate:{type:String,default:()=>z().format("YYYY-MM-DD")},dateFormat:{type:String,default:"YYYY-MM-DD"},disableOutsideDays:{type:Boolean,default:!0},locale:{type:String,default:"en"},mode:{type:String,default:"single"},selectedDate:String,startDate:String,endDate:String},emits:["update:selectedDate","update:startDate","update:endDate","dateSelect","rangeSelect"],setup(l,{emit:y}){const f=_(z(l.initialDate)),v=_(l.initialDate),h=_(l.startDate||null),m=_(l.endDate||null),M=te(()=>O.getWeekDays(l.locale)),D=te(()=>O.getMonthLabel(f.value)),R=te(()=>l.mode==="range"?O.getCalendarDaysWithRange(f.value,v.value,h.value,m.value):O.getCalendarDays(f.value,v.value)),k=e=>{!e.isCurrentMonth&&l.disableOutsideDays||(l.mode==="single"?(v.value=e.date,y("update:selectedDate",O.formatDate(e.date,l.dateFormat)),y("dateSelect",O.formatDate(e.date,l.dateFormat))):!h.value||h.value&&m.value?(h.value=e.date,m.value=null,y("update:startDate",O.formatDate(e.date,l.dateFormat)),y("update:endDate","")):(z(e.date).isBefore(h.value)?(m.value=h.value,h.value=e.date):m.value=e.date,y("update:startDate",O.formatDate(h.value,l.dateFormat)),y("update:endDate",O.formatDate(m.value,l.dateFormat)),y("rangeSelect",O.formatDate(h.value,l.dateFormat),O.formatDate(m.value,l.dateFormat))))},A=()=>{f.value=f.value.subtract(1,"month")},$=()=>{f.value=f.value.add(1,"month")};return me(()=>{l.initialDate&&(f.value=z(l.initialDate),v.value=l.initialDate)}),()=>u("div",{class:"calendar-container relative overflow-hidden rounded-xl"},[u("div",{class:"flex items-center justify-between p-4 md:p-6"},[u("div",{class:"relative"},[u(re,{tag:"div",enterActiveClass:"transition-all duration-300 ease-out-back transform-gpu",enterFromClass:"opacity-0 -translate-x-4 blur-sm",enterToClass:"opacity-100 translate-x-0 blur-0",leaveActiveClass:"transition-all duration-200 ease-in-back transform-gpu",leaveFromClass:"opacity-100 translate-x-0 blur-0",leaveToClass:"opacity-0 translate-x-4 blur-sm",moveClass:"transition-all duration-500 ease-in-out"},{default:()=>[u("h2",{key:D.value,class:"calendar-title text-base font-medium md:text-lg"},[D.value])],_:1})]),u("div",{class:"flex space-x-2"},[u("button",{type:"button",onClick:A,class:"group rounded-full p-2 text-gray-400 transition-all duration-200 hover:bg-gray-50 hover:text-gray-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none dark:hover:bg-gray-700 dark:hover:text-gray-300"},[u("span",{class:"sr-only"},[I("Previous month")]),u("i",{class:"i-tabler-chevron-left size-5 transition-transform duration-200 group-hover:-translate-x-0.5 md:size-6"},null)],8,["onClick"]),u("button",{type:"button",onClick:$,class:"group rounded-full p-2 text-gray-400 transition-all duration-200 hover:bg-gray-50 hover:text-gray-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none dark:hover:bg-gray-700 dark:hover:text-gray-300"},[u("span",{class:"sr-only"},[I("Next month")]),u("i",{class:"i-tabler-chevron-right size-5 transition-transform duration-200 group-hover:translate-x-0.5 md:size-6"},null)],8,["onClick"])])]),u("div",{class:"px-4 pb-6 md:px-6"},[u("div",{class:"mb-4 grid grid-cols-7"},[M.value.map(e=>u("div",{key:e,class:"py-2 text-center text-xs font-medium text-gray-500 md:text-sm dark:text-gray-400"},[e]))]),u("div",{class:"grid grid-cols-7 gap-1 md:gap-2"},[u(re,{enterActiveClass:"transition-all duration-300 ease-out-back transform-gpu",enterFromClass:"opacity-0 scale-90 blur-sm",enterToClass:"opacity-100 scale-100 blur-0",leaveActiveClass:"transition-all duration-200 ease-in-back transform-gpu",leaveFromClass:"opacity-100 scale-100 blur-0",leaveToClass:"opacity-0 scale-90 blur-sm",moveClass:"transition-all duration-300 ease-in-out"},{default:()=>R.value.map(e=>u("div",{key:`${f.value.format("YYYY-MM")}-${e.date}`,class:"aspect-square p-0.5"},[u("button",{type:"button",onClick:()=>k(e),disabled:!e.isCurrentMonth&&l.disableOutsideDays,class:["relative flex h-full w-full items-center justify-center rounded-full transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",l.mode==="single"&&e.isSelected&&"scale-105 bg-blue-500 text-white shadow-lg",l.mode==="range"&&(e.isRangeStart||e.isRangeEnd)&&"z-10 bg-blue-500 text-white shadow-md",l.mode==="range"&&e.isInRange&&"bg-blue-100 dark:bg-blue-900/30",!e.isSelected&&!e.isInRange&&e.isToday&&"font-semibold text-blue-600",!e.isSelected&&!e.isInRange&&!e.isToday&&e.isCurrentMonth&&"text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700",!e.isSelected&&!e.isInRange&&!e.isToday&&!e.isCurrentMonth&&"text-gray-300 dark:text-gray-600",e.isCurrentMonth?"cursor-pointer":"cursor-default"]},[u("time",{datetime:e.date,class:["relative z-10 text-sm md:text-base",(e.isSelected||e.isRangeStart||e.isRangeEnd)&&"font-semibold",e.isToday&&!e.isSelected&&!e.isRangeStart&&!e.isRangeEnd&&"font-semibold"]},[O.getDayNumber(e.date)],10,["datetime"])],10,["onClick","disabled"])])),_:1})])]),u("style",{scoped:!0},[`
          .calendar-container {
            will-change: transform, opacity;
            animation: calendarAppear 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          }

          .calendar-title {
            will-change: transform, opacity;
          }

          @keyframes calendarAppear {
            from {
              opacity: 0;
              transform: scale(0.95) translateY(-10px);
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
        `],8,["scoped"])])}}),ye={class:"mx-auto w-full max-w-5xl space-y-8 p-6"},$e={class:"max-w-md"},be={class:"mt-4 text-sm text-gray-500"},Se={class:"max-w-md"},xe={class:"mt-4 text-sm text-gray-500"},Me={class:"max-w-md"},Ce={class:"mt-4 text-sm text-gray-500"},we={class:"max-w-md"},ke={class:"mt-4 text-sm text-gray-500"},Ye={class:"grid grid-cols-1 gap-8 md:grid-cols-2"},Re=oe({__name:"View",setup(l){const y=_(""),f=_(""),v=_(""),h=_(""),m=_(""),M=_(""),D=_(""),R=_(""),k=$=>{console.log("Selected date:",$)},A=($,e)=>{console.log("Selected range:",{start:$,end:e})};return($,e)=>(ve(),ge("div",ye,[e[15]||(e[15]=w("h1",{class:"mb-8 text-2xl font-bold"},"Calendar 日历组件",-1)),u(T(Z),{title:"基础用法",description:"最基本的日历组件用法，支持单个日期选择。"},{default:F(()=>[w("div",$e,[u(T(B),{selectedDate:y.value,"onUpdate:selectedDate":e[0]||(e[0]=g=>y.value=g),mode:"single",onDateSelect:k},null,8,["selectedDate"]),w("p",be," 已选择日期: "+j(y.value||"未选择"),1)])]),code:F(()=>e[8]||(e[8]=[I(j(`
        <Calendars
          v-model:selectedDate="singleDate"
          mode="single"
          @dateSelect="handleDateSelect"
        />

        <script setup lang="ts">
          import { ref } from "vue";
          import { Calendars } from "@/components/Calendars";

          const singleDate = ref("");
          const handleDateSelect = (date: string) => {
            console.log("Selected date:", date);
          };
        <\/script>
        `))])),_:1}),u(T(Z),{title:"日期范围选择",description:"支持选择日期范围，适用于需要选择时间段的场景。"},{default:F(()=>[w("div",Se,[u(T(B),{startDate:v.value,"onUpdate:startDate":e[1]||(e[1]=g=>v.value=g),endDate:h.value,"onUpdate:endDate":e[2]||(e[2]=g=>h.value=g),mode:"range",onRangeSelect:A},null,8,["startDate","endDate"]),w("p",xe," 已选择范围: "+j(v.value?`${v.value} 至 ${h.value}`:"未选择"),1)])]),code:F(()=>e[9]||(e[9]=[I(j(`
        <Calendars
          v-model:startDate="rangeStart"
          v-model:endDate="rangeEnd"
          mode="range"
          @rangeSelect="handleRangeSelect"
        />

        <script setup lang="ts">
          import { ref } from "vue";
          import { Calendars } from "@/components/Calendars";

          const rangeStart = ref("");
          const rangeEnd = ref("");
          const handleRangeSelect = (start: string, end: string) => {
            console.log("Selected range:", { start, end });
          };
        <\/script>
        `))])),_:1}),u(T(Z),{title:"自定义日期格式",description:"通过 dateFormat 属性自定义日期的输出格式。"},{default:F(()=>[w("div",Me,[u(T(B),{selectedDate:f.value,"onUpdate:selectedDate":e[3]||(e[3]=g=>f.value=g),dateFormat:"YYYY/MM/DD",mode:"single"},null,8,["selectedDate"]),w("p",Ce," 自定义格式: "+j(f.value||"未选择"),1)])]),code:F(()=>e[10]||(e[10]=[I(j(`
        <Calendars
          v-model:selectedDate="customFormatDate"
          dateFormat="YYYY/MM/DD"
          mode="single"
        />

        <script setup lang="ts">
          import { ref } from "vue";
          const customFormatDate = ref("");
        <\/script>
        `))])),_:1}),u(T(Z),{title:"允许选择非当前月份日期",description:"设置 disableOutsideDays 为 false 可以允许选择非当前月份的日期。"},{default:F(()=>[w("div",we,[u(T(B),{startDate:m.value,"onUpdate:startDate":e[4]||(e[4]=g=>m.value=g),endDate:M.value,"onUpdate:endDate":e[5]||(e[5]=g=>M.value=g),mode:"range",disableOutsideDays:!1},null,8,["startDate","endDate"]),w("p",ke," 已选择范围: "+j(m.value?`${m.value} 至 ${M.value}`:"未选择"),1)])]),code:F(()=>e[11]||(e[11]=[I(j(`
        <Calendars
          v-model:startDate="rangeStart"
          v-model:endDate="rangeEnd"
          mode="range"
          :disableOutsideDays="false"
        />

        <script setup lang="ts">
          import { ref } from "vue";
          const rangeStart = ref("");
          const rangeEnd = ref("");
        <\/script>
        `))])),_:1}),u(T(Z),{title:"国际化支持",description:"支持中英文两种语言显示，通过 locale 属性切换。"},{default:F(()=>[w("div",Ye,[w("div",null,[e[12]||(e[12]=w("h3",{class:"mb-2 text-sm text-gray-600"},"中文：",-1)),u(T(B),{selectedDate:D.value,"onUpdate:selectedDate":e[6]||(e[6]=g=>D.value=g),locale:"zh-cn",mode:"single"},null,8,["selectedDate"])]),w("div",null,[e[13]||(e[13]=w("h3",{class:"mb-2 text-sm text-gray-600"},"英文：",-1)),u(T(B),{selectedDate:R.value,"onUpdate:selectedDate":e[7]||(e[7]=g=>R.value=g),locale:"en",mode:"single"},null,8,["selectedDate"])])])]),code:F(()=>e[14]||(e[14]=[I(j(`
        <Calendars v-model:selectedDate="zhDate" locale="zh-cn" mode="single" />
        <Calendars v-model:selectedDate="enDate" locale="en" mode="single" />

        <script setup lang="ts">
          import { ref } from "vue";
          const zhDate = ref("");
          const enDate = ref("");
        <\/script>
        `))])),_:1})]))}});export{Re as default};
//# sourceMappingURL=index-CrChDe99.js.map
