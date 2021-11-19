import React from 'react';
import { Toolbar } from '@mui/material';
import { ToolbarIcons, TooltipIcon } from './ToolbarIcons';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface EditorToolbarProps {}

const EditorToolbar = () => {
  return (
    <Toolbar>
      {ToolbarIcons.map((icon) => (
        <TooltipIcon {...icon} key={icon.title} />
      ))}
    </Toolbar>
  );
};

export default EditorToolbar;
