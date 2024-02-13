export default {
    getUsers(state) {
        console.log('getters run', state.users);

        return state.users;
    },
};