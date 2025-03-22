import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import NavigationBar from '../../components/NavigationBar'
import Background from '@/components/Background'
import ToolItem from './components/ToolItem'
import './index.scss'

export default function Tools() {
  useLoad(() => {
    console.log('Page loaded.')
  })

  const toolCategories = [
    {
      title: '热门工具',
      tools: [
        { icon: '\ue627', title: '语音合成' },
        { icon: '\ue616', title: '智能对话' },
        { icon: '\ue646', title: '文本翻译' }
      ]
    },
    {
      title: '视频',
      tools: [
        { icon: '\ue601', title: '视频剪辑' },
        { icon: '\ue7eb', title: '视频转换' },
        { icon: '\ue604', title: '视频压缩' }
      ]
    },
    {
      title: '文件',
      tools: [
        { icon: '\ue627', title: 'PDF转换' },
        { icon: '\ue616', title: '文件压缩' },
        { icon: '\ue646', title: '文件合并' }
      ]
    },
    {
      title: '图片',
      tools: [
        { icon: '\ue601', title: '图片编辑' },
        { icon: '\ue7eb', title: '图片压缩' },
        { icon: '\ue604', title: '图片转换' }
      ]
    }
  ]

  return (
    <View className='tools'>
      <NavigationBar
        title='工具'
      />
      <Background />
      <View className='tools-content'>
        {toolCategories.map((category, index) => (
          <View key={index} className='tools-group'>
            <View className='category-title'>{category.title}</View>
            <View className='tools-grid'>
              {category.tools.map((tool, toolIndex) => (
                <ToolItem
                  key={toolIndex}
                  icon={tool.icon}
                  title={tool.title}
                  onClick={() => console.log(`Clicked: ${tool.title}`)}
                />
              ))}
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}