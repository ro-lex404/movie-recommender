import "../styles/login.scss";

function Login() {
    return (
        <div className="main-container">
            <h1>Login</h1>
            <div className="username-part">
                <label htmlFor="username">Username</label>
                <input type="text" className="username" />
            </div>
            <div className="password-part">
                <label htmlFor="password">Password</label>
                <input type="password" className="password" />
            </div>
            <button type="submit" className="login-button">Log In</button>
        </div>
    );
}

export default Login;
