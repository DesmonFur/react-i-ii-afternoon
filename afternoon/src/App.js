import React, {Component} from 'react';
import './App.css';
import data from './data';
import Index from './components/Index'

class App extends Component {
  constructor(){
    super()
    this.state = {
        currentIndex:0 ,
  }
}

next(){
  this.setState({
   currentIndex: this.state.currentIndex + 1 
  })
}

previous(){
  this.setState({
    currentIndex: this.state.currentIndex - 1
  })
}

  render(){
  return (
    <div className="App">
      <header className="App-header">
      <h1>Home</h1>
         </header>


      
<div className='box'>
 <Index name={data} index={this.state.currentIndex} /> 
 <div className= 'buttons'>

<button onClick= {() => this.previous()}> &lt; Previous </button>
<button onClick= {() => this.next()}> Next &gt; </button>
</div>

</div>

    </div>
  );
  }




}

export default App;
