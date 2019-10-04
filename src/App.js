import React from 'react';
import './App.css';

class App extends React.Component{
  state = {
    username: "",
    email: "",
    password: "",
    id: "",
    reminderArr:[],
    page:"SignIn"
  }

  register = (page) => {
    
    fetch(`http://192.168.5.76:3011/register?email=${this.state.email}&password=${this.state.password}`, {mode: "no-cors"});
    console.log('button clicked')
    
    this.changePage("SignIn")
    

  }

  handleEmailChange = (event) => {
    this.setState({email: event.target.value})
    console.log(event.target.value)
  }
  handlePasswordChange = (event) => {
    this.setState({password: event.target.value})
    console.log(event.target.value)
  }

  changePage = (page)=>{
    return(
      this.setState({email: "", password: "", page: page})
      // this.setState({page: page})
      // console.log(`email on page change is ${this.state.email}`)
    )
  }
  render(){

    return (
      <div className="App">
        <h1>reminder app</h1>
        {
          this.state.page === "SignUp" ?
            <div>
              <h1>Sign Up</h1>
              <input type="text" value={this.state.email} placeholder="enter email" onChange={this.handleEmailChange}></input>
              <input type="text" value={this.state.password} placeholder="enter password" onChange={this.handlePasswordChange}></input>
              <button type="submit" onClick={()=>this.register()}>submit</button>
            </div>
          : this.state.page === "Home" ?
            <div>
              <h1>Home</h1>
              <input type="text" placeholder="enter reminder"></input>
              <button type="submit" onClick={()=>this.changePage("SignIn")}>Sign Out</button>
            </div>
          :
            <div>
              <h1>Sign In</h1>
              <input type="text" value={this.state.email} placeholder="enter email" onChange={this.handleEmailChange}></input>
              <input type="text" value={this.state.password} placeholder="enter password" onChange={this.handlePasswordChange}></input>
              <button type="submit" onClick={()=>this.changePage("Home")}>submit</button>
              <button type="submit" onClick={()=>this.changePage("SignUp")}>sign up</button>
            </div>
        }
      </div>
    );
  }
}

export default App;
