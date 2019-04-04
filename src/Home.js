import { h, Component } from '../dependencies.js';

export default class About extends Component {
  render(props, state) {
    return h('a', {href: '/about'}, 'Home');
  }
}

