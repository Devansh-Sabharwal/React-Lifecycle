import React from "react";

class CounterA extends React.Component {
   
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("snapshot called");
        console.log("before the update the value of countA is",prevProps.countA);
        return prevProps;
    }
    shouldComponentUpdate(nextProps,nextState){
         console.log("Counter A shouldComponentUpdateCalled");
      
        if(nextProps.countA!==this.props.countA){
            return true;
        }
        return false;
    }
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log("updated");
        console.log("snapshot",snapshot)
    }
  render() {
    console.log("Rendering Counter A");
    return <h3>Counter A: {this.props.countA}</h3>;
  }
}

class CounterB extends React.Component {
  shouldComponentUpdate(nextProps,nextState) {
    console.log("Counter B shouldComponentUpdateCalled");
    // Only re-render if countB changes
    if (nextProps.countB !== this.props.countB) {
      return true;
    }
    return false;
  }

  render() {
    console.log("Rendering Counter B");
    return <h3>Counter B: {this.props.countB}</h3>;
  }
}

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      countA: 0,
      countB: 0,
    };
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log("parent shouldCounterUpdate called");
    console.log(nextState,nextProps);
    return true;
  }

  incrementA = () => {
    this.setState(prev => ({ countA: prev.countA + 1 }));
  };

  incrementB = () => {
    this.setState(prev => ({ countB: prev.countB + 1 }));
  };

  render() {
    return (
      <div style={{border:"solid 2px red",padding:10}}>
        <h1>Two Counter Example</h1>
        <button onClick={this.incrementA}>Increment A</button>
        <button onClick={this.incrementB}>Increment B</button>
        <CounterA countA={this.state.countA} />
        <CounterB countB={this.state.countB} />
      </div>
    );
  }
}