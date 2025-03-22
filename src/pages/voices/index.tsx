import { View, Image } from '@tarojs/components'
import NavigationBar from '@/components/NavigationBar'
import './index.scss'
import Background from '@/components/Background'
import { AtSearchBar } from 'taro-ui'
import { useState } from 'react'
import classNames from 'classnames'

interface VoiceCategory {
    id: string
    title: string
    items: VoiceItem[]
}

interface VoiceItem {
    id: string
    avatar: string
    name: string
    tags: string[]
    status: 'using' | 'use'
}

const mockVoiceCategories: VoiceCategory[] = [
    {
        id: '1',
        title: '热门',
        items: [
            {
                id: '1',
                avatar: 'https://lf9-appstore-sign.oceancloudapi.com/ocean-cloud-tos/FileBizType.BIZ_BOT_ICON/6591786_1741142333887266657.jpg?lk3s=db11200b&x-expires=1744679644&x-signature=tZo9nYn5huXSwQ1fDjde9QswhjM%3D',
                name: '在宇（影视模式）',
                tags: ['SVIP', '13种精选'],
                status: 'use'
            },
            {
                id: '2',
                avatar: 'https://lf9-appstore-sign.oceancloudapi.com/ocean-cloud-tos/FileBizType.BIZ_BOT_ICON/6591786_1741142333887266657.jpg?lk3s=db11200b&x-expires=1744679644&x-signature=tZo9nYn5huXSwQ1fDjde9QswhjM%3D',
                name: '在宇（小帅）',
                tags: ['SVIP', '13种精选'],
                status: 'using'
            }
        ]
    },
    {
        id: '2',
        title: '新声',
        items: [
            {
                id: '3',
                avatar: 'https://lf9-appstore-sign.oceancloudapi.com/ocean-cloud-tos/FileBizType.BIZ_BOT_ICON/6591786_1741142333887266657.jpg?lk3s=db11200b&x-expires=1744679644&x-signature=tZo9nYn5huXSwQ1fDjde9QswhjM%3D',
                name: '张小可',
                tags: ['SVIP', '15种精选'],
                status: 'use'
            }
        ]
    }
]

export default function VoicesPage() {
    const [value, setValue] = useState('')
    const [groups, setGroups] = useState<VoiceCategory>(mockVoiceCategories[0])

    const onActionClick = () => {
        console.log('onActionClick')
    }
    return (
        <View className='voices-page'>
            <NavigationBar title='音色' />
            <View className='voices-page-content'>
                {/* <AtSearchBar
                        showActionButton
                        value={value}
                        onChange={(value) => setValue(value)}
                        onActionClick={onActionClick}
                    /> */}
                <View className='content-box'>
                    <View className='category-list'>
                        {mockVoiceCategories.map(category => (
                            <View
                                key={category.id}
                                onClick={() => setGroups(category)}
                                className={classNames('category-title', {active: category.id === groups?.id})}
                            >
                                {category.title}
                            </View>
                        ))}
                    </View>
                    <View className='voice-categories'>
                        {
                            groups?.items?.map(item => (
                                <View key={item.id} className='voice-item'>
                                    <View className='voice-avatar-wrapper'>
                                        <Image className='voice-avatar' src={item.avatar} />
                                    </View>
                                    <View className='voice-info'>
                                        <View className='voice-name'>{item.name}</View>
                                        <View className='voice-tags'>
                                            {item.tags.map((tag, index) => (
                                                <View key={index} className='tag'>{tag}</View>
                                            ))}
                                        </View>
                                    </View>
                                    <View className={`use-btn ${item.status}`}>
                                        {item.status === 'using' ? '使用中' : '使用'}
                                    </View>
                                </View>
                            ))
                        }
                    </View>
                </View>
            </View>
        </View>
    )
}