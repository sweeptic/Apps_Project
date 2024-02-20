import { FC, useRef, useState } from 'react';

import { BaseContainer } from 'UI/BaseContainer';
import { BaseSearch } from 'UI/BaseSearch';
import { UserData } from 'store/dummy-data';
import { useSearch } from 'hooks/useSearch';
import './ProjectsList.css';

interface ProjectsProps {
  selectedUser?: UserData;
}

export const ProjectsList: FC<ProjectsProps> = ({ selectedUser }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const ProjectSearchInputRef = useRef<HTMLInputElement>(null);
  const userProjects = selectedUser?.projects;
  const searchKey = 'title';

  const { availableItems: availableProjectItems } = useSearch(
    searchTerm,
    ProjectSearchInputRef,
    searchKey,
    userProjects
  );

  return (
    <BaseContainer>
      {!selectedUser && <span>There is no selected user.</span>}
      <>
        <h3>{selectedUser?.fullName}</h3>
        <BaseSearch setSearchTerm={setSearchTerm} searchInputRef={ProjectSearchInputRef} />
        <ul>
          {availableProjectItems?.map((item, index) => {
            return (
              <li key={index}>
                <h4>{item?.title}</h4>
              </li>
            );
          })}
        </ul>
      </>
    </BaseContainer>
  );
};
