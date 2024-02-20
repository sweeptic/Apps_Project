import { FC, PropsWithChildren } from 'react';
import './BaseContainer.css';
import { Spinner } from './spinner/Spinner';

interface BaseContainerProps extends PropsWithChildren {
  isLoading?: boolean;
}

export const BaseContainer: FC<BaseContainerProps> = ({ children, isLoading = false }) => {
  return <section className="containerSection">{isLoading ? <Spinner /> : children}</section>;
};

//   {
//     isLoading.show && <Spinner />;
//   }
