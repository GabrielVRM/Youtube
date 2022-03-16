import React from "react";
import {
  AppBar,
  makeStyles,
  Toolbar,
  Button,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  Drawer,
  Box,
  ListItemText,
  CssBaseline,
  Icon,
  Typography,
  ListSubheader,
  Hidden,
  Switch
} from "@material-ui/core";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import HomeIcon from "@mui/icons-material/Home";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "auto",
    display:'flex'
  },

  Appbar: {
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
  },

  grow: {
    flexGrow: 1,
  },

  icons: {
    paddingRight: theme.spacing(3),
  },
  MenuIcon: {
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(6),
  },
  logo: {
    height: "25px",
  },

  drawerPaper: {
    borderRight: "none",
    width: 250,
  },
  text: {
    fontSize: "12px",
  },
  ListItem: {
    paddingTop: 3,
    paddingBottom: 3,
  },
  Button: {
    marginTop: "0px",
    marginBottom: "0px",
  },
  Typography: {
    padding:theme.spacing (1)
  },
  subheader:{
      textTransform:'uppercase'
  }
}));

const drawerWidth = 3450;
export function Header({darkMode, setDarkMode}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="inherit" className={classes.Appbar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            className={classes.MenuIcon}
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <img className={classes.logo} src="/src/images/preto.png" alt="" />
          <div className={classes.grow} />
          <Switch value={darkMode} onChange={() => setDarkMode(!darkMode)}/>

          
          <IconButton color="inherit" className={classes.icons}>
            <VideoCallIcon />
          </IconButton>
          <IconButton color="inherit" className={classes.icons}>
            <AppsIcon />
          </IconButton>
          <IconButton color="inherit" className={classes.icons}>
            <MoreVertIcon />
          </IconButton>
          <IconButton
            edge="start"
            color="inherit"
            className={classes.icons}
            aria-label="Menu"
          >
            <Button
              startIcon={<AccountCircleIcon />}
              variant="outlined"
              color="primary"
            >
              Fazer Login
            </Button>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box sx={{ overflow: "auto" }}>
          <Hidden mdDown>

        <Drawer
          className={classes.drawer}
          variant="permanent"
                   classes={{
            paper: classes.drawerPaper,
        }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List className={classes.List}>
              <ListItem classes={{ root: classes.ListItem }}>
                <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.text,
                  }}
                  primary={"Inicío"}
                />
              </ListItem>
              <ListItem classes={{ root: classes.ListItem }}>
                <ListItemIcon>{<LocalFireDepartmentIcon />}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.text,
                }}
                  primary={"Em alta"}
                />
              </ListItem>
              <ListItem classes={{ root: classes.ListItem }}>
                <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
                <ListItemText
                  classes={{
                      primary: classes.text,
                    }}
                    primary={"Incrições"}
                  />
              </ListItem>
            <Divider />
              <ListItem classes={{ root: classes.ListItem }}>
                <ListItemIcon>{<VideoLibraryIcon />}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.text,
                  }}
                  primary={"Blibioteca"}
                  />
              </ListItem>
              <ListItem classes={{ root: classes.ListItem }}>
                <ListItemIcon>{<HistoryIcon />}</ListItemIcon>
                <ListItemText
                  classes={{
                      primary: classes.text,
                    }}
                    primary={"Historico"}
                    />
              </ListItem>
            </List>
                    </Box>
          <Divider />
          <Box p={6}>
            <Typography variant="body2"  className={classes.Typography} >
              Fazer Login para curtir Videos, comentar e se Inscrever
            </Typography>
            <Button
              classes={{
                  root: classes.Button,
                }}
                startIcon={<AccountCircleIcon />}
                variant="outlined"
                color="primary"
              >
              Fazer Login
            </Button>

          </Box>
            <Divider />
       
          <List>
          <ListSubheader
                    component='div'
                    id='nested-list-subheader'
                    className={classes.subheader}
                    >
                    O Melhor do youtube
                  </ListSubheader>
            <ListItem classes={{ root: classes.ListItem }}>
              <ListItemIcon>{<HomeIcon />}</ListItemIcon>
              <ListItemText
                classes={{
                    primary: classes.text,
                }}
                primary={"Musícas"}
                />
            </ListItem>
            <ListItem classes={{ root: classes.ListItem }}>
              <ListItemIcon>{<LocalFireDepartmentIcon />}</ListItemIcon>
              <ListItemText
                classes={{
                    primary: classes.text,
                }}
                primary={"Esportes"}
                />
            </ListItem>
            <ListItem classes={{ root: classes.ListItem }}>
              <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
              <ListItemText
                classes={{
                    primary: classes.text,
                }}
                primary={"jogos"}
                />
            </ListItem>
            <ListItem classes={{ root: classes.ListItem }}>
              <ListItemIcon>{<HomeIcon />}</ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.text,
                }}
                primary={"Filme"}
                />
            </ListItem>
            <ListItem classes={{ root: classes.ListItem }}>
              <ListItemIcon>{<LocalFireDepartmentIcon />}</ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.text,
                }}
                primary={"Notícias"}
              />
            </ListItem>
            <ListItem classes={{ root: classes.ListItem }}>
              <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
              <ListItemText
                classes={{
                    primary: classes.text,
                }}
                primary={"Ao Vivo"}
                />
            </ListItem>
          </List>
          <Divider/>

              <List>
        <ListItem classes={{ root: classes.ListItem }}>
              <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
              <ListItemText
                classes={{
                    primary: classes.text,
                }}
                primary={"Ao Vivo"}
                />
            </ListItem>
                </List>
        </Drawer>
                </Hidden>
      </Box>
    </div>
  );
}
