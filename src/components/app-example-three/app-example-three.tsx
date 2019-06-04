import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'app-example-three',
  styleUrl: 'app-example-three.css',
  shadow: true
})
export class AppExampleThree {
  protected vars: any = {
    primary: '--primary',
    text: '--example-three-color',
    input: '--ct-input-color'
  }

  @State() color: string;

  onChangeInput(e: any, key: string): void {
    this.setCssVar(this.vars[key], e.target.value);
  }

  title(): string {
    return 'Example 3';
  }

  setCssVar(name: string, color: string): void {
    document.body.style.setProperty(name, color);
  }

  render() {
    return (
      <div class="app-example-three">
        <h3>{this.title()}</h3>
        <p>
          Hi! This is the third and last example.
          The goal is to replicate a real usecase when your app use a design system or ui-kit.
        </p>
        <p>
          Usually there are some components that has properties to set some styles like color, font size, width, etc.
          This always confuses me a lot, and i guess you too, because we have to manage some responsabilities of
          theme/design/style in the functional layer.
        </p>
        <p>
          <i>So... how can we solve this?</i>
          <br/>
          We have a component called "ct-input" which has a color prop, but, as many ui kits,
          it also provides a css variable to set it.
        </p>
        <p>
          <i>Great! But... which one has priority?</i>
          <br/>
          Hmmm, there is the point! It's important to document that.
          I think that prop color should override css variable way.
          What's your opinion?
        </p>

        <p>
          Here we are able to:
           - set the global primary color theme (Ex. 1)
           - set the global text color (Ex. 2)
           - set the color of a custom-input element (Ex. 2)
        </p>

        <br />
        <label>Pick a primary color:</label>
        <input type="color" onChange={(e: any) => this.onChangeInput(e, 'primary')} />
        <br />
        <label>Pick a text color only for this page:</label>
        <input type="color" onChange={(e: any) => this.onChangeInput(e, 'text')} />

        <br/><hr/><br/>

        <label>Pick a color for ct-input to change it via jsx:</label>
        <input type="color" onChange={(e: any) => this.color = e.target.value} />
        <button onClick={() => this.color = null}>Clean value</button>
        <br/>
        <label>Pick a color for ct-input to change it via css variable:</label>
        <input type="color" onChange={(e: any) => this.onChangeInput(e, 'input')} />

        <br/><br/>
        <ct-input color={this.color} value="Hola" />
      </div>
    );
  }
}
