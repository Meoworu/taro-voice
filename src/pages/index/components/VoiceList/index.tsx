import { View, Image, ScrollView } from '@tarojs/components'
import './index.scss'
import IconFont from '@/components/IconFont'

interface VoiceItem {
  id: string
  avatar: string
  name: string
}

const mockVoices: VoiceItem[] = [
  { id: '1', avatar: 'https://lf9-appstore-sign.oceancloudapi.com/ocean-cloud-tos/FileBizType.BIZ_BOT_ICON/6591786_1741142333887266657.jpg?lk3s=db11200b&x-expires=1744679644&x-signature=tZo9nYn5huXSwQ1fDjde9QswhjM%3D', name: '温柔女声' },
  { id: '2', avatar: 'https://s.qunarzz.com/f_cms/2025/1742030063687_091222632.jpg', name: '磁性男声' },
  { id: '3', avatar: 'https://s.qunarzz.com/f_cms/2025/1742030063687_091222632.jpg', name: '童声' },
  { id: '4', avatar: 'https://s.qunarzz.com/f_cms/2025/1742030063687_091222632.jpg', name: '老年声' },
]

export default function VoiceList() {
  return (
    <View className='voice-list'>
      {mockVoices.map(voice => (
        <View key={voice.id} className='voice-item'>
          <Image className='voice-avatar' src={voice.avatar} />
          <View className='voice-name'>{voice.name}</View>
        </View>
      ))}
          <View key='more' className='voice-item'>
          <IconFont className='voice-avatar'>&#xe649;</IconFont>
          <View className='voice-name'>更多</View>
        </View>
    </View>
  )
}