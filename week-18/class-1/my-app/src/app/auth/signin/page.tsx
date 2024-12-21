const signin = () => {
  return (
    <div className=''>
    <div>signIn page</div>
    <div className='pl-3 flex justify-center pr-3 gap-3 '>
      <div className='flex text-black'>
      <input type='email' placeholder='email'></input>
      </div>
      <br/>
      <br/>
      <div className='flex text-black'>
      <input type="password" placeholder='password' ></input>
      </div>
      <div>
        <button>Sign In</button>
      </div>
    </div>
    </div>
  )
}

export default signin;