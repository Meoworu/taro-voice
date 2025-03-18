import { View, Button } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import NavigationBar from '@/components/NavigationBar'
import './index.scss'
import Background from '@/components/Background'
import TextArea from './components/TextArea'
import VoiceList from './components/VoiceList'
import AuthPage from '@/components/AuthPage'

export default function CreationPage () {
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
        <Button type='primary' className='primary-button max'>开始创作</Button>
        <Button type='primary' className='primary-button'>分享微信</Button>
      </View>
      <AuthPage />
    </View>
  )
}
