import React, {
    useState,
    useEffect
} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        boxShadow: 'none',
        color: 'inherit',
        backgroundColor: 'white',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    },
    grow: {
        flexGrow: 1,
    },
    boxItem: {
        paddingLeft: '20px',
        paddingRight: '20px',
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: '#219249',
    },
    title: {
        display: 'none',
        color: '#219249',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    sectionDesktop: {
        display: 'flex',
    },
    badge: {
        backgroundColor: '#219249',
        color: 'white'
    }
}));

export default function Header(props) {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    useEffect(() => {
        
    }, [])
    
    return (
        <>
            <AppBar
                position="fixed"
                className={classes.appBar}
            >
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                    <h2 className={classes.title} >
                        KAMEREO
                    </h2>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <Box borderLeft={1} borderColor={'rgba(0, 0, 0, 0.12)'} className={classes.boxItem} >
                            <IconButton aria-label="show 4 new mails" color="inherit">
                                <Badge badgeContent={4} classes={{ badge: classes.badge}}>
                                    <MailOutlineOutlinedIcon />
                                </Badge>
                            </IconButton>
                        </Box>
                        <Box borderLeft={1} borderColor={'rgba(0, 0, 0, 0.12)'} className={classes.boxItem}>
                            <IconButton aria-label="show 17 new notifications" color="inherit">
                                <Badge badgeContent={17} classes={{ badge: classes.badge}}>
                                    <NotificationsNoneOutlinedIcon />
                                </Badge>
                            </IconButton>
                        </Box>
                        <Box borderLeft={1} borderColor={'rgba(0, 0, 0, 0.12)'} className={classes.boxItem}>
                            <p>ENG</p>
                        </Box>
                        <Box borderLeft={1} borderColor={'rgba(0, 0, 0, 0.12)'} className={classes.boxItem}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <IconButton
                                        edge="end"
                                        aria-label="account of current user"
                                        aria-controls={menuId}
                                        aria-haspopup="true"
                                        onClick={handleProfileMenuOpen}
                                        color="inherit"
                                    >
                                        <AccountCircle />
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <p>
                                        <b>Taku Tanaka</b>
                                        <br />
                                        <span>Administrator</span>
                                    </p>
                                </Grid>
                            </Grid>
                        </Box>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMenu}
        </>
    )
}
