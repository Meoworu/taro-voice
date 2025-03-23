import { View } from '@tarojs/components';
import { Button as TaroButton } from '@tarojs/components';
import { ButtonProps } from '@tarojs/components/types/Button';
import classNames from 'classnames';
import './index.scss';

// @ts-ignore:next-line
interface Props extends ButtonProps {
  /**
   * 按钮类型
   * @default 'default'
   */
  type?: 'primary' | 'secondary' | 'default';
  /**
   * 按钮尺寸
   * @default 'medium'
   */
  size?: 'large' | 'medium' | 'small';
  /**
   * 自定义类名
   */
    className?: string;
    
    disabled?: ButtonProps['disabled'];
  /**
   * 子元素
   */
    children?: React.ReactNode;
}

const Button: React.FC<Props> = ({
  children,
  className,
  type,
  size = 'medium',
  disabled,
  ...props
}) => {
  const rootClass = classNames(
    'custom-button',
    `custom-button--${type}`,
    `custom-button--${size}`,
    {
      'custom-button--disabled': disabled
    },
    className
  );

  return (
    <TaroButton
      className={rootClass}
      disabled={disabled}
      {...props}
    >
      {children}
    </TaroButton>
  );
};

export default Button;