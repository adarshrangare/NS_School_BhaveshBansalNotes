# React Life Cycle

_The React life cycle is the journey of a component from its creation to its destruction. It consists of specific methods that are called at different stages of this journey._

Here's a simplified breakdown of the main phases:

## 1. Mounting:

**constructor():**
This is where you initialize the component's state and other properties.

**render():**
This method returns the virtual DOM representation of the component.

**componentDidMount():**
This method is called after the component has been mounted (inserted) into the DOM. It's like your component taking its first breath and starting to interact with Client.

---

## 2. Updating:

**setState()**:
This method updates the component's state, triggering a re-render of the component.

**shouldComponentUpdate():**
This method is an optional method you can use to determine if the component should actually re-render based on the state or props changes. It return boolean true or false.

**render():**
This method is called again whenever the state or props change. It updates the virtual DOM to reflect the new state.

**componentDidUpdate():**
This method is called after the component has re-rendered and the actual DOM has been updated.

---

## 3. Unmounting:

**componentWillUnmount():**
This method is called before the component is removed from the DOM.

---

Here is Diagram We can refer for Better Understanding: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

---
```
import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { a: 10, b: 30 };
    this.staticVar = "static";
  }

  UNSAFE_componentWillMount() {
    console.log("Component Will Mount");
  }

  componentDidMount() {
    console.log("Component Mounted");
  }

  shouldComponentUpdate() {
    console.log("Should Component Update");

    return true;
  }

  UNSAFE_componentWillUpdate() {
    console.log("Component is going to update");

    this.staticVar = "I am Updated too";
  }

  componentDidUpdate() {
    console.log("Componet is updated");
  }

  render() {
    console.log("Component rendering");

    return (
      <div>
        <h1>staticVar: "{this.staticVar}"</h1>
        <h2>
          states: {this.state.a} and {this.state.b}
        </h2>
        <button
          onClick={(e) => {
            this.setState({
              a: 20,
            });
          }}
        >
          Change State{" "}
        </button>
      </div>
    );
  }
}

export default App;

```
