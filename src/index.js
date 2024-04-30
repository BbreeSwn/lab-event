import React from 'react';
import ReactDOM from 'react-dom/client';


function App (){
    const handleCheck = (event) => {
        console.log(event.target.name)
        console.log(event.target.name)
        console.log(event.target.value)
    }
    return (
        <>
            <input type='checkbox' name="phonebrand" id='phone-1' value='Sumsung' onChange={handleCheck} />
            <label htmlFor='phone-1'>Samsung</label>
            <input type='checkbox' name="phonebrand" id='phone-2' value='Nokia' onChange={handleCheck} />
            <label htmlFor='phone-2'>Nokia</label>
            <input type='checkbox' name="phonebrand" id='phone-3' value='Huawei' onChange={handleCheck} />
            <label htmlFor='phone-3'>Huawei</label>
            <input type='checkbox' name="phonebrand" id='phone-4' value='Iphone' onChange={handleCheck} />
            <label htmlFor='phone-4'>Iphone</label>
            
        </>
    )

}

    // //render
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);



