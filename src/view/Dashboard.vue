<template>
  <div class="w-screen h-screen flex">
    <!-- Side bar -->
    <div v-show="showSide" class="w-[400px] h-full bg-gray-200 text-white">
      <div class="h-[50px] bg-gray-900 flex justify-start  items-center ">
        <div class="px-[20px]">
          <h3 class="font-bold text-xl"> <router-link to="/">Car Market Admin</router-link></h3>
        </div>
      </div>
      <div class="h-[calc(100vh-50px)] bg-gray-800 py-[20px]">
        <div class="flex flex-col justify-between h-full px-[20px] space-y-[10px]">
          <div class=" flex flex-col justify-between space-y-[10px]">
            <router-link
                class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out"
                to="/products">
              <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor"
                   viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      fill-rule="evenodd"></path>
              </svg>
              Produits
            </router-link>
            <router-link
                class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out"
                to="/users">
              <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor"
                   viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
              </svg>
              Utilisateurs
            </router-link>
          </div>
          <div class="h-[50px]">
            <div>
              <router-link
                  class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-800  transition duration-400 ease-in-out"
                  to="/me">
                <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor"
                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clip-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        fill-rule="evenodd"></path>
                </svg>
                About me
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full h-full bg-gray-400">
      <div class="h-[50px] bg-gray-100 flex items-center shadow-sm px-[20px] w-full py-[10px] z-10 border-b ">
        <!-- Hambuger menu -->
        <div class="cursor-pointer w-[30px]" @click="toggleSideBar">
          <svg class=" w-[25px] h-[25px]" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
          </svg>
        </div>
        <!-- Search bar -->

        <div class="w-[calc(100%-30px)] flex">
          <div class="w-[calc(100%-200px)] flex justify-center ">
            <!-- Search bar -->
            <form class="flex items-center w-[500px]">
              <label class="sr-only" for="voice-search">Search</label>
              <div class="relative w-full">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" class="w-5 h-auto text-gray-500 dark:text-gray-400" fill="currentColor"
                       viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          fill-rule="evenodd"></path>
                  </svg>
                </div>
                <input id="voice-search"
                       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="Search..."
                       required type="text">
                <router-link class="flex absolute inset-y-0 right-0 items-center pr-3" to="/">
                  <svg aria-hidden="true"
                       class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                       fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd"
                          d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                          fill-rule="evenodd"></path>
                  </svg>
                </router-link>
              </div>
            </form>
          </div>
          <!-- User login -->
          <div class="w-[200px] ">
            <div class="flex items-center justify-start space-x-4" @click="toggleDrop">
              <img alt=""
                   class="w-10 h-10 rounded-full border-2 border-gray-50"
                   src="https://yt3.ggpht.com/hqsxh-Vnbw9OK0_X4DAWh6RkmEUVnL-82SRCyh-IKr9fIXR8zhUCRdBEwgWWL_14q_L8Piod=s108-c-k-c0x00ffffff-no-rj">
              <div class="font-semibold dark:text-white text-left">
                <div class="text-xs text-gray-500 dark:text-gray-400">Pseudo</div>
              </div>
            </div>
            <!-- Drop down -->
            <div v-show="showDropDown"
                 aria-labelledby="menu-button"
                 aria-orientation="vertical"
                 class="absolute right-[10px] z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                 role="menu" tabindex="-1">
              <div class="py-1 text-left" role="none">
                <a id="menu-item-0" class="text-gray-700 block px-4 py-2 text-sm" href="#" role="menuitem"
                   tabindex="-1">Account settings</a>
                <button id="menu-item-3" class="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                        role="menuitem"
                        tabindex="-1" @click="Logout">Sign out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="h-[calc(100vh-50px)] bg-gray-50 p-[20px]">
        <div class="border border-gray-300 rounded-md p-[20px] h-full">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import router from "@/router/router.js";

export default {
  data() {
    return {
      showDropDown: false,
      showSide: true
    }
  },
  methods: {
    toggleSideBar() {
      this.showSide = !this.showSide
    },
    // toggle user
    toggleDrop() {
      this.showDropDown = !this.showDropDown
    },
    Logout() {
      if (localStorage.getItem('jwtToken')) {
        localStorage.removeItem('jwtToken');
      } else {
        // Commentez ou supprimez l'alerte pour tester
        alert('You are not connected');
        router.replace('/login')
      }
    }
  }

}
</script>
