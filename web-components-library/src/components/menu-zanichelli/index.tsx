import { Component, h, State } from "@stencil/core";

import { Wrap } from "./styles";

@Component({
  tag: "menu-zanichelli",
  styleUrl: "../../global-styles.css"
})
export class MenuZanichelli {
  @State() isopen: boolean;

  constructor() {
    this.handleMenuOpen = this.handleMenuOpen.bind(this);
    this.handleIsopen = this.handleIsopen.bind(this);
    this.handleContentOpen = this.handleContentOpen.bind(this);
  }

  handleIsopen(): HTMLButtonElement {
    if (!this.isopen) {
      return (
        <button>
          <span>-</span>
        </button>
      );
    }

    return <button> Menu X</button>;
  }

  handleContentOpen(): HTMLElement {
    if (!this.isopen) {
      return <div />;
    }

    return (
      <div>
        <div>
          <ul>
            <list-item text="La mia libreria" />
            <list-item text="Ambienti zanichelli" />
            <button class="download">@ Scarica la app Booktab</button>
          </ul>
        </div>
        <footer class="footer">
          <ul>
            <list-item icon="@" text="Chiedi al tuo responsabile" />
            <list-item icon="@" text="Supporto" />
            <list-item icon="@" text="Eshop" />
          </ul>
        </footer>
      </div>
    );
  }
  handleMenuOpen(e): void {
    e.preventDefault();
    this.isopen = !this.isopen;
  }

  render() {
    return (
      <Wrap isopen={this.isopen}>
        <section class="header">
          <div>
            <img src="../../assets/images/png/zanichelli-logo-footer.png" />
          </div>
          <div onClick={this.handleMenuOpen}>{this.handleIsopen()}</div>
        </section>
        <section class="content">
          <div>{this.handleContentOpen()}</div>
        </section>
      </Wrap>
    );
  }
}
