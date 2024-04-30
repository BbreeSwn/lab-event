import React from 'react';
import ReactDOM from 'react-dom/client';


function App() {
    const [isShow , setIsShow] = React.useState('');
    const handleClick = (event) => {
        console.log('Click');
        setIsShow('false');
    };
    // const IsShow = true;
    return
    <>
    <button onClick={handleClick} >Click to hide me</button>
    {IsShow && <h2>Text</h2>}
    </>

}

// //render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);



