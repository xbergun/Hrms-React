import React from "react";
import "./App.css";
import Dashboard from "./layouts/Dashboard";
import Navi from "./layouts/Navi";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import "ag-grid-community/dist/styles/ag-grid.css"
import "ag-grid-community/dist/styles/ag-theme-balham.css"
import "ag-grid-community/dist/styles/ag-theme-balham-dark.css"
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css"
import "ag-grid-community/dist/styles/ag-theme-alpine.css"
import "ag-grid-community/dist/styles/ag-theme-material.css"
import "ag-grid-community/dist/styles/ag-theme-fresh.css"
import "ag-grid-community/dist/styles/ag-theme-blue.css"
function App() {

  return (

 <div className="">
    <div >
      <Navi/>
      <Container className="main">   
      
      <Dashboard/>
     
      </Container>
      
    </div>
    </div>
  );
}

export default App;