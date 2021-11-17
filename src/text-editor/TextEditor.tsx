import { Paper } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import EditorToolbar from './EditorToolbar';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TextEditorProps {

}

const TextEditor = () => {
  return (
    <Box>
      <EditorToolbar />
      <Paper sx={{ height: '300px', backgroundColor: 'dimgray' }}></Paper>
    </Box>
  );
};

export default TextEditor;
