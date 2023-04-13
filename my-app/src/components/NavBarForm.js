import React, { Component } from 'react'
import css from "./css/NavBarForm.module.css"
// import NavBarChild from './NavBarChild'

export class NavBarForm extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true,
         buttonText: "Login"
      }
    }

    handleClick = () => {
        this.setState((prevState, prevProps) => {
            return {
            isLoggedIn: prevState.isLoggedIn === false ? true : false,
            // buttonText: prevState.buttonText === "Login" ? "Submit" : "Login"
            }
        });
    }

  render() {
    return (
      <div className={css.NavBar}>
        <h1>My Gallery</h1>
        {this.state.isLoggedIn ? (
            <button onClick={this.handleClick}>{this.state.buttonText}</button>
        ) : 
        (<form>
            <label>Username</label>
            <input></input>
            <label>Username</label>
            <input></input>
            <button onClick={this.handleClick}>Submit</button>
        </form>)}
      </div>
    )
  }
}

export default NavBarForm