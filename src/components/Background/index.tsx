import { View } from '@tarojs/components'
import { ViewProps } from '@tarojs/components/types/View'
import './index.scss'
import { NAVIGATION_BAR_HEIGHT } from '@/constant'
import Taro from '@tarojs/taro'

type BackgroundProps = {
  children?: React.ReactNode
  className?: string
} & ViewProps

const systemInfo = Taro.getSystemInfoSync();
const statusBarHeight = systemInfo.statusBarHeight;
export default function Background({
  children,
  className = '',
  ...props
}: BackgroundProps) {
  return (
    <View
      className={`background ${className}`}
      style={{top:`${NAVIGATION_BAR_HEIGHT + (statusBarHeight || 0)}px`}}
      {...props}
    >
      {children}
    </View>
  )
}