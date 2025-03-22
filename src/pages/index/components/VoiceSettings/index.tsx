import { View, Slider, Button } from '@tarojs/components'
import { useState } from 'react'
import FloatLayout from '@/components/FloatLayout'
import "taro-ui/dist/style/components/slider.scss";
import './index.scss'

interface VoiceSettingsProps {
    isOpened: boolean
    onClose: () => void
}

export default function VoiceSettings({ isOpened, onClose }: VoiceSettingsProps) {
    const [speed, setSpeed] = useState(50)
    const [pitch, setPitch] = useState(50)
    const [volume, setVolume] = useState(50)

    return (
        <FloatLayout
            isOpened={isOpened}
            onClose={onClose}
            title='语音设置'
            closed
        >
            <View className='voice-settings'>
                <View className='slider-box'>
                    <View className='slider-item'>
                        <View className='slider-label'>语速</View>
                        <Slider
                            value={speed}
                            min={0}
                            max={100}
                            onChange={(e) => setSpeed(e.detail.value)}
                        />
                    </View>
                    <View className='slider-item'>
                        <View className='slider-label'>语调</View>
                        <Slider
                            value={pitch}
                            min={0}
                            max={100}
                            onChange={(e) => setPitch(e.detail.value)}
                        />
                    </View>
                    <View className='slider-item'>
                        <View className='slider-label'>音量</View>
                        <Slider
                            selectedColor='#000'
                            value={volume}
                            min={0}
                            max={100}
                            onChange={(e) => setVolume(e.detail.value)}
                        />
                    </View>
                </View>
                <View className='footer-action'>
                    <Button>取消</Button>
                    <Button type='primary'>确定</Button>
                </View>
            </View>
        </FloatLayout>
    )
}