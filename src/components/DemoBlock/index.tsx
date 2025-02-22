import { defineComponent, ref, computed, type VNode } from 'vue'
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

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

    const extractCodeFromMarkdown = (code: string): { language: string; code: string } => {
      const match = code.match(/```(\w+)?\s*([\s\S]+?)```/);
      if (match) {
        return {
          language: match[1] || 'typescript',
          code: match[2].trim()
        };
      }
      return { language: 'typescript', code: code.trim() };
    };

    const formatCode = (code: unknown): string => {
      if (!code) return '';
      
      // Convert code to string and handle VNode arrays
      let rawCode = '';
      if (Array.isArray(code)) {
        rawCode = code
          .map(node => {
            if (typeof node === 'string') return node;
            if (node.children && typeof node.children === 'string') return node.children;
            return '';
          })
          .join('');
      } else if (typeof code === 'object' && 'children' in code) {
        rawCode = typeof code.children === 'string' ? code.children : '';
      } else {
        rawCode = String(code);
      }

      // Extract code and language from markdown style blocks
      const { language, code: extractedCode } = extractCodeFromMarkdown(rawCode);

      // Process the code to handle line breaks and indentation
      const processedCode = extractedCode
        .replace(/}\s*([a-zA-Z])/g, '}\n\n$1') // Add line breaks between functions
        .split('\n')
        .map(line => line.trim()) // Remove existing indentation
        .filter(Boolean) // Remove empty lines
        .join('\n'); // Join lines back together

      // Format the code with proper indentation
      let indent = 0;
      const formattedLines = processedCode.split('\n').map(line => {
        // Decrease indent for closing braces
        if (line.match(/^[}\])]/) && indent > 0) {
          indent--;
        }

        // Add indentation
        const formattedLine = '  '.repeat(indent) + line;

        // Increase indent for opening braces
        if (line.match(/[{\[(]$/)) {
          indent++;
        }

        return formattedLine;
      });

      const formattedCode = formattedLines.join('\n');

      // Apply syntax highlighting
      return hljs.highlight(formattedCode, { 
        language: language === 'vue' ? 'html' : language,
        ignoreIllegals: true 
      }).value;
    };

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
              <div class={`icon-[solar--map-arrow-down-linear] w-4 h-4 absolute transition-all duration-200 ease-out transform will-change-transform ${
                showCode.value ? 'opacity-0 -translate-y-1' : 'opacity-100 translate-y-0'
              }`} />
              <div class={`icon-[solar--map-arrow-up-linear] w-4 h-4 absolute transition-all duration-200 ease-out transform will-change-transform ${
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
              <pre class="text-sm font-mono whitespace-pre-wrap break-all rounded bg-gray-50 p-4">
                <code v-html={formatCode(slots.code?.())} class="!bg-transparent"></code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
