import './App.css';
import { FC, useEffect, useState } from 'react';

import { ProjectsList } from 'projects/ProjectsList';
import { UsersList } from 'users/UsersList';
import { Projects, UserData, getUsersData } from 'store/dummy-data';
import axios from 'axios';
import { QueryFunctionContext, useQuery, useQueryClient } from 'react-query';
import { useGetPostById } from 'features/projects';

export const App: FC = () => {
  const { data: posts, error: errorPost, isLoading: postIsLoading } = useQuery('postsData', () => retrievePosts());

  //   const {
  //     data: projects,
  //     error: errorProject,
  //     isLoading: projectsIsLoading,
  //   } = useQuery('projectsData', (param) => loadProjects(param),);
  //   const [usersData, setUsersData] = useState<UserData[]>();
  const [selectedUser, setSelectedUser] = useState<UserData>();

  //   useEffect(() => {
  //     setUsersData(posts?.users);
  //   }, [posts]);

  return (
    <div className="App">
      <header className="App-header">
        <h3>header</h3>
      </header>
      <main>
        <UsersList usersData={posts?.users} selectedUser={setSelectedUser} isLoading={postIsLoading} />
        <ProjectsList selectedUser={selectedUser} />
      </main>
    </div>
  );
};

const retrievePosts = async () => {
  const response = await axios.get<{ users: UserData[] }>('http://localhost:5000/api/users');
  return response.data;
};

// const loadProjects = async (id: QueryFunctionContext<'projectsData', any>) => {
//   const response = await axios.get<{ users: Projects[] }>(`http://localhost:5000/api/projects/12`);
//   return response.data;
// };
