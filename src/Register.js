import React, {useState} from 'react';
import axios from 'axios';

const registerUrl = 'https://9uh6ji5vll.execute-api.us-east-1.amazonaws.com/prod/register';

const Register = () => {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(null);
    
    const submitHandler = (event) => {
        event.preventDefault();
        if (email.trim() === '' || password.trim() === '' || name.trim() === '') {
            setMessage('All fields are required');
            return;
        }
        setMessage(null);
        //const requestConfig = {
            //headers: {
                //'x-api-key': 'fk2Coxjtow8zyM9225jVBafhuGbc1fj759sAlWPk'
            //}
        //}

        const requestBody = {
            email: email,
            password: password,
            name: name
        }

        axios.post(registerUrl, requestBody).then(response => {
            setMessage('Registeration Successful');
        }).catch(error => {
            if (error.response.status === 401 || error.response.status === 403) {
                setMessage(error.response.data.message);
            } else {
                setMessage('sorry...the backend server is down!! Please try again later');
            }
        })
    }
    
    return (
        <div>
            <form onSubmit={submitHandler}>
                <h5>Register</h5>
                Email: <input type="text" value={email} onChange={event => setEmail(event.target.value)} /> <br/>
                Password: <input type="password" value={password} onChange={event => setPassword(event.target.value)} /> <br/>
                Name: <input type="text" value={name} onChange={event => setName(event.target.value)} /> <br/>
                <input type="submit" value="Register" />
            </form>
            {message && <p className="message">{message}</p>}
        </div>
    )
}

export default Register;