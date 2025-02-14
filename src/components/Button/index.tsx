import { computed, defineComponent, type PropType } from 'vue'

export type ButtonType = 'primary' | 'secondary' | 'danger'

interface ButtonProps {
  type?: ButtonType
  disabled?: boolean
}

export const Button = defineComponent({
  name: 'Button',
  props: {
    type: {
      type: String as PropType<ButtonType>,
      default: 'primary',
      validator: (value: string) => ['primary', 'secondary', 'danger'].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props: ButtonProps, { slots }) {
    const classes = computed(() => ({
      'px-4 py-2 rounded-lg': true,
      'opacity-50 cursor-not-allowed': props.disabled,
      'bg-blue-500 hover:bg-blue-700 text-white': props.type === 'primary',
      'bg-gray-500 hover:bg-gray-700 text-white': props.type === 'secondary',
      'bg-red-500 hover:bg-red-700 text-white': props.type === 'danger'
    }))

    return () => (
      <button
        class={classes.value}
        disabled={props.disabled}
        type="button"
      >
        {slots.default?.()}
      </button>
    )
  }
})

export default Button
