import React, { Fragment } from 'react';
import Home from './components/Home/Home';
import Routes from './components/Routes/Routes'
export const RoomContext=React.createContext();
const data=require('./Data/Data');
function App() {
  return (
    <RoomContext.Provider value={data}>
    <Routes/>
    </RoomContext.Provider>
  )
}

export default App;
