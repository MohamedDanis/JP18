import React,{useState,useContext} from 'react'
import {BrowserRouter as Router,useHistory,Link} from 'react-router-dom'
import {FirebaseContext} from '../../contexts/FirebaseContext'
import './SignIn.css'

function SignIn() {
  const history = useHistory()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const{firebase}=useContext(FirebaseContext)
    const handleSubmit = (e)=>{
      e.preventDefault();
      firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
        history.push('/adminHome')
      }).catch((error)=>{
        alert(error.message)
      })
    }
    return (
      <Router>

      
        <div className="signin-wrapper">
        <h1>Sign In</h1>
        <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
      <label htmlFor="fname">Email</label>
      <br />
      <input
        className="input"
        type="email"
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
        id="fname"
        name="email"
        defaultValue="John"
      />
      <br />
      <label htmlFor="lname">Password</label>
      <br />
      <input
        className="input"
        type="password"
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        id="lname"
        name="password"
        defaultValue="Doe"
      />
      <br />
      <br />
      <button className="signup-btn">SignIn</button>
    </form>
        </div>
        <h2 className="or-part">
          <Link to="/adminSignup">Or Signup Now</Link>
        </h2>
    </div>
    </Router>
    )
}

export default SignIn
