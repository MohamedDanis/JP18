import React,{useState,useEffect} from 'react'
import DefaultNavbar from '../../components/DefaultNavbar/DefaultNavbar'
import SignIn from '../../components/SignIn/SignIn'
import Spinner from '../../components/Spinner/Spinner'
import LoadingOverlay from 'react-loading-overlay'
import './Signin.css'


function Signin() {
    const[isActive,setIsactive]=useState(true)
    useEffect(() => {
        
        setTimeout(() => {
            setIsactive(false)
        },1500);
    })
    return (
        <div>
            <LoadingOverlay active={isActive} spinner={<Spinner/>} className="loading-screen">
                <DefaultNavbar/>
                <SignIn/>
            </LoadingOverlay>
            
        </div>
    )
}

export default Signin
