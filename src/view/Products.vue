<script>
import axios from 'axios';
import product from "@/view/Product.vue";

export default {
  name: 'Products',
  computed: {
    product() {
      return product
    }
  },
  data() {
    return {
      products: [],
      showDropDown: null,
      operationStatus: null,
    };
  },
  methods: {
    getProducts() {
      axios.get('/products/all')
          .then((res) => {
            this.products = res.data;
          })
          .catch((error) => {
            console.error(error);
          });
    },
    updateDiscountAmount(productID, newDiscountAmount) {
      if (newDiscountAmount === '') {
        return;
      }
      axios.patch(`/product/${productID}`, {discount_amount: newDiscountAmount})
          .then(response => {
            if (response.status === 200) {
              this.operationStatus = true;
              setTimeout(() => {
                this.operationStatus = null;
              }, 3000);
            }
          })
          .catch(error => {
            console.error(error);
            this.operationStatus = false;
            setTimeout(() => {
              this.operationStatus = null;
            }, 3000);
          });
    },
    toggleDiscountActive(productID, isActive) {
      axios.patch(`/product/${productID}`, {active_discount_price: isActive})
          .then(response => {
            if (response.status === 200) {
              this.operationStatus = true;
              setTimeout(() => {
                this.operationStatus = null;
              }, 3000);
            }
          })
          .catch(error => {
            console.error(error);
            this.operationStatus = false;
            setTimeout(() => {
              this.operationStatus = null;
            }, 3000);
          });
    },
    toggleProductActive(productID, isActive) {
      axios.patch(`/product/${productID}`, {active_product: isActive})
          .then(response => {
            if (response.status === 200) {
              this.operationStatus = true;
              setTimeout(() => {
                this.operationStatus = null;
              }, 3000);
            }
          })
          .catch(error => {
            console.error(error);
            this.operationStatus = false;
            setTimeout(() => {
              this.operationStatus = null;
            }, 3000);
          });
    },
    deleteProduct(productID) {
      axios.delete(`/product/${productID}`)
          .then(response => {
            if (response.status === 200) {
              this.getProducts();
              this.operationStatus = true;
              setTimeout(() => {
                this.operationStatus = null;
              }, 3000);
            }
          })
          .catch(error => {
            console.error(error);
          });
    },

    truncateString(string, limit) {
      return string.length > limit ? `${string.substring(0, limit)}...` : string;
    },
    toggleDrop(productID) {
      if (this.showDropDown === productID) {
        this.showDropDown = null;
      } else {
        this.showDropDown = productID;
      }
    },
  },
  created() {
    this.getProducts();
  },
};

</script>

<template>
  <div>
    <div v-if="operationStatus === true" class="bg-green-500 h-auto flex justify-center"><span class="text-white">Modification Effectué</span>
    </div>
    <div v-if="operationStatus === false" class="bg-red-500 h-auto flex justify-center"><span class="text-white">Erreur de Modification</span>
    </div>
    <table class="hover:table-auto w-full">
      <thead>
      <tr>
        <th class="px-4 py-2">Modèle</th>
        <th class="px-4 py-2">Description</th>
        <th class="px-4 py-2">Prix</th>
        <th class="px-4 py-2">% réduction</th>
        <th class="px-4 py-2">réduction active</th>
        <th class="px-4 py-2">Active</th>
        <th class="px-4 py-2">Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="product in products" :key="product.id">
        <td class="border px-4 py-2">{{ product.name }}</td>
        <td class="border px-4 py-2">
          {{ truncateString(product.description, 50) }}
        </td>
        <td class="border px-4 py-2">{{ product.price }}$</td>
        <td class="border px-4 py-2">
          <input v-model="product.discount_amount" :placeholder="product.discount_amount + '%'" max="99" min="0"
                 type="number"
                 @blur="updateDiscountAmount(product.id, product.discount_amount)">
        </td>
        <td class="border px-4 py-2">
          <input :checked="product.active_discount_price" type="checkbox"
                 @change="toggleDiscountActive(product.id, $event.target.checked)">
        </td>
        <td>
          <input :checked="product.active_product" type="checkbox"
                 @change="toggleProductActive(product.id, $event.target.checked)">
        </td>
        <td class="border px-4 py-2 flex justify-center">
          <svg class=" w-[25px] h-[25px]" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"
               @click="toggleDrop(product.id)">
            <path
                d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
          </svg>
        </td>

        <div v-show="showDropDown === product.id"
             aria-labelledby="menu-button"
             aria-orientation="vertical"
             class="absolute right-[10px] z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
             role="menu" tabindex="-1">
          <div class="py-1 text-left" role="none">
            <router-link :to="`/product/${product.id}`" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                         role="menuitem" tabindex="-2">Modifier
            </router-link>
          </div>
          <!--          <div class="py-1 text-left" role="none">-->
          <!--              <p  class="block px-4 py-2 text-sm text-red-800 hover:bg-gray-100" @click="deleteProduct(product.id)">Delete</p>-->
          <!--          </div>-->
        </div>
      </tr>
      </tbody>
    </table>
  </div>
</template>
