<script>
import axios from 'axios';

export default {
  name: 'RequestProduct',
  props: {
    product: Object
  },
  methods: {
    requestProduct() {
      axios.post('/product/webhook', this.product)
          .then(response => {
            if (response.status === 201) {
              alert('Product request sent successfully');
            }
          })
          .catch(error => {
            console.error(error);
            alert('There was an error sending the request');
          });
    }
  }
}
</script>

<template>
  <div>
    <button @click="requestProduct">Demande de produit</button>
  </div>
</template>
