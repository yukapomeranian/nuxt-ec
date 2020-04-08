<template>
  <ul>
    <li v-for="item in products" :key="item.id">
      ID: {{ item.id }}, NAME: {{ item.name }}, PRICE: {{ item.price }}
    </li>
  </ul>
</template>
<script lang="ts">
import Vue from "vue";
import axios from 'axios';
export default Vue.extend({
  asyncData() {
    return axios.get('https://localhost:3001/api/product/list')
                .then(response => {
                  return {
                    products: response.data
                  }
                })
  },
});
</script>
