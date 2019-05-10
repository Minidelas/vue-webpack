import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import InputText from "@/shared/InputText/_base-inputText.vue";

describe("COMPONENT _base-inputText.vue", () => {
  let wrapper;
  const labelText = "new message";

  beforeEach(() => {
    wrapper = shallowMount(InputText, {
      propsData: {
        labelText: labelText
      }
    });
  });

  it("PROPS", () => {
    const valueIn = "new value";
    wrapper.setData({ valueIn: valueIn });
    expect(wrapper.props().labelText).to.equal(labelText);
    expect(wrapper.props().valueIn).to.equal(valueIn);
  });

  it("EMIT value-out", () => {
    const value = "value to emit";
    wrapper.setData({ value: value });
    expect(wrapper.emitted("value-out")).to.be.an("undefined");
    wrapper.vm.valueOut();
    expect(wrapper.emitted("value-out").length).to.equal(1);
    expect(wrapper.emitted("value-out")[0])
      .to.be.an("array")
      .that.includes(value);
  });
});
