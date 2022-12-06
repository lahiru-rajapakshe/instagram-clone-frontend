import React, { Component } from 'react'

export class UserSignUpPage extends Component {

    state={
        displayName:'',
        username:'',
        password:'',
        passwordRepeat:'',
        pendingApiCall:false

    };
    
    onChangeDisplayName=(event)=>{
        const value=event.target.value;

        this.setState({displayName:value})

    };

    onChangeUserName=(event)=>{
        const value=event.target.value;

        this.setState({username:value})

    };

    onChangePassword=(event)=>{
        const value=event.target.value;

        this.setState({password:value})

    };

    onChangePasswordRepeat=(event)=>{
        const value=event.target.value;

        this.setState({passwordRepeat:value})

    };
    onClickSignUp =()=>{
        const user={
            username: this.state.username,
            displayName:this.state.displayName,
            password:this.state.password
        }
        this.setState({pendingApiCall:true})
        this.props.actions.postSignup(user);
    };
  render() {
    return (
      <div>
        <h1>Sign Up</h1>
      <input placeholder='your display name' value={this.state.displayName} onChange={this.onChangeDisplayName}/>
      <br></br>
      <br></br>
      <input placeholder='your username'  value={this.state.username} onChange={this.onChangeUserName}/>
      <br></br>
      <br></br>
      <input placeholder='your password' type='password' value={this.state.password} onChange={this.onChangePassword}/>
      <br></br>
      <br></br>
      <input placeholder='repeat your password' type='password' value={this.state.passwordRepeat} onChange={this.onChangePasswordRepeat}/>
      <br></br>
      <br></br>
      
      <button onClick={this.onClickSignUp} disabled={this.state.pendingApiCall}>Signup</button>
      </div>

    )
  }
}

UserSignUpPage.defaultProps={
    actions:{
        postSignup:()=> new Promise((resolve,reject)=>{
            resolve({});
        })
    
}
};

export default UserSignUpPage;