import { defineComponent, ref, computed, watch, onMounted, nextTick, PropType } from 'vue';
import { useTransition } from '@vueuse/core';
import hljs from 'highlight.js';
import * as clipboard from 'clipboard-polyfill';
import 'highlight.js/styles/atom-one-dark-reasonable.css';

// Define component props with TypeScript
interface CodePreviewProps {
    code: string;
    language: string;
    theme: 'light' | 'dark';
    initiallyExpanded: boolean;
    title?: string;
    description?: string;
}

// Define the component with proper TypeScript typing
export default defineComponent<CodePreviewProps>({
    name: 'CodePreview',
    
    props: {
        code: {
            type: String as PropType<CodePreviewProps['code']>,
            default: ''
        },
        language: {
            type: String as PropType<CodePreviewProps['language']>,
            default: 'html'
        },
        theme: {
            type: String as PropType<CodePreviewProps['theme']>,
            default: 'light',
            validator: (value: string) => ['light', 'dark'].includes(value)
        },
        initiallyExpanded: {
            type: Boolean as PropType<CodePreviewProps['initiallyExpanded']>,
            default: true
        },
        title: {
            type: String as PropType<CodePreviewProps['title']>,
            default: ''
        },
        description: {
            type: String as PropType<CodePreviewProps['description']>,
            default: ''
        }
    },

    setup(props, { slots }) {
        const codeRef = ref<HTMLElement | null>(null);
        const codeContainerRef = ref<HTMLElement | null>(null);
        const isCodeVisible = ref(props.initiallyExpanded);
        const codeHeight = ref(0);
        const copied = ref(false);
        const isAnimating = ref(false);

        // Track if the component is mounted
        const isMounted = ref(false);

        // Create a reactive computed property for theme class
        const themeClass = computed(() => props.theme === 'dark' ? 'dark-theme' : 'light-theme');

        // Calculate the height of the code container
        const calculateCodeHeight = async () => {
            await nextTick();
            if (codeContainerRef.value) {
                codeHeight.value = codeContainerRef.value.scrollHeight;
            }
        };

        // Enhanced toggle with animation state
        const toggleCodeVisibility = () => {
            if (isAnimating.value) return;

            isAnimating.value = true;

            if (!isCodeVisible.value) {
                calculateCodeHeight();
            }

            isCodeVisible.value = !isCodeVisible.value;

            // Reset animation state after transition completes
            setTimeout(() => {
                isAnimating.value = false;
            }, 300);
        };

        // Enhanced copy code function with clipboard-polyfill
        const copyCode = async () => {
            if (copied.value) return;

            const code = extractCodeFromMarkdown(props.code);
            try {
                // Use clipboard-polyfill instead of native clipboard API
                await clipboard.writeText(code);
                copied.value = true;
                setTimeout(() => {
                    copied.value = false;
                }, 2000);
            } catch (err) {
                console.error('Failed to copy code:', err);
                
                // Fallback method for very old browsers
                try {
                    // Create temporary textarea element
                    const textArea = document.createElement('textarea');
                    textArea.value = code;
                    textArea.style.position = 'fixed';
                    textArea.style.left = '-999999px';
                    textArea.style.top = '-999999px';
                    document.body.appendChild(textArea);
                    textArea.focus();
                    textArea.select();
                    
                    // Use execCommand as last resort (deprecated but still works in old browsers)
                    const success = document.execCommand('copy');
                    if (success) {
                        copied.value = true;
                        setTimeout(() => {
                            copied.value = false;
                        }, 2000);
                    }
                    
                    document.body.removeChild(textArea);
                } catch (fallbackErr) {
                    console.error('Fallback copy method failed:', fallbackErr);
                }
            }
        };

        // Extract code from markdown code blocks
        const extractCodeFromMarkdown = (markdown: string): string => {
            const codeBlockRegex = /```([a-zA-Z]+)?\s*([\s\S]*?)```/;
            const match = markdown?.match?.(codeBlockRegex);

            if (match) {
                return match[2].trim();
            }

            return (markdown || '').trim();
        };

        // Get language from markdown
        const getLanguageFromMarkdown = (markdown: string): string => {
            const codeBlockRegex = /```([a-zA-Z]+)?\s*([\s\S]*?)```/;
            const match = markdown?.match?.(codeBlockRegex);

            if (match && match[1]) {
                return match[1];
            }

            return props.language;
        };

        const highlightedCode = computed(() => {
            if (!props.code) return '';

            const code = extractCodeFromMarkdown(props.code);
            const language = getLanguageFromMarkdown(props.code);

            try {
                if (hljs.getLanguage(language)) {
                    return hljs.highlight(code, { language }).value;
                } else {
                    return hljs.highlightAuto(code).value;
                }
            } catch (e) {
                console.error('Error highlighting code:', e);
                return code;
            }
        });

        // Use a more efficient CSS-in-JS approach with CSS variables
        const injectThemeStyles = () => {
            // Create a single style element with variables
            const styleElement = document.getElementById('code-preview-theme') || document.createElement('style');
            styleElement.id = 'code-preview-theme';

            styleElement.textContent = `
        /* Base styles that apply to all themes */
        .code-preview-container pre {
          margin: 0;
        }
        
        .code-preview-container code {
          font-family: monospace;
          white-space: pre;
          border-radius: 0.25rem;
          padding: 0 !important;
        }
        
        /* Light theme variables */
        .code-preview-light {
          --cp-background: #f5f5f5;
          --cp-text: #24292e;
          --cp-keyword: #d73a49;
          --cp-title: #6f42c1;
          --cp-attr: #005cc5;
          --cp-string: #032f62;
          --cp-builtin: #e36209;
          --cp-comment: #6a737d;
        }
        
        /* Dark theme variables */
        .code-preview-dark {
          --cp-background: #0d1117;
          --cp-text: #c9d1d9;
          --cp-keyword: #ff7b72;
          --cp-title: #d2a8ff;
          --cp-attr: #79c0ff;
          --cp-string: #a5d6ff;
          --cp-builtin: #ffa657;
          --cp-comment: #8b949e;
        }
        
        /* Apply theme variables to syntax */
        .code-preview-container .hljs {
          color: var(--cp-text) !important;
          background: transparent !important;
        }
        
        .code-preview-container .hljs-doctag, 
        .code-preview-container .hljs-keyword, 
        .code-preview-container .hljs-meta .hljs-keyword, 
        .code-preview-container .hljs-template-tag, 
        .code-preview-container .hljs-template-variable, 
        .code-preview-container .hljs-type, 
        .code-preview-container .hljs-variable.language_ {
          color: var(--cp-keyword) !important;
        }
        
        .code-preview-container .hljs-title, 
        .code-preview-container .hljs-title.class_, 
        .code-preview-container .hljs-title.class_.inherited__, 
        .code-preview-container .hljs-title.function_ {
          color: var(--cp-title) !important;
        }
        
        .code-preview-container .hljs-attr, 
        .code-preview-container .hljs-attribute, 
        .code-preview-container .hljs-literal, 
        .code-preview-container .hljs-meta, 
        .code-preview-container .hljs-number, 
        .code-preview-container .hljs-operator, 
        .code-preview-container .hljs-selector-attr, 
        .code-preview-container .hljs-selector-class, 
        .code-preview-container .hljs-selector-id, 
        .code-preview-container .hljs-variable {
          color: var(--cp-attr) !important;
        }
        
        .code-preview-container .hljs-meta .hljs-string, 
        .code-preview-container .hljs-regexp, 
        .code-preview-container .hljs-string {
          color: var(--cp-string) !important;
        }
        
        .code-preview-container .hljs-built_in, 
        .code-preview-container .hljs-symbol {
          color: var(--cp-builtin) !important;
        }
        
        .code-preview-container .hljs-comment, 
        .code-preview-container .hljs-code, 
        .code-preview-container .hljs-formula {
          color: var(--cp-comment) !important;
        }
        
        /* Animation */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .code-preview-container pre {
          animation: fadeIn 0.3s ease-in-out;
        }
      `;

            document.head.appendChild(styleElement);
        };

        // Use transition from VueUse for smooth animation of code height
        const codeHeightTransition = useTransition(codeHeight, {
            duration: 300,
            transition: [0.23, 1, 0.32, 1] // cubic-bezier for smooth easing
        });

        watch(() => props.theme, () => {
            // No need to manipulate DOM elements directly, the CSS variables approach
            // will automatically apply the correct styles through the class binding
        }, { immediate: true });

        onMounted(() => {
            injectThemeStyles();
            calculateCodeHeight();
            isMounted.value = true;
        });

        return () => {
            const isDarkTheme = props.theme === 'dark';
            const themeContainerClass = isDarkTheme ? 'code-preview-dark' : 'code-preview-light';
            
            return (
                <div class={`rounded-lg overflow-hidden shadow-sm transition-all duration-300 mb-8 code-preview-container ${themeContainerClass} ${
                    isDarkTheme 
                        ? 'border border-gray-700/70 shadow-gray-900/20' 
                        : 'border border-gray-200 shadow-gray-200/50'
                }`}>
                    {/* Optional title and description section */}
                    {(props.title || props.description) && (
                        <div class={`border-b px-5 py-4 ${
                            isDarkTheme 
                                ? 'border-gray-700/60 bg-gray-800/50' 
                                : 'border-gray-100 bg-gray-50/80'
                        }`}>
                            {props.title && (
                                <h3 class={`text-lg font-medium mb-1 ${isDarkTheme ? 'text-gray-100' : 'text-gray-800'}`}>
                                    {props.title}
                                </h3>
                            )}
                            {props.description && (
                                <p class={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-500'}`}>
                                    {props.description}
                                </p>
                            )}
                        </div>
                    )}
                    
                    {/* Preview content area with refined styling */}
                    <div class={`p-6 ${isDarkTheme ? 'bg-gray-800 text-white' : 'bg-white'}`}>
                        <div class={`${
                            isDarkTheme 
                                ? 'bg-gray-750 bg-opacity-50 rounded-lg border border-gray-700/50' 
                                : 'bg-gray-50/40 rounded-lg border border-gray-100'
                        } p-5`}>
                            {slots.default?.()}
                        </div>
                    </div>
                    
                    {/* Code toggle bar with improved styling */}
                    <div class={`flex items-center justify-between px-5 py-3 border-t ${
                        isDarkTheme 
                            ? 'border-gray-700/60 bg-gray-800/80' 
                            : 'border-gray-100 bg-gray-50'
                    }`}>
                        <div class={`text-xs font-mono ${isDarkTheme ? 'text-gray-400' : 'text-gray-500'}`}>
                            {getLanguageFromMarkdown(props.code) || props.language}
                        </div>
                        
                        <button 
                            onClick={toggleCodeVisibility}
                            class={`flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-md font-medium transition-all duration-300 ${
                                isDarkTheme 
                                    ? 'text-gray-300 hover:bg-gray-700/70 hover:text-gray-200' 
                                    : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                            }`}>
                            <span 
                                class={`transform transition-transform duration-300 inline-flex ${isCodeVisible.value ? 'rotate-180' : 'rotate-0'}`}
                            >
                                <span class="icon-[solar--map-arrow-down-linear] w-4 h-4"></span>
                            </span>
                            <span class="transition-opacity duration-300">
                                {isCodeVisible.value ? 'Hide code' : 'Show code'}
                            </span>
                        </button>
                    </div>
                    
                    {/* Code display area with enhanced styling */}
                    {props.code && (
                        <div 
                            class="transform-gpu transition-all duration-200 ease-out overflow-hidden"
                            style={{
                                maxHeight: isCodeVisible.value ? `${codeHeightTransition.value}px` : '0px',
                                opacity: isCodeVisible.value ? '1' : '0',
                            }}>
                            <div
                                ref={codeContainerRef}
                                class={`${
                                    isDarkTheme 
                                        ? 'bg-gray-900' 
                                        : 'bg-gray-50'
                                } px-5 py-4`}
                                style={{ background: 'var(--cp-background)' }}>
                                <pre class="my-0 relative">
                                    <div class={`absolute right-0 top-0 h-full w-8 bg-gradient-to-r ${
                                        isDarkTheme 
                                            ? 'from-transparent to-gray-900' 
                                            : 'from-transparent to-gray-50'
                                    }`}></div>
                                    <code 
                                        ref={codeRef} 
                                        class="text-sm font-mono block overflow-x-auto py-2 pr-10"
                                        innerHTML={highlightedCode.value}>
                                    </code>
                                </pre>
                                
                                {/* Copy button with enhanced styling */}
                                <div class="flex justify-end mt-2">
                                    <button 
                                        onClick={copyCode}
                                        class={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all duration-200 text-sm ${
                                            isDarkTheme
                                                ? copied.value
                                                    ? 'bg-green-800/30 text-green-400'
                                                    : 'text-gray-400 hover:bg-gray-800/70 hover:text-gray-300'
                                                : copied.value
                                                    ? 'bg-green-100 text-green-700'
                                                    : 'text-gray-500 hover:bg-gray-200/70 hover:text-gray-700'
                                        }`}>
                                        {copied.value ? (
                                            <span class="inline-flex items-center gap-1">
                                                <span class="icon-[solar--check-circle-bold] w-4 h-4" />
                                                <span>Copied!</span>
                                            </span>
                                        ) : (
                                            <span class="inline-flex items-center gap-1">
                                                <span class="icon-[solar--copy-line-duotone] w-4 h-4" />
                                                <span>Copy code</span>
                                            </span>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            );
        };
    }
});
