import { View, Button, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import NavigationBar from '@/components/NavigationBar'
import './index.scss'
import Background from '@/components/Background'
import TextArea from './components/TextArea'
import VoiceList from './components/VoiceList'
import AuthPage from '@/components/AuthPage'
import IconFont from '@/components/IconFont'
import VoiceSettings from './components/VoiceSettings'
import { useState } from 'react'

export default function CreationPage() {
    const [voiceSettingsOpened, setVoiceSettingsOpened] = useState(false)
    useLoad(() => {
        console.log('Page loaded.')
    })

    return (
        <View className='creation-page'>
            <NavigationBar
                title='首页'
            />
            <Background />
            <View className='home-content-box'>
                <View className='home-content'>
                    <TextArea />
                </View>
            </View>
            <View className='home-timbre-box'>
                <VoiceList />
            </View>
            <View className='home-footer'>
                <View className='footer-box'>
                    <View className='footer-set' onClick={() => setVoiceSettingsOpened(true)}>
                        <View className='icon-box'><IconFont>&#xe627;</IconFont></View>
                        <Text>声音设置</Text>
                    </View>
                    <View className='footer-set'>
                        <View className='icon-box'><IconFont className='qingxu'>&#xe602;</IconFont></View>
                        <Text>情绪</Text>
                    </View>
                    <View className='footer-set disabled'>
                        <View className='icon-box'><IconFont>&#xe601;</IconFont></View>
                        <Text>背景乐</Text>
                    </View>
                </View>
                <View className='footer-box'>
                    <Button type='primary' className='primary-button default'>合成试听</Button>
                    <Button type='primary' className='primary-button'>保存作品</Button>
                </View>
            </View>
            <AuthPage />
            <VoiceSettings
                isOpened={voiceSettingsOpened}
                onClose={() => setVoiceSettingsOpened(false)}
            />
        </View>
    )
}
