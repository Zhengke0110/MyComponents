import { defineComponent, ref, computed, onMounted, nextTick, PropType } from 'vue';
import { useTransition } from '@vueuse/core';
import hljs from 'highlight.js';
import * as clipboard from 'clipboard-polyfill';
import { ANIMATION_DURATION, CODE_PREVIEW_STYLES, SYNTAX_HIGHLIGHT_STYLE } from './config';

interface CodePreviewProps {
    code: string;
    language?: string;
    initiallyExpanded?: boolean;
    title?: string;
    description?: string;
    showLineNumbers?: boolean;
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
        initiallyExpanded: {
            type: Boolean as PropType<CodePreviewProps['initiallyExpanded']>,
            default: false
        },
        title: {
            type: String as PropType<CodePreviewProps['title']>,
            default: ''
        },
        description: {
            type: String as PropType<CodePreviewProps['description']>,
            default: ''
        },
        showLineNumbers: {
            type: Boolean as PropType<CodePreviewProps['showLineNumbers']>,
            default: false
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
            }, ANIMATION_DURATION);
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

            return props.language||'';
        };

        const highlightedCode = computed(() => {
            if (!props.code) return '';

            const code = extractCodeFromMarkdown(props.code);
            const language = getLanguageFromMarkdown(props.code);

            try {
                let highlightedResult = '';
                
                if (hljs.getLanguage(language)) {
                    highlightedResult = hljs.highlight(code, { language }).value;
                } else {
                    highlightedResult = hljs.highlightAuto(code).value;
                }
                
                // Split by lines and wrap each line with a line div for better hover effects
                // with tighter spacing for more compact display
                if (highlightedResult) {
                    const lines = highlightedResult.split('\n');
                    return lines.map((line, i) => {
                        const lineNumber = props.showLineNumbers 
                            ? `<span class="line-number">${i + 1}</span>` 
                            : '';
                        // Use a more compact line style
                        return `<div class="hljs-line">${lineNumber}${line || ' '}</div>`;
                    }).join('');  // Remove \n to tighten spacing
                }
                
                return highlightedResult;
            } catch (e) {
                console.error('Error highlighting code:', e);
                return code;
            }
        });

        // Inject theme styles using CSS variables that respect dark mode
        const injectThemeStyles = () => {
            const styleElement = document.getElementById('code-preview-theme') || document.createElement('style');
            styleElement.id = 'code-preview-theme';
            styleElement.textContent = SYNTAX_HIGHLIGHT_STYLE;
            document.head.appendChild(styleElement);
        };

        // Use transition from VueUse for smooth animation of code height
        const codeHeightTransition = useTransition(codeHeight, {
            duration: ANIMATION_DURATION,
            transition: [0.23, 1, 0.32, 1] // cubic-bezier for smooth easing
        });

        onMounted(() => {
            injectThemeStyles();
            calculateCodeHeight();
            isMounted.value = true;
        });

        return () => {
            const styles = CODE_PREVIEW_STYLES;
            
            return (
                <div class={`${styles.container.base} ${styles.container.border}`}>
                    {/* Optional title and description section */}
                    {(props.title || props.description) && (
                        <div class={styles.titleBar.wrapper}>
                            {props.title && (
                                <h3 class={styles.titleBar.title}>
                                    {props.title}
                                </h3>
                            )}
                            {props.description && (
                                <p class={styles.titleBar.description}>
                                    {props.description}
                                </p>
                            )}
                        </div>
                    )}
                    
                    {/* Preview content area with refined styling */}
                    <div class={styles.preview.wrapper}>
                        <div class={styles.preview.content}>
                            {slots.default?.()}
                        </div>
                    </div>
                    
                    {/* Code toggle bar with improved styling */}
                    <div class={styles.codeToggle.bar}>
                        <div class={styles.codeToggle.language}>
                            {getLanguageFromMarkdown(props.code) || props.language}
                        </div>
                        
                        <button 
                            onClick={toggleCodeVisibility}
                            class={styles.codeToggle.button}>
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
                                class={styles.codeArea.wrapper}
                                style={{ background: 'var(--cp-background)' }}>
                                <pre class="my-0 relative">
                                    <div class={styles.codeArea.fadeOverlay}></div>
                                    <code 
                                        ref={codeRef} 
                                        class={styles.codeArea.codeBlock}
                                        innerHTML={highlightedCode.value}>
                                    </code>
                                </pre>
                                
                                {/* Copy button with enhanced styling */}
                                <div class="flex justify-end mt-2">
                                    <button 
                                        onClick={copyCode}
                                        class={`${styles.codeArea.copyButton.base} ${
                                            copied.value 
                                                ? styles.codeArea.copyButton.copied 
                                                : styles.codeArea.copyButton.default
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
