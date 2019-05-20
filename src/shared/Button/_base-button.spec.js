import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Button from "@/shared/Button/_base-button.vue";

describe("COMPONENT _base-button.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Button);
  });

  it("PROPS", () => {
    const button_text = "new message";
    const button_type = "new value";
    wrapper.setData({ button_text: "new message" });
    wrapper.setData({ button_type: "new value" });
    expect(wrapper.props().button_text).to.equal(button_text);
    expect(wrapper.props().button_type).to.equal(button_type);
  });

  it("EMIT click", () => {
    expect(wrapper.emitted("emitted")).to.be.an("undefined");
    wrapper.vm.onClick();
    expect(wrapper.emitted("emitted").length).to.equal(1);
  });

  it("COMPUTED buttonClass", () => {
    const wrapper = shallowMount(Button, {});
    expect(wrapper.vm.buttonClass).to.equal("btn-primary");
  });
});
