import { FC } from 'react';
import { MdApps, MdReply } from 'react-icons/md';
import { IconBtn } from '../IconBtn';
import styles from './Header.module.scss';
import { TabPanel } from './TabPanel';
import { Tab } from './TabPanel/TabPanel.types';

const tabs: Tab[] = [
  { href: '#', text: 'Просмотр', isActive: true },
  { href: '#', text: 'Управление', isActive: false },
];

export const Component: FC = () => {
  return (
    <header className={styles.header}>
      <IconBtn icon={MdApps} title="Title" />
      <IconBtn icon={MdReply} title="Title" />
      <TabPanel tabs={tabs} />
    </header>
  );
};

Component.displayName = 'Header';
