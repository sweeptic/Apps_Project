import { Dispatch, FC, SetStateAction } from 'react';
import './BaseSearch.css';

interface BaseProps extends React.PropsWithChildren {
  setSearchTerm: Dispatch<SetStateAction<string>>;
  searchInputRef: React.RefObject<HTMLInputElement>;
}

export const BaseSearch: FC<BaseProps> = ({ setSearchTerm, searchInputRef }) => {
  return (
    <section className="searchSection">
      <input type="text" onChange={(ev) => setSearchTerm(ev.target.value)} ref={searchInputRef} />
    </section>
  );
};
