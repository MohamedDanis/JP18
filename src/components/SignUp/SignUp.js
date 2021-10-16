import React,{useState,useContext} from 'react'
import {useHistory} from'react-router-dom'
import './SignUp.css'
import {FirebaseContext} from '../../contexts/FirebaseContext'
function SignUp() {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const{firebase}=useContext(FirebaseContext)
    const history = useHistory()
    const handleSubmit = (e)=>{
      e.preventDefault();
      firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
        result.user.updateProfile({displayName:name}).then(()=>{
          firebase.firestore().collection('users').add({
            id:result.user.uid,
            name:name
          }).then(()=> history.push('/adminSignin') )
        })
      })
    }
    return (
        <div className="signup-wrapper">
            <h1>SignUp</h1>
            <div className="form-wrapper">
            <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
         
          <br />
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
          <button className="signup-btn">SignUp</button>
        </form>
            </div>
            <h2 className="or-part">
          <a href="http://">Or Signin Now</a>
        </h2>
        </div>
    )
}

export default SignUp
