
// 颜色主题类型
export type ColorType =
    | 'slate'
    | 'gray'
    | 'zinc'
    | 'neutral'
    | 'stone'
    | 'red'
    | 'orange'
    | 'amber'
    | 'yellow'
    | 'lime'
    | 'green'
    | 'emerald'
    | 'teal'
    | 'cyan'
    | 'sky'
    | 'blue'
    | 'indigo'
    | 'violet'
    | 'purple'
    | 'fuchsia'
    | 'pink'
    | 'rose'

export type TextInputSize = 'sm' | 'md' | 'lg'

export interface TextInputProps {
    modelValue?: string
    id: string
    name?: string
    label?: string
    type?: string
    placeholder?: string
    disabled?: boolean
    required?: boolean
    description?: string
    error?: string
    color?: ColorType
    size?: TextInputSize
    wrapperClass?: string
    labelClass?: string
    multiline?: boolean
    rows?: number
}

// 颜色映射支持深色模式
export const colorMap = {
    // 浅色模式
    light: {
        slate: { light: '#cbd5e1', medium: '#64748b', dark: '#475569', hover: '#94a3b8', focus: '#475569', text: '#334155', bgAlpha: 'rgba(148, 163, 184, 0.08)' },
        gray: { light: '#d1d5db', medium: '#6b7280', dark: '#4b5563', hover: '#9ca3af', focus: '#4b5563', text: '#374151', bgAlpha: 'rgba(156, 163, 175, 0.08)' },
        zinc: { light: '#d4d4d8', medium: '#71717a', dark: '#52525b', hover: '#a1a1aa', focus: '#52525b', text: '#3f3f46', bgAlpha: 'rgba(161, 161, 170, 0.08)' },
        neutral: { light: '#d4d4d4', medium: '#737373', dark: '#525252', hover: '#a3a3a3', focus: '#525252', text: '#404040', bgAlpha: 'rgba(163, 163, 163, 0.08)' },
        stone: { light: '#d6d3d1', medium: '#78716c', dark: '#57534e', hover: '#a8a29e', focus: '#57534e', text: '#44403c', bgAlpha: 'rgba(168, 162, 158, 0.08)' },
        red: { light: '#fca5a5', medium: '#ef4444', dark: '#dc2626', hover: '#f87171', focus: '#dc2626', text: '#b91c1c', bgAlpha: 'rgba(248, 113, 113, 0.08)' },
        orange: { light: '#fdba74', medium: '#f97316', dark: '#ea580c', hover: '#fb923c', focus: '#ea580c', text: '#c2410c', bgAlpha: 'rgba(251, 146, 60, 0.08)' },
        amber: { light: '#fcd34d', medium: '#f59e0b', dark: '#d97706', hover: '#fbbf24', focus: '#d97706', text: '#b45309', bgAlpha: 'rgba(251, 191, 36, 0.08)' },
        yellow: { light: '#fde047', medium: '#eab308', dark: '#ca8a04', hover: '#facc15', focus: '#ca8a04', text: '#a16207', bgAlpha: 'rgba(250, 204, 21, 0.08)' },
        lime: { light: '#bef264', medium: '#84cc16', dark: '#65a30d', hover: '#a3e635', focus: '#65a30d', text: '#4d7c0f', bgAlpha: 'rgba(163, 230, 53, 0.08)' },
        green: { light: '#86efac', medium: '#22c55e', dark: '#16a34a', hover: '#4ade80', focus: '#16a34a', text: '#15803d', bgAlpha: 'rgba(74, 222, 128, 0.08)' },
        emerald: { light: '#6ee7b7', medium: '#10b981', dark: '#059669', hover: '#34d399', focus: '#059669', text: '#047857', bgAlpha: 'rgba(52, 211, 153, 0.08)' },
        teal: { light: '#5eead4', medium: '#14b8a6', dark: '#0d9488', hover: '#2dd4bf', focus: '#0d9488', text: '#0f766e', bgAlpha: 'rgba(45, 212, 191, 0.08)' },
        cyan: { light: '#67e8f9', medium: '#06b6d4', dark: '#0891b2', hover: '#22d3ee', focus: '#0891b2', text: '#0e7490', bgAlpha: 'rgba(34, 211, 238, 0.08)' },
        sky: { light: '#7dd3fc', medium: '#0ea5e9', dark: '#0284c7', hover: '#38bdf8', focus: '#0284c7', text: '#0369a1', bgAlpha: 'rgba(56, 189, 248, 0.08)' },
        blue: { light: '#93c5fd', medium: '#3b82f6', dark: '#2563eb', hover: '#60a5fa', focus: '#2563eb', text: '#1d4ed8', bgAlpha: 'rgba(96, 165, 250, 0.08)' },
        indigo: { light: '#a5b4fc', medium: '#6366f1', dark: '#4f46e5', hover: '#818cf8', focus: '#4f46e5', text: '#4338ca', bgAlpha: 'rgba(129, 140, 248, 0.08)' },
        violet: { light: '#c4b5fd', medium: '#8b5cf6', dark: '#7c3aed', hover: '#a78bfa', focus: '#7c3aed', text: '#6d28d9', bgAlpha: 'rgba(167, 139, 250, 0.08)' },
        purple: { light: '#d8b4fe', medium: '#a855f7', dark: '#9333ea', hover: '#c084fc', focus: '#9333ea', text: '#7e22ce', bgAlpha: 'rgba(192, 132, 252, 0.08)' },
        fuchsia: { light: '#f0abfc', medium: '#d946ef', dark: '#c026d3', hover: '#e879f9', focus: '#c026d3', text: '#a21caf', bgAlpha: 'rgba(232, 121, 249, 0.08)' },
        pink: { light: '#f9a8d4', medium: '#ec4899', dark: '#db2777', hover: '#f472b6', focus: '#db2777', text: '#be185d', bgAlpha: 'rgba(244, 114, 182, 0.08)' },
        rose: { light: '#fda4af', medium: '#f43f5e', dark: '#e11d48', hover: '#fb7185', focus: '#e11d48', text: '#be123c', bgAlpha: 'rgba(251, 113, 133, 0.08)' },
    },
    // 深色模式
    dark: {
        slate: { light: '#475569', medium: '#94a3b8', dark: '#cbd5e1', hover: '#64748b', focus: '#94a3b8', text: '#e2e8f0', bgAlpha: 'rgba(71, 85, 105, 0.2)' },
        gray: { light: '#4b5563', medium: '#9ca3af', dark: '#d1d5db', hover: '#6b7280', focus: '#9ca3af', text: '#f3f4f6', bgAlpha: 'rgba(75, 85, 99, 0.2)' },
        zinc: { light: '#52525b', medium: '#a1a1aa', dark: '#d4d4d8', hover: '#71717a', focus: '#a1a1aa', text: '#f4f4f5', bgAlpha: 'rgba(82, 82, 91, 0.2)' },
        neutral: { light: '#525252', medium: '#a3a3a3', dark: '#d4d4d4', hover: '#737373', focus: '#a3a3a3', text: '#f5f5f5', bgAlpha: 'rgba(82, 82, 82, 0.2)' },
        stone: { light: '#57534e', medium: '#a8a29e', dark: '#d6d3d1', hover: '#78716c', focus: '#a8a29e', text: '#f5f5f4', bgAlpha: 'rgba(87, 83, 78, 0.2)' },
        red: { light: '#b91c1c', medium: '#f87171', dark: '#fca5a5', hover: '#ef4444', focus: '#f87171', text: '#fee2e2', bgAlpha: 'rgba(185, 28, 28, 0.2)' },
        orange: { light: '#c2410c', medium: '#fb923c', dark: '#fdba74', hover: '#f97316', focus: '#fb923c', text: '#ffedd5', bgAlpha: 'rgba(194, 65, 12, 0.2)' },
        amber: { light: '#b45309', medium: '#fbbf24', dark: '#fcd34d', hover: '#f59e0b', focus: '#fbbf24', text: '#fef3c7', bgAlpha: 'rgba(180, 83, 9, 0.2)' },
        yellow: { light: '#a16207', medium: '#facc15', dark: '#fde047', hover: '#eab308', focus: '#facc15', text: '#fef9c3', bgAlpha: 'rgba(161, 98, 7, 0.2)' },
        lime: { light: '#4d7c0f', medium: '#a3e635', dark: '#bef264', hover: '#84cc16', focus: '#a3e635', text: '#ecfccb', bgAlpha: 'rgba(77, 124, 15, 0.2)' },
        green: { light: '#15803d', medium: '#4ade80', dark: '#86efac', hover: '#22c55e', focus: '#4ade80', text: '#dcfce7', bgAlpha: 'rgba(21, 128, 61, 0.2)' },
        emerald: { light: '#047857', medium: '#34d399', dark: '#6ee7b7', hover: '#10b981', focus: '#34d399', text: '#d1fae5', bgAlpha: 'rgba(4, 120, 87, 0.2)' },
        teal: { light: '#0f766e', medium: '#2dd4bf', dark: '#5eead4', hover: '#14b8a6', focus: '#2dd4bf', text: '#ccfbf1', bgAlpha: 'rgba(15, 118, 110, 0.2)' },
        cyan: { light: '#0e7490', medium: '#22d3ee', dark: '#67e8f9', hover: '#06b6d4', focus: '#22d3ee', text: '#cffafe', bgAlpha: 'rgba(14, 116, 144, 0.2)' },
        sky: { light: '#0369a1', medium: '#38bdf8', dark: '#7dd3fc', hover: '#0ea5e9', focus: '#38bdf8', text: '#e0f2fe', bgAlpha: 'rgba(3, 105, 161, 0.2)' },
        blue: { light: '#1d4ed8', medium: '#60a5fa', dark: '#93c5fd', hover: '#3b82f6', focus: '#60a5fa', text: '#dbeafe', bgAlpha: 'rgba(29, 78, 216, 0.2)' },
        indigo: { light: '#4338ca', medium: '#818cf8', dark: '#a5b4fc', hover: '#6366f1', focus: '#818cf8', text: '#e0e7ff', bgAlpha: 'rgba(67, 56, 202, 0.2)' },
        violet: { light: '#6d28d9', medium: '#a78bfa', dark: '#c4b5fd', hover: '#8b5cf6', focus: '#a78bfa', text: '#ede9fe', bgAlpha: 'rgba(109, 40, 217, 0.2)' },
        purple: { light: '#7e22ce', medium: '#c084fc', dark: '#d8b4fe', hover: '#a855f7', focus: '#c084fc', text: '#f3e8ff', bgAlpha: 'rgba(126, 34, 206, 0.2)' },
        fuchsia: { light: '#a21caf', medium: '#e879f9', dark: '#f0abfc', hover: '#d946ef', focus: '#e879f9', text: '#fae8ff', bgAlpha: 'rgba(162, 28, 175, 0.2)' },
        pink: { light: '#be185d', medium: '#f472b6', dark: '#f9a8d4', hover: '#ec4899', focus: '#f472b6', text: '#fce7f3', bgAlpha: 'rgba(190, 24, 93, 0.2)' },
        rose: { light: '#be123c', medium: '#fb7185', dark: '#fda4af', hover: '#f43f5e', focus: '#fb7185', text: '#ffe4e6', bgAlpha: 'rgba(190, 18, 60, 0.2)' },
    }
}