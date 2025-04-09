import React, { useEffect, useRef } from 'react'




function Form() {

    function app(e) {
        e.preventDefault()

        console.log(user.current.value );
        console.log(pass.current.value );
        console.log(chak.current.checked );
    }

    const user = useRef(null)
    const pass = useRef(null)
    const chak = useRef(null)
 
  return (
    <div className='wrapper'>
    <h1>Login Form</h1>
        <form onSubmit={(e) => app(e)} action="">
        <div className='box'>
            <p>Username*</p>
            <label htmlFor="username"></label>
            <input ref={user} id='username' type="email" />
        </div>
        <div className="box2">
            <p>Password*</p>
            <label htmlFor="password"></label>
            <input ref={pass} id='password' type="password" />
            </div>
            <div className="box3">
            <label htmlFor="chak"></label>
            <input ref={chak} id='chek' className='checkbox' type="checkbox" />
            </div>
            <button>LOGIN</button>
        </form>
    </div>
  )
}

export default Form
