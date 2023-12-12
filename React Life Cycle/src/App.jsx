import React, { Component } from 'react'

export class App extends Component {

    constructor(props) {
        super(props);
        this.state = {a:10};
        this.staticVar = "static";
      }
      
      UNSAFE_componentWillMount(){
        console.log("Component Will Mount")
      }

      componentDidMount(){
        console.log("Component Mounted")
      }


      componentWillUpdate(){
        console.log("Component is going to update")

        this.staticVar = "I am Updated too"  

      }

      componentDidUpdate(){
        console.log("Componet is updated")

      }


  render() {

    console.log("Component rendering");

    


    return (
      <div>
        <h1>staticVar: "{this.staticVar}"</h1>
        <h2>states: {this.state.a}</h2>
        <button onClick={e=>{
            this.setState({
                a:20,
                
            })
        }}>Change State </button>

      </div>
    )
  }
}

export default App