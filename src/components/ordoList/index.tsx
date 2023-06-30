import React from 'react';
import { Typography, Box, Fab } from '@mui/material';
import styles from './styles.module.css';
import { LogoutOutlined } from '@mui/icons-material/';
import AddIcon from '@mui/icons-material/Add';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';


export default function App() {
  return (
    <Fab color="primary" aria-label="add">
  <AddIcon />
</Fab>
  );

}
