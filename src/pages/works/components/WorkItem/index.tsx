import { View, Text, Image } from '@tarojs/components'
import IconFont from '@/components/IconFont'
import './index.scss'
import SwipeAction from '@/components/SwipeAction'

interface WorkItemProps {
    avatar: string
    name: string
    date: string
    onShare?: () => void
}

export default function WorkItem({ avatar, name, date, onShare }: WorkItemProps) {
    return (
        <View className='work-item'>
            <View className='work-item-left'>
                <Image
                    src={avatar}
                    className='avatar'
                />
            </View>
            <View className='work-item-center'>
                <Text className='name'>{name}</Text>
                <Text className='date'>{date}</Text>
            </View>
            <View className='work-item-right'>
                <View className='share-btn' onClick={onShare}>
                    <IconFont>&#xe64f;</IconFont>
                </View>
            </View>
        </View>

    )
}