import React,{useState} from 'react'
import './UserNavbar.css'

function UserNavbar() {
    const [isclicked, setIsclicked] = useState(false)

    console.log(isclicked);
    return (
        <header className="user-nav">
            <nav className="nav-bar">
                <h1 className="logo-name">
                    JP18
                </h1>
                <div className={`nav-list ${ isclicked ? "show vertical-move": ""} `}>
                    <ul className={`nav-items ${ isclicked ? "": ""} `}>
                        <li>Team-Wise</li>
                        <li>Player-Wise</li>
                    </ul>
                </div>
                <div className="hamburger" onClick={()=>{
                    setIsclicked(!isclicked)
                }}>
                    <div  className={`bar ${ isclicked ? "bar-none" : ""}`}></div>
                    <div className={`bar ${ isclicked ? "bar-none" : ""}`}></div>
                    <div className={`bar ${ isclicked ? "bar-none" : ""}`}></div>
                </div>
            </nav>
        </header>
    )
}

export default UserNavbar
