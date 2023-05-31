import logo from './logo.svg';
import './App.css';
import Home from './Page/Home.jsx'
import Carddetail from './Page/Carddetail';
import { Route, Routes, Link } from 'react-router-dom';

const App = () => {
  return(
    <div>
      <div className='nav'>
        <Link to='/'>Home</Link>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/detail' element={<Carddetail/>}/>
      </Routes>
    </div>
  )
}

export default App;
