import{B as s}from"./index-BzP4nq_j.js";import{D as r}from"./index-DcYCGwIL.js";import{d as p,r as f,c as B,e as i,w as o,i as e,b as y,j as n,t as l,a as d}from"./index-CTo9axDr.js";const m={class:"p-8"},g={class:"flex flex-wrap gap-4"},z={class:"flex flex-wrap gap-4"},b={class:"flex flex-wrap gap-4"},k={class:"flex flex-wrap gap-4"},x={class:"flex flex-wrap gap-4"},v={class:"max-w-md space-y-4"},w={class:"flex flex-wrap gap-4"},A={class:"flex flex-wrap gap-4"},q=p({__name:"View",setup(D){const u=f(!1),a=()=>{u.value=!0,setTimeout(()=>{u.value=!1},2e3)};return(L,t)=>(y(),B("div",m,[i(e(r),{title:"按钮类型",description:"Button 组件提供了多种预定义的类型，可以应对不同场景的需求。"},{default:o(()=>[d("div",g,[i(e(s),{type:"primary"},{default:o(()=>t[0]||(t[0]=[n("主要按钮")])),_:1}),i(e(s),{type:"secondary"},{default:o(()=>t[1]||(t[1]=[n("次要按钮")])),_:1}),i(e(s),{type:"success"},{default:o(()=>t[2]||(t[2]=[n("成功按钮")])),_:1}),i(e(s),{type:"warning"},{default:o(()=>t[3]||(t[3]=[n("警告按钮")])),_:1}),i(e(s),{type:"error"},{default:o(()=>t[4]||(t[4]=[n("错误按钮")])),_:1}),i(e(s),{type:"info"},{default:o(()=>t[5]||(t[5]=[n("信息按钮")])),_:1}),i(e(s),{type:"ghost"},{default:o(()=>t[6]||(t[6]=[n("幽灵按钮")])),_:1})])]),code:o(()=>t[7]||(t[7]=[n(l(`<Button type="primary">主要按钮</Button>
        <Button type="secondary">次要按钮</Button>
        <Button type="success">成功按钮</Button>
        <Button type="warning">警告按钮</Button>
        <Button type="error">错误按钮</Button>
        <Button type="info">信息按钮</Button>
        <Button type="ghost">幽灵按钮</Button>
        `))])),_:1}),i(e(r),{title:"按钮尺寸",description:"Button 组件提供了多种不同尺寸的按钮，可以应对不同场景的需求。"},{default:o(()=>[d("div",z,[i(e(s),{size:"xs"},{default:o(()=>t[8]||(t[8]=[n("超小号")])),_:1}),i(e(s),{size:"sm"},{default:o(()=>t[9]||(t[9]=[n("小号")])),_:1}),i(e(s),{size:"md"},{default:o(()=>t[10]||(t[10]=[n("中号")])),_:1}),i(e(s),{size:"lg"},{default:o(()=>t[11]||(t[11]=[n("大号")])),_:1}),i(e(s),{size:"xl"},{default:o(()=>t[12]||(t[12]=[n("超大号")])),_:1})])]),code:o(()=>t[13]||(t[13]=[n(l(`<Button size="xs">超小号</Button>
        <Button size="sm">小号</Button>
        <Button size="md">中号</Button>
        <Button size="lg">大号</Button>
        <Button size="xl">超大号</Button> `))])),_:1}),i(e(r),{title:"图标按钮",description:"可以在按钮内嵌入图标，增强按钮的可识别性。"},{default:o(()=>[d("div",b,[i(e(s),{icon:"icon-[solar--chat-square-like-broken] size-5",type:"primary"},{default:o(()=>t[14]||(t[14]=[n("喜欢")])),_:1}),i(e(s),{icon:"icon-[solar--like-broken] size-5",type:"warning"},{default:o(()=>t[15]||(t[15]=[n("收藏")])),_:1}),i(e(s),{icon:"icon-[solar--file-send-broken] size-5",type:"success"},{default:o(()=>t[16]||(t[16]=[n("发送")])),_:1}),i(e(s),{icon:"icon-[solar--clipboard-remove-broken] size-5",type:"error"},{default:o(()=>t[17]||(t[17]=[n("删除")])),_:1}),i(e(s),{icon:"icon-[solar--settings-broken] size-5"}),i(e(s),{icon:"icon-[solar--rounded-magnifer-zoom-in-linear] size-5",type:"primary"}),i(e(s),{icon:"icon-[solar--rounded-magnifer-zoom-out-linear] size-5",type:"error"})])]),code:o(()=>t[18]||(t[18]=[n(l(`
        <Button icon="icon-[solar--chat-square-like-broken] size-5" type="primary">喜欢</Button>
        <Button icon="icon-[solar--like-broken] size-5" type="warning">收藏</Button>
        <Button icon="icon-[solar--file-send-broken] size-5" type="success">发送</Button>
        <Button icon="icon-[solar--clipboard-remove-broken] size-5" type="error">删除</Button>
        <!-- 仅图标按钮 -->
        <Button icon="icon-[solar--settings-broken] size-5" />
        <Button icon="icon-[solar--rounded-magnifer-zoom-in-linear] size-5" type="primary" />
        <Button icon="icon-[solar--rounded-magnifer-zoom-out-linear] size-5" type="error" /> `))])),_:1}),i(e(r),{title:"加载状态",description:"按钮在提交表单数据时，可以进入加载状态。"},{default:o(()=>[d("div",k,[i(e(s),{loading:""},{default:o(()=>t[19]||(t[19]=[n("加载中")])),_:1}),i(e(s),{loading:"",type:"primary"},{default:o(()=>t[20]||(t[20]=[n("保存中")])),_:1}),i(e(s),{loading:"",type:"success"},{default:o(()=>t[21]||(t[21]=[n("提交中")])),_:1}),i(e(s),{loading:"",icon:"icon-[solar--refresh-line-duotone]"},{default:o(()=>t[22]||(t[22]=[n("刷新中")])),_:1})])]),code:o(()=>t[23]||(t[23]=[n(l(`
        <Button loading>加载中</Button>
        <Button loading type="primary">保存中</Button>
        <Button loading type="success">提交中</Button>
        <Button loading icon="icon-[solar--refresh-line-duotone]">刷新中</Button> `))])),_:1}),i(e(r),{title:"禁用状态",description:"按钮不可用状态。"},{default:o(()=>[d("div",x,[i(e(s),{disabled:""},{default:o(()=>t[24]||(t[24]=[n("禁用按钮")])),_:1}),i(e(s),{disabled:"",type:"primary"},{default:o(()=>t[25]||(t[25]=[n("禁用主要")])),_:1}),i(e(s),{disabled:"",type:"success"},{default:o(()=>t[26]||(t[26]=[n("禁用成功")])),_:1}),i(e(s),{disabled:"",icon:"icon-[solar--lock-keyhole-linear]"},{default:o(()=>t[27]||(t[27]=[n("已锁定")])),_:1})])]),code:o(()=>t[28]||(t[28]=[n(l(`
        <Button disabled>禁用按钮</Button>
        <Button disabled type="primary">禁用主要</Button>
        <Button disabled type="success">禁用成功</Button>
        <Button disabled icon="icon-[solar--lock-keyhole-linear]">已锁定</Button> `))])),_:1}),i(e(r),{title:"块级按钮",description:"通过 block 属性将按钮设置为块级元素"},{default:o(()=>[d("div",v,[i(e(s),{block:"",size:"sm"},{default:o(()=>t[29]||(t[29]=[n("默认块级按钮")])),_:1}),i(e(s),{block:"",size:"md",type:"primary"},{default:o(()=>t[30]||(t[30]=[n("主要块级按钮")])),_:1}),i(e(s),{block:"",size:"lg",type:"success",icon:"icon-[solar--check-read-line-duotone]"},{default:o(()=>t[31]||(t[31]=[n(" 确认提交 ")])),_:1})])]),code:o(()=>t[32]||(t[32]=[n(l(`<Button block size="sm">默认块级按钮</Button>
        <Button block size="md" type="primary">主要块级按钮</Button>
        <Button block size="lg" type="success" icon="icon-[solar--check-read-line-duotone]">
          确认提交 </Button>`))])),_:1}),i(e(r),{title:"动画效果",description:"通过 isActiveAnim 属性控制按钮的动画效果。"},{default:o(()=>[d("div",w,[i(e(s),{isActiveAnim:!0,type:"primary"},{default:o(()=>t[33]||(t[33]=[n("带动画")])),_:1}),i(e(s),{isActiveAnim:!1,type:"primary"},{default:o(()=>t[34]||(t[34]=[n("无动画")])),_:1})])]),code:o(()=>t[35]||(t[35]=[n(l(`
        <Button :isActiveAnim="true" type="primary">带动画</Button>
        <Button :isActiveAnim="false" type="primary">无动画</Button> `))])),_:1}),i(e(r),{title:"组合示例",description:"通过组合按钮，可以实现更复杂的交互效果。"},{default:o(()=>[d("div",A,[i(e(s),{type:"primary",icon:"icon-[solar--download-broken]",size:"lg",loading:u.value,onClick:a},{default:o(()=>[n(l(u.value?"下载中...":"下载文件"),1)]),_:1},8,["loading"]),i(e(s),{type:"error",icon:"icon-[solar--trash-bin-minimalistic-broken]",size:"lg",disabled:u.value},{default:o(()=>t[36]||(t[36]=[n("删除")])),_:1},8,["disabled"])])]),code:o(()=>t[37]||(t[37]=[n(l(`<Button type="primary" icon="icon-[solar--download-broken]" size="lg" :loading="isLoading"
          @click="handleDownload">
          {{ isLoading ? "下载中..." : "下载文件" }}
        </Button>
        <Button type="error" icon="icon-[solar--trash-bin-minimalistic-broken]" size="lg" :disabled="isLoading">
         删除
        </Button>`))])),_:1})]))}});export{q as default};
//# sourceMappingURL=index-R1g7z0av.js.map
