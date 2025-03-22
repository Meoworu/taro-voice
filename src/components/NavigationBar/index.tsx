import { View, Text } from "@tarojs/components";
import { memo } from 'react';
import Taro from '@tarojs/taro';
import './index.scss';
import { NAVIGATION_BAR_HEIGHT } from '@/constant';
import IconFont from '../IconFont';

interface PropsType {
    title?: string | React.ReactNode;
    showBack?: boolean;
    onBack?: () => void;
    rightContent?: React.ReactNode;
    backgroundColor?: string;
    textColor?: string;
}

const systemInfo = Taro.getSystemInfoSync();
const statusBarHeight = systemInfo.statusBarHeight;

function NavigationBar({
    title,
    showBack = false,
    onBack,
    rightContent,
    textColor = '#ffffff'
}: PropsType) {
    const handleBack = () => {
        if (onBack) {
            onBack();
        } else {
            Taro.navigateBack();
        }
    };

    return (
        <View 
          className='ling-nav-bar' 
          style={{ 
              height: `${NAVIGATION_BAR_HEIGHT + (statusBarHeight || 0)}px`, 
              paddingTop: `${statusBarHeight}px`, 
                color: textColor
            }}
        >
            <View className='nav-content'>
                {showBack && (
                    <View className='nav-back' onClick={handleBack}>
                        <IconFont className='back-icon'>&#xe631;</IconFont>
                    </View>
                )}
                <View className='nav-title'>
                    {typeof title === 'string' ? <Text>{title}</Text> : title}
                </View>
                <View className='nav-right'>
                    {rightContent}
                </View>
            </View>
        </View>
    );
}

export default memo(NavigationBar)
