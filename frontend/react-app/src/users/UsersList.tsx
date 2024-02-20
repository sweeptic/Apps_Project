import { Dispatch, FC, SetStateAction, useRef, useState } from 'react';

import { BaseContainer } from 'UI/BaseContainer';
import { BaseSearch } from 'UI/BaseSearch';
import { UserData } from 'store/dummy-data';
import { useSearch } from 'hooks/useSearch';

interface UserProps extends React.PropsWithChildren {
  usersData?: UserData[];
  selectedUser: Dispatch<SetStateAction<UserData | undefined>>;
}

export const UsersList: FC<UserProps> = ({ usersData, selectedUser }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const UserSearchInputRef = useRef<HTMLInputElement>(null);
  const searchKey = 'fullName';

  const { availableItems: availableUserItems } = useSearch(searchTerm, UserSearchInputRef, searchKey, usersData);

  return (
    <BaseContainer>
      {!usersData && <span>Loading...</span>}
      <BaseSearch setSearchTerm={setSearchTerm} searchInputRef={UserSearchInputRef} />
      <ul>
        {availableUserItems?.map((item, index) => {
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
