import { Component, Prop, h } from "@stencil/core";

import { Wrap } from "./styles";

@Component({
  tag: "zani-tab",
  styleUrl: "styles.css"
})
export class ZaniTab {
  @Prop() tabname: string;
  @Prop() someFunc: Function;

  constructor() {
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e) {
    e.preventDefault();
    this.someFunc();
  }

  render() {
    return (
      <div>
        <Wrap onClick={this.handleOnClick}>{this.tabname}</Wrap>
        <br />
        <button onClick={this.handleOnClick}>{this.tabname}</button>
      </div>
    );
  }
}
