import React from 'react';
import { render } from '@testing-library/react';
import TextEditor from './TextEditor';

describe('TextEditor', () => {
  it('renders successfully', () => {
    const { baseElement } = render(<TextEditor />);
    expect(baseElement).toBeTruthy();
  });
});
