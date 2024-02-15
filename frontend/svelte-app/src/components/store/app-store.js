import { writable } from 'svelte/store';

const users = writable([]);

const customUsersStore = {
    subscribe: users.subscribe,

    setUsers: (usersArray) => users.set(usersArray),

}

/** 
     @type {
    {
        id: string,
        fullName: string
        projects: {
            id: string,
            title: string}[]   
    }[]
    }
    */


export default customUsersStore;