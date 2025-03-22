import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import NavigationBar from '../../components/NavigationBar'
import Background from '@/components/Background'
import WorkItem, { SwipeActionOptionsType } from './components/WorkItem'
import './index.scss'
import Taro from '@tarojs/taro'

export default function Works() {
    useLoad(() => {
        console.log('Page loaded.')
    })

    const onShare = (item: any) => {
        Taro.showModal({
            title: '分享',
            content: `确认分享：${item.name}`,
            success: function (res) {
                if (res.confirm) {
                    console.log('用户点击确定')
                } else if (res.cancel) {
                    console.log('用户点击取消')
                }
            }
        })
    }

    const onDelete = (item: any) => {
        Taro.showModal({
            title: '删除',
            content: `确认删除：${item.name}`,
            success: function (res) {
                if (res.confirm) {
                    console.log('用户点击确定')
                } else if (res.cancel) {
                    console.log('用户点击取消')
                }
            }
        })
    }

    const onSwipeAction = (item: any, type: SwipeActionOptionsType['type']) => {
        if (type === 'delete') {
            onDelete(item)
        } else if (type === 'share') {
            onShare(item)
        }
    }

    return (
        <View className='works'>
            <NavigationBar
                title='作品'
            />
            <Background />
            <View className='works-content-box'>
                <View className='works-list-box'>
                    {
                        [1, 2, 3].map((item) => {
                            return (
                                <WorkItem
                                    onSwipeAction={onSwipeAction}
                                    key={item}
                                    date='2023-01-01'
                                    avatar='https://avatars.githubusercontent.com/u/1?v=4'
                                    name='作品名称'
                                />
                            )
                        })
                    }

                </View>
            </View>


        </View>
    )
}