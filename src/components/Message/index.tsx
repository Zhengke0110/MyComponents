import { createVNode, render } from 'vue'
import type { MessageProps } from './types'
import MessageConstructor from './Message'

let seed = 1
const instances: any[] = []

const Message = (options: MessageProps) => {
  const id = `message_${seed++}`
  const container = document.createElement('div')
  const props = {
    ...options,
    id,
    onClose: () => {
      close(id)
      options.onClose?.()
    },
  }

  const vnode = createVNode(MessageConstructor, props)
  render(vnode, container)
  document.body.appendChild(container.firstElementChild!)

  const instance = {
    id,
    vnode,
    props,
    destroy: () => {
      render(null, container)
      instances.splice(instances.findIndex(i => i.id === id), 1)
    }
  }
  instances.push(instance)

  // 更新所有消息的位置
  updateMessagePositions()

  return instance
}

const close = (id: string) => {
  const instance = instances.find(i => i.id === id)
  if (instance) {
    instance.destroy()
  }
}

// 更新消息位置
const updateMessagePositions = () => {
  const GAP = 16 // 消息之间的间距
  let currentTop = 16 // 初始顶部距离
  
  instances.forEach((instance) => {
    const el = instance.vnode.el as HTMLElement
    if (el) {
      el.style.top = `${currentTop}px`
      currentTop += el.offsetHeight + GAP
    }
  })
}

// 创建快捷方法
const createMessage = (type: 'info' | 'success' | 'warning' | 'error') => {
  return (content: string, options: Partial<MessageProps> = {}) => {
    return Message({
      type,
      content,
      duration: 3000,
      ...options
    })
  }
}

export default {
  info: createMessage('info'),
  success: createMessage('success'),
  warning: createMessage('warning'),
  error: createMessage('error'),
}
