import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar({ onSelect }) {
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleToggle} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Superplan
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={handleToggle}>
        <List>
          {['Primary Concerns', 'Primary Goals', 'Cash Flow', 'Portfolio', 'Legacy', 'Names Of'].map((text, index) => (
            <ListItem button key={text} onClick={() => onSelect(index + 1)}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Navbar;
