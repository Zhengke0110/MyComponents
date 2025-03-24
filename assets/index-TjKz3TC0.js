import{d as g,C as e,f as u,g as a,l as y,b as d,x as s,j as l,e as n,m,_ as b}from"./index-BSjwMPY1.js";const i=g({name:"Result",props:{status:{type:String,default:"info"},title:{type:String,default:""},subTitle:{type:String,default:""}},setup(o,{slots:r}){const t=()=>{if(r.icon)return r.icon();switch(o.status){case"success":return e("div",{class:"text-green-500 dark:text-green-400"},[e("svg",{class:"w-16 h-16",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})])]);case"error":return e("div",{class:"text-red-500 dark:text-red-400"},[e("svg",{class:"w-16 h-16",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})])]);case"warning":return e("div",{class:"text-yellow-500 dark:text-yellow-400"},[e("svg",{class:"w-16 h-16",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})])]);case"info":return e("div",{class:"text-blue-500 dark:text-blue-400"},[e("svg",{class:"w-16 h-16",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})])]);case"404":case"403":case"500":return e("div",{class:"text-gray-500 dark:text-gray-400"},[e("div",{class:"text-4xl font-bold"},o.status)]);default:return null}};return()=>{const v=["result-container","transition-all","duration-300","p-6","flex","flex-col","items-center","justify-center","text-center",`result-${o.status}`,"dark:bg-gray-800","dark:text-white"],x=()=>r.title?r.title():e("div",{},o.title),p=()=>r.subTitle?r.subTitle():e("div",{},o.subTitle),c=()=>r.extra?r.extra():null;return e("div",{class:v},[e("div",{class:"result-icon mb-4 animate-scaleIn"},[t()]),e("div",{class:"result-title text-xl font-bold mb-2 transition-all duration-300 transform hover:scale-105 dark:text-white"},[x()]),e("div",{class:"result-subtitle text-gray-600 dark:text-gray-300 mb-4"},[p()]),e("div",{class:"result-extra mt-4"},[c()])])}}}),h={class:"p-6 dark:bg-gray-900 transition-all duration-300 min-h-screen"},w={class:"mb-12 opacity-0 transform translate-y-5 animate-fade-in"},f={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},k={class:"bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300"},z={class:"bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300"},_={class:"mb-12 opacity-0 transform translate-y-5 animate-fade-in",style:{"animation-delay":"0.2s"}},M={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},T={class:"bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300"},C={class:"bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300"},B={class:"mb-12 opacity-0 transform translate-y-5 animate-fade-in",style:{"animation-delay":"0.4s"}},H={class:"grid grid-cols-1 md:grid-cols-3 gap-6"},j={class:"bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300"},S={class:"bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300"},V={class:"bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300"},L={class:"mb-12 opacity-0 transform translate-y-5 animate-fade-in",style:{"animation-delay":"0.6s"}},R={class:"grid grid-cols-1 gap-6"},I={class:"bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300"},N={class:"mb-12 opacity-0 transform translate-y-5 animate-fade-in",style:{"animation-delay":"0.8s"}},A={class:"bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300"},E=g({__name:"View",setup(o){return(r,t)=>(m(),u("div",h,[t[17]||(t[17]=a("h1",{class:"text-2xl font-bold mb-8 text-center dark:text-white"},"Result 结果组件展示",-1)),a("section",w,[t[2]||(t[2]=a("h2",{class:"text-xl font-semibold mb-4 dark:text-gray-200"},"基础用法",-1)),a("div",f,[a("div",k,[d(l(i),{status:"success",title:"操作成功",subTitle:"请等待系统跳转"},{extra:s(()=>t[0]||(t[0]=[a("div",{class:"flex space-x-2"},[a("button",{class:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 transition-colors duration-300"},"返回首页"),a("button",{class:"px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-300"},"查看详情")],-1)])),_:1})]),a("div",z,[d(l(i),{status:"error",title:"提交失败",subTitle:"请检查网络连接后重试"},{extra:s(()=>t[1]||(t[1]=[a("button",{class:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 transition-colors duration-300"},"重新提交",-1)])),_:1})])])]),a("section",_,[t[5]||(t[5]=a("h2",{class:"text-xl font-semibold mb-4 dark:text-gray-200"},"信息与警告状态",-1)),a("div",M,[a("div",T,[d(l(i),{status:"info",title:"提示信息",subTitle:"这是一条重要的提示信息"},{extra:s(()=>t[3]||(t[3]=[a("button",{class:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors duration-300"},"了解详情",-1)])),_:1})]),a("div",C,[d(l(i),{status:"warning",title:"警告",subTitle:"您的操作可能导致数据丢失"},{extra:s(()=>t[4]||(t[4]=[a("div",{class:"flex space-x-2"},[a("button",{class:"px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 transition-colors duration-300"},"继续操作"),a("button",{class:"px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-300"},"取消")],-1)])),_:1})])])]),a("section",B,[t[9]||(t[9]=a("h2",{class:"text-xl font-semibold mb-4 dark:text-gray-200"},"错误页面状态",-1)),a("div",H,[a("div",j,[d(l(i),{status:"404",title:"页面不存在",subTitle:"您访问的页面不存在"},{extra:s(()=>t[6]||(t[6]=[a("button",{class:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-700 transition-colors duration-300"},"返回首页",-1)])),_:1})]),a("div",S,[d(l(i),{status:"403",title:"无权限",subTitle:"您没有权限访问此页面"},{extra:s(()=>t[7]||(t[7]=[a("button",{class:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-700 transition-colors duration-300"},"申请权限",-1)])),_:1})]),a("div",V,[d(l(i),{status:"500",title:"服务器错误",subTitle:"抱歉，服务器出现了问题"},{extra:s(()=>t[8]||(t[8]=[a("button",{class:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-700 transition-colors duration-300"},"刷新页面",-1)])),_:1})])])]),a("section",L,[t[13]||(t[13]=a("h2",{class:"text-xl font-semibold mb-4 dark:text-gray-200"},"自定义内容",-1)),a("div",R,[a("div",I,[d(l(i),{status:"success",title:"任务完成"},{subTitle:s(()=>t[10]||(t[10]=[a("div",{class:"flex flex-col items-center"},[a("p",{class:"text-gray-600 dark:text-gray-300"},[n("数据处理已完成，共处理了 "),a("span",{class:"text-green-500 font-bold animate-pulse"},"2,584"),n(" 条记录")]),a("div",{class:"w-full bg-gray-200 rounded-full h-2.5 mt-2 dark:bg-gray-700"},[a("div",{class:"bg-green-500 h-2.5 rounded-full animate-grow-width",style:{width:"100%"}})])],-1)])),extra:s(()=>t[11]||(t[11]=[a("div",{class:"flex flex-col space-y-2"},[a("button",{class:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 transition-colors duration-300"},"下载报告"),a("button",{class:"px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-300"},"查看详细日志")],-1)])),icon:s(()=>t[12]||(t[12]=[a("div",{class:"text-green-500 dark:text-green-400 animate-bounce-subtle"},[a("svg",{class:"w-20 h-20",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[a("path",{"fill-rule":"evenodd",d:"M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"})])],-1)])),_:1})])])]),a("section",N,[t[16]||(t[16]=a("h2",{class:"text-xl font-semibold mb-4 dark:text-gray-200"},"复杂交互示例",-1)),a("div",A,[d(l(i),{status:"info",title:"订单提交成功"},{subTitle:s(()=>t[14]||(t[14]=[a("div",{class:"flex flex-col items-center w-full max-w-md"},[a("div",{class:"w-full flex justify-between items-center mb-2"},[a("span",{class:"text-gray-600 dark:text-gray-300"},"订单号:"),a("span",{class:"font-mono font-medium dark:text-white"},"ORD20230512-8956")]),a("div",{class:"w-full flex justify-between items-center mb-2"},[a("span",{class:"text-gray-600 dark:text-gray-300"},"支付金额:"),a("span",{class:"font-medium text-blue-600 dark:text-blue-400"},"¥ 2,598.00")]),a("div",{class:"w-full bg-gray-200 h-1 my-4 relative dark:bg-gray-700"},[a("div",{class:"absolute inset-0 flex items-center justify-around"},[a("div",{class:"w-4 h-4 bg-blue-500 rounded-full z-10 animate-pulse"}),a("div",{class:"w-4 h-4 bg-blue-500 rounded-full z-10 animate-pulse",style:{"animation-delay":"0.5s"}}),a("div",{class:"w-4 h-4 bg-blue-500 rounded-full z-10 animate-pulse",style:{"animation-delay":"1s"}}),a("div",{class:"w-4 h-4 bg-blue-500 rounded-full z-10 animate-pulse",style:{"animation-delay":"1.5s"}})])]),a("div",{class:"w-full flex justify-between text-sm text-gray-500 dark:text-gray-400"},[a("span",null,"提交订单"),a("span",null,"确认支付"),a("span",null,"备货中"),a("span",null,"已发货")])],-1)])),extra:s(()=>t[15]||(t[15]=[a("div",{class:"flex flex-wrap justify-center gap-2"},[a("button",{class:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors duration-300"},"查看订单"),a("button",{class:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors duration-300"},"查看物流"),a("button",{class:"px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-300"},"返回首页")],-1)])),_:1})])]),t[18]||(t[18]=y('<section class="mb-12 opacity-0 transform translate-y-5 animate-fade-in" style="animation-delay:1s;" data-v-aa729170><h2 class="text-xl font-semibold mb-4 dark:text-gray-200" data-v-aa729170>小结与最佳实践</h2><div class="bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700" data-v-aa729170><div class="flex flex-col md:flex-row" data-v-aa729170><div class="w-full md:w-1 bg-gradient-to-b from-blue-500 to-indigo-600 py-2" data-v-aa729170></div><div class="p-6 md:p-8 w-full" data-v-aa729170><div class="text-current max-w-none" data-v-aa729170><div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-v-aa729170><div class="md:col-span-1" data-v-aa729170><div class="flex items-center mb-3 text-blue-600 dark:text-blue-400" data-v-aa729170><svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-v-aa729170><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" data-v-aa729170></path></svg><h3 class="text-lg font-medium my-0" data-v-aa729170>使用场景</h3></div><ul class="space-y-2 list-none pl-0 my-2" data-v-aa729170><li class="flex items-start" data-v-aa729170><span class="text-blue-500 dark:text-blue-400 mr-2" data-v-aa729170>•</span><span data-v-aa729170>当需要向用户反馈一系列操作的处理结果时</span></li><li class="flex items-start" data-v-aa729170><span class="text-blue-500 dark:text-blue-400 mr-2" data-v-aa729170>•</span><span data-v-aa729170>当操作流程结束后需要展示结果和建议操作时</span></li><li class="flex items-start" data-v-aa729170><span class="text-blue-500 dark:text-blue-400 mr-2" data-v-aa729170>•</span><span data-v-aa729170>当需要展示系统异常或提示信息时</span></li></ul></div><div class="md:col-span-1" data-v-aa729170><div class="flex items-center mb-3 text-green-600 dark:text-green-400" data-v-aa729170><svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-v-aa729170><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" data-v-aa729170></path></svg><h3 class="text-lg font-medium my-0" data-v-aa729170>设计原则</h3></div><ul class="space-y-2 list-none pl-0 my-2" data-v-aa729170><li class="flex items-start" data-v-aa729170><span class="text-green-500 dark:text-green-400 mr-2" data-v-aa729170>•</span><span data-v-aa729170><strong data-v-aa729170>明确性</strong>：结果状态应当明确、直观，用户能够一目了然</span></li><li class="flex items-start" data-v-aa729170><span class="text-green-500 dark:text-green-400 mr-2" data-v-aa729170>•</span><span data-v-aa729170><strong data-v-aa729170>引导性</strong>：提供清晰的后续操作指引，减少用户犹豫</span></li><li class="flex items-start" data-v-aa729170><span class="text-green-500 dark:text-green-400 mr-2" data-v-aa729170>•</span><span data-v-aa729170><strong data-v-aa729170>简洁性</strong>：信息展示应当简洁有效，避免冗余</span></li></ul></div><div class="md:col-span-1" data-v-aa729170><div class="flex items-center mb-3 text-purple-600 dark:text-purple-400" data-v-aa729170><svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-v-aa729170><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" data-v-aa729170></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" data-v-aa729170></path></svg><h3 class="text-lg font-medium my-0" data-v-aa729170>最佳实践</h3></div><ul class="space-y-2 list-none pl-0 my-2" data-v-aa729170><li class="flex items-start" data-v-aa729170><span class="text-purple-500 dark:text-purple-400 mr-2" data-v-aa729170>•</span><span data-v-aa729170>根据不同场景选择合适的状态类型</span></li><li class="flex items-start" data-v-aa729170><span class="text-purple-500 dark:text-purple-400 mr-2" data-v-aa729170>•</span><span data-v-aa729170>提供有意义的标题和副标题，简明描述结果</span></li><li class="flex items-start" data-v-aa729170><span class="text-purple-500 dark:text-purple-400 mr-2" data-v-aa729170>•</span><span data-v-aa729170>在 <code class="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded text-xs" data-v-aa729170>extra</code> 插槽中提供明确的后续操作按钮</span></li><li class="flex items-start" data-v-aa729170><span class="text-purple-500 dark:text-purple-400 mr-2" data-v-aa729170>•</span><span data-v-aa729170>对于错误状态，提供错误原因和解决方案</span></li><li class="flex items-start" data-v-aa729170><span class="text-purple-500 dark:text-purple-400 mr-2" data-v-aa729170>•</span><span data-v-aa729170>对于状态码页面，提供返回首页等导航选项</span></li></ul></div></div></div></div></div></div></section><section class="opacity-0 transform translate-y-5 animate-fade-in" style="animation-delay:1.2s;" data-v-aa729170><h2 class="text-xl font-semibold mb-4 dark:text-gray-200" data-v-aa729170>API 文档</h2><div class="bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700" data-v-aa729170><div class="flex flex-col md:flex-row" data-v-aa729170><div class="w-full md:w-1 bg-gradient-to-b from-indigo-500 to-purple-600 py-2" data-v-aa729170></div><div class="p-6 md:p-8 w-full" data-v-aa729170><div class="text-current max-w-none" data-v-aa729170><div class="mb-8" data-v-aa729170><div class="flex items-center mb-4 text-indigo-600 dark:text-indigo-400" data-v-aa729170><svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-v-aa729170><path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" data-v-aa729170></path></svg><h3 class="text-lg font-medium my-0" data-v-aa729170>Props 属性</h3></div><div class="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden" data-v-aa729170><div class="overflow-x-auto" data-v-aa729170><table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 border-separate border-spacing-0" data-v-aa729170><thead class="bg-gray-50 dark:bg-gray-800" data-v-aa729170><tr data-v-aa729170><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider" data-v-aa729170> 参数 </th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider" data-v-aa729170> 说明 </th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider" data-v-aa729170> 类型 </th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider" data-v-aa729170> 默认值 </th></tr></thead><tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700" data-v-aa729170><tr class="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-150 animate-fade-in" style="animation-delay:0.1s;" data-v-aa729170><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-600 dark:text-indigo-400" data-v-aa729170> status </td><td class="px-6 py-4 text-sm text-gray-700 dark:text-gray-300" data-v-aa729170> 结果的状态，决定图标和颜色 </td><td class="px-6 py-4 text-sm font-mono text-gray-600 dark:text-gray-400" data-v-aa729170><span class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs" data-v-aa729170> &#39;success&#39; | &#39;error&#39; | &#39;info&#39; | &#39;warning&#39; | &#39;404&#39; | &#39;403&#39; | &#39;500&#39; </span></td><td class="px-6 py-4 text-sm font-mono text-gray-600 dark:text-gray-400" data-v-aa729170><span class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs" data-v-aa729170>&#39;info&#39;</span></td></tr><tr class="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-150 animate-fade-in" style="animation-delay:0.2s;" data-v-aa729170><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-600 dark:text-indigo-400" data-v-aa729170> title </td><td class="px-6 py-4 text-sm text-gray-700 dark:text-gray-300" data-v-aa729170> 标题文本 </td><td class="px-6 py-4 text-sm font-mono text-gray-600 dark:text-gray-400" data-v-aa729170><span class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs" data-v-aa729170>string</span></td><td class="px-6 py-4 text-sm font-mono text-gray-600 dark:text-gray-400" data-v-aa729170><span class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs" data-v-aa729170>&#39;&#39;</span></td></tr><tr class="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-150 animate-fade-in" style="animation-delay:0.3s;" data-v-aa729170><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-600 dark:text-indigo-400" data-v-aa729170> subTitle </td><td class="px-6 py-4 text-sm text-gray-700 dark:text-gray-300" data-v-aa729170> 副标题文本 </td><td class="px-6 py-4 text-sm font-mono text-gray-600 dark:text-gray-400" data-v-aa729170><span class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs" data-v-aa729170>string</span></td><td class="px-6 py-4 text-sm font-mono text-gray-600 dark:text-gray-400" data-v-aa729170><span class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs" data-v-aa729170>&#39;&#39;</span></td></tr></tbody></table></div></div></div><div class="mb-8" data-v-aa729170><div class="flex items-center mb-4 text-green-600 dark:text-green-400" data-v-aa729170><svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-v-aa729170><path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" data-v-aa729170></path></svg><h3 class="text-lg font-medium my-0" data-v-aa729170>Slots 插槽</h3></div><div class="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden" data-v-aa729170><div class="overflow-x-auto" data-v-aa729170><table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 border-separate border-spacing-0" data-v-aa729170><thead class="bg-gray-50 dark:bg-gray-800" data-v-aa729170><tr data-v-aa729170><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider" data-v-aa729170> 名称 </th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider" data-v-aa729170> 说明 </th></tr></thead><tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700" data-v-aa729170><tr class="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-150 animate-fade-in" style="animation-delay:0.1s;" data-v-aa729170><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600 dark:text-green-400" data-v-aa729170> default </td><td class="px-6 py-4 text-sm text-gray-700 dark:text-gray-300" data-v-aa729170> 默认内容，一般不使用 </td></tr><tr class="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-150 animate-fade-in" style="animation-delay:0.2s;" data-v-aa729170><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600 dark:text-green-400" data-v-aa729170> icon </td><td class="px-6 py-4 text-sm text-gray-700 dark:text-gray-300" data-v-aa729170> 自定义图标 </td></tr><tr class="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-150 animate-fade-in" style="animation-delay:0.3s;" data-v-aa729170><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600 dark:text-green-400" data-v-aa729170> title </td><td class="px-6 py-4 text-sm text-gray-700 dark:text-gray-300" data-v-aa729170> 自定义标题内容 </td></tr><tr class="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-150 animate-fade-in" style="animation-delay:0.4s;" data-v-aa729170><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600 dark:text-green-400" data-v-aa729170> subTitle </td><td class="px-6 py-4 text-sm text-gray-700 dark:text-gray-300" data-v-aa729170> 自定义副标题内容 </td></tr><tr class="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-150 animate-fade-in" style="animation-delay:0.5s;" data-v-aa729170><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600 dark:text-green-400" data-v-aa729170> extra </td><td class="px-6 py-4 text-sm text-gray-700 dark:text-gray-300" data-v-aa729170> 操作区域 </td></tr></tbody></table></div></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-aa729170><div data-v-aa729170><div class="flex items-center mb-3 text-blue-600 dark:text-blue-400" data-v-aa729170><svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-v-aa729170><path fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clip-rule="evenodd" data-v-aa729170></path></svg><h3 class="text-lg font-medium m-0" data-v-aa729170>样式定制</h3></div><div class="bg-white dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700 shadow-sm" data-v-aa729170><p class="text-sm text-gray-700 dark:text-gray-300 mb-3" data-v-aa729170>Result 组件支持通过 Tailwind CSS 类进行样式定制，并内置深色模式支持：</p><ul class="space-y-2 list-none pl-0" data-v-aa729170><li class="flex items-start" data-v-aa729170><span class="text-blue-500 dark:text-blue-400 mr-2" data-v-aa729170>•</span><span data-v-aa729170>使用 <code class="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-xs" data-v-aa729170>dark:</code> 前缀的类名适配深色模式</span></li><li class="flex items-start" data-v-aa729170><span class="text-blue-500 dark:text-blue-400 mr-2" data-v-aa729170>•</span><span data-v-aa729170>每种状态都有对应的颜色主题（如成功为绿色、错误为红色等）</span></li><li class="flex items-start" data-v-aa729170><span class="text-blue-500 dark:text-blue-400 mr-2" data-v-aa729170>•</span><span data-v-aa729170>组件内置过渡动画，包括淡入、缩放等效果</span></li></ul></div></div><div data-v-aa729170><div class="flex items-center mb-3 text-purple-600 dark:text-purple-400" data-v-aa729170><svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-v-aa729170><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" data-v-aa729170></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" data-v-aa729170></path></svg><h3 class="text-lg font-medium m-0" data-v-aa729170>无障碍性</h3></div><div class="bg-white dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700 shadow-sm" data-v-aa729170><p class="text-sm text-gray-700 dark:text-gray-300 mb-3" data-v-aa729170>Result 组件遵循以下无障碍性原则： </p><ul class="space-y-2 list-none pl-0" data-v-aa729170><li class="flex items-start" data-v-aa729170><span class="text-purple-500 dark:text-purple-400 mr-2" data-v-aa729170>•</span><span data-v-aa729170>使用语义化的色彩来表示不同状态，增强可识别性</span></li><li class="flex items-start" data-v-aa729170><span class="text-purple-500 dark:text-purple-400 mr-2" data-v-aa729170>•</span><span data-v-aa729170>提供清晰的文本说明，确保屏幕阅读器可以正确解读</span></li><li class="flex items-start" data-v-aa729170><span class="text-purple-500 dark:text-purple-400 mr-2" data-v-aa729170>•</span><span data-v-aa729170>确保操作区域的按钮有足够大的点击区域</span></li></ul></div></div></div></div></div></div></div></section>',2))]))}}),D=b(E,[["__scopeId","data-v-aa729170"]]);export{i as Result,D as default};
//# sourceMappingURL=index-TjKz3TC0.js.map
