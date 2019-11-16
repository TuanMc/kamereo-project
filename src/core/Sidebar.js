import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { withRouter } from 'react-router-dom'

const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
}));

const Sidebar = (props) => {
    const classes = useStyles();
    const { history } = props;

    const DashboardItems = [
        {
            title: "Overview",
            link: "/overview",
            icon: (<InboxIcon />)
        },
        {
            title: "Orders",
            link: "/orders",
            icon: (<InboxIcon />)
        },
        {
            title: "Supplier List",
            link: "/supplier-list",
            icon: (<InboxIcon />)
        },
        {
            title: "Statistic",
            link: "/statistic",
            icon: (<InboxIcon />)
        }
    ];
    const MarketPlaceItems = [
        {
            title: "Market",
            link: "/market",
            icon: (<InboxIcon />)
        }
    ];
    const GeneralSettingsItems = [
        {
            title: "Company Info",
            link: "/company-info",
            icon: (<InboxIcon />)
        },
        {
            title: "Store Info",
            link: "/store-info",
            icon: (<InboxIcon />)
        },
        {
            title: "User Management",
            link: "/user-management",
            icon: (<InboxIcon />)
        },
    ];

    const gotoLink = (link) => {
        console.log("Go to link ", link);
        history.push(link);
    }

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <Grid container className={classes.content}>
                <Grid item md={12} className={classes.toolbar}></Grid>
                <Grid item md={12} className={classes.toolbar}>
                    Company logo section
                </Grid>
                <Grid item md={12} className={classes.toolbar}>
                    Favorite section
                </Grid>
                <Grid item md={12}>
                    <h3>Dashboard</h3>
                    <List>
                        {DashboardItems.map(menuItem => (
                            <ListItem button key={menuItem.title} onClick={() => gotoLink(menuItem.link)}>
                                <ListItemIcon>{menuItem.icon}</ListItemIcon>
                                <ListItemText primary={menuItem.title} />
                            </ListItem>
                        ))}
                    </List>
                </Grid>
                <Grid item md={12}>
                    <h3>Market Place</h3>
                    <List>
                        {MarketPlaceItems.map(menuItem => (
                            <ListItem button key={menuItem.title} onClick={() => gotoLink(menuItem.link)}>
                                <ListItemIcon>{menuItem.icon}</ListItemIcon>
                                <ListItemText primary={menuItem.title} />
                            </ListItem>
                        ))}
                    </List>
                </Grid>
                <Grid item md={12}>
                    <h3>General Settings</h3>
                    <List>
                        {GeneralSettingsItems.map(menuItem => (
                            <ListItem button key={menuItem.title} onClick={() => gotoLink(menuItem.link)}>
                                <ListItemIcon>{menuItem.icon}</ListItemIcon>
                                <ListItemText primary={menuItem.title} />
                            </ListItem>
                        ))}
                    </List>
                </Grid>
            </Grid>
        </Drawer>
    )
}

export default withRouter(Sidebar);