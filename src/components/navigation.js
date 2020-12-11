import React from "react";
import { NavLink } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import CallMissedOutgoingIcon from "@material-ui/icons/CallMissedOutgoing";
import HistoryIcon from "@material-ui/icons/History";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export const mainListItems = (
  <div>
    <ListItem button component={NavLink} to="/dashboard">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Overview" />
    </ListItem>
    <ListItem button component={NavLink} to="/Home">
      <ListItemIcon>
        <CallMissedOutgoingIcon />
      </ListItemIcon>
      <ListItemText primary="Transfer" />
    </ListItem>
    <ListItem button component={NavLink} to="/Home">
      <ListItemIcon>
        <HistoryIcon />
      </ListItemIcon>
      <ListItemText primary="Transaction History" />
    </ListItem>
    <ListItem button component={NavLink} to="/Home">
      <ListItemIcon>
        <AccountCircleIcon />
      </ListItemIcon>
      <ListItemText primary="My Account" />
    </ListItem>
  </div>
);
