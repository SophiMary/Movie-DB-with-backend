import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password } from '../actions/auth';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    resetContainer: {
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
}));

const ResetPassword = ({ reset_password }) => {
    const [requestSent, setRequestSent] = useState(false);
    const [email, setEmail] = useState('');
    const classes = useStyles();

    const onSubmit = e => {
        e.preventDefault();
        reset_password(email);
        setRequestSent(true);
    };

    if (requestSent) {
        alert('check your email to reset your password')
        return <Redirect to='/login' />
    }

    return (
        <div className={classes.resetContainer}>
            <h1 className={classes.title}>Request Password Reset</h1>
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
                <Button variant='contained' className={classes.buttons} type='submit'>Reset Password</Button>
            </form>
        </div>
    );
}

export default connect(null, { reset_password })(ResetPassword);
