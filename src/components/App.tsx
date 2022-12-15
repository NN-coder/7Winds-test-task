import { FC } from 'react';
import { Header } from './Header';
import { Sidebar, SidebarLink } from './Sidebar';

const links: SidebarLink[] = [
  'По проекту',
  'Объекты',
  'РД',
  'МТО',
  'СМР',
  'График',
  'МиМ',
  'Рабочие',
  'Капвложения',
  'Бюджет',
  'Финансирование',
  'Панорамы',
  'Камеры',
  'Поручения',
  'Контрагенты',
].map((text) => ({ text, href: '#', isActive: text === 'СМР' }));

export const App: FC = () => (
  <>
    <Header />
    <Sidebar
      links={links}
      projectName="Название проекта"
      projectAbbr="Аббревиатура"
    />
  </>
);
