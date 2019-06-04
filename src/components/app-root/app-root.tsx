import { Component, h } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {
  render() {
    return (
      <div>
        <header>
          <h1>Stencil Reactive CSS</h1>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/example/one' component='app-example-one' />
              <stencil-route url='/example/two' component='app-example-two' />
              <stencil-route url='/example/three' component='app-example-three' />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
