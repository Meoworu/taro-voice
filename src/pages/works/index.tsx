import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import NavigationBar from '../../components/NavigationBar'
import Background from '@/components/Background'
import WorkItem from './components/WorkItem'
import './index.scss'
import SwipeAction from '@/components/SwipeAction'

export default function Works() {
    useLoad(() => {
        console.log('Page loaded.')
    })

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
                                <SwipeAction key={item} options={[
                                    {
                                        text: '分享',
                                        style: {
                                            backgroundColor: '#7373d9'
                                        }
                                    },
                                    {
                                        text: '删除',
                                        style: {
                                            backgroundColor: '#FF4949'
                                        }
                                    }
                                ]}
                                >
                                    <WorkItem
                                        date='2023-01-01'
                                        avatar='https://avatars.githubusercontent.com/u/1?v=4'
                                        name='作品名称'
                                        onShare={() => { console.log('share') }}
                                    />
                                </SwipeAction>
                            )
                        })
                    }

                </View>
            </View>


        </View>
    )
}