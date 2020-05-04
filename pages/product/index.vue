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
  async fetch() {
    // fetchはサーバサイドでのみ動いてる
    // asyncだと、明示的に返り値を指定しなくてもPromiseがreturnされる。
    console.log("fetch()");
    await productsStore.fetchMany();
  },
  computed: {
    productItems(): Product[] {
      // return productsData;
      console.log("computed productItems()");
      console.log(`aaa=${productsStore.allProducts}`);
      return productsStore.allProducts;
    }
  },
  mounted() {
    // mountedはクライアントサイドでのみ動いてる
    console.log("mounted()");
    // productsStore.fetchMany();
  }
});
</script>
