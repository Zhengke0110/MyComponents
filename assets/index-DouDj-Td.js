import{d as _,m as B,e as l,c as s,w as r,i as o,j as g,t as u,a as i,F as p,f as b,b as c}from"./index-C5fc-OhM.js";import{D as x}from"./index-CdAIkmQn.js";const C={solid:{red:"bg-red-500 text-white",orange:"bg-orange-500 text-white",yellow:"bg-yellow-500 text-white",green:"bg-green-500 text-white",blue:"bg-blue-500 text-white",indigo:"bg-indigo-500 text-white",purple:"bg-purple-500 text-white",gray:"bg-gray-500 text-white"},soft:{red:"bg-red-100 text-red-700",orange:"bg-orange-100 text-orange-700",yellow:"bg-yellow-100 text-yellow-700",green:"bg-green-100 text-green-700",blue:"bg-blue-100 text-blue-700",indigo:"bg-indigo-100 text-indigo-700",purple:"bg-purple-100 text-purple-700",gray:"bg-gray-100 text-gray-700"},outline:{red:"border border-red-500 text-red-700",orange:"border border-orange-500 text-orange-700",yellow:"border border-yellow-500 text-yellow-700",green:"border border-green-500 text-green-700",blue:"border border-blue-500 text-blue-700",indigo:"border border-indigo-500 text-indigo-700",purple:"border border-purple-500 text-purple-700",gray:"border border-gray-500 text-gray-700"}},z={sm:"text-xs px-1.5",md:"text-sm px-2",lg:"text-base px-2.5"},h={sm:"rounded",md:"rounded-md",lg:"rounded-lg",full:"rounded-full"},a=_({name:"Badge",props:{text:{type:String,required:!0},color:{type:String,default:"blue"},size:{type:String,default:"md"},variant:{type:String,default:"soft"},rounded:{type:String,default:"md"},index:{type:Number,default:0},title:{type:String},clickable:{type:Boolean,default:!1}},emits:["click"],setup(d,{emit:f,slots:n}){const m=B(()=>`${C[d.variant][d.color]} ${z[d.size]}`),v=B(()=>h[d.rounded]),w=B(()=>d.clickable?"cursor-pointer hover:opacity-80":""),y=()=>{d.clickable&&f("click",d.text)};return()=>{var e,t;return l("span",{class:[m.value,v.value,w.value,"inline-flex items-center py-0.5 font-medium transition-colors"],title:d.title,onClick:y,role:"status"},[(e=n.prefix)==null?void 0:e.call(n),d.text,(t=n.suffix)==null?void 0:t.call(n)],10,["title","onClick"])}}}),S={class:"p-8"},N={class:"flex flex-wrap gap-2"},T={class:"space-y-4"},V={class:"flex flex-wrap items-center gap-2"},D={class:"flex flex-wrap gap-2"},M={class:"flex gap-2"},$={class:"flex gap-2"},q=_({__name:"View",setup(d){const f=["red","orange","yellow","green","blue","indigo","purple","gray"],n=["soft","solid","outline"],m=["sm","md","lg"],v=["sm","md","lg","full"],w=y=>{alert(`点击了: ${y}`)};return(y,e)=>(c(),s("div",S,[l(o(x),{title:"基础用法",description:"Badge 支持多种颜色方案"},{default:r(()=>[i("div",N,[(c(),s(p,null,b(f,t=>l(o(a),{key:t,text:t,color:t},null,8,["text","color"])),64))])]),code:r(()=>e[0]||(e[0]=[g(u(`
                <Badge v-for="color in colors" :key="color" :text="color" :color="color" />

                const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo',
                'purple', 'gray']; `))])),_:1}),l(o(x),{title:"变体样式",description:"支持 solid、soft 和 outline 三种变体"},{default:r(()=>[i("div",T,[(c(),s(p,null,b(n,t=>i("div",{key:t,class:"flex flex-wrap gap-2"},[(c(),s(p,null,b(f,k=>l(o(a),{key:k,text:k,color:k,variant:t},null,8,["text","color","variant"])),64))])),64))])]),code:r(()=>e[1]||(e[1]=[g(u(`
                <Badge v-for="color in colors" :key="color" :text="color" :color="color" :variant="variant" />

                const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo',
                'purple', 'gray']; const variants = ['soft', 'solid', 'outline']; `))])),_:1}),l(o(x),{title:"尺寸",description:"支持 sm、md 和 lg 三种尺寸"},{default:r(()=>[i("div",V,[(c(),s(p,null,b(m,t=>l(o(a),{key:t,text:t,size:t},null,8,["text","size"])),64))])]),code:r(()=>e[2]||(e[2]=[g(u(`
                <Badge v-for="size in sizes" :key="size" :text="size" :size="size" />

                const sizes = ['sm', 'md', 'lg']; `))])),_:1}),l(o(x),{title:"圆角",description:"支持不同程度的圆角"},{default:r(()=>[i("div",D,[(c(),s(p,null,b(v,t=>l(o(a),{key:t,text:t,rounded:t},null,8,["text","rounded"])),64))])]),code:r(()=>e[3]||(e[3]=[g(u(`
                <Badge v-for="rounded in roundedTypes" :key="rounded" :text="rounded" :rounded="rounded" />

                const roundedTypes = ['sm', 'md', 'lg', 'full']; `))])),_:1}),l(o(x),{title:"可点击",description:"添加点击交互"},{default:r(()=>[i("div",M,[l(o(a),{text:"可点击的徽章",clickable:"",onClick:w})])]),code:r(()=>e[4]||(e[4]=[g(u(`
                <Badge text="可点击的徽章" clickable @click="handleBadgeClick" />
                `))])),_:1}),l(o(x),{title:"带图标",description:"支持前缀和后缀插槽"},{default:r(()=>[i("div",$,[l(o(a),{text:"带图标"},{prefix:r(()=>e[5]||(e[5]=[i("div",{class:"icon-[solar--star-bold] mr-1 h-4 w-4"},null,-1)])),_:1}),l(o(a),{text:"带图标",variant:"solid"},{suffix:r(()=>e[6]||(e[6]=[i("div",{class:"icon-[solar--star-bold] ml-1 h-4 w-4"},null,-1)])),_:1})])]),code:r(()=>e[7]||(e[7]=[g(u(`
                <Badge text="带图标">
                    <template #prefix>
                        <div class="icon-[solar--star-bold] mr-1 h-4 w-4" />
                    </template>
                </Badge>
                <Badge text="带图标" variant="solid">
                    <template #suffix>
                        <div class="icon-[solar--star-bold] ml-1 h-4 w-4" />
                    </template>
                </Badge>
                `))])),_:1})]))}});export{q as default};
//# sourceMappingURL=index-DouDj-Td.js.map
