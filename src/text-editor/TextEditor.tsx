import { Divider, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import EditorToolbar from './EditorToolbar';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TextEditorProps {}

const TextEditor = () => {
  return (
    <Box>
      <Paper sx={{ height: '600px', backgroundColor: 'ivory' }}>
        <EditorToolbar />
        <Divider variant="middle">
          <Typography variant="button">Document</Typography>
        </Divider>
      </Paper>
    </Box>
  );
};

export default TextEditor;
