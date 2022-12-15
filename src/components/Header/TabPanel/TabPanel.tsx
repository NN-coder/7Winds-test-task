import clsx from 'clsx';
import { FC } from 'react';
import styles from './TabPanel.module.scss';
import { Props } from './TabPanel.types';

export const Component: FC<Props> = ({ tabs }) => (
  <nav className={styles.nav}>
    <ul className={styles.list}>
      {tabs.map(({ href, text, isActive }) => (
        <li key={`${href}-${text}`} className={styles.listItem}>
          <a
            href={href}
            aria-current={isActive && 'page'}
            className={clsx(styles.link, isActive && styles.active)}
          >
            {text}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

Component.displayName = 'TabPanel';
