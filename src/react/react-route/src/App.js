import React from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

const history = createBrowserHistory();

const Register = () => (
    <div class="register">
        <input type="text" placeholder="your email adress" />
        <input type="password" placeholder="choose password"/>
        <input type="password" placeholder="repeat password"/>

        <div >
             <button class="login" >Log in</button>
        </div>
    </div>
)

const SignIn = () => (
    <div>
        <h2>Sign in</h2>
    </div>
)

const Home = () => (
    <div>
        <h2>Cart</h2>
    </div>
)

class Navigation extends React.Component {
    render() {
        return(
            <BrowserRouter history={history}>
                <div>
                    <ul>
                        <li><Link to="/">Register</Link></li>
                        <li><Link to="/signin">Sign in</Link></li>
                        <li><Link to="/home">Home</Link></li>
                    </ul>

                    <hr/>

                    <Route exact path="/" component={Register}/>
                    <Route path="/signin" component={SignIn}/>
                    <Route path="/home" component={Home}/>
                </div>
            </BrowserRouter>
        )
    }
}


export default Navigation