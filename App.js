/*import React, { useState } from 'react';
import './App.css';


function App() {
  const [loginData, setloginData] = useState({
    userName: '', password: '',
    email: '', mobilenumber: '',
  });

  // const [registrationData, setRegistrationData] = useState({
  //   userName: '', password: '',
  //   email: '', mobilenumber: '',
  // });

  const handleRegistration = () => {
    console.log(loginData);
  }*/

// const handleRegistration = () => {
//   console.log(registrationData);
//   }

//  const handleLoginChanges = (e) => {
//     setloginData({
//       ...loginData,
//       [e.target. name]: e.target.value,
//     });
//   }

/* const handleRegistrationChanges = (e) => {
   setloginData({
     ...loginData,
     [e.target.name]: e.target.value,
   });
 }
 return (
   <div className="App">
     { <h1 className='header'>Login</h1>
      <label>User Name</label> 
     <input className='input' type='text' name='userName' onChange={handleLoginChanges} value={loginData.userName} placeholder='enter username' /><br />
      <label>Password</label> 
     <input className='input' type='password' name='password' onChange={handleLoginChanges} value={loginData.password} placeholder='enter password' /><br />
     <p>lost password?<span>click here</span></p><br />
     <button onClick={handleLogin} className='input'>login</button>  }

     <div className="App">
       <h1 className='header'>Registration Form</h1>
       { <label>User Name</label> }
       <input className='input' type='text' name='userName' onChange={handleRegistrationChanges} value={loginData.userName} placeholder='enter username' /><br />
       {/<label>Password</label> }
       <input className='input' type='password' name='password' onChange={handleRegistrationChanges} value={loginData.password} placeholder='enter password' /><br />
       <input className='input' type='email' name='email' onChange={handleRegistrationChanges} value={loginData.email} placeholder='enteremail' /><br />
       <input className='input' type='number' name='mobilenumber' onChange={handleRegistrationChanges} value={loginData.mobilenumber} placeholder='mobilenumber' /><br />
       <button onClick={handleRegistration} className='input'>register</button>

     </div>

   </div>


 );
}

export default App;*/



import React, { useState } from 'react';
import './App.css'

function Calculator() {
  const [data, setData] = useState('0');
  const handleCalc = () => {
    try {
      setData(eval(data))
    } catch (error) {
      setData('error')
    }
  }

  const handleC = () => {
    setData('0')
  }
  const handleButtonClick = (value) => {
    setData((prevData) => {
      if (prevData === '0' || prevData === 'error') {
        return value;
      }
      else {
        return prevData + value;
      }

    })
  }
  return (
    <div className='calc'>
      <div className='display'>
        {data}
      </div>
      <div className='buttons'>

      </div>
      <div className='rows'>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
      </div>
      <div className='rows'>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
      </div>
      <div className='rows'>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
      </div>
      <div className='rows'>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
        <button onClick={handleCalc}>=</button>
        <button onClick={handleC}>C</button>
      </div>
    </div>
  )
}

export default Calculator;
