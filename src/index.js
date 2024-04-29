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

// function App (){
//   const [selected , setSelected] = React.useState('');
//   // const data = 'Codecamp';

//   const handleSelect = (event) => {
//     // console.log(event.target.value);
//     setSelected(event.target.value);
//   };

//   return (
//     <select onChange={handleSelect}>
//       <option value='1'>option-1</option>
//       <option value='2'>option-2</option>
//       <option value='3'>option-3</option>
//     </select>
//   );
// }

function App() {

  const [username, setUserName] = React.useState('');
  const handleChangeUserName = (event) => setUserName(event.target.value);

  const [password, setPassword] = React.useState('');
  const handlerChangePassword = (event) => setPassword(event.target.value);

  const [selected, setSelected] = React.useState('');
  const handlerChangeGender = (event) => setSelected(event.target.value);


  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation
    if (password.length < 6) return;

    console.log('submit')
    //reset state
    const handleReset = () => {
      setUserName('');  // รู้ว่าจะ set
      setPassword(''); //รู้ว่าจะ set
      setSelected('') // รู้ว่าจะ set

      //End handler fn => React จะอัพเดท State พร้อมกันทีเดียว
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input type='text'
          placeholder='eg. johnInwza'
          value={username}
          onChange={handleChangeUserName} />
      </div>
      <div>
        <label>Password</label>
        <input
          type='password'
          value={password}
          onChange={handlerChangePassword} />
      </div>
      <div>
        <label>Gender</label>
        <select
          value='selected'
          onChange={handlerChangeGender} >
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
      </div>
      <div>
        <button type='submit'>send</button>
        <button type='button' onClick="handleReset">Reset</button>
      </div>

    </form>
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);



