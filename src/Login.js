import React, { Component } from 'react';
import styled from 'styled-components';

const Div = styled.div `
display: flex;
justify-content: center;
align-items: center;
margin : 50px auto;
background : #EEE8A9;
border-radius : 15px;
width : 300px;
form{
    margin-bottom: 30px;
    margin-top: 20px;
}
}
h1{
    text-align : center;
    color : #009584;
}

hr{
    border-top: 3px solid #0078AA;
}

p{
    color : #0078AA;
    margin-bottom: 0;
    font-size: 12px;
    font-weight : bold;
}

input{
    border : none;
    border-radius : 0.5em;
    font-size : 10px;
    padding : 5px 8px;
    color : #0078AA;
    width : 90%;
}

button{
    background : #0078AA;
    color : #EEE8A9;
    border : none;
    border-radius : 0.5rem;
    padding : 5px;
    margin-top: 20px;
    width : 100%;
}

a{
    display : flex;
    justify-content : flex-end;
    font-size : 8px;
    color : #009584;
    margin-top : 5px;
    margin-bottom : 10px;
}
`;

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email : "",
            password : "",
        }
    }

    changeHandler1 = event => {
        this.setState({
            email : event.target.value
        })
    }

    changeHandler2 = event => {
        this.setState({
            password : event.target.value
        })
    }

    clickHandler = () => {
        alert(`Hi ${this.state.email}`);
    }
    render() {
        return (
            <Div>
                <form>
                  <h1>Login</h1>
                  <hr/>
                  <p>Email</p>
                  <input type="text" value={this.state.email} onChange={this.changeHandler1} placeholder="Enter your email"/>
                  <p>Password</p>
                  <input type="text" value={this.state.password} onChange={this.changeHandler2} placeholder="Enter your password"/>
                  <button type="submit" onClick={this.clickHandler}>LOGIN</button>
                  <a href="#">Forget your password?</a>
                </form>
            </Div>
        );
    }
}

export default Login;