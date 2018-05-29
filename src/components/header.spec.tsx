import * as React from 'react';
import { shallow } from 'enzyme';

import Header from './header';

describe('Header', () => {
  it('should render', () => {
    expect(shallow(<Header />).contains('Header')).toBe(true);
  });
});
