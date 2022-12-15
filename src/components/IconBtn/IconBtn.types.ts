import { ButtonHTMLAttributes } from 'react';
import { IconType } from 'react-icons';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconType;
  title: string;
}
