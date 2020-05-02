<template>
  <div class="InputBase" :class="{ 'has-error': error }">
    <label class="label" :for="name">
      {{ label }}
    </label>

    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    name: { type: String, required: true },
    label: { type: String, required: true },
    error: { type: Boolean, default: false }
  }
});
</script>
