import React from 'react';
import ReactDOM from 'react-dom/client';


function App (){

    const handleRedirect = (event) => {
    const ans =  window.confirm("redirect to google");
    if(ans === true) {
window.location.replace('google.com')
    }
    };
    return <a onClick={handleRedirect}>Google</a>

}

    // //render
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);



