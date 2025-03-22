import { View, Text } from '@tarojs/components'
import IconFont from '@/components/IconFont'
import './index.scss'

interface ToolItemProps {
  icon: string
  title: string
  onClick?: () => void
}

export default function ToolItem({ icon, title, onClick }: ToolItemProps) {
  return (
    <View className='tool-item' onClick={onClick}>
      <View className='tool-icon'>
        <IconFont>{icon}</IconFont>
      </View>
      <Text className='tool-title'>{title}</Text>
    </View>
  )
}