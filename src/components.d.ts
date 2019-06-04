/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface AppExampleOne {}
  interface AppExampleTwo {}
  interface AppHome {}
  interface AppRoot {}
}

declare global {


  interface HTMLAppExampleOneElement extends Components.AppExampleOne, HTMLStencilElement {}
  var HTMLAppExampleOneElement: {
    prototype: HTMLAppExampleOneElement;
    new (): HTMLAppExampleOneElement;
  };

  interface HTMLAppExampleTwoElement extends Components.AppExampleTwo, HTMLStencilElement {}
  var HTMLAppExampleTwoElement: {
    prototype: HTMLAppExampleTwoElement;
    new (): HTMLAppExampleTwoElement;
  };

  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };
  interface HTMLElementTagNameMap {
    'app-example-one': HTMLAppExampleOneElement;
    'app-example-two': HTMLAppExampleTwoElement;
    'app-home': HTMLAppHomeElement;
    'app-root': HTMLAppRootElement;
  }
}

declare namespace LocalJSX {
  interface AppExampleOne extends JSXBase.HTMLAttributes<HTMLAppExampleOneElement> {}
  interface AppExampleTwo extends JSXBase.HTMLAttributes<HTMLAppExampleTwoElement> {}
  interface AppHome extends JSXBase.HTMLAttributes<HTMLAppHomeElement> {}
  interface AppRoot extends JSXBase.HTMLAttributes<HTMLAppRootElement> {}

  interface IntrinsicElements {
    'app-example-one': AppExampleOne;
    'app-example-two': AppExampleTwo;
    'app-home': AppHome;
    'app-root': AppRoot;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


