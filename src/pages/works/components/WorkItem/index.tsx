import { View, Text, Image } from '@tarojs/components'
import IconFont from '@/components/IconFont'
import './index.scss'
import SwipeAction from '@/components/SwipeAction'

export interface SwipeActionOptionsType {
    text: string
    type: 'share' | 'delete',
    [key: string]: any
}
interface WorkItemProps {
    avatar: string
    name: string
    date: string
    onSwipeAction: (item: any, type: SwipeActionOptionsType['type']) => void
}


export default function WorkItem({ avatar, name, date, onSwipeAction }: WorkItemProps) {
    return (
        <SwipeAction options={[
            {
                text: '分享',
                style: {
                    backgroundColor: '#7373d9'
                },
                type: 'share'
            },
            {
                type: 'delete',
                text: '删除',
                style: {
                    backgroundColor: '#FF4949'
                },
            }
        ]}
            autoClose={true}
            onClick={(e: SwipeActionOptionsType) => onSwipeAction({}, e.type)}
        >
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
                    <View className='share-btn' onClick={() => {}}>
                        <IconFont>&#xe64f;</IconFont>
                    </View>
                </View>
            </View>
        </SwipeAction>

    )
}