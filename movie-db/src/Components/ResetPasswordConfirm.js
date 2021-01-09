import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password_confirm } from '../actions/auth';
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

const ResetPasswordConFirm = ({ match, reset_password_confirm }) => {
    const [requestSent, setRequestSent] = useState(false);
    const [new_password, setNewPassword] = useState('');
    const [re_new_password, setNewRePassword] = useState('');
    const classes = useStyles();

    const onSubmit = e => {
        e.preventDefault();
        const uid = match.params.uid;
        const token = match.params.token;
        reset_password_confirm(uid, token, new_password, re_new_password);
        setRequestSent(true);
    };

    if (requestSent) {
        return <Redirect to='/login' />
    }

    return (
        <div className={classes.resetContainer}>
            <h1 className={classes.title}>Request Password Reset</h1>
            <form onSubmit={e => onSubmit(e)}>
                <div className={classes.formSection}>
                    <input
                        className={classes.formControl}
                        type='password'
                        placeholder='New Password'
                        name='new_password'
                        value={new_password}
                        onChange={e => setNewPassword(e.target.value)}
                        required
                    />
                </div>
                <div className={classes.formSection}>
                    <input
                        className={classes.formControl}
                        type='password'
                        placeholder='Confirm New Password'
                        name='re_new_password'
                        value={re_new_password}
                        onChange={e => setNewRePassword(e.target.value)}
                        required
                    />
                </div>
                <Button variant='contained' className={classes.buttons} type='submit'>Reset Password</Button>
            </form>
        </div>
    );
}

export default connect(null, { reset_password_confirm })(ResetPasswordConFirm);
