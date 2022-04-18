import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import googleIcon from '../../images/google-logo.png';
import Loading from '../Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GoogleAuthentication from '../GoogleAuthentication/GoogleAuthentication';


const SignIn = () => {
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, resetPasswordError] = useSendPasswordResetEmail(auth);

    // tracking last location
    const location = useLocation();
    // const [user, loading] = useAuthState(auth);
    const from = location.state?.from?.pathname || "/";

    const handleSignIn = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    if (loading) {
        return <Loading></Loading>
    }

    // after login redirect to home
    if (user) {
        navigate(from, { replace: true });
    }

    // reset password

    const handlePasswordReset = async () => {
        const email = emailRef.current.value;
        if (email === '') {
            alert('Enter email');
            return;
        }
        await sendPasswordResetEmail(email);
        toast('Sent email');
    }


    return (
        <div>
            <h3 className='text-center text-primary mt-5'>Sign In</h3>
            <div className='w-50 mx-auto'>
                <Form onSubmit={handleSignIn}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>

                    <Button className='w-50 d-block mx-auto' variant="primary" type="submit">
                        Sign In
                    </Button>
                </Form>
                <p className='text-danger text-center mt-3'>
                    {error && error.message}
                </p>
            </div>

            <GoogleAuthentication></GoogleAuthentication>

            <div>
                <hr className='w-50 mx-auto mt-5' />
                <p className='text-center'>
                    Forgot Password?<Button onClick={handlePasswordReset} variant="link">Reset Password</Button>
                </p>
                <ToastContainer />
                <p className='text-center'>
                    Don't Have an Account? <Link className="form-link" to="/signup">Create an account</Link>
                </p>
            </div>
        </div>
    );
};

export default SignIn;