import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import logo from './images/logo.jpg'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import { Button } from '@material-ui/core';
import Movies from './Movies';
import Login from './Login';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        backgroundColor: '#124A60',
    },
    title: {
        display: 'flex',
        alignItems: 'center',
    },
    image: {
        width: '8%',
        marginRight: '20px',
    },
    navItems: {
        color: '#fff',
        fontWeight: '500',
        fontSize: '20px',
        textTransform: 'none',
        whiteSpace: 'nowrap',
    },
    headerOptions: {
        display: 'flex',
        flex: 1,
        justifyContent: 'space-evenly',
        '& .MuiButton-root:hover': {
            backgroundColor: 'inherit',
        },
    },
}));

const Home = ({ logout, isAuthenticated }) => {
    const [redirect, setRedirect] = useState(false);
    const classes = useStyles();

    const handleButtonClick = () => {
        logout();
        setRedirect(true);
    }

    if (redirect) {
        return <Redirect to='/login' />
    }

    return (
        <> { isAuthenticated ?
            <>
                <div className={classes.root}>
                    <AppBar position='fixed' className={classes.appBar}>
                        <Toolbar>
                            <Typography variant='h6' className={classes.title}>
                                <img className={classes.image} src={logo} alt='logo' onClick={() => { handleButtonClick('/Movie-DB/movies') }} />
                        The Movie DB
                    </Typography>
                            <div className={classes.headerOptions}>
                                <Button
                                    className={classes.navItems}
                                    onClick={handleButtonClick}
                                >
                                    Logout
                                </Button>
                            </div>
                        </Toolbar>
                    </AppBar>
                </div>
                <Movies />
            </>
            :
            <Login />
        }
        </>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(Home);

