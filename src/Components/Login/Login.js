import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();

    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div>
            <h1>Log In</h1>
            <Button onClick={handleGoogleLogIn} variant="warning">Google Sign In</Button>
        </div>
    );
};

export default Login;