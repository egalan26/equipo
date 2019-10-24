import React from 'react';
import ReactDOM from 'react-dom';
import PlayerCard from './Image';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Image />, div);
  ReactDOM.unmountComponentAtNode(div);
});
