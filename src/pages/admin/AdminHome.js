import React,{useEffect,useState,useContext} from 'react'
import AdminNavbar from '../../components/AdminNavbar/AdminNavbar'
import TeamCrud from '../../components/TeamCrud/TeamCrud'
import Spinner from '../../components/Spinner/Spinner'
import LoadingOverlay from 'react-loading-overlay'
import{ AuthContext} from '../../contexts/FirebaseContext'


function AdminHome() {
    const[isActive,setIsactive]=useState(true)
    const{user}=useContext(AuthContext)
    useEffect(() => {
       
            setIsactive(user? false : true)
        
    })
    return (
        <div>
             <LoadingOverlay active={isActive} spinner={<Spinner/>} className="loading-screen">
            <AdminNavbar/>
            <TeamCrud/>
            </LoadingOverlay>
        </div>
    )
}

export default AdminHome
