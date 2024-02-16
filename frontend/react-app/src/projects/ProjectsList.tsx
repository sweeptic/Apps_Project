import { FC } from 'react';
import './ProjectsList.css';
import { BaseContainer } from 'UI/BaseContainer';
import { UserData } from 'store/dummy-data';

interface Props {
  children?: React.ReactNode;
  selectedUser?: UserData;
}

export const ProjectsList: FC<Props> = ({ selectedUser }) => {
  return (
    <BaseContainer>
      {!selectedUser && <span>There is no selected user.</span>}
      <>
        <h3>{selectedUser?.fullName}</h3>
        <ul>
          {selectedUser?.projects.map((item, index) => {
            return (
              <li>
                <h4>{item?.title}</h4>
              </li>
            );
          })}
        </ul>
      </>
    </BaseContainer>
  );
};
