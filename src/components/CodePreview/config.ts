/**
 * Configuration constants for the CodePreview component
 */

export const ANIMATION_DURATION = 100; // Duration for animations in ms

// Syntax highlighting theme classes
export const CODE_PREVIEW_STYLES = {
  container: {
    base: 'rounded-lg overflow-hidden shadow-sm transition-all duration-100 mb-8 code-preview-container',
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
    button: 'flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-md font-medium transition-all duration-100 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-100 dark:hover:bg-gray-700/70 dark:hover:text-gray-200',
  },
  codeArea: {
    wrapper: 'bg-gray-50 dark:bg-gray-900 px-5 py-4',
    codeBlock: 'text-sm font-mono block overflow-x-auto py-2 pr-10',
    fadeOverlay: 'absolute right-0 top-0 h-full w-8 bg-gradient-to-r from-transparent to-gray-50 dark:to-gray-900',
    copyButton: {
      base: 'flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all duration-200 text-sm',
      default: 'text-gray-500 hover:bg-gray-200/70 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800/70 dark:hover:text-gray-100',
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
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  white-space: pre;
  border-radius: 0.25rem;
  padding: 0 !important;
  font-size: 0.925em;
  line-height: 1.4;
  letter-spacing: 0.01em;
}

/* Use enhanced CSS variables with vibrant light/dark mode colors */
:root {
  --cp-background: #f9fafb;
  --cp-text: #2c3e50;
  --cp-keyword: #c2185b;
  --cp-title: #6200ea;
  --cp-attr: #0277bd;
  --cp-string: #2e7d32;
  --cp-builtin: #e65100;
  --cp-comment: #607d8b;
  --cp-important: #0288d1;
  --cp-property: #0288d1;
  --cp-selector: #8e24aa;
  --cp-punctuation: #546e7a;
  --cp-number: #f57c00;
  --cp-boolean: #d81b60;
  --cp-operator: #00796b;
  --cp-function-call: #5c6bc0;
  --cp-tag: #e53935;
}

:root.dark {
  --cp-background: #0d1117;
  --cp-text: #e1e4e8;
  --cp-keyword: #ff7b9d;
  --cp-title: #bd93f9;
  --cp-attr: #79c0ff;
  --cp-string: #7ee787;
  --cp-builtin: #ffab70;
  --cp-comment: #8b949e;
  --cp-important: #56d4fa;
  --cp-property: #56d4fa;
  --cp-selector: #d2a8ff;
  --cp-punctuation: #a1a1aa;
  --cp-number: #f8c555;
  --cp-boolean: #ff7b9d;
  --cp-operator: #56d4fa;
  --cp-function-call: #79c0ff;
  --cp-tag: #ff7b72;
}

/* Apply theme variables to syntax with enhanced styling */
.code-preview-container .hljs {
  color: var(--cp-text) !important;
  background: transparent !important;
}

/* Keywords with bolder styling */
.code-preview-container .hljs-doctag, 
.code-preview-container .hljs-keyword, 
.code-preview-container .hljs-meta .hljs-keyword, 
.code-preview-container .hljs-template-tag, 
.code-preview-container .hljs-template-variable, 
.code-preview-container .hljs-type, 
.code-preview-container .hljs-variable.language_ {
  color: var(--cp-keyword) !important;
  font-weight: 700 !important;
}

/* Titles with enhanced styling */
.code-preview-container .hljs-title, 
.code-preview-container .hljs-title.class_, 
.code-preview-container .hljs-title.class_.inherited__, 
.code-preview-container .hljs-title.function_ {
  color: var(--cp-title) !important;
  font-weight: 700 !important;
}

/* Attributes and variables */
.code-preview-container .hljs-attr, 
.code-preview-container .hljs-attribute, 
.code-preview-container .hljs-variable {
  color: var(--cp-attr) !important;
}

/* Numbers with distinct styling */
.code-preview-container .hljs-number,
.code-preview-container .hljs-literal {
  color: var(--cp-number) !important;
  font-weight: 500 !important;
}

/* Strings with enhanced visibility */
.code-preview-container .hljs-meta .hljs-string, 
.code-preview-container .hljs-regexp, 
.code-preview-container .hljs-string {
  color: var(--cp-string) !important;
}

/* Built-in functions and symbols */
.code-preview-container .hljs-built_in, 
.code-preview-container .hljs-symbol {
  color: var(--cp-builtin) !important;
  font-weight: 600 !important;
}

/* Comments with improved styling */
.code-preview-container .hljs-comment, 
.code-preview-container .hljs-code, 
.code-preview-container .hljs-formula {
  color: var(--cp-comment) !important;
  font-style: italic !important;
}

/* New enhanced styles for better code highlighting */
.code-preview-container .hljs-property {
  color: var(--cp-property) !important;
  font-weight: 500 !important;
}

.code-preview-container .hljs-selector {
  color: var(--cp-selector) !important;
}

.code-preview-container .hljs-punctuation {
  color: var(--cp-punctuation) !important;
}

/* Make boolean values stand out */
.code-preview-container .hljs-boolean {
  color: var(--cp-boolean) !important;
  font-weight: 600 !important;
}

/* Emphasize operators */
.code-preview-container .hljs-operator {
  color: var(--cp-operator) !important;
  font-weight: 500 !important;
}

/* HTML/XML tags */
.code-preview-container .hljs-tag,
.code-preview-container .hljs-name {
  color: var(--cp-tag) !important;
  font-weight: 600 !important;
}

/* Function calls */
.code-preview-container .hljs-function .hljs-params,
.code-preview-container .hljs-function-call {
  color: var(--cp-function-call) !important;
}

.code-preview-container .hljs-important {
  color: var(--cp-important) !important;
  font-weight: bold !important;
  text-decoration: underline;
}

/* Line highlighting for better readability with adjusted spacing */
.code-preview-container code {
  display: inline-block;
  min-width: 100%;
}

.code-preview-container .hljs-line {
  display: block;
  padding: 0.05rem 0;
  line-height: 1.4;
}

.code-preview-container .hljs-line:hover {
  background-color: rgba(180, 180, 180, 0.15);
  border-radius: 2px;
}

/* Animation */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.code-preview-container pre {
  animation: fadeIn 0.3s ease-in-out;
}

/* Improved scrollbar styling */
.code-preview-container code::-webkit-scrollbar {
  height: 6px;
  width: 6px;
}

.code-preview-container code::-webkit-scrollbar-thumb {
  background: rgba(120, 120, 120, 0.4);
  border-radius: 3px;
}

.code-preview-container code::-webkit-scrollbar-thumb:hover {
  background: rgba(120, 120, 120, 0.7);
}

.code-preview-container code::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.05);
  border-radius: 3px;
}

.dark .code-preview-container code::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
}

/* Add subtle line number styling with adjusted spacing */
.code-preview-container .line-number {
  display: inline-block;
  width: 1.5rem;
  text-align: right;
  margin-right: 0.5rem;
  opacity: 0.5;
  user-select: none;
}
`;
