import { Component, Prop, h } from "@stencil/core";

import { Wrap } from "./styles";

@Component({
  tag: "zani-tab",
  styleUrl: "../../global-styles.css"
})
export class ZaniTab {
  @Prop() tabname: string;
  @Prop() someFunc: Function;

  render() {
    return <Wrap onClick={this.someFunc.bind(this)}>{this.tabname}</Wrap>;
  }
}
