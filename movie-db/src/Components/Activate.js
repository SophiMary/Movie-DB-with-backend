import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { verify } from '../actions/auth';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    activateContainer: {
        marginTop: '150px',
        textAlign: 'center',
    },
    title: {
        fontSize: '40px',
    },
    buttons: {
        backgroundColor: '#124A60',
        color: '#fff',
        width: '180px',
        padding: '8px',
        borderRadius: '20px'
    },
}));

const Activate = ({ verify, match }) => {
    const [verified, setVerified] = useState(false);
    const classes = useStyles();

    const verify_account = e => {
        const uid = match.params.uid;
        const token = match.params.token;
        verify(uid, token);
        setVerified(true);
    };

    if (verified) {
        alert('Account activated please login')
        return <Redirect to='/login' />
    }

    return (
        <div className={classes.activateContainer}>
            <h1 className={classes.title}>Verify your Account</h1>
            <Button variant='contained' className={classes.buttons}
                onClick={verify_account}
                type='button'
            >
                Verify
                </Button>
        </div>
    );
};

export default connect(null, { verify })(Activate);