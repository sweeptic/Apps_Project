import { writable } from 'svelte/store';

const users = writable([]);

const customUsersStore = {
    subscribe: users.subscribe,

    // @ts-ignore
    setUsers: (/** @type {any[]} */ usersArray) => users.set(usersArray),

}



export default customUsersStore;