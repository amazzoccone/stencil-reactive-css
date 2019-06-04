import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        <p>
          Welcome to the Stencil Reactive CSS proof-of-concept App.
          You can use it to meet the best of two worlds!
        </p>
        <p>Let's see Web Components and CSS Variables in action!</p>

        <stencil-route-link url='/example/one'>
          <button>
            Example 1
          </button>
        </stencil-route-link>

        <stencil-route-link url='/example/two'>
          <button>
            Example 2
          </button>
        </stencil-route-link>

        <stencil-route-link url='/example/three'>
          <button>
            Example 3
          </button>
        </stencil-route-link>
      </div>
    );
  }
}
