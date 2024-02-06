<script>
import axios from 'axios';

export default {
  name: 'User',
  data() {
    return {
      user: {},
    };
  },
  methods: {
    getUser(id) {
      axios.get('/user/' + id)
          .then((res) => {
            this.user = res.data;
          })
          .catch((error) => {
            console.error(error);
          });
    }
  },
  created() {
    this.getUser(this.$route.params.id);
  },
}
</script>

<template>
  <div>
    <h1>{{ user.first_name }}</h1>
    <p>{{ user.last_name }}</p>
    <p>{{ user.mail }}</p>
  </div>
</template>