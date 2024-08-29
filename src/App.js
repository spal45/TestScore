import { useState } from 'react';
import './App.css';
import Students from './Students';
import LineChart from './LineChart'

function App() {
  const [user, setUser] = useState("");
  const [checkUser, setCheckUser] = useState(false);
  const [userData, setUserData] = useState({}) 

  function handleSubmit(e){
    e.preventDefault()
    let getName = Students.find((value,index)=>{
      return value["name"].toLowerCase() === user.toLowerCase();
    })
    // console.log(getName) object mil raha hai
    if(getName !== undefined){
      setCheckUser(true)
      setUserData(getName);
      // console.log(getName)
    }else{
      alert("Please Fill the Correct Information !")
    }

    setUser("")    
  }

  return (
    <div className="App">
      <h1>Student Test Score</h1>
      <form className='search' onSubmit={handleSubmit}>
        <input className='input' type='text' placeholder='Enter Your Name' value={user} onChange={(e)=>setUser(e.target.value)}/>
        <button className='btn' type='submit'>Get Score</button>
      </form>
    
      {checkUser ? <LineChart data={Students} user={userData}/> : <div>Check Your Score!</div>}
    </div>
  );
}

export default App;
