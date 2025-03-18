import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import NavigationBar from '../../components/NavigationBar'
import Background from '@/components/Background'
import WorkItem from './components/WorkItem'
import { AtSwipeAction } from 'taro-ui'
import './index.scss'

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
        <View className='works-action-box'>

        </View>
        <View className='works-list-box'>
        <AtSwipeAction options={[
  {
    text: '取消',
    style: {
      backgroundColor: '#6190E8'
    }
  },
  {
    text: '确认',
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
            </AtSwipeAction>
        </View>
      </View>
     
      
    </View>
  )
}