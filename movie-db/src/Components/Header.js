import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import logo from "./images/logo.jpg"
import { withRouter } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        backgroundColor: "#124A60",
    },
    title: {
        display: "flex",
        alignItems: "center",
    },
    image: {
        width: "8%",
        marginRight: "20px",
    },
    navItems: {
        color: "#fff",
        fontWeight: "500",
        fontSize: "20px",
        textTransform: "none",
        whiteSpace: "nowrap",
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: "white",
        "& .MuiSvgIcon-root": {
            fontSize: "32px",
        },
    },
    headerOptions: {
        display: "flex",
        flex: 1,
        justifyContent: "space-evenly",
        "& .MuiButton-root:hover": {
            backgroundColor: "inherit",
        },
    },
}));

const Header = props => {
    const { history } = props;
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClick = pageURL => {
        history.push(pageURL);
        setAnchorEl(null);
    };

    const handleButtonClick = pageURL => {
        history.push(pageURL);
    };

    const menuItems = [
        {
            menuTitle: "Movies",
            pageURL: "/Movie-DB/movies"
        },
        {
            menuTitle: "TV Shows",
            pageURL: "/Movie-DB/tv-shows"
        },
    ];

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <img className={classes.image} src={logo} alt="logo" onClick={() => { handleButtonClick("/Movie-DB/movies")}} />
                        The Movie DB
                    </Typography>
                    {/* Menu Bar */}
                    {isMobile ? (
                        <>
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="menu"
                                onClick={handleMenu}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right"
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right"
                                }}
                                open={open}
                                onClose={() => setAnchorEl(null)}
                            >
                                {menuItems.map(menuItem => {
                                    const { menuTitle, pageURL } = menuItem;
                                    return (
                                        <MenuItem className={classes.menuItems} onClick={() => handleMenuClick(pageURL)}>
                                            {menuTitle}
                                        </MenuItem>
                                    );
                                })}
                            </Menu>
                        </>
                    ) : (
                            // Nav Bar
                            <div className={classes.headerOptions}>
                                <Button
                                    className={classes.navItems}
                                    onClick={() => { handleButtonClick("/Movie-DB/movies")}}
                                >
                                    Movies
                                </Button>
                                <Button
                                    className={classes.navItems}
                                    onClick={() => { handleButtonClick("/Movie-DB/tv-shows")}}
                                >
                                    TV Shows
                                </Button>
                            </div>
                        )}
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default withRouter(Header);


