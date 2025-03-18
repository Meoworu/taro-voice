// 授权
import { useEffect } from 'react';
import Taro from '@tarojs/taro';

interface UserInfo {
    avatarUrl: string
    city: string
    country: string
    gender: number
    language: string
    nickName: string
    province: string
}

export const useAuth = () => {
    useEffect(() => {
        // Taro.getSetting：获取用户的当前设置。返回值中只会出现小程序已经向用户请求过的权限。
        Taro.getSetting({
            success: (res) => {
                if (!res.authSetting['scope.userInfo']) {
                    // 用户已经授权过，可以直接获取用户信息
                    getUserInfo();
                } else {
                    // 用户未授权，需要弹出授权窗口
                    showAuthModal();
                }
            }
        });
    }, []);
};
const showAuthModal = () => {
    Taro.showModal({
        title: '授权提示',
        content: '需要获取您的用户信息',
        confirmText: '去授权',
        cancelText: '取消',
        success: (res) => {
            if (res.confirm) {
                // 用户点击确认，打开授权设置页面
                openSetting();
            }
        }
    });
};

const openSetting = () => {
    // Taro.openSetting：调起客户端小程序设置界面，返回用户设置的操作结果。设置界面只会出现小程序已经向用户请求过的权限。
    Taro.openSetting({
        success: (res) => {
            if (res.authSetting['scope.userInfo']) {
                // 用户授权成功，可以获取用户信息
                getUserInfo();
            } else {
                // 用户拒绝授权，提示授权失败
                Taro.showToast({
                    title: '授权失败',
                    icon: 'none'
                });
            }
        }
    });
};

const getUserInfo = () => {
    Taro.getUserInfo({
        success: (res) => {
            // 存储用户信息
            saveUserInfo(res);
        }
    });
};


export const saveUserInfo = (res: Taro.getUserInfo.SuccessCallbackResult) => {
    const { encryptedData, iv, userInfo } = res;
    console.log(encryptedData, iv);
    // 将用户信息存储到本地
    Taro.setStorageSync('userInfo', userInfo);
    // 在这里将 encryptedData 和 iv 传给后端解密获取用户信息
};

// 获取存储的用户信息
export const getStoredUserInfo = () => {
    return Taro.getStorageSync('userInfo') as UserInfo;
};

export function getPhoneNumber(e) {
    if (e.detail.errMsg === 'getPhoneNumber:ok') {
      console.log('加密数据:', e.detail.encryptedData);
      console.log('初始向量:', e.detail.iv);
      // 将 encryptedData 和 iv 发送到服务器进行解密
    } else {
      console.log('用户拒绝授权');
    }
}
