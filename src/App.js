import './App.css';
import Create from './Create';
import Read from './Read';
import Update from './Update';
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
// import Login from './Login';
// import Register from './Register';

function App() {
  return (
    <div className="App">
      <div>
     <h1 className='web'>Employee Portal</h1>
     <BrowserRouter>
     <div className='homebtn'>
      <div>
      <Link to='/create'><button className='btn'>Add New Employee</button></Link></div>
      <div>
      <Link to='/'><button className='btn'>Home</button></Link></div>
      <Link to='/Update'></Link>
      {/* <Link to='/register'></Link>
      <Link to='/'></Link> */}
      </div>
      <Routes>
        <Route path='create' element={<Create />}/>
        <Route path='' element={<Read />}/>
        <Route path='update' element={<Update />}/>
        {/* <Route path='' element={<Login />}/>
        <Route path='register' element={<Register />} /> */}
      </Routes>
    </BrowserRouter>
     
     </div>
    </div>
  );
}

export default App;
