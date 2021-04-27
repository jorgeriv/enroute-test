import { render } from '@testing-library/react';

import { PeopleList } from './list';

describe('PeopleList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PeopleList />);
    expect(baseElement).toBeTruthy();
  });
});
