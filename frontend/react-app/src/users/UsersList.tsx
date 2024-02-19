import { useSearch } from 'hooks/useSearch';
import { Dispatch, FC, SetStateAction, useEffect, useRef, useState } from 'react';
import { UserData } from 'store/dummy-data';
import { BaseContainer } from 'UI/BaseContainer';
import { BaseSearch } from 'UI/BaseSearch';

interface Props {
  children?: React.ReactNode;
  usersData?: UserData[];
  selectedUser: Dispatch<SetStateAction<UserData | undefined>>;
}

export const UsersList: FC<Props> = ({ usersData, selectedUser }) => {
  const searchKey = 'fullName';
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { availableItems } = useSearch(searchTerm, searchInputRef, searchKey, usersData);

  return (
    <BaseContainer>
      {!usersData && <span>Loading...</span>}
      <BaseSearch setSearchTerm={setSearchTerm} searchInputRef={searchInputRef} />
      <ul>
        {availableItems?.map((item, index) => {
          return (
            <li key={index}>
              <h3>{item.fullName}</h3>
              <button onClick={() => selectedUser(item)}>Projects</button>
            </li>
          );
        })}
      </ul>
    </BaseContainer>
  );
};
