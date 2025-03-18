import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import NavigationBar from '../../components/NavigationBar'
import Background from '@/components/Background'

export default function Tools() {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='tools'>
      <NavigationBar
        title='工具'
      />
          <Background />
      <Text>工具页面</Text>
    </View>
  )
}