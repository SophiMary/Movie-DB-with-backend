import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { login } from '../actions/auth';

const useStyles = makeStyles((theme) => ({
    loginContainer: {
        marginTop: '150px',
        textAlign: 'center',
    },
    title: {
        fontSize: '40px',
    },
    formControl: {
        width: '30%',
        padding: '15px',
        marginBottom: '20px',
        borderRadius: '20px',
        outline: 'none',
        border: '1px solid #124A60',
        [theme.breakpoints.down('sm')]: {
            width: '60%',
        },
        [theme.breakpoints.down('xs')]: {
            width: '80%',
        },
    },
    buttons: {
        backgroundColor: '#124A60',
        color: '#fff',
        width: '180px',
        padding: '8px',
        borderRadius: '20px'
    },
    text: {
        color: '#124A60',
    }
}));

const Login = ({ login, isAuthenticated }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const classes = useStyles();

    const onSubmit = e => {
        e.preventDefault();
        login(email, password);
    };

    if (isAuthenticated) {
        alert('Registered account should be activated, please check your email to do so.')
        return <Redirect to='/Movie-DB/movies' />
    }

    return (
        <div className={classes.loginContainer}>
            <h1 className={classes.title}>Login</h1>
            <form onSubmit={e => onSubmit(e)}>
                <div className={classes.formSection}>
                    <input
                        className={classes.formControl}
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className={classes.formSection}>
                    <input
                        className={classes.formControl}
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        minLength='6'
                        required
                    />
                </div>
                <Button variant='contained' className={classes.buttons} type='submit'>Login </Button>
            </form>
            <p className={classes.text}>
                Don't have an account? <Link to='/signup'>Sign Up</Link>
            </p>
            <p className={classes.text}>
                Forgot your Password? <Link to='/reset-password'>Reset Password</Link>
            </p>
        </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);

