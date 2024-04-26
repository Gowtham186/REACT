import React from 'react'
import ReactDOM from 'react-dom';
//import basics from '.';

function Basic() {
    return (
      <div className="App">
        <header className="App-header">
         <h1>Hell123</h1>
        </header>
      </div>
    );
  }
  ReactDOM.render(
    <React.StrictMode>
      <Basic />
      
    </React.StrictMode>,
    document.getElementById("root")
  );
  


export default Basic;

