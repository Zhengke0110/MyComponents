export interface MessageProps {
  type?: 'info' | 'success' | 'warning' | 'error'
  content: string
  duration?: number
  closable?: boolean
  onClose?: () => void
}
