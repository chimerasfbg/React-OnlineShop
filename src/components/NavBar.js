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
import { Link , useLocation } from "react-router-dom";
import useStyles from "../components/NavStyles";

const NavBar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" component={Link} to="/" color="inherit" className={classes.title}>
            {" "}
            <img src="" alt="." height="25px" className={classes.image} />
            DotCom
          </Typography>
          <div className={classes.grow} />
          {location.pathname === '/' && (
          <div className={classes.button}>
            <IconButton component={Link} to="/cart" aria-label="show cart" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>)}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
