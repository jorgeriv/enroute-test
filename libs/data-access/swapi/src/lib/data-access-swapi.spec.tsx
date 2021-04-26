import { render } from '@testing-library/react';

import DataAccessSwapi from './data-access-swapi';

describe('DataAccessSwapi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DataAccessSwapi />);
    expect(baseElement).toBeTruthy();
  });
});
