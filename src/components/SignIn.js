import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import {signIn} from './../actions/Actions';




const SignIn = ({onSignIn}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleEmail = (e) => {
        const {value} = e.target;
        setEmail(value);
    
    }
    const handlePassword = (e) => {
        const {value} = e.target;
        setPassword(value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const signinObject = {
            username: email,
            password: password
        }

        const feedBack = onSignIn(signinObject);
        console.log('feeedback', feedBack)
        
            history.push('/profile');
        
        
    
    }

    return (
        <>
        <div className="login-form">
        <form onSubmit={handleSubmit}>
            <h2 className="text-center">Log in</h2>       
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Email" 
                    value={email}
                    onChange={handleEmail} />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" 
                    placeholder="Password" value={password}
                    onChange={handlePassword} />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">Log in</button>
                    
                </div>
                <div className="clearfix">
                    <label className="pull-left checkbox-inline"><input type="checkbox" /> Remember me</label>
                    <a href="#" className="pull-right">Forgot Password?</a>
                </div>        
            </form> 
        <p className="text-center"><a href="#">Create an Account</a></p>
        </div>
    </>
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSignIn: userobject => dispatch(signIn(userobject))
    }
}
export default connect(null, mapDispatchToProps)(SignIn);