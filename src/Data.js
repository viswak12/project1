import React from 'react';
class Data extends React.Component{
constructor(){
      super();
      this.state={
          count:0,
          num:10,
          name:"i_viswak12"
      }
  }
   countIncrement=()=>{
      this.setState({count:this.state.count+1});
    countDecrement=()=>{
      this.setState({num:this.state.num-1});
  }
render(){
    return(
        <div>
            <h2>{this.state.count}</h2>
            <button onClick={this.countIncrement}>click me</button>
            <h3>{this.state.name}</h3>
            <h4>{this.state.num}
            <button onClick={this.countDecrement}>decrement button</button>
            </h4>
        </div>

        )
    }
}

export default Data;