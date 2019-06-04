import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-example-simple',
  styleUrl: 'app-example-simple.css',
  shadow: true
})
export class AppExampleSimple {
  title(): string {
    return 'Example 1';
  }

  render() {
    return (
      <div class="app-profile">
        <h3>{this.title()}</h3>
        <p>
          Hi! This is the first and most simple example.
          Here we are able to set the primary color theme of the App
        </p>
      </div>
    );
  }
}
