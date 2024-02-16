import './App.css';
import { useEffect, useState } from 'react';

import { ProjectsList } from 'projects/ProjectsList';
import { UsersList } from 'users/UsersList';
import { UserData, getUsersData } from 'store/dummy-data';

function App() {
  const [usersData, setUsersData] = useState<undefined | UserData[]>(undefined);
  const [selectedUser, setSelectedUser] = useState<undefined | UserData>(undefined);

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
}

export default App;
