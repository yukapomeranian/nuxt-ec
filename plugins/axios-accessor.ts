import { Plugin } from "@nuxt/types";
import { NuxtAxiosInstance } from "@nuxtjs/axios";

// eslint-disable-next-line import/no-mutable-exports
let $axios: NuxtAxiosInstance;

function initializeAxios(axiosInstance: NuxtAxiosInstance): void {
  $axios = axiosInstance;
}

export { $axios };

export const accessor: Plugin = ({ $axios }): void => {
  initializeAxios($axios);

  $axios.onResponse(() => {
    $axios.setHeader("Access-Control-Allow-Origin", "https://script.google.com/");
  });
};

export default accessor;
