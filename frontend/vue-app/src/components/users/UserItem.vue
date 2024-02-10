<template>
  <li>
    <h3>
      <span>{{ userName }}</span>
      <br />
      <span>{{ user_name }}</span>
      <br />
      <span>{{ user_name_reactive.fullName }}</span>
      <br />
      <span>{{ user_name_reactive_2.fullName }}</span>
    </h3>
  </li>
</template>

<script>
import { toRefs } from 'vue';
export default {
  props: ['id', 'userName', 'user'],

  setup(props) {
    const { user } = toRefs(props);
    const userRef = user;
    // const userDebug = props;
    // console.log('props', props);
    // console.log('user', user);
    // console.log('userDebug', userDebug);
    // const { userName } = user;
    // console.log('userName', userName);
    // return { user: user.value };
    return { user_name: user.value.fullName, user_name_reactive: user.value, user_name_reactive_2: userRef };
  },
};
</script>
