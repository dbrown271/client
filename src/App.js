import React, { useState } from 'react';
import './App.css';
import AllProducts from './components/AllProducts';
import ProductForm from './components/ProductForm';
import ProductDetail from './components/ProductDetail';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {

  const [formSubmitted, setFormSubmitted] = useState(false)

  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Product Manager</h1>
        <Link className = "btn btn-primary" to ="/">Home</Link>
        <hr />
        <Switch>

          <Route exact path= "/">
            <ProductForm formSubmitted= {formSubmitted} setFormSubmitted= {setFormSubmitted}/>
            <hr />
            <AllProducts></AllProducts>
            <hr />
            
          </Route>
          
          <Route exact path = "/products/:id">
            <ProductDetail></ProductDetail>
          </Route>

        </Switch>
      </div>
    
    </BrowserRouter>
  );
}

export default App;
