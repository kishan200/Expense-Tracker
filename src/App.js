import React from 'react';
import {Header}  from './Componets/Header';
import {Balance} from './Componets/Balance';
import {Incexpcontainer} from './Componets/Incexpcontainer';
import {TransactionList} from './Componets/TransactionList';
import {AddTransaction} from './Componets/AddTransaction';
import './App.css';
function App() {
  return (
    <>
     <Header />
     <div className="container">
       <Balance />
     <Incexpcontainer />
     <TransactionList />
     <AddTransaction />
     </div>
    </>
  );
}

export default App;
