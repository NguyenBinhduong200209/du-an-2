import {Routes, Route} from 'react-router-dom'
import './App.css';
import Footer from './components/nav/Footer';
import Bread from './components/Page/Bread/Bread'
import Cake from './components/Page/Cake/Cake'
import Bestseller from './components/Page/Bestseller/Bestseller'
import Login from './components/login/login';

import Header from './components/nav/Header';
import Home from './components/Page/Home/Home';
import { Switch } from 'antd';
import Signup from './components/login/signup';

function App() {
  return (
    <div >
      <Header/>
     
      <Routes>
        
          <Route path='/login' element={<Login/>}></Route>
            <Route path='/singup' element={<Signup/>}></Route>
          
        
        <Route path='/home' element={<Home/>}></Route>
         <Route path='/bread' element={<Bread/>}></Route>
         <Route path='/bestseller' element={<Bestseller/>}></Route>
         <Route path='/cake' element={<Cake/>}></Route>
      </Routes>
			
      <Footer/>

    </div>
  );
}

export default App;
