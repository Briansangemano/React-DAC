import React, {Component} from 'react';
import './style.css';

class Login extends Component {
    render() {
        return (
            <div class="app">
                <div class="header">
                  <h1><span>DAC </span>System</h1>
                </div>
                <div class="login">
                    <div class="login-box">
                        <h1>Login</h1>
                        <form>
                            <div class="username">
                                <label>Username</label>
                                <input type="text" id="username" name="username" placeholder="Username"/>
                            </div>
                            <div class="password">
                                <label>Password</label>
                                <input type="password" id="password" name="password" placeholder="Password"/>
                            </div>
                            <input type="submit" value="Submit"/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
