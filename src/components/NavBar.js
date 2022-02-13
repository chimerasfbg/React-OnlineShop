import React from "react";
import { ShoppingCart } from "@material-ui/icons";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import useStyles from "../components/NavStyles";

const NavBar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();


 
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            variant="h4"
            component={Link}
            to="/"
            color="inherit"
            className={classes.title}
          >
            {" "}
            <img src="https://www.seekpng.com/png/detail/80-803597_io-is-compatible-with-all-javascript-frameworks-and.png" alt="logo" height="60px" className={classes.image} />
            
          </Typography>
          <div className={classes.grow} />
          {location.pathname === "/" && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="show cart"
                color="inherit"
              >
                <Badge mr="50px" badgeContent={totalItems} color="secondary">
                  <ShoppingCart  style={{color:'white',fontSize:'30px'}}/>
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
