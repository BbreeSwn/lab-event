import React from 'react';
import ReactDOM from 'react-dom/client';


function App() {
    const [isShow , setIsShow] = React.useState('false');
    const handleClick = () => {
        console.log('Clicked')
        setIsShow(!isShow)
    };
    const isShowBtn = true;

const isShowText = true;
    return (
        <>
            <button onClick={handleClick}>{isShow ? 'Hide' : 'Show'} </button>
            <h2>Text</h2>
        </>
    );

}

// //render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);



