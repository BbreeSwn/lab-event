import React from 'react';
import ReactDOM from 'react-dom/client';


function App (){
    const handleSelect = (event) => {
        console.log(event.taget.value);
    };
}
return (
    <select>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
    </select>
)

    // //render
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);



