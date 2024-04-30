import React from 'react';
import ReactDOM from 'react-dom/client';


function App() {
    const [isShow , setIsShow] = React.useState('true')
    const handleClick = (event) => {
        console.log('Click');
    };
    const isShow = true;
    return
    <>
        {isShow ? <button onClick={handleClick} >Click to hide me</button> : null};
    </>

}

// //render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);



