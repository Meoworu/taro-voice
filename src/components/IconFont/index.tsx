import { Text } from '@tarojs/components';
import './index.css';
import classNames from 'classnames';

interface PropsType {
    name?: string;
    size?: number;
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
}
function IconFont({name, children, className, onClick}: PropsType) {
    return <Text className={classNames('iconfont', className)} onClick={() => onClick?.()} style={{ fontFamily: "iconfont", fontStyle: "normal"}}>{ name || children }</Text>;
}

export default IconFont;