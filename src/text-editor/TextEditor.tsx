import { Paper } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import EditorToolbar from './EditorToolbar';

const TextEditor = () => {
  return (
    <Box>
      <EditorToolbar />
      <Paper></Paper>
    </Box>
  );
};

export default TextEditor;
