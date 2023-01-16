import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
       <Routes>
        <Route element={<PrivateComponent/>}>
        <Route path='/' element={<h1>Product Listing Component</h1>}></Route>
        <Route path='/add' element={<h1>Product Add Component</h1>}></Route>
        <Route path='/update' element={<h1>Product Update Component</h1>}></Route>
        <Route path='/logout' element={<h1>Product Logout Component</h1>}></Route>
        <Route path='/profile' element={<h1>Product Profile Component</h1>}></Route>
        </Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
       </Routes>
       </BrowserRouter>
       <Footer/>
    </div>
  );
}

export default App;
