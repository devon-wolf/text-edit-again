import { render } from '@testing-library/react';
import React from 'react';
import { TooltipIcon, TooltipIconProps } from './ToolbarIcons';

const testDefaults: TooltipIconProps = {
  title: 'Test Icon',
  onClick: jest.fn(),
  component: <div>Test</div>,
};

describe('TooltipIcon', () => {
  it('renders successfully', () => {
    const { baseElement } = render(<TooltipIcon {...testDefaults} />);
    expect(baseElement).toBeTruthy();
  });
});
