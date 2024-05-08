import {useState} from 'react'

const Login = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center h-[100vh]'>
        <p>Admin Login</p>
        <div>
          <div>
            <label className='block'>Email</label>
            <input type='text' placeholder='johndoe@gmail.com'/>
          </div>
          <div>
            <label className='block'>Password</label>
            <input type='password' placeholder='****' />
          </div>
          <button>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login