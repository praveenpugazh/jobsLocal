import React from 'react'

const Login = () => {
  return (
    <div>
      <h2>Login Page</h2>
      <input type='text' placeholder='Mobile' />
      <button className='bg-purple-400 hover:bg-purple-500 rounded-lg py-2 px-4'>
        Log in
      </button>
    </div>
  )
}

export default Login
