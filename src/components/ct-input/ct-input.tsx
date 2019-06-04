import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ct-input',
  styleUrl: 'ct-input.css',
  shadow: true
})
export class CtInput {
  @Prop() color: string;
  @Prop() value: string;

  styles(): any {
    const styles: any = {};

    if (this.color) {
      styles.color = this.color;
      styles['border-color'] = this.color;
    }

    return styles;
  }

  render() {
    return (
      <input type="text" value={this.value} style={this.styles()} />
    );
  }
}
