import React from 'react';
import { render } from '@testing-library/react';
import EditorToolbar from './EditorToolbar';

describe('EditorToolbar', () => {
  it('renders successfully', () => {
    const { baseElement } = render(<EditorToolbar />);
    expect(baseElement).toBeTruthy();
  });
});
