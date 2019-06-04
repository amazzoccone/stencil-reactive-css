import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-example-two',
  styleUrl: 'app-example-two.css',
  shadow: true
})
export class AppExampleTwo {
  protected vars: any = {
    primary: '--primary',
    text: '--example-two-color'
  }

  onChangeInput(e: any, key: string): void {
    this.setCssVar(this.vars[key], e.target.value);
  }

  title(): string {
    return 'Example 2';
  }

  setCssVar(name: string, color: string): void {
    document.body.style.setProperty(name, color);
  }

  render() {
    return (
      <div class="app-example-two">
        <h3>{this.title()}</h3>
        <p>
          Hi! This is the second example.
          Here we are able to:
           - set the global primary color theme (Ex. 1)
           - set the global text color (New)
        </p>

        <br />
        <label>Pick a primary color:</label>
        <input type="color" onChange={(e: any) => this.onChangeInput(e, 'primary')} />
        <br />
        <label>Pick a text color only for this page:</label>
        <input type="color" onChange={(e: any) => this.onChangeInput(e, 'text')} />
      </div>
    );
  }
}
