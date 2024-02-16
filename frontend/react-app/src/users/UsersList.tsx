import { Dispatch, FC, SetStateAction } from 'react';
import { UserData } from 'store/dummy-data';
import { BaseContainer } from 'UI/BaseContainer';

interface Props {
  children?: React.ReactNode;
  usersData?: UserData[];
  selectedUser: Dispatch<SetStateAction<UserData | undefined>>;
}

export const UsersList: FC<Props> = ({ usersData, selectedUser }) => {
  return (
    <BaseContainer>
      <ul>
        {usersData?.map((item, index) => {
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
