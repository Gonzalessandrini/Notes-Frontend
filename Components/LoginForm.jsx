export default function LoginForm ({handleSubmit,handlePasswordChange,handleUsernameChange, ...props}) {
    return (
      
      <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label  className="form-label">Username</label>
    <input type="text" 
    className="form-control" 
    id="exampleInputEmail1" 
    aria-describedby="emailHelp" value={props.username} onChange={handleUsernameChange}/>
    <div id="emailHelp" className="form-text">Never share your credentials with anyone else.</div>
  </div>
  <div className="mb-3">
    <label  className="form-label">Password</label>
    <input
               type='password'
               value={props.password}
               name='Password'
               placeholder='Password'
               className="form-control"
               id="exampleInputPassword1"
               onChange={handlePasswordChange}
             />

  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>


    )
  }
  