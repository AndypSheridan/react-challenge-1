import React from 'react'

function NavBarChild(props) {
  return (
    <div>
        {props.isLoggedIn ? (
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

export default NavBarChild