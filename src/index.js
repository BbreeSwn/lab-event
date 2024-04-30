import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'


function App() {
    //state 
    const [username, setUsername] = React.useState('');
    const [errorUserName, setErrorUserName] = React.useState(false);
    const [errorUserNameText ,setErrorUserNameText] = React.useState('')

    const [password, setPassword] = React.useState('');
    const [errorPassword, setErrorPassword] = React.useState(false);
    const [errorPasswordText ,setErrorPasswordText] = React.useState('')

    const [confirm, setConfirm] = React.useState('');
    const [errorConfirm, setErrorConfirm] = React.useState(false);
    const [errorConfirmText ,setErrorText] = React.useState('')


    //handle
    const handleChangeUserName = (event) => {
        setUsername(event.target.value)
        if (errorUserName) setErrorUserName(false)
    };

    const handleChangePassword = (event) => {
        setPassword(event.target.value)
        if (errorPassword) setErrorPassword(false)
    };

    const handleChangeConfirmPassword = (event) => {
        setConfirm(event.target.value)
        if (errorConfirm) setErrorConfirm(false)
    };

//validation
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit');

        if (!username) {
        setErrorUserName(true);
        setErrorUserNameText('username is required')
    } else if (username.length < 8 || username.length > 24){
        setErrorUserName(false);
        setErrorUserNameText('username must have 8-24 charecter')
    }
    
        if (!password) {
        setErrorPassword(true)
        setErrorPasswordText('username must have 8-16 charecter')
    }else if(password.length < 8 || password > 16){
        setErrorPassword(false);
        setErrorPasswordText('username must have 8-16 charecter')
    }
        

        if (password !== confirm) setErrorConfirm(true);
    }
    return (
        <div className='app'>
            <form className='form' onSubmit={handleSubmit}>
                <h2>Register Form</h2>
                <div className='form_input'>
                    <label>username</label>
                    <input className='input_error' onChange={handleChangeUserName} value={username}  type='text' />
                    {errorUserName && <p className='text_error'>username is required</p>}
                </div>
                <div className='form_input'>
                    <label>password</label>
                    <input className='input_success' onChange={handleChangePassword} value={password} type='password' />
                    {errorPassword && <p className='text_error'>password is required</p>}
                </div>
                <div className='form_input' >
                    <label>confirm password</label>
                    <input className='form_input' onChange={handleChangeConfirmPassword} type='password' />
                    {errorConfirm && <p className='text_error'>confirm error</p>}
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
}

// //render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);



