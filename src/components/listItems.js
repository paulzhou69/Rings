import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import GroupIcon from '@material-ui/icons/Group';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Group } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from "react-router-dom";


// function handleClick(str) {
//   console.log(str);
//   history.push("/user/sean")
// }

// export const mainListItems = (
//   <div>
//     <ListItem button onClick={() => handleClick("/")}>
//       <ListItemIcon>
//         <DonutLargeIcon />
//       </ListItemIcon>
//       <ListItemText primary="Your Rings" />
//     </ListItem>
//     <ListItem button onClick={() => handleClick("/sean")}>
//       <ListItemIcon>
//         <DonutLargeIcon />
//       </ListItemIcon>
//       <ListItemText primary="Sean" />
//     </ListItem>
//     <ListItem button onClick={() => handleClick("/paul")}>
//       <ListItemIcon>
//         <DonutLargeIcon />
//       </ListItemIcon>
//       <ListItemText primary="Paul" />
//     </ListItem>
//     <ListItem button onClick={() => handleClick("/viola")}>
//       <ListItemIcon>
//         <DonutLargeIcon />
//       </ListItemIcon>
//       <ListItemText primary="Viola" />
//     </ListItem>
//     <ListItem button onClick={() => handleClick("/ed")}>
//       <ListItemIcon>
//         <DonutLargeIcon />
//       </ListItemIcon>
//       <ListItemText primary="Ed" />
//     </ListItem>
//   </div>
// );

// export const secondaryListItems = (
//   <div>
//     <ListSubheader inset>Groups</ListSubheader>
//     <ListItem button>
//       <ListItemIcon>
//         <GroupIcon />
//       </ListItemIcon>
//       <ListItemText primary="Group 1" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <GroupIcon />
//       </ListItemIcon>
//       <ListItemText primary="Group 2" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <GroupIcon />
//       </ListItemIcon>
//       <ListItemText primary="Group 3" />
//     </ListItem>
//   </div>
// );