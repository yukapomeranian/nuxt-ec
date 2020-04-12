<template>
  <InputBase class="InputText u-relative" :name="name" :label="label" :error="!!error">
    <input
      :id="name"
      class="input"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input', $event.target.value)"
      @blur="$emit('blur')"
    >
    <transition name="fade">
      <p v-if="error" class="error">
        {{ error }}
      </p>
    </transition>
  </InputBase>
</template>

<script lang="ts">
import Vue from "vue";
import InputBase from "./InputBase.vue";
export default Vue.extend({
  components: {
    InputBase
  },
  props: {
    type: { type: String, default: "text" },
    name: { type: String, required: true },
    label: { type: String, required: true },
    placeholder: { type: String, required: true },
    value: { type: String, required: true },
    error: { type: String, default: null }
    // validation: {type: String, required: true}
  }
});
</script>
<style scoped>
.input{
  border: 1px solid white;
}
</style>
