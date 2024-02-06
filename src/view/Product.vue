<script>
import axios from 'axios';
import RequestProduct from '../components/ProductRequest.vue';

export default {
  name: 'Product',
  components: {
    RequestProduct
  },
  data() {
    return {
      product: {},
    };
  },
  methods: {
    getProduct(id) {
      axios.get('/product/' + id)
          .then((res) => {
            this.product = res.data;
          })
          .catch((error) => {
            console.error(error);
          });
    }
  },
  created() {
    this.getProduct(this.$route.params.id);
  },
}
</script>

<template>
  <div>
    <h1>{{ product.name }}</h1>
    <p>{{ product.description }}</p>
    <p>{{ product.price }}$</p>
    <RequestProduct :product="product"/>
  </div>
</template>
