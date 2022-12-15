import { clsx } from 'clsx';
import { FC } from 'react';
import styles from './IconBtn.module.scss';
import { Props } from './IconBtn.types';

export const Component: FC<Props> = ({
  type = 'button',
  icon: Icon,
  className,
  ...props
}) => {
  return (
    <button type={type} className={clsx(styles.button, className)} {...props}>
      {<Icon aria-hidden className={styles.icon} />}
    </button>
  );
};

Component.displayName = 'IconBtn';
