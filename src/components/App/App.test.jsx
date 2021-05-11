import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import ShallowRenderer from 'react-test-renderer/shallow';

import configureStore from 'store/configureStore';

import App from './App';

const store = configureStore()

const appWithStore = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

describe('App', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(appWithStore(), div);
  });

  it('should render correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(appWithStore());

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
