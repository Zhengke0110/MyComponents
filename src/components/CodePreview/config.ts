/**
 * Configuration constants for the CodePreview component
 */

export const ANIMATION_DURATION = 300; // Duration for animations in ms

// Syntax highlighting theme classes
export const CODE_PREVIEW_STYLES = {
  container: {
    base: 'rounded-lg overflow-hidden shadow-sm transition-all duration-300 mb-8 code-preview-container',
    border: 'border border-gray-200 dark:border-gray-700/70 shadow-gray-200/50 dark:shadow-gray-900/20',
  },
  titleBar: {
    wrapper: 'border-b px-5 py-4 border-gray-100 dark:border-gray-700/60 bg-gray-50/80 dark:bg-gray-800/50',
    title: 'text-lg font-medium mb-1 text-gray-800 dark:text-gray-100',
    description: 'text-sm text-gray-500 dark:text-gray-400',
  },
  preview: {
    wrapper: 'p-6 bg-white dark:bg-gray-800 dark:text-white',
    content: 'bg-gray-50/40 dark:bg-gray-750 dark:bg-opacity-50 rounded-lg border border-gray-100 dark:border-gray-700/50 p-5',
  },
  codeToggle: {
    bar: 'flex items-center justify-between px-5 py-3 border-t border-gray-100 dark:border-gray-700/60 bg-gray-50 dark:bg-gray-800/80',
    language: 'text-xs font-mono text-gray-500 dark:text-gray-400',
    button: 'flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-md font-medium transition-all duration-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-700/70 dark:hover:text-gray-200',
  },
  codeArea: {
    wrapper: 'bg-gray-50 dark:bg-gray-900 px-5 py-4',
    codeBlock: 'text-sm font-mono block overflow-x-auto py-2 pr-10',
    fadeOverlay: 'absolute right-0 top-0 h-full w-8 bg-gradient-to-r from-transparent to-gray-50 dark:to-gray-900',
    copyButton: {
      base: 'flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all duration-200 text-sm',
      default: 'text-gray-500 hover:bg-gray-200/70 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800/70 dark:hover:text-gray-300',
      copied: 'bg-green-100 text-green-700 dark:bg-green-800/30 dark:text-green-400',
    },
  },
};

export const SYNTAX_HIGHLIGHT_STYLE = `
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

/* Use CSS variables with light/dark mode support */
:root {
  --cp-background: #f5f5f5;
  --cp-text: #24292e;
  --cp-keyword: #d73a49;
  --cp-title: #6f42c1;
  --cp-attr: #005cc5;
  --cp-string: #032f62;
  --cp-builtin: #e36209;
  --cp-comment: #6a737d;
}

:root.dark {
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
