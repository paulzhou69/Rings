import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ForumIcon from '@material-ui/icons/Forum';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import GroupIcon from '@material-ui/icons/Group';
import AddIcon from '@material-ui/icons/Add';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import { mainListItems, secondaryListItems } from './listItems';
import { database } from './database';
import Ring from './Ring';
import GroupRing from './GroupRing';
import AssignmentRing from './assignmentRing';
import PersonalIcon from './PersonalIcon';
import RingIcon1 from '../icons/svg';
import RingIcon2 from '../icons/svg2';
import RingIcon3 from '../icons/svg3';
import RingIcon4 from '../icons/svg4';
import RingIcon5 from '../icons/svg5';
import { useHistory } from "react-router-dom";
import { CenterFocusStrong, FilterNone } from '@material-ui/icons';
import Chatroom from './chatroom'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Rings
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  addIcon: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 64, 
    height: 64,

  },
  add: {
    width: 64, 
    height: 64,
    fill: "#C4C4C4"
  },
  add2: {
    fill: "#C4C4C4"
  },
  mainPage: {
    justifyContent: "space-around",
    direction: "row",
  },
  mainPage2: {
    direction: "row",
  },
  classLeft: {
    direction: "column",
  },
  classRight: {
    paddingLeft: "50px",
  },
  playlist: {
    justifyContent: "center",
    fontStyle: "italic"
  },
  groupTop: {
    direction: "row",
    justifyContent: "space-around",
  },
  chatroomWrap: {
    paddingRight: 50,
  }
}));

var numNotification = 0;

