<template>
  <ul>
    <li v-for="item in productItems" :key="item.id">
      ID: {{ item.id }}, NAME: {{ item.name }}, PRICE: {{ item.price }}
    </li>
  </ul>
</template>
<script lang="ts">
import Vue from "vue";
import { Product } from "~/types/models/product";
import { productsStore } from "~/store/product/product-accessor";
// import { productsData } from "../../data/sample";

export default Vue.extend({
  computed: {
    productItems(): Product[] {
      // return productsData;
      return productsStore.allProducts;
    }
  },
  mounted() {
    productsStore.fetchMany();
  }
});
</script>
