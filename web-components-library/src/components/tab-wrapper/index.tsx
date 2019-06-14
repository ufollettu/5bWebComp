import { Component, Prop, h } from "@stencil/core";

import { Wrap } from "./styles";

@Component({
  tag: "tab-wrapper",
  styleUrl: "../../global-styles.css"
})
export class TabWrapper {
  @Prop() myProp: string;

  someFunc() {
    window.alert("ciao bello!!!");
  }

  render() {
    return (
      <Wrap>
        <zani-tab tabname="Bottone" someFunc={this.someFunc} />
      </Wrap>
    );
  }
}
