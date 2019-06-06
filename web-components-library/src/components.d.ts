/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface MyFooter {}
}

declare global {


  interface HTMLMyFooterElement extends Components.MyFooter, HTMLStencilElement {}
  var HTMLMyFooterElement: {
    prototype: HTMLMyFooterElement;
    new (): HTMLMyFooterElement;
  };
  interface HTMLElementTagNameMap {
    'my-footer': HTMLMyFooterElement;
  }
}

declare namespace LocalJSX {
  interface MyFooter extends JSXBase.HTMLAttributes<HTMLMyFooterElement> {}

  interface IntrinsicElements {
    'my-footer': MyFooter;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