export default function Dashboard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const history = useHistory();

  const actualUser = "alex";

  function handleClick(str) {
    // OnUser = true;
    // console.log(str);
    if (str == "/") {
        history.push("/user/" + actualUser);
    } else {
      history.push("/user" + str);
    };
    
  }

  function handleGroupClick(str) {
    //  OnUser = false;
     console.log(str);
     history.push("/group" + str);
     
  }

  if (props.match.path == '/') {
    history.push("/user/" + actualUser);
  }

  const user = props.match.params.name;
  const group = props.match.params.name;
  const userCircle = database.filter((obj) => obj["user"] == user)[0];
  const groupCircle = database.filter((obj) => obj["group"] == group)[0];
  const groupPlaylist = database.filter((obj) => obj["group"] == group)[0];

  function handleCircleClick(str) {
    // console.log(userCircle["items"][0].circle);
    if (str == "/") {
      history.push("/user/" + actualUser + "/" + userCircle["items"][0].circle)
    } else {
      history.push("/user/" + str + "/" + userCircle["items"][0].circle)
    }
  }

  function handlePlaylistClick(str) {
    history.push("/group/" + str + "/" + "playlist")
  }
  function handleChatroomClick(str) {
    history.push("/group/" + str + "/" + "chatroom")
  }

  const mainListItems = (
    <div>
      <ListItem button onClick={() => handleClick("/")}>
        <ListItemIcon>
          <RingIcon1 />
        </ListItemIcon>
        <ListItemText primary="your rings" />
      </ListItem>
      <ListItem button onClick={() => handleClick("/sean")}>
        <ListItemIcon>
          <RingIcon2 />
        </ListItemIcon>
        <ListItemText primary="sean" />
      </ListItem>
      <ListItem button onClick={() => handleClick("/paul")}>
        <ListItemIcon>
          <RingIcon3 />
        </ListItemIcon>
        <ListItemText primary="paul" />
      </ListItem>
      <ListItem button onClick={() => handleClick("/viola")}>
        <ListItemIcon>
          <RingIcon4 />
        </ListItemIcon>
        <ListItemText primary="viola" />
      </ListItem>
      <ListItem button onClick={() => handleClick("/ed")}>
        <ListItemIcon>
          <RingIcon5 />
        </ListItemIcon>
        <ListItemText primary="ed" />
      </ListItem>
    </div>
  );
  
  const secondaryListItems = (
    <div>
      <ListSubheader inset>Groups</ListSubheader>
      <ListItem button onClick={() => handleGroupClick("/apma-group")}>
        <ListItemIcon>
          <GroupIcon />
        </ListItemIcon>
        <ListItemText primary="apma-group" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <GroupIcon />
        </ListItemIcon>
        <ListItemText primary="cs-group" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <GroupIcon />
        </ListItemIcon>
        <ListItemText primary="research-group" />
      </ListItem>
    </div>
  );

  return (
    <div className={classes.root}>
      {/* <div style={{ height: "3%", width: "3%", 
              position: "absolute", top: "80px", right: "25px", zIndex: -1 }}>
        <PersonalIcon style={{ position: "absolute" }}/>
      </div> */}
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar} >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          {
            props.match.params.name == actualUser
            ?
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              your rings
            </Typography>
            :
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            {props.match.params.name}'s rings 
            </Typography> 
          }
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary"> 
              <AccountCircleIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <br/>
          <Grid container spacing={3} className={classes.mainPage} >
            {
              props.match.path.split('/')[1] == 'user' 
              ?
              props.match.path.split('/')[3] == undefined
                ?
                userCircle.items.map((thing) => {
                  return (
                    <Grid item xs={12} md={4}>
                      <div onClick={() => handleCircleClick(user)}>
                        <Ring
                          circleName={thing.circle} 
                          rings={thing.rings}
                        />
                      </div>
                      {
                        props.match.params.name == actualUser
                        ? 
                        <div></div>
                        :
                        <button 
                          type="button" 
                          class="btn btn-danger"
                          style={{marginTop: 20 + "px"}}
                          onClick={() => {alert("successfully reminded " 
                                          + user + 
                                          " of their due");
                                        numNotification++;}}
                        >
                            ring {user}
                        </button>
                      }
                    </Grid>
                  )})
                :
                <div >
                  <Typography variant="h6">
                    {userCircle["items"][0].circle}
                  </Typography>
                  <br /><br />
                  <Grid>
                  {
                  props.match.params.name == actualUser
                  ?
                  <Grid container spacing={10}>
                    {userCircle["items"][0].rings.map((thing) => {
                    const startDate = 'start: ' + thing.startDate.slice(5);
                    const dueDate = 'due: ' + thing.endDate.slice(5);
                    return (
                      <Grid item spacing={6}>
                        <AssignmentRing
                          rings={thing}
                        />
                        <Typography >
                          <b>{thing.name}</b>
                        </Typography>
                        <Typography>
                          {startDate}
                        </Typography>
                        <Typography>
                          {dueDate}
                        </Typography>
                      </Grid>
                    )
                  })}
                   <Grid className={classes.classRight}>
                      <Grid style={{paddingBottom: '20px'}}>
                        accessible to
                        </Grid>
                        <ListItem button onClick={() => handleClick("/sean")}>
                        <ListItemIcon>
                          <RingIcon2 />
                        </ListItemIcon>
                        <ListItemText primary="sean" />
                      </ListItem>
                      <ListItem button onClick={() => handleClick("/paul")}>
                        <ListItemIcon>
                          <RingIcon3 />
                        </ListItemIcon>
                        <ListItemText primary="paul" />
                      </ListItem>
                      <ListItem button onClick={() => handleClick("/viola")}>
                        <ListItemIcon>
                          <RingIcon4 />
                        </ListItemIcon>
                        <ListItemText primary="viola" />
                      </ListItem>
                      <ListItem button >
                        <ListItemIcon>
                          <AddIcon className={classes.add2}/>
                        </ListItemIcon>
                      </ListItem>
                    </Grid>
                </Grid>
                :
                <Grid container spacing={6} direction={"row"}>
                    {userCircle["items"][0].rings.map((thing) => {
                    return (
                      <Grid item spacing={6}>
                        <AssignmentRing
                          rings={thing}
                        />
                        <Typography >
                          {thing.name}
                        </Typography>
                        <Typography>
                          {thing.endDate}
                        </Typography>
                        <Grid>
                          <button 
                            type="button" 
                            class="btn btn-danger"
                            style={{marginTop: 20 + "px"}}
                            onClick={() => alert("successfully reminded " 
                                            + user + 
                                            " of their due")}
                          >
                              remind {user}
                          </button>
                        </Grid>
                      </Grid>
                    )
                  })}
                </Grid>
                }
                </Grid>
                </div>
              :
              // console.log(groupCircle)
              // <div>
              //   <button onClick={() => console.log(groupCircle)}>hi</button>
              // </div>
              props.match.path.split('/')[3] == undefined
                ?
                <div>
                  <Grid container className={classes.groupTop}>
                    <Grid item className={classes.playlist}
                    onClick={()=>handlePlaylistClick(group)}>
                    <IconButton color="#C4C4C4">
                      <QueueMusicIcon />
                    </IconButton>
                    <Typography style={{paddingTop: 10,}}>
                      playlist
                    </Typography>
                    </Grid>
                    <Grid item className={classes.playlist}
                    onClick={()=>handleChatroomClick(group)}>
                    <IconButton color="#C4C4C4">
                      <ForumIcon />
                    </IconButton>
                    <Typography style={{paddingTop: 10,}}>
                      chatroom
                    </Typography>
                    </Grid>
                    </Grid>
                    <br /><br />
                    <Grid container className={classes.mainPage2} xs={12}>
                      {
                      groupCircle.items.map((thing) => {
                      return (
                        <Grid item >
                          <GroupRing circleName={thing.circle} rings={thing.rings} />
                        </Grid>
                      )
                      })}
                    </Grid>
                </div>
                :
                props.match.path.split('/')[3] == 'playlist'
                  ?
                  <Grid container >
                    <Grid item container className={classes.playlist}
                    onClick={()=>handlePlaylistClick(group)}>
                    <IconButton color="#C4C4C4">
                      <QueueMusicIcon />
                    </IconButton>
                    <Typography style={{paddingTop: 10,}}>
                      playlist
                    </Typography>
                    </Grid>
                    <br /><br />
                  <ListItem button >
                        <ListItemIcon>
                          <FavoriteIcon />
                        </ListItemIcon>
                        <ListItemText primary="feather" secondary="peter mcisaac music - feather"/>
                      </ListItem>
                      <ListItem button >
                        <ListItemIcon>
                          <FavoriteIcon />
                        </ListItemIcon>
                        <ListItemText primary="red in the grey" secondary="m∅ - no mythologies to follow"/>
                      </ListItem>
                      <ListItem button >
                        <ListItemIcon>
                          <FavoriteIcon />
                        </ListItemIcon>
                        <ListItemText primary="new light" secondary="john mayer - new light"/>
                      </ListItem>
                      <ListItem button >
                        <ListItemIcon>
                          <AddIcon className={classes.add2}/>
                        </ListItemIcon>
                      </ListItem>
                  </Grid>
                  :
                  
                  <div className={classes.chatroomWrap}>
                    {/* <button onClick={() => console.log(props.match.path.split('/')[3])}>Click me</button> */}
                    <Chatroom />
                  </div>
            }
          </Grid>
          <Box pt={4}>
            {/* <button onClick={() => console.log(props.match.path.split('/')[1])}>Click me</button> */}
            {/* <Copyright /> */}
          </Box>
          {
            props.match.path.split('/')[3] == 'chatroom' ||
            props.match.path.split('/')[3] == 'playlist'
            ?
            <div></div>
            :
            <IconButton 
              className={classes.addIcon} >
                <AddIcon className={classes.add}/>
            </IconButton>
          }
        </Container>
      </main>
    </div>
  );
}
