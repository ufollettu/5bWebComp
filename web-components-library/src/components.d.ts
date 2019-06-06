/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface FooterIpad {}
}

declare global {


  interface HTMLFooterIpadElement extends Components.FooterIpad, HTMLStencilElement {}
  var HTMLFooterIpadElement: {
    prototype: HTMLFooterIpadElement;
    new (): HTMLFooterIpadElement;
  };
  interface HTMLElementTagNameMap {
    'footer-ipad': HTMLFooterIpadElement;
  }
}

declare namespace LocalJSX {
  interface FooterIpad extends JSXBase.HTMLAttributes<HTMLFooterIpadElement> {}

  interface IntrinsicElements {
    'footer-ipad': FooterIpad;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


