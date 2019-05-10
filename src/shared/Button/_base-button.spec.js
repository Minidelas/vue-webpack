import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Button from "@/shared/Button/_base-button.vue";

describe("COMPONENT _base-button.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Button);
  });

  it("PROPS", () => {
    const btn_text = "new message";
    const button_type = "new value";
    wrapper.setData({ btn_text: "new message" });
    wrapper.setData({ button_type: "new value" });
    expect(wrapper.props().btn_text).to.equal(btn_text);
    expect(wrapper.props().button_type).to.equal(button_type);
  });

  it("EMIT click", () => {
    expect(wrapper.emitted("click")).to.be.an("undefined");
    wrapper.vm.onClick();
    expect(wrapper.emitted("click").length).to.equal(1);
  });

  it("COMPUTED buttonClass", () => {
    const wrapper = shallowMount(Button, {});
    expect(wrapper.vm.buttonClass).to.equal("btn-primary");
  });
});
