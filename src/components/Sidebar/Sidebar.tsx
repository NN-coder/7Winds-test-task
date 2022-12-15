import { FC } from 'react';
import styles from './Sidebar.module.scss';
import { Props } from './Sidebar.types';
import { MdDashboard, MdExpandMore } from 'react-icons/md';
import clsx from 'clsx';
import { IconBtn } from '../IconBtn';

export const Component: FC<Props> = ({ links, projectName, projectAbbr }) => (
  <nav className={styles.nav}>
    <div className={styles.header}>
      <div>
        <h2>{projectName}</h2>
        <abbr title="Title">{projectAbbr}</abbr>
      </div>
      <IconBtn icon={MdExpandMore} title="Title" />
    </div>

    <ul className={styles.list}>
      {links.map(({ href, text, isActive }) => (
        <li key={`${href}-${text}`} className={styles.listItem}>
          <a
            href={href}
            className={clsx(styles.link, isActive && styles.active)}
          >
            <MdDashboard size="1.25rem" />
            {text}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

Component.displayName = 'Sidebar';
