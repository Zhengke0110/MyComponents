import { defineComponent, ref, computed, PropType, provide, inject, Ref, onMounted, nextTick } from 'vue';
import { ColorType, colorMap } from './config';

// 单选框组合的上下文类型
interface RadioGroupContext {
    name: Ref<string | undefined>;
    modelValue: Ref<any>;
    updateModelValue: (value: any) => void;
    disabled: Ref<boolean>;
    size: Ref<'large' | 'default' | 'small'>;
    buttonStyle: Ref<'outline' | 'solid'>;
    optionType: Ref<'default' | 'button'>;
    colors: Ref<{
        default: ColorType,
        hover: ColorType,
        disabled: ColorType
    }>;
}

const radioGroupKey = Symbol('radioGroup');


// 单选框组件
export const Radio = defineComponent({
    name: 'Radio',
    props: {
        modelValue: { type: [String, Number, Boolean], default: undefined },
        value: { type: [String, Number, Boolean], default: undefined },
        disabled: { type: Boolean, default: false },
        name: { type: String },
        autofocus: { type: Boolean, default: false },
        color: { type: String as PropType<ColorType>, default: 'blue' },
    },
    emits: ['update:modelValue', 'change', 'focus', 'blur'],
    setup(props, { emit, slots }) {
        const inputRef = ref<HTMLInputElement | null>(null);
        const radioGroupCtx = inject<RadioGroupContext | null>(radioGroupKey, null);
        const isChecked = computed(() => {
            if (radioGroupCtx) {
                return radioGroupCtx.modelValue.value === props.value;
            }
            return props.modelValue === props.value;
        });

        const radioDisabled = computed(() => {
            return radioGroupCtx?.disabled?.value || props.disabled;
        });

        const radioColor = computed(() => {
            const color = radioGroupCtx?.colors.value.default || props.color;
            return colorMap[color as ColorType] || colorMap.blue;
        });

        const radioName = computed(() => {
            return radioGroupCtx?.name?.value || props.name;
        });

        const handleChange = (e: Event) => {
            if (radioDisabled.value) return;

            const target = e.target as HTMLInputElement;
            const value = props.value !== undefined ? props.value : target.checked;

            if (radioGroupCtx) {
                radioGroupCtx.updateModelValue(value);
            } else {
                emit('update:modelValue', value);
            }
            emit('change', e);
        };

        const focus = () => {
            inputRef.value?.focus();
        };

        const blur = () => {
            inputRef.value?.blur();
        };

        const handleFocus = (e: FocusEvent) => {
            emit('focus', e);
        };

        const handleBlur = (e: FocusEvent) => {
            emit('blur', e);
        };

        onMounted(() => {
            if (props.autofocus) {
                nextTick(() => {
                    inputRef.value?.focus();
                });
            }
        });

        const isButtonStyle = computed(() => {
            return radioGroupCtx?.optionType.value === 'button';
        });

        return () => {
            if (isButtonStyle.value) {
                return (
                    <RadioButton
                        checked={isChecked.value}
                        disabled={radioDisabled.value}
                        value={props.value}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}>
                        {slots.default?.()}
                    </RadioButton>
                );
            }

            return (
                <label
                    class={[
                        'inline-flex items-center cursor-pointer transition-all duration-200 ease-in-out',
                        radioDisabled.value ? 'opacity-60 cursor-not-allowed' : 'hover:opacity-90',
                    ]}
                >
                    <span class="relative inline-flex items-center justify-center mr-2">
                        <input
                            ref={inputRef}
                            type="radio"
                            class="sr-only"
                            name={radioName.value}
                            disabled={radioDisabled.value}
                            checked={isChecked.value}
                            value={props.value}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                        <span
                            class={[
                                'w-4 h-4 rounded-full border transition-all duration-200',
                                isChecked.value ? [radioColor.value.light, radioColor.value.dark] : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800',
                                radioDisabled.value ? 'opacity-50' : '',
                            ]}
                        />
                        {isChecked.value && (
                            <span
                                class={[
                                    'absolute w-2 h-2 rounded-full bg-white dark:bg-gray-900 transform scale-0 transition-transform duration-200',
                                    isChecked.value ? 'scale-100' : '',
                                ]}
                            />
                        )}
                    </span>
                    <span
                        class={[
                            'text-sm text-gray-700 dark:text-gray-300',
                            radioDisabled.value ? 'text-gray-400 dark:text-gray-600' : ''
                        ]}
                    >
                        {slots.default?.()}
                    </span>
                </label>
            );
        };
    }
});

