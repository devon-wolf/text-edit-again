import React from 'react';
import { Toolbar } from '@mui/material';
import { ToolbarIcons, TooltipIcon } from './ToolbarIcons';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface EditorToolbarProps {}

const EditorToolbar = () => {
  return (
    <Toolbar
      sx={{
        borderRadius: 'inherit',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {ToolbarIcons.map((icon) => {
        if (icon.title === 'divider') return icon.component;
        return <TooltipIcon {...icon} key={icon.title} />;
      })}
    </Toolbar>
  );
};

export default EditorToolbar;
