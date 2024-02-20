import { FC, PropsWithChildren } from 'react';
import './BaseContainer.css';

export const BaseContainer: FC<PropsWithChildren> = ({ children }) => {
  return <section className="containerSection">{children}</section>;
};
