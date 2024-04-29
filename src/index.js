import React from 'react';
import ReactDOM from 'react-dom/client';




function App (){
    const [inputName , setInputName] = React.useState('');
    const inputName = (event) => {
            console.log(event.target.value);
            setInputName(event.target.value);
          };
    return (
        <>
        <input
        type='text'
        value='inputName'></input>
        </>
    )
}


//render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);





