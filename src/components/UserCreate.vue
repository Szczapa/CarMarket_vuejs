<template>
  <div>
    <h1>Create User</h1>
    <form @submit.prevent="createUser">
      <div>
        <label for="pseudo">Pseudo:</label>
        <input id="pseudo" v-model="newUser.pseudo" type="text">
      </div>
      <div>
        <label for="mail">Email:</label>
        <input id="mail" v-model="newUser.mail" type="email">
      </div>
      <div>
        <label for="firstName">First Name:</label>
        <input id="firstName" v-model="newUser.first_name" type="text">
      </div>
      <div>
        <label for="lastName">Last Name:</label>
        <input id="lastName" v-model="newUser.last_name" type="text">
      </div>
      <div>
        <label for="password">Password:</label>
        <input id="password" v-model="newUser.password" type="password">
      </div>
      <button type="submit">Create User</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CreateUser',
  data() {
    return {
      newUser: {
        pseudo: '',
        mail: '',
        first_name: '',
        last_name: '',
        password: ''
      }
    };
  },
  methods: {
    createUser() {
      axios.post('/user', this.newUser)
          .then(response => {
            if (response.status === 201) {
              alert('User created successfully');
            }
          })
          .catch(error => {
            console.error(error);
            alert('There was an error creating the user');
          });
    }
  }
};
</script>
