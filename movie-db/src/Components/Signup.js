import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { signup } from '../actions/auth';

const useStyles = makeStyles((theme) => ({
    signupContainer: {
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

const Signup = ({ signup, isAuthenticated }) => {
    const [accountCreated, setAccountCreated] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [re_password, setRe_Password] = useState('');
    const classes = useStyles();

    const onSubmit = e => {
        e.preventDefault();
        if (password === re_password) {
            signup(name, email, password, re_password);
            setAccountCreated(true);
        }
    };

    if (isAuthenticated) {
        return <Redirect to='/Movie-DB/movies' />
    }
    if (accountCreated) {
        alert('Please activate your account, check your email to do so.')
        return <Redirect to='/login' />
    }

    return (
        <div className={classes.signupContainer}>
            <h1 className={classes.title}>Sign Up</h1>
            <form onSubmit={e => onSubmit(e)}>
                <div className={classes.formSection}>
                    <input
                        className={classes.formControl}
                        type='text'
                        placeholder='Name'
                        name='name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                </div>
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
                        minLength='8'
                        required
                    />
                </div>
                <div className={classes.formSection}>
                    <input
                        className={classes.formControl}
                        type='password'
                        placeholder='Confirm Password'
                        name='re_password'
                        value={re_password}
                        onChange={e => setRe_Password(e.target.value)}
                        minLength='8'
                        required
                    />
                </div>
                <Button variant='contained' className={classes.buttons} type='submit'>Sign Up </Button>
            </form>
            <p className={classes.text}>
                Already have an account? <Link to='/login'>Login</Link>
            </p>
        </div>
    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { signup })(Signup);
