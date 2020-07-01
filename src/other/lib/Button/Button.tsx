import React, { ReactElement, ReactNode, FC } from 'react';
import classNames from 'classnames';

import { handlerScrollToId } from 'other/utils';
import './Button.scss';

export interface ButtonProps {
  className?: string;
  type?: 'primary' | 'success' | 'link';
  to?: string;
  target?: string;
  iconPos?: 'right' | 'left';
  size?: 'lg';
  color?: string;
  scrollToId?: string;
  scrollOffset?: number;
  disabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({
  className,
  type,
  to,
  target,
  iconPos,
  size,
  color,
  scrollToId,
  scrollOffset,
  disabled,
  onClick,
  children,
}: ButtonProps): ReactElement => {
  const classes = classNames('Button', {
    Button__default: !type,
    Button__primary: type === 'primary',
    Button__success: type === 'success',
    Button__link: type === 'link',
    'Button__link--success': color === 'success',
    'Button__iconPos--left': iconPos === 'left',
    'Button__iconPos--right': iconPos === 'right',
    'Button__size--lg': size === 'lg',
    [`${className}`]: className,
  });

  if (to) {
    return (
      <a className={classes} href={to} target={target} onClick={onClick}>
        {children}
      </a>
    );
  }

  if (scrollToId) {
    return (
      <button
        className={classes}
        onClick={() => handlerScrollToId(scrollToId, scrollOffset)}
        type='button'
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      type='button'
    >
      {children}
    </button>
  );
};

export default Button;
