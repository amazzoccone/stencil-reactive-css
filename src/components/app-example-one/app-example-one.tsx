import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-example-one',
  styleUrl: 'app-example-one.css',
  shadow: true
})
export class AppExampleOne {
  constructor() {
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  onChangeInput(e: any): void {
    this.setPrimaryColor(e.target.value);
  }

  title(): string {
    return 'Example 1';
  }

  setPrimaryColor(color: string): void {
    document.body.style.setProperty('--primary', color);
  }

  render() {
    return (
      <div class="app-example-one">
        <h3>{this.title()}</h3>
        <p>
          Hi! This is the first and most simple example.
          Here we are able to set the primary color theme of the App.
        </p>

        <label>Pick a color:</label>
        <input type="color" onChange={this.onChangeInput} />
      </div>
    );
  }
}
