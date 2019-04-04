import { Router, h, render } from './dependencies.js';
import Home from './src/Home.js';
import About from './src/About.js';

const App = () => (
  h(Router, {},
    h(Home, {path: '/'}),
    h(About, {path: '/about'})
  )
);

render(h(App), document.getElementById('app'));

