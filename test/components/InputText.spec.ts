import { mount } from "@vue/test-utils";
import InputText from "~/components/InputText.vue";

const factory = () => mount(InputText, {
  propsData: {
    name: "userName",
    label: "ユーザ名",
    placeholder: "TarouTanaka",
    value: "",
    error: null
  }
});

describe("InputText component test", () => {
  test("mounts properly", () => {
    const wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
