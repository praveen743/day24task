import react from 'react';
import logo from './logo.svg';
 import './App.css';
 import FormData from './FormData';
 import './page.css';
import Table from './Table';


function App() {
  return (
    <div className="App">
       <div className="container" id='container1'>
         <div className="row">
           <div className="col-lg-6">
            <FormData/>
           </div>
           <div className="col-lg-6">
            <Table/>
           </div>
         </div>
       </div>
       </div>
  );
}

export default App;
