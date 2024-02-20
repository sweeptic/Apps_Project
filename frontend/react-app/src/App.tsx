import './App.css';
import { FC, useEffect, useState } from 'react';

import { ProjectsList } from 'projects/ProjectsList';
import { UsersList } from 'users/UsersList';
import { UserData, getUsersData } from 'store/dummy-data';

export const App: FC = () => {
  const [usersData, setUsersData] = useState<UserData[]>();
  const [selectedUser, setSelectedUser] = useState<UserData>();

  useEffect(() => {
    async function fetchData() {
      const result = await getUsersData();
      setUsersData(result);
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h3>header</h3>
      </header>
      <main>
        <UsersList usersData={usersData} selectedUser={setSelectedUser} />
        <ProjectsList selectedUser={selectedUser} />
      </main>
    </div>
  );
};
