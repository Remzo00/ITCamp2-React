import React, { useState } from "react";


const Login = () => {
    const [isLoggedIn, setIsLoggeIn] = useState(false)

    const handleLogin = () => {
        setIsLoggeIn(true)
    }

    const handleLogout = () => {
        setIsLoggeIn(false)
    }

    return(
      <div>
        {isLoggedIn ? (
            <h1>Dobrodosli</h1>
        ): (
            <h1>Molim vas ulogujte se</h1>
        )}

        <button onClick={isLoggedIn ? handleLogout : handleLogin}>{isLoggedIn ? "Logout" : "Login"}</button>
      </div>
    )
}

export default Login
