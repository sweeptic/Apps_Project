export interface UserData {
  id: string;
  fullName: string;
  projects: Projects[];
}

export interface Projects {
  id: string;
  title: string;
}

const store: UserData[] = [
  {
    id: 'max',
    fullName: 'A Maximilian Schwarzmüller',
    projects: [
      { id: 'max_p1', title: 'Record the Vue course' },
      { id: 'max_p2', title: 'Create more courses' },
      { id: 'max_p3', title: 'Keep content updated' },
    ],
  },
  {
    id: 'manu',
    fullName: 'B Manuel Lorenz',
    projects: [
      { id: 'manu_p1', title: 'Create more courses' },
      { id: 'manu_p2', title: 'Dive into data science topics' },
      { id: 'manu_p3', title: 'Various things' },
    ],
  },
  {
    id: 'julie',
    fullName: 'C Julie Jones',
    projects: [
      { id: 'julie_p1', title: 'Create agenda for next months' },
      { id: 'julie_p2', title: 'Explore new topics' },
    ],
  },
  {
    id: 'michael',
    fullName: 'D Michael Miller',
    projects: [],
  },
];

function waitForFetching(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const getUsersData = async (): Promise<UserData[]> => {
  await waitForFetching(1500);
  return store;
};

// export default store;
