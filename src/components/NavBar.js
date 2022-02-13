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
            <img src="https://images.unsplash.com/photo-1584441405886-bc91be61e56a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=730&q=80" alt="logo" height="70px" className={classes.image} />
            DotCom
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
                  <ShoppingCart />
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
