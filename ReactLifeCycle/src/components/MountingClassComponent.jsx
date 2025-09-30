import React from "react";

export default class ClassComponent extends React.Component {
  constructor() {
   console.log("constructor I am inside you");
    super();
    this.state = {
     fname:"Devansh"
    };
  }
  updateName(){
    this.setState({
        fname:"Devansh Sabharwal"
    })
  }
  componentDidUpdate(){
    console.log("Yes I am updated");
  }
  componentDidMount() {
    console.log("Component Mounted");
  }
  static getDerivedStateFromProps(props,state){
    console.log("getDerivedStateFromProps called");
    console.log('state is',state);
    console.log('props are',props);
    return {
        fname: props.defaultName
    }
  }
  render() {
    console.log("render called");
    return (
      <div>
        <h1>React Life Cycle</h1>
        <h3>My name is {this.state.fname}</h3>

        {/* one way is use a arrow function */}
        {/* <button onClick={()=>{this.updateName()}}>Change Name</button> */}

        {/* (You need .bind(this) if you don’t use an arrow function in the class, otherwise this might be undefined inside updateName). */}
        <button onClick={this.updateName.bind(this)}>Change Name</button>

      </div>
    );
  }
}
// import React from "react";

// export default class ClassComponent extends React.Component {
//   constructor() {
//     super();
//     this.state = { data: null };
//   }

//   componentDidMount() {
//     console.log("Component mounted!");
    
//     // Fetch data from API
//     fetch("https://jsonplaceholder.typicode.com/users/1")
//       .then(res => res.json())
//       .then(data => this.setState({ data }));

//     // Example: setting up an event listener
//     window.addEventListener("resize", this.handleResize);
//   }

//   handleResize = () => {
//     console.log("Window resized!");
//   };

//   render() {
//     return (
//       <div>
//         <h1>React Life Cycle</h1>
//         <h3>User: {this.state.data?.name}</h3>
//         <p>email: {this.state.data?.email}</p>
//       </div>
//     );
//   }
// }