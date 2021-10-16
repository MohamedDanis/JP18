import {BrowserRouter as Router,Route} from 'react-router-dom'
import {useContext,useEffect} from 'react'
import './App.css'
import {AuthContext,FirebaseContext} from './contexts/FirebaseContext'
import Teampage from './pages/user/Teampage'
import Signup from './pages/admin/Signup';
import Signin from './pages/admin/Signin';
import AdminHome from './pages/admin/AdminHome';

function App() {
  const{user,setUser}=useContext(AuthContext)
  const{firebase}=useContext(FirebaseContext)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })
  return (
    <Router>
    <div className="App">
      <Route exact path="/point-table">
        <Teampage/>
      </Route>
      <Route path="/adminSignup">
        <Signup/>
      </Route>
      <Route path="/adminSignin">
       <Signin/>
      </Route>
      <Route path="/adminHome">
        <AdminHome/>
      </Route>
     
    </div>
    </Router>
  );
}

export default App;
