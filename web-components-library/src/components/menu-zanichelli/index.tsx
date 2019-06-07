import { Component, Prop, h } from "@stencil/core";

import { Wrap } from "./styles";

@Component({
  tag: "menu-zanichelli",
  styleUrl: "../../global-styles.css"
})
export class MenuZanichelli {
  @Prop() isOpen: boolean;

  constructor() {
    this.handleMenuOpen = this.handleMenuOpen.bind(this);
    this.handleisOpen = this.handleisOpen.bind(this);
    this.handleContentOpen = this.handleContentOpen.bind(this);
  }

  handleisOpen(): HTMLButtonElement {
    return this.isOpen ? (
      <button> Menu X</button>
    ) : (
      <button>
        <span>-</span>
      </button>
    );
  }

  handleContentOpen(): HTMLElement {
    return this.isOpen ? (
      <div>
        <div>
          <ul>
            <list-item text="La mia libreria" />
            <list-item text="Ambienti Zanichelli" />
          </ul>
          <button class="download">@ Scarica la app Booktab</button>
        </div>
        <footer class="footer">
          <ul>
            <list-item icon="@" text="Chiedi al tuo responsabile" />
            <list-item icon="@" text="Supporto" />
            <list-item icon="@" text="Eshop" />
          </ul>
        </footer>
      </div>
    ) : (
      <div />
    );
  }
  handleMenuOpen(e): void {
    e.preventDefault();
    this.isOpen = !this.isOpen;
  }

  render() {
    return (
      <Wrap>
        <section class="header">
          <div>
            <img src="../../assets/images/png/zanichelli-logo-footer.png" />
          </div>
          <div onClick={this.handleMenuOpen}>{this.handleisOpen()}</div>
        </section>
        <section class="content">
          <div>{this.handleContentOpen()}</div>
        </section>
      </Wrap>
    );
  }
}
