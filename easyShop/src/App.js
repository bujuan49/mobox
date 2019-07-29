import React from 'react';
import {BrowserRouter} from "react-router-dom"
import {MapRouter,router} from "./router/index"
import Loading from "./components/Loading"
class App extends React.Component{
    constructor(props) {
      super(props);
      this.state = {};
  }
  render(){
      return (
        <>
          <Loading/>
          <BrowserRouter>
              <MapRouter routes={router}></MapRouter>
          </BrowserRouter>
          
       </> 
    )
  }
};

export default App;