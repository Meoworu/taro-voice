import { View, Text } from '@tarojs/components'
import { AtFloatLayout } from 'taro-ui'
import { ReactNode } from 'react'
import './index.scss'
import IconFont from '../IconFont'

interface FloatLayoutProps {
    /** 是否显示 */
    isOpened: boolean
    /** 标题 */
    title?: string
    /** 内容区域 */
    children?: ReactNode
    /** 关闭时触发 */
    onClose?: () => void
    closed?: boolean
}

export default function FloatLayout({
    isOpened,
    title,
    children,
    onClose,
    closed,
    ...props
}: FloatLayoutProps) {
    return (
        <AtFloatLayout
            isOpened={isOpened}
            onClose={onClose}
            {...props}
        >
            <View className='float-layout-content'>
                {title && <View className='float-layout-title'>
                    <Text>{title}</Text>
                    {closed && <IconFont onClick={ onClose } className='icon-close'>&#xe639;</IconFont>}
                </View>}
                {children}
            </View>
        </AtFloatLayout>
    )
}