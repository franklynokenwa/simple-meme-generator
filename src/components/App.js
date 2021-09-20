import React from 'react'

import Header from './Header';
import MemeGenerator from './MemeGenerator';
import '../App.css';

class App extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <MemeGenerator/>
      </div>
    )
  }
}
export default App