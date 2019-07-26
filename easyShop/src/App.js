import React from 'react';
import {BrowserRouter} from "react-router-dom"
import {MapRouter,router} from "./router/index"
class App extends React.Component{
    constructor(props) {
      super(props);
      this.state = {};
  }
  render(){
      return (
        <BrowserRouter>
            <MapRouter routes={router}></MapRouter>
        </BrowserRouter>
    )
  }
};

export default App;