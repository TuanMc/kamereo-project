import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SpeedIcon from '@material-ui/icons/Speed';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import TrendingUpOutlinedIcon from '@material-ui/icons/TrendingUpOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import ApartmentOutlinedIcon from '@material-ui/icons/ApartmentOutlined';
import RestaurantMenuOutlinedIcon from '@material-ui/icons/RestaurantMenuOutlined';
import PeopleOutlinedIcon from '@material-ui/icons/PeopleOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { withRouter } from 'react-router-dom'
import StoreLogo from '../assets/images/StoreLogo.png';
import { Link } from '@material-ui/core';

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
    },
    storeLogo: {
        width: '60px',
        borderRadius: '50%'
    },
    marginLeft30: {
        marginLeft: '30px'
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
            icon: (<SpeedIcon />)
        },
        {
            title: "Orders",
            link: "/orders",
            icon: (<DescriptionOutlinedIcon />)
        },
        {
            title: "Supplier List",
            link: "/supplier-list",
            icon: (<LocalShippingOutlinedIcon />)
        },
        {
            title: "Statistic",
            link: "/statistic",
            icon: (<TrendingUpOutlinedIcon />)
        }
    ];
    const MarketPlaceItems = [
        {
            title: "Market",
            link: "/market",
            icon: (<StorefrontOutlinedIcon />)
        }
    ];
    const GeneralSettingsItems = [
        {
            title: "Company Info",
            link: "/company-info",
            icon: (<ApartmentOutlinedIcon />)
        },
        {
            title: "Store Info",
            link: "/store-info",
            icon: (<RestaurantMenuOutlinedIcon />)
        },
        {
            title: "User Management",
            link: "/user-management",
            icon: (<PeopleOutlinedIcon />)
        },
    ];

    const gotoLink = (link) => {
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
                <Grid item md={12} className={classes.toolbar} style={{ marginTop: '30px' }}></Grid>
                <Grid item md={12} className={classes.toolbar}>
                    <Grid container className={classes.marginLeft30}>
                        <Grid item md={12} style={{ display: 'flex' }}>
                            <span style={{ marginRight: '10px' }}>
                                <img src={StoreLogo} className={classes.storeLogo} style={{ height: '60px' }} alt="Store Logo" />
                            </span>
                            <span>
                                <h3 style={{ marginTop: '10px', marginBottom: '0px' }}>KAMEREO</h3>
                                <span style={{ opacity: '0.3' }}>135 Hai Bà Trưng</span>
                            </span>
                        </Grid>
                        <Grid item md={12} style={{ paddingLeft: '70px', paddingTop: '20px', paddingBottom: '20px' }}>
                            <Link>CHANGE STORE</Link>
                        </Grid>
                    </Grid>
                </Grid>
                <hr style={{ width: '100%' }} />
                <Grid item md={12} className={classes.toolbar}>
                    <Grid container className={classes.marginLeft30}>
                        <Grid item md={12} style={{ display: 'flex', color: 'red', paddingTop: '20px' }}>
                            <FavoriteIcon />
                            <span style={{ marginLeft: '50px' }}>FAVORITE ITEMS</span>
                        </Grid>
                    </Grid>
                </Grid>
                <hr style={{ width: '100%' }} />
                <Grid container className={classes.marginLeft30}>
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
            </Grid>
        </Drawer>
    )
}

export default withRouter(Sidebar);