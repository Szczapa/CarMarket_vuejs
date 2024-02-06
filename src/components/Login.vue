<template>

  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your
        account</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form @submit.prevent="login">
        <div>
          <label class="block text-sm font-medium leading-6 text-gray-900 text-start" for="email">Email address</label>
          <div class="mt-2">
            <input id="mail" v-model="loginData.username" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                   required=""/>
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label class="block text-sm font-medium leading-6 text-gray-900" for="password">Password</label>
            <div class="text-sm">
              <a class="font-semibold text-indigo-600 hover:text-indigo-500" href="#">Forgot password?</a>
            </div>
          </div>
          <div class="mt-2">
            <input id="password" v-model="loginData.password" autocomplete="current-password" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                   required=""
                   type="password"/>
          </div>
        </div>

        <div class="py-5">
          <button class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  type="submit">
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
import router from "@/router/router.js";

export default {
  name: 'Login',
  data() {
    return {
      loginData: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    login() {
      const formData = new URLSearchParams();
      formData.append('username', this.loginData.username);
      formData.append('password', this.loginData.password);

      axios.post('/login', formData)
          .then(response => {
            if (response.status === 200) {
              localStorage.setItem('jwtToken', response.data.access_token);
              router.push({name: 'home'});
            }
          })
          .catch(error => {
            console.error(error);
            alert('Connection refused');
          });
    }
  }
};
</script>