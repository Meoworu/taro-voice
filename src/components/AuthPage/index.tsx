// 页面组件示例
import { Button, View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'
import { useEffect, useState } from 'react';
import { getStoredUserInfo, saveUserInfo } from '@/utils/login';
import FloatLayout from '../FloatLayout';

export default function AuthPage() {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const handleGetUserInfo = async (e) => {
        if (e.detail.userInfo) {
            // 用户同意授权
            try {
                saveUserInfo(e.detail);
            } catch (error) {
                Taro.showToast({ title: '登录失败', icon: 'none' })
            }
        } else {
            // 用户拒绝
            Taro.showToast({ title: '需要授权才能使用完整功能', icon: 'none' })
        }
        setIsOpened(false);
    }

    useEffect(() => {
        const userInfo = getStoredUserInfo();
        if (!userInfo) {
            setIsOpened(true);
        }
    }, [])

    return (
        <FloatLayout isOpened={isOpened} onClose={() => setIsOpened(false)}>
            <View className='auth-layer'>
                <View className='auth-content'>
                    <View className='title'>隐私保护指引</View>
                    <View className='tip'>在你使用小程序之前，请仔细阅读<Text style={{color:"#00D4E3"}}>《AI 文字转语音小程序隐私保护指引》</Text>如果你同意《AI 文字转语音小程序隐私保护指引》，请点击“同意”开始使用小程序，如果你拒绝，本小程序部分功能你将无法使用</View>
                </View>
                <View className='auth-footer'>
                    <Button
                      className='close-btn'
                      onClick={() => setIsOpened(false)}
                    >
                        拒绝
                    </Button>

                    <Button
                      openType='getUserInfo'
                      onGetUserInfo={handleGetUserInfo}
                      className='auth-btn'
                    >
                        同意
                    </Button>
                </View>
            </View>
        </FloatLayout>
    )
}

