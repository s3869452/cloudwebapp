import axios from 'axios';
import React, {useState} from 'react';
import { setUserSession } from './AuthService';
import { useNavigate } from 'react-router-dom';

const loginUrl = 'https://9uh6ji5vll.execute-api.us-east-1.amazonaws.com/prod/login';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();

    const submitHandler = (event) => {
        event.preventDefault();
        if (email.trim() === '' || password.trim() === '') {
            setErrorMessage('Email and password are required.');
            return
        }
        setErrorMessage(null)
        //const requestConfig = {
            //headers: {
                //'x-api-key': 'fk2Coxjtow8zyM9225jVBafhuGbc1fj759sAlWPk'
            //}
        //}
        const requestBody = {
            email: email,
            password: password
        }

        axios.post(loginUrl, requestBody).then(response => {
            setUserSession(response.data.user, response.data.token);
            navigate('/account');
        }).catch(error => {
            if (error.response.status === 401 || error.response.status === 403) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage('Sorry, the backend server is down. Please try again later!');
            }
        })
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <h5>Login</h5>
                Email: <input type="text" value={email} onChange={event => setEmail(event.target.value)}/> <br/>
                Password: <input type="password" value={password} onChange={event => setPassword(event.target.value)}/> <br/>
                <input type="submit" value="Login" />
            </form>    
            {errorMessage && <p className="message">{errorMessage}</p>}
        </div>
    )
}

export default Login;