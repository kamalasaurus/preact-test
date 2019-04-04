import { h, Component } from '../dependencies.js';

export default class Home extends Component {
  render(props, state) {
    return h('a', {href: '/'}, 'About');
  }
}

