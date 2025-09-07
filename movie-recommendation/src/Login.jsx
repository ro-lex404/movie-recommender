import "../styles/login.scss";

function Login() {
    return (
        <div id="main-container">
            <h1>Login</h1>
            <div className="username-part">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" />
            </div>
            <div className="password-part">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
            </div>
            <button type="submit" className="login-button">Log In</button>
        </div>
    );
}

export default Login;
