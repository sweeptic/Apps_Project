import { Dispatch, FC, SetStateAction, useEffect, useRef, useState } from 'react';

import { BaseContainer } from 'UI/BaseContainer';
import { BaseSearch } from 'UI/BaseSearch';
import { UserData } from 'store/dummy-data';
import { useSearch } from 'hooks/useSearch';
import { useDispatch, useSelector } from 'react-redux';
import { hideLoader, selectLoaderState, showLoader } from 'store/common';

interface UserProps extends React.PropsWithChildren {
  usersData?: UserData[];
  selectedUser: Dispatch<SetStateAction<UserData | undefined>>;
}

enum SearchKey {
  FULLNAME = 'fullName',
}

export const UsersList: FC<UserProps> = ({ usersData, selectedUser }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const UserSearchInputRef = useRef<HTMLInputElement>(null);
  const searchKey = SearchKey.FULLNAME;

  const { availableItems: availableUserItems } = useSearch(searchTerm, UserSearchInputRef, searchKey, usersData);

  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoaderState);

  useEffect(() => {
    usersData ? dispatch(hideLoader()) : dispatch(showLoader());
  }, [usersData, dispatch]);

  return (
    <BaseContainer isLoading={isLoading.show}>
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
