import React from 'react';
import TestUtils from 'react-addons-test-utils';
// import {findDOMNode} from 'react-dom';
import App from 'components/App';

describe('App', ()=> {
  it('renders', ()=> {
    const el = TestUtils.renderIntoDocument(<App />);
    expect(el).toBeDefined();
  });
});
