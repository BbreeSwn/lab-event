import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'


function App() {
    //state 
    const [isSubmit, setIsSubmit] = React.useState('false')

    const [username, setUsername] = React.useState('');
    const [errorUserName, setErrorUserName] = React.useState(false);
    const [errorUserNameText, setErrorUserNameText] = React.useState('')

    const [password, setPassword] = React.useState('');
    const [errorPassword, setErrorPassword] = React.useState(false);
    const [errorPasswordText, setErrorPasswordText] = React.useState('')

    const [confirm, setConfirm] = React.useState('');
    const [errorConfirm, setErrorConfirm] = React.useState(false);
    const [errorConfirmText, setErrorConfirmText] = React.useState('')

    //border
    const [inputSuccess, setInputSuccess] = React.useState('');
    const [inputError, setInputError] = React.useState('')

    // 'input_error'
    // 'input_success'


    //handle
    const handleChangeUserName = (event) => {
        setIsSubmit(false)
        setUsername(event.target.value)
        if (errorUserName)
            setErrorUserName(false)
        setErrorUserNameText('')
    };

    const handleChangePassword = (event) => {
        setIsSubmit(false)
        setPassword(event.target.value)
        if (errorPassword)
            setErrorPassword(false)
        setErrorPasswordText('')
    };

    const handleChangeConfirmPassword = (event) => {
        setIsSubmit(false)
        setConfirm(event.target.value)
        if (errorConfirm)
            setErrorConfirm(false)
        setErrorConfirmText('')
    };



    //validation
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit');

        if (!username) {
            setErrorUserName(true);
            setErrorUserNameText('username is required')
        } else if (username.length < 8 || username.length > 24) {
            setErrorUserName(false);
            setErrorUserNameText('username must have 8-24 charecter')
        }

        if (!password) {
            setErrorPassword(true)
            setErrorPasswordText('username must have 8-16 charecter')
        } else if (password.length < 8 || password > 16) {
            setErrorPassword(false);
            setErrorPasswordText('username must have 8-16 charecter')
        }
        if (confirm.length < 8 || confirm.length > 16) {
            setErrorConfirm(true);
            setErrorConfirmText('confirm password must have 8-16 charectoe')
        } else if (password !== confirm) {
            setErrorConfirm(true)
            setErrorConfirm(false)
        };
        setErrorConfirmText('confirm password miss match')
    };

    return (
        <div className='app'>
            <form className='form' onSubmit={handleSubmit}>
                <h2>Register Form</h2>
                <div className='form_input'>
                    <label>username</label>
                    <input className={(errorUserName && 'input_error') || (isSubmit && 'input_success')} onChange={handleChangeUserName} value={username} type='text' />
                    {errorUserName && <p className='text_error'>{errorUserNameText}</p>}
                </div>
                <div className='form_input'>
                    <label>password</label>
                    <input className={(errorPassword && 'input_error') || (isSubmit && 'input_success')} onChange={handleChangePassword} value={password} type='password' />
                    {errorPassword && <p className='text_error'>{errorPasswordText}</p>}
                </div>
                <div className='form_input' >
                    <label>confirm password</label>
                    <input className={(errorConfirm && 'input_error') || (isSubmit && 'input_success')} onChange={handleChangeConfirmPassword} type='password' />
                    {errorConfirm && <p className='text_error'>{errorConfirmText}</p>}
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
}

// //render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);



