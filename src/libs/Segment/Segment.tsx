import { computed, defineComponent, PropType } from 'vue';
import './style.css';

export interface SegmentOption {
  label: string;
  value: string | number;
  icon?: string;
}

const SEGMENT_CONFIGS = {
  sizeClasses: {
    sm: "px-2.5 py-1.5 text-sm",
    md: "px-3.5 py-2 text-base",
    lg: "px-4 py-2.5 text-lg",
  },
  iconSizeClasses: {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  },
  colors: {
    container: {
      light: "bg-gray-100",
      dark: "dark:bg-gray-800"
    },
    button: {
      active: {
        light: "bg-white text-gray-900",
        dark: "dark:bg-gray-700 dark:text-gray-100"
      },
      inactive: {
        light: "text-gray-500 hover:text-gray-900 hover:bg-gray-50",
        dark: "dark:text-gray-400 dark:hover:text-gray-100 dark:hover:bg-gray-700"
      }
    },
    disabled: {
      light: "opacity-50",
      dark: "dark:opacity-40"
    }
  }
};

const Segment = defineComponent({
  name: 'Segment',
  props: {
    options: {
      type: Array as PropType<SegmentOption[]>,
      required: true
    },
    modelValue: {
      type: [String, Number] as PropType<string | number>,
      default: undefined
    },
    size: {
      type: String as PropType<'sm' | 'md' | 'lg'>,
      default: 'md'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const handleSelect = (optionValue: string | number) => {
      if (props.disabled) return;
      emit('update:modelValue', optionValue);
      emit('change', optionValue);
    };

    const containerClass = computed(() => [
      'segment-container inline-flex rounded-lg p-1 transition-all',
      SEGMENT_CONFIGS.colors.container.light,
      SEGMENT_CONFIGS.colors.container.dark,
      props.disabled ? SEGMENT_CONFIGS.colors.disabled.light + ' ' + SEGMENT_CONFIGS.colors.disabled.dark : '',
      props.block ? 'w-full' : '',
    ]);

    return () => (
      <div
        class={containerClass.value}
        role="tablist"
        aria-disabled={props.disabled}
      >
        {props.options.map((item) => {
          const isActive = props.modelValue === item.value;
          const buttonClass = [
            'segment-button relative flex items-center justify-center rounded-md transition-all duration-300 ease-out',
            SEGMENT_CONFIGS.sizeClasses[props.size],
            props.block ? 'flex-1' : '',
            isActive
              ? `is-active ${SEGMENT_CONFIGS.colors.button.active.light} ${SEGMENT_CONFIGS.colors.button.active.dark} shadow dark:shadow-gray-900/30`
              : `${SEGMENT_CONFIGS.colors.button.inactive.light} ${SEGMENT_CONFIGS.colors.button.inactive.dark}`,
            props.disabled ? 'cursor-not-allowed' : 'cursor-pointer',
          ];

          return (
            <button
              key={item.value}
              class={buttonClass}
              role="tab"
              aria-selected={isActive}
              tabindex={props.disabled ? -1 : 0}
              onClick={() => handleSelect(item.value)}
              onKeydown={(e) => {
                if ((e.key === ' ' || e.key === 'Enter') && !props.disabled) {
                  e.preventDefault();
                  handleSelect(item.value);
                }
              }}
            >
              {item.icon && (
                <i
                  class={[item.icon, SEGMENT_CONFIGS.iconSizeClasses[props.size], 'mr-1']}
                ></i>
              )}
              {item.label}
            </button>
          );
        })}
      </div>
    );
  }
});

export default Segment;
