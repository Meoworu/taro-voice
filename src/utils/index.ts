import Taro from '@tarojs/taro';

export function uuid(len = 8, radix = 16) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    const value:string[] = [];
    let i = 0;
    radix = radix || chars.length;
    if (len) {
        // Compact form
        for (i = 0; i < len; i++)
            value[i] = chars[0 | (Math.random() * radix)];
    }
    else {
        // rfc4122, version 4 form
        let r;
        // rfc4122 requires these characters
        /* eslint-disable-next-line */
        value[8] = value[13] = value[18] = value[23] = '-';
        value[14] = '4';
        // Fill in random data.  At i==19 set the high bits of clock sequence as
        // per rfc4122, sec. 4.1.5
        for (i = 0; i < 36; i++) {
            if (!value[i]) {
                r = 0 | (Math.random() * 16);
                value[i] = chars[i === 19 ? (r & 0x3) | 0x8 : r];
            }
        }
    }
    return value.join('');
}
export function delay(delayTime = 25) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(true);
        }, delayTime);
    });
}

export function delayGetClientRect({ selectorStr, delayTime = 500 }) {
    const selector = Taro.createSelectorQuery();
    return new Promise(resolve => {
        delay(delayTime).then(() => {
            selector
                .select(selectorStr)
                .boundingClientRect()
                .exec((res) => {
                resolve(res);
            });
        });
    });
}
export function truncateString(str: string): string {
    if (!str || str.length <= 4) return str;
    return str.substring(0, 3) + '...';
}