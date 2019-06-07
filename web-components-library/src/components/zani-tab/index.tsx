import {Component, Prop, h} from '@stencil/core';

import {Wrap} from './styles';
import {TabItem} from '../../beans/index.js';




@Component({
  tag: 'zani-tab',
  styleUrl: '../../global-styles.css'
})

export class ZaniTab {

  @Prop() tabProps: TabItem;

  changeTab() {
    window.alert('change tab');
  };

  render() {
    return (
      <Wrap>
        <div class='selected' onClick={this.changeTab}>
          <p>ciao</p>
        </div>
      </Wrap>
    );
  }
}
