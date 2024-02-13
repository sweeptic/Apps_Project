import { createStore } from 'vuex';
import usersModule from './modules/users/index';

const store = createStore({
    modules: {
        users: usersModule,
    },

});

export default store;