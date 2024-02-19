import { Dispatch, FC, SetStateAction, forwardRef, useImperativeHandle, useRef } from 'react';
import './BaseSearch.css';

interface Props {
  children?: React.ReactNode;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  //   searchTerm: string;
  searchInputRef: any; // React.RefObject<HTMLInputElement>;
}

export const BaseSearch: FC<Props> = ({ setSearchTerm, searchInputRef }) => {
  return (
    <section className="searchSection">
      <input type="text" onChange={(ev) => setSearchTerm(ev.target.value)} ref={searchInputRef} />
    </section>
  );
};
