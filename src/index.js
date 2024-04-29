import React from 'react';
import ReactDOM from 'react-dom/client';


// function App (){
//   const [data, setData] = React.useState('');
//   // const data = 'Codecamp';
  
//   const handleChange = (event) => {
//     console.log(event.target.value);
//     setData(event.target.value);
//   };

//   return <input value={data} onChange={handleChange} />;
// }

function App (){
  const [selected , setSelected] = React.useState('');
  // const data = 'Codecamp';
  
  const handleSelect = (event) => {
    // console.log(event.target.value);
    setSelected(event.target.value);
  };

  return (
    <select onChange={handleSelect}>
      <option value='1'>option-1</option>
      <option value='2'>option-2</option>
      <option value='3'>option-3</option>
    </select>
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);



