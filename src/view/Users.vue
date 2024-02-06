<script>
import axios from 'axios';

export default {
  name: 'Users',
  data() {
    return {
      users: [],
    };
  },
  methods: {
    getUsers() {
      axios.get('/users')
          .then((res) => {
            this.users = res.data;
          })
          .catch((error) => {
            console.error(error);
          });
    },
  },
  created() {
    this.getUsers();
  },
};
</script>

<template>

</template>
<!--<template>-->
<!--  <div>-->
<!--    <h1>Users</h1>-->
<!--    <div v-for="user in users" :key="user.id">-->
<!--      <h2>{{ user.last_name }}</h2>-->
<!--      <p>{{ user.mail }}</p>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->
