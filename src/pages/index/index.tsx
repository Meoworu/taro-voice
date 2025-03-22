import { View, Button } from '@tarojs/components'
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
                    <Button className='footer-set button' onClick={() => setVoiceSettingsOpened(true)}><IconFont>&#xe627;</IconFont>声音设置</Button>
                    <Button className='footer-set button'><IconFont className='qingxu'>&#xe7eb;</IconFont>情绪</Button>
                    <Button className='footer-set button disabled'><IconFont>&#xe601;</IconFont>背景乐</Button>
                </View>
                <View className='footer-box'>
                    <Button type='primary' className='primary-button'>合成试听</Button>
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
