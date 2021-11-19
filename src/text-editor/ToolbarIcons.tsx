import React from 'react';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import StrikethroughSIcon from '@mui/icons-material/StrikethroughS';
import SuperscriptIcon from '@mui/icons-material/Superscript';
import SubscriptIcon from '@mui/icons-material/Subscript';
import FormatClearIcon from '@mui/icons-material/FormatClear';
import CodeIcon from '@mui/icons-material/Code';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import TableChartIcon from '@mui/icons-material/TableChart';
import ImageIcon from '@mui/icons-material/Image';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import FormatIndentDecreaseIcon from '@mui/icons-material/FormatIndentDecrease';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatSizeIcon from '@mui/icons-material/FormatSize';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import SaveIcon from '@mui/icons-material/Save';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import { IconButton, Tooltip } from '@mui/material';

export interface TooltipIconProps {
  title: string;
  onClick?: () => void;
  component: JSX.Element;
}

export const TooltipIcon = ({
  title,
  onClick,
  component,
}: TooltipIconProps) => (
  <Tooltip {...{ title }}>
    <IconButton {...{ onClick }}>{component}</IconButton>
  </Tooltip>
);

export const ToolbarIcons: TooltipIconProps[] = [
  {
    title: 'Save',
    component: <SaveIcon />,
  },
  {
    title: 'Copy',
    component: <ContentCopyIcon />,
  },
  {
    title: 'Cut',
    component: <ContentCutIcon />,
  },
  {
    title: 'Paste',
    component: <ContentPasteIcon />,
  },
  {
    title: 'Undo',
    component: <UndoIcon />,
  },
  {
    title: 'Redo',
    component: <RedoIcon />,
  },
  {
    title: 'Text Color',
    component: <FormatColorTextIcon />,
  },
  {
    title: 'Fill Color',
    component: <FormatColorFillIcon />,
  },
  {
    title: 'Bold',
    component: <FormatBoldIcon />,
  },
  {
    title: 'Italic',
    component: <FormatItalicIcon />,
  },
  {
    title: 'Underline',
    component: <FormatUnderlinedIcon />,
  },
  {
    title: 'Strikethrough',
    component: <StrikethroughSIcon />,
  },
  {
    title: 'Superscript',
    component: <SuperscriptIcon />,
  },
  {
    title: 'Subscript',
    component: <SubscriptIcon />,
  },
  {
    title: 'Code',
    component: <CodeIcon />,
  },
  {
    title: 'Align Left',
    component: <FormatAlignLeftIcon />,
  },
  {
    title: 'Align Center',
    component: <FormatAlignCenterIcon />,
  },
  {
    title: 'Align Right',
    component: <FormatAlignRightIcon />,
  },
  {
    title: 'Justify',
    component: <FormatAlignJustifyIcon />,
  },
  {
    title: 'Bulleted List',
    component: <FormatListBulletedIcon />,
  },
  {
    title: 'Numbered List',
    component: <FormatListNumberedIcon />,
  },
  {
    title: 'Decrease Indent',
    component: <FormatIndentDecreaseIcon />,
  },
  {
    title: 'Increase Indent',
    component: <FormatIndentIncreaseIcon />,
  },
  {
    title: 'Image',
    component: <ImageIcon />,
  },

  {
    title: 'Table',
    component: <TableChartIcon />,
  },

  {
    title: 'Font Size',
    component: <FormatSizeIcon />,
  },
  {
    title: 'Clear All Formatting',
    component: <FormatClearIcon />,
  },
];
