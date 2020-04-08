<template>
    <ul>
        <li v-for="item in products" :key="item.id">
            ID: {{ item.id }}, NAME: {{ item.name }}, PRICE: {{ item.price }}
        </li>
    </ul>
</template>
<script lang="ts">
import Vue from 'vue'
import { productsData } from '~/data/sample'
export default Vue.extend({
    data(){
        return {
            products: productsData
        }
    }
})
</script>