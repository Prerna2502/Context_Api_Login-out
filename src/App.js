import './App.css';
import Header from './Components/Header/Header';
import {Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound'
import {ProductProvider} from './Components/ProductContext/ProductContext'
import LogIn from './Components/LogIn/LogIn';
import { useState } from 'react';
import AddProduct from './Components/AddProduct/AddProduct';
import ShowProduct from './Components/ShowProduct/ShowProduct';
import Home from './Components/Home/Home';
import { LoginInfo } from './Components/Auth/LoginInfo/LoginInfo';

function App() {
  localStorage.clear();
  // console.log(LoginInfo);
  localStorage.setItem('LoginCred',JSON.stringify(LoginInfo));
  const [flag,setFlag] = useState(false)
  return (
    <ProductProvider>
      <div className="App">
        <Router>
          <Header title='Context-API-App' flag={flag} setFlag={setFlag}/>
          <Switch>
              <Route exact path='/' component={()=><Home flag={flag}/>}/>
              {
                flag? <Redirect path='/log_in' to='/'/>
                : <Route path='/log_in' component={()=><LogIn setFlag={setFlag}/>}/>
              }
              {
                flag? <Route path='/add_product' component={AddProduct}/>
                : <Redirect path='/add_product' to='/'/>
              }
              {
                flag? <Route path='/show_product' component={ShowProduct}/>
                : <Redirect path='/show_product' to='/'/>
              }
              <Route component={NotFound}/>
          </Switch>
          <Footer footerText='All rights reserved'/>
        </Router>
      </div>
    </ProductProvider>
  );
}

export default App;
