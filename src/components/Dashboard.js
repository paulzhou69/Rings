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
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import GroupIcon from '@material-ui/icons/Group';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import NotificationsIcon from '@material-ui/icons/Notifications';
// import { mainListItems, secondaryListItems } from './listItems';
import { database } from './database';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import Ring from './Ring'
import PersonalIcon from './PersonalIcon'
import { useHistory } from "react-router-dom";

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
}));

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
    // console.log(str);
    
    if (str == "/") {
      history.push("/user/" + actualUser);
    } else {
      history.push("/user" + str);
    }
  }

  if (props.match.path == '/') {
    history.push("/user/" + actualUser);
  }

  const user = props.match.params.name;
  const userCircle = database.filter((obj) => obj["user"] == user)[0];

  const mainListItems = (
    <div>
      <ListItem button onClick={() => handleClick("/")}>
        <ListItemIcon>
          <DonutLargeIcon />
        </ListItemIcon>
        <ListItemText primary="your rings" />
      </ListItem>
      <ListItem button onClick={() => handleClick("/sean")}>
        <ListItemIcon>
          <DonutLargeIcon />
        </ListItemIcon>
        <ListItemText primary="sean" />
      </ListItem>
      <ListItem button onClick={() => handleClick("/paul")}>
        <ListItemIcon>
          <DonutLargeIcon />
        </ListItemIcon>
        <ListItemText primary="paul" />
      </ListItem>
      <ListItem button onClick={() => handleClick("/viola")}>
        <ListItemIcon>
          <DonutLargeIcon />
        </ListItemIcon>
        <ListItemText primary="viola" />
      </ListItem>
      <ListItem button onClick={() => handleClick("/ed")}>
        <ListItemIcon>
          <DonutLargeIcon />
        </ListItemIcon>
        <ListItemText primary="ed" />
      </ListItem>
    </div>
  );
  
  const secondaryListItems = (
    <div>
      <ListSubheader inset>Groups</ListSubheader>
      <ListItem button>
        <ListItemIcon>
          <GroupIcon />
        </ListItemIcon>
        <ListItemText primary="apma group" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <GroupIcon />
        </ListItemIcon>
        <ListItemText primary="cs group" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <GroupIcon />
        </ListItemIcon>
        <ListItemText primary="research group" />
      </ListItem>
    </div>
  );

  return (
    <div className={classes.root}>
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
            {/* <Badge badgeContent={4} color="secondary"> */}
              <PersonalIcon />
            {/* </Badge> */}
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
          <Grid container spacing={3}>
            {
              userCircle.items.map((thing) => {
                return (
                  <Grid item xs={12} md={4}>
                    <Ring circleName={thing.circle} rings={thing.rings} />
                    {
                      props.match.params.name == actualUser
                      ? 
                      <div></div>
                      :
                      <button>Remind</button>
                    }
                  </Grid>
                )
              })
            }
          </Grid>
          <Box pt={4}>
            {/* <button onClick={() => console.log(props)}>Click me</button> */}
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}