import React from 'react'

function Administrator() {
  return (
    <div>
  <h1>Admin Page</h1>
    <section id="login-container">
      
      <div className="secure-login">
        <p>Please input your admin info:</p>
          <input type="text" placeholder='Username'/>
          <input type="password" placeholder='Admin Password'/>
          <button>Sign-in</button>
      </div>
    </section>
    </div>
  )
}

export default Administrator
