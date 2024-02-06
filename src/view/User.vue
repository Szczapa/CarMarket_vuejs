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
    <div class="px-4 sm:px-0 py-auto">
      <h3 class="text-base font-semibold leading-7 text-gray-900">Information utilisateur</h3>
      <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Mon profil utilisateur.</p>
    </div>
    <div class="mt-6 border-t border-gray-100 ">
      <dl class="divide-y divide-gray-100">
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">Nom entier</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ user.first_name +" "+user.last_name }}</dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">Role</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Backend Developer</dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">Adresse Email</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ user.mail }}</dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">About</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.</dd>
        </div>
      </dl>
    </div>
  </div>
</template>
<!--<template>-->
<!--  <div>-->
<!--    <h1>{{ user.first_name }}</h1>-->
<!--    <p>{{ user.last_name }}</p>-->
<!--    <p>{{ user.mail }}</p>-->
<!--  </div>-->
<!--</template>-->