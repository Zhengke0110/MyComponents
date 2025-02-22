import { defineComponent, ref, computed, type VNode } from 'vue'

export const DemoBlock = defineComponent({
  name: 'DemoBlock',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    }
  },
  setup(props, { slots }) {
    const showCode = ref(false)
    const copySuccess = ref(false)

    // 改进的代码格式化函数
    const formatCode = (code: unknown): string => {
      if (!code) return ''
      
      // 处理 VNode 数组
      if (Array.isArray(code)) {
        return code
          .map(node => {
            if (typeof node === 'string') return node
            if (node.children && typeof node.children === 'string') return node.children
            return ''
          })
          .join('')
          .split('\n')
          .map(line => line.trim())
          .filter(Boolean)
          .join('\n')
      }
      
      // 处理单个 VNode
      if (typeof code === 'object' && 'children' in code) {
        return typeof code.children === 'string' ? code.children.trim() : ''
      }

      return String(code).trim()
    }

    const handleCopy = async (code: string) => {
      try {
        await navigator.clipboard.writeText(code)
        copySuccess.value = true
        setTimeout(() => {
          copySuccess.value = false
        }, 2000)
      } catch (err) {
        console.error('Failed to copy:', err)
      }
    }

    return () => (
      <div class="mb-8 border rounded-lg overflow-hidden">
        {/* 标题和描述 */}
        <div class="border-b bg-gray-50 p-4">
          <h3 class="text-lg font-medium mb-1">{props.title}</h3>
          {props.description && (
            <p class="text-gray-500 text-sm">{props.description}</p>
          )}
        </div>

        {/* 演示区域 */}
        <div class="p-6 bg-white">{slots.default?.()}</div>

        {/* 源码展示区域 */}
        <div class="border-t">
          <div class="flex items-center justify-between p-2 bg-gray-50">
            <span 
              class="text-sm text-gray-500 cursor-pointer hover:text-gray-700 group flex items-center gap-1 relative"
              onClick={() => showCode.value = !showCode.value}
            >
              <div class={`icon-[solar--minimalistic-arrow-down-linear] w-4 h-4 absolute transition-all duration-200 ease-out transform will-change-transform ${
                showCode.value ? 'opacity-0 -translate-y-1' : 'opacity-100 translate-y-0'
              }`} />
              <div class={`icon-[solar--minimalistic-arrow-up-linear] w-4 h-4 absolute transition-all duration-200 ease-out transform will-change-transform ${
                showCode.value ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
              }`} />
              <span class="pl-5 transition-colors duration-200 group-hover:text-gray-900">
                {showCode.value ? '收起代码' : '查看代码'}
              </span>
            </span>
            {showCode.value && (
              <button
                class="flex items-center gap-1 px-2 py-1 text-sm text-gray-500 hover:text-gray-700 transition-all duration-200 hover:bg-gray-100 rounded"
                onClick={() => handleCopy(formatCode(slots.code?.()))}
              >
                {copySuccess.value ? (
                  <span class="inline-flex items-center gap-1">
                    <div class="icon-[solar--check-circle-bold] w-4 h-4 text-green-500" />
                    <span>已复制</span>
                  </span>
                ) : (
                  <span class="inline-flex items-center gap-1">
                    <div class="icon-[solar--copy-line-duotone] w-4 h-4" />
                    <span>复制代码</span>
                  </span>
                )}
              </button>
            )}
          </div>
          <div 
            class="transform-gpu transition-all duration-200 ease-out overflow-hidden bg-gray-50"
            style={{
              maxHeight: showCode.value ? '800px' : '0',
              opacity: showCode.value ? '1' : '0',
            }}
          >
            <div class="p-4">
              <pre class="text-sm font-mono whitespace-pre"><code>{formatCode(slots.code?.())}</code></pre>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
