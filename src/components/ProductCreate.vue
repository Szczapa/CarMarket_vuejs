<template>
  <div>
    <h1>Create Product</h1>
    <form @submit.prevent="createProduct">
      <div>
        <label for="pseudo">Pseudo:</label>
        <input id="pseudo" v-model="NewProduct.pseudo" type="text">
      </div>
      <div>
        <label for="mail">Email:</label>
        <input id="mail" v-model="NewProduct.mail" type="email">
      </div>
      <div>
        <label for="firstName">First Name:</label>
        <input id="firstName" v-model="NewProduct.first_name" type="text">
      </div>
      <div>
        <label for="lastName">Last Name:</label>
        <input id="lastName" v-model="NewProduct.last_name" type="text">
      </div>
      <div>
        <label for="password">Password:</label>
        <input id="password" v-model="NewProduct.password" type="password">
      </div>
      <button type="submit">Create User</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CreateProduct',
  data() {
    return {
      NewProduct: {
        pseudo: '',
        mail: '',
        first_name: '',
        last_name: '',
        password: ''
      }
    };
  },
  methods: {
    createProduct() {
      axios.post('/product', this.NewProduct)
          .then(response => {
            if (response.status === 201) {
              alert('Product created successfully');
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
