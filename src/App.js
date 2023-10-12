
import './App.css';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Home from './components/home/Home';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [user, setLoginUser] = useState({})
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route exact path='/' element= {
              user && user._id ? <Home setLoginUser={setLoginUser}/> : <Login setLoginUser={setLoginUser}/>
            }>
           
          </Route>
          <Route exact path='/login' element={< Login setLoginUser={setLoginUser}/>}></Route>
          <Route exact path='/register' element={< Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
