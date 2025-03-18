import { View } from '@tarojs/components';
import Taro, { useRouter } from '@tarojs/taro';
import Icon from '../components/IconFont';
import { memo } from 'react';
import './index.scss';
import classNames from 'classnames';


interface TabItem {
    pagePath: string;
    text: string;
    iconName: string;
}

const tabList: TabItem[] = [
    {
        pagePath: '/pages/index/index',
        text: '首页',
        iconName: '\ue72d'
    },
    {
        pagePath: '/pages/tools/index',
        text: '工具',
        iconName: '\ue6ae'
    },
    {
        pagePath: '/pages/works/index',
        text: '作品',
        iconName: '\ue617'
    },
    {
        pagePath: '/pages/profile/index',
        text: '我的',
        iconName: '\ue8bb'
    }
];
function CustomTabBar() {
    const router = useRouter();
    const switchTab = (item: TabItem) => {
        Taro.switchTab({
            url: item.pagePath
        });
    };

    return (
        <View className='tab-bar'>
            <View className='tab-bar-content'>
                {tabList.map((item) => (
                    <View
                      key={item.pagePath}
                      className={classNames('tab-bar-item', { selected: router.path.includes(item.pagePath) })}
                      onClick={() => switchTab(item)}
                    >
                        <Icon name={item.iconName} />
                        <View className='tab-bar-item-text'>{item.text}</View>
                    </View>
                ))}
            </View>
        </View>
    );
}

export default memo(CustomTabBar);