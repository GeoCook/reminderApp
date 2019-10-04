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

  changePage =  (page)=>{
    return(
       this.setState({email: "", password: "", page: page})

      // console.log(`email on page change is ${this.state.email}`)
    )
  }

  
  handleEmailChange = (event) => {
    this.setState({email: event.target.value})
    console.log(event.target.value)
  }
  handlePasswordChange = (event) => {
    this.setState({password: event.target.value})
    console.log(event.target.value)
  }
  
  register = () => {

      fetch(`http://192.168.5.76:3011/register?email=${this.state.email}&password=${this.state.password}`, {mode: "no-cors"});
      console.log('button clicked')
      
      this.changePage("SignIn")
      console.log('added a unique email')
  }

  signInUser = async () => {
    try{
     let response = await fetch(`http://192.168.5.76:3011/pull?email=${this.state.email}&password=${this.state.password}`, {mode: "no-cors"});
     console.log("entered fetch")
     console.log(`email state in index is ${this.state.email}`)
      let data = await response.json();
      console.log(`data is ${data}`)
      console.log("logged you in pal")
      // console.log(data.ID)
      this.changePage("Home")
    } catch (error){
      console.log("can't log in pal")
      // console.log(error)
    }
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
              <input type="text" value={this.state.id} placeholder="enter reminder"></input>
              <button type="submit" onClick={()=>this.changePage("SignIn")}>Sign Out</button>
            </div>
          :
            <div>
              <h1>Sign In</h1>
              <input type="text" value={this.state.email} placeholder="enter email" onChange={this.handleEmailChange}></input>
              <input type="text" value={this.state.password} placeholder="enter password" onChange={this.handlePasswordChange}></input>
              <button type="submit" onClick={()=>this.signInUser()}>submit</button>
              <button type="submit" onClick={()=>this.changePage("SignUp")}>sign up</button>
            </div>
        }
      </div>
    );
  }
}

export default App;
