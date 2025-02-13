import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Cards from '../../Components/Cards/Cards';
import { ProductData } from '../../Data';

export default function Dashboard() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "white", color: "black" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Dashboard
            </Typography>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button color="inherit" component={Link} to="/signup">
              Sign Up
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <br />
      {ProductData.map((e, i) => {
        return (
          <div
            key={i}
            style={{
              display: "inline-block",
              textAlign: "center",
              margin: "10px",
              marginLeft: "20px"
            }}
          >
            <Cards title={e.title} img={e.image} desc={e.description} id={e.id} />
          </div>
        );
      })}
    </>
  );
}
