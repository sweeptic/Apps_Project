import { FC } from 'react';
import './BaseContainer.css';

interface Props {
  children: React.ReactNode;
}

export const BaseContainer: FC<Props> = ({ children }) => {
  return <section className="containerSection">{children}</section>;
};
