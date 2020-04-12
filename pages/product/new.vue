<template>
  <form
    class="ContactForm"
    name="contact"
    method="post"
    data-netlify="true"
    data-netlify-honeypost="bot-field"
    @submit.prevent="send"
  >
    <input type="hidden" name="form-name" value="product-new">
    <div class="group">
      <InputText
        v-model="form.nameForm"
        name="name"
        label="商品名"
        placeholder="John Doe"
        validation="nameValidation"
        :error="errors.name"
        @blur="nameValidate()"
      />
      <span>{{ nameErrorMessage }}</span>
    </div>

    <div class="group">
      <InputText
        v-model="form.priceForm"
        type="text"
        name="price"
        label="価格"
        placeholder="5000"
        :error="errors.price"
        @blur="priceValidate()"
      />
      <span>{{ priceErrorMessage }}</span>
    </div>

    <div>
      {{ information }}
    </div>

    <div class="action">
      <button class="button" @click="reset()">
        リセット
      </button>
      <button class="button">
        送信する
      </button>
    </div>
  </form>
</template>
<script lang="ts">
import Vue from "vue";
import { Product, ProductForm } from "../../types/models/product";
import InputText from "~/components/InputText.vue";
import { productApi } from "~/api/productApi";
interface Errors {
  nameError: boolean;
  priceError: boolean;
}
interface RequestBody {
  [key: string]: string
}
export default Vue.extend({
  components: {
    InputText
  },
  data (): {
    information: string,
    sending: Boolean,
    form: ProductForm,
    errors: any
    } {
    return {
      information: "",
      sending: false,
      form: {
        nameForm: "",
        priceForm: ""
      },
      errors: {
        nameError: false,
        priceError: false
      }
    };
  },
  computed: {
    informationMessage(): string {
      if (this.errors.nameError || this.errors.priceError) {
        return "入力不備があります。";
      } else {
        return "";
      }
    },
    nameErrorMessage (): string | void {
      console.log("nameErrorMessage()");
      if (this.errors.nameError) {
        return "お名前を入力してください。";
      } else {
        return "";
      }
    },
    priceErrorMessage (): string | void {
      console.log("priceErrorMessage()");
      if (this.errors.priceError) {
        return "価格を入力してください。";
      }
      else if(!this.form.priceForm.match("^[0-9]{0,5}$")) {
        return "5桁以内の半角数字を入力してください。";
      }
      else {
        return "";
      }
    }
  },
  methods: {
    nameValidate() {
      console.log("nameValidate()");
      this.errors.nameError = (this.form.nameForm.length <= 0);
    },
    priceValidate() {
      console.log("priceValidate()");
      this.errors.priceError = (this.form.priceForm.length <= 0);
    },
    allValidate() {
      this.nameValidate();
      this.priceValidate();
    },
    reset (): void {
      console.log("reset()");
      this.form = {
        nameForm: "",
        priceForm: ""
      };
    },
    send (): void {
      if (this.sending) {
        this.information = "送信中です。";
        return;
      }
      this.allValidate();
      if (this.errors.nameError || this.errors.priceError) {
        this.information = "入力内容に不備があります。";
        return;
      }
      this.sending = true;
      this.performSend();
    },
    performSend (): Promise<Product | void> {
      console.log("performSend()");
      this.openDialog();

      return productApi.post(this.form as ProductForm)
        .then(() => {
          console.log("then()");
          // APIリクエスト成功時の処理
        })
        .catch(() => {
          console.log("catch()");
          // APIリクエスト失敗時の処理
        })
        .finally(() => {
          console.log("finally()");
          // APIリクエスト成功・失敗時共通の処理
        });
    },
    encode (requestBody: RequestBody): string {
      return Object.keys(requestBody)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(requestBody[key])}`
        )
        .join("&");
    },
    openDialog (): void {
    },
    openSuccessAlert (): void {
    },
    openErrorAlert (): void {
    }
  }
});
</script>
<style scoped>
.button{
  margin-top: 5px;
  padding: 5px;
  border: 1px solid #eeeeee;
}
</style>