// 按钮风格单选框组件
export const RadioButton = defineComponent({
    name: 'RadioButton',
    props: {
        checked: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        value: { type: [String, Number, Boolean], default: undefined },
    },
    emits: ['change', 'focus', 'blur'],
    setup(props, { emit, slots }) {
        const radioGroupCtx = inject<RadioGroupContext | null>(radioGroupKey, null);
        const inputRef = ref<HTMLInputElement | null>(null);

        const buttonSize = computed(() => {
            const size = radioGroupCtx?.size.value || 'default';
            return {
                large: 'px-4 py-2 text-base',
                default: 'px-3 py-1.5 text-sm',
                small: 'px-2 py-1 text-xs',
            }[size];
        });

        const buttonStyle = computed(() => {
            const style = radioGroupCtx?.buttonStyle.value || 'outline';
            const color = radioGroupCtx?.colors.value.default || 'blue';
            const colorClasses = colorMap[color as ColorType];
            if (style === 'solid') {
                return props.checked
                    ? `${colorClasses.light} ${colorClasses.dark} text-white border-transparent`
                    : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300';
            }
            return props.checked
                ? `border-${color}-500 dark:border-${color}-400 text-${color}-500 dark:text-${color}-400`
                : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300';
        });

        const handleChange = (e: Event) => {
            if (props.disabled) return;
            emit('change', e);
        };

        const handleFocus = (e: FocusEvent) => {
            emit('focus', e);
        };

        const handleBlur = (e: FocusEvent) => {
            emit('blur', e);
        };

        return () => (
            <label
                class={[
                    'inline-block border transition-all duration-200 rounded-md',
                    buttonSize.value,
                    buttonStyle.value,
                    props.disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer hover:opacity-90',
                ]}
            >
                <input
                    ref={inputRef}
                    type="radio"
                    class="sr-only"
                    disabled={props.disabled}
                    checked={props.checked}
                    value={props.value}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                <span>{slots.default?.()}</span>
            </label>
        );
    }
});

// 单选框组组件
export const RadioGroup = defineComponent({
    name: 'RadioGroup',
    props: {
        modelValue: { type: [String, Number, Boolean, Object], default: undefined },
        disabled: { type: Boolean, default: false },
        name: { type: String },
        size: { type: String as PropType<'large' | 'default' | 'small'>, default: 'default' },
        optionType: { type: String as PropType<'default' | 'button'>, default: 'default' },
        buttonStyle: { type: String as PropType<'outline' | 'solid'>, default: 'outline' },
        options: { type: Array as PropType<Array<string | number | { label: string; value: string | number; disabled?: boolean }>>, default: () => [] },
        color: { type: String as PropType<ColorType>, default: 'blue' },
    },
    emits: ['update:modelValue', 'change'],
    setup(props, { emit, slots }) {
        const radioGroupRef = ref<HTMLDivElement | null>(null);
        const mergedValue = ref(props.modelValue);
        const name = computed(() => props.name);
        const disabled = ref(props.disabled);
        const size = ref(props.size);
        const optionType = ref(props.optionType);
        const buttonStyle = ref(props.buttonStyle);
        const colors = ref({
            default: props.color,
            hover: props.color,
            disabled: 'gray' as ColorType
        });

        const updateModelValue = (value: any) => {
            mergedValue.value = value;
            emit('update:modelValue', value);
            emit('change', { target: { value } });
        };

        // 提供上下文给子组件
        provide<RadioGroupContext>(radioGroupKey, {
            name,
            modelValue: mergedValue,
            updateModelValue,
            disabled,
            size,
            buttonStyle,
            optionType,
            colors,
        });

        // 渲染选项
        const renderOptions = () => {
            if (!props.options?.length) {
                return null;
            }

            return props.options.map(option => {
                if (typeof option === 'string' || typeof option === 'number') {
                    return (
                        <Radio
                            key={option.toString()}
                            value={option}
                            disabled={props.disabled}
                        >
                            {option.toString()}
                        </Radio>
                    );
                }

                return (
                    <Radio
                        key={option.value?.toString()}
                        value={option.value}
                        disabled={option.disabled || props.disabled}
                    >
                        {option.label}
                    </Radio>
                );
            });
        };

        return () => (
            <div
                ref={radioGroupRef}
                class={[
                    'inline-flex',
                    optionType.value === 'button' ? 'space-x-1 border-0' : 'flex-wrap gap-4', // 增加按钮间距
                    optionType.value === 'button' && props.options?.length ? 'radio-button-group overflow-hidden rounded-md' : '',
                ]}
                role="radiogroup"
            >
                {renderOptions() || slots.default?.()}
            </div>
        );
    }
});

export default {
    Radio,
    RadioButton,
    RadioGroup,
};
