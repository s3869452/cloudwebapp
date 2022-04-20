import axios from 'axios';
import React, {useState} from 'react';

const loginUrl = 'https://lbnhkavsjh.execute-api.us-east-1.amazonaws.com/prod/createpost';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const submitHandler = (event) => {
        event.preventDefault();
        if (title.trim() === '' || category.trim() === '' || description.trim() === '') {
            setErrorMessage('All fields are required.');
            return
        }
        setErrorMessage(null)
        //const requestConfig = {
            //headers: {
                //'x-api-key': 'fk2Coxjtow8zyM9225jVBafhuGbc1fj759sAlWPk'
            //}
        //}
        const requestBody = {
            title: title,
            category: category,
            description: description
        }

        axios.post(loginUrl, requestBody).then(response => {
            setMessage('Post created!');
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
                <h5>Create Post</h5>
                Title: <input type="text" value={title} onChange={event => setTitle(event.target.value)}/> <br/>
                Category: <input type="text" value={category} onChange={event => setCategory(event.target.value)}/> <br/>
                Description: <textarea type="text" value={description} onChange={event => setDescription(event.target.value)}/> <br/>
                <input type="submit" value="Create Post" />
            </form>    
            {errorMessage && <p className="message">{errorMessage}</p>}
            {message && <p className="message">{message}</p>}
        </div>
    )
}

export default CreatePost;