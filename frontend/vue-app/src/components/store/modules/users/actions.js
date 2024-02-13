import dummyData from "@/dummy-data";
// import { toRef } from "vue";

export default {

    loadUsers(context) {
        const users = dummyData
        console.log('DISPATCH');

        setTimeout(() => {
            context.commit('setUsers', users);
        }, 1000);

    }

};