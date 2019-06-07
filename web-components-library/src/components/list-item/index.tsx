import { Component, Prop, h } from "@stencil/core";

import { Wrap } from "./styles";


@Component({
  tag: "list-item",
  styleUrl: "../../global-styles.css"
})
export class ListItem {
  @Prop() icon?: string;
  @Prop() text: string;

  render() {
    return (
      <Wrap>
        <li>
          <span><span>{this.icon} </span>{this.text}</span>
        </li>
      </Wrap>
    );
  }
}
