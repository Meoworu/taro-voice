import { Text } from '@tarojs/components';
import './index.css';
import classNames from 'classnames';

interface PropsType {
    name?: string;
    size?: number;
    children?: React.ReactNode;
    className?: string;
}
function IconFont({name, children, className}: PropsType) {
    return <Text className={classNames('iconfont', className)} style={{ fontFamily: "iconfont", fontStyle: "normal"}}>{ name || children }</Text>;
}

export default IconFont;