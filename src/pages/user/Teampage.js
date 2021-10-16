import React from 'react'
import Heading from '../../components/Heading/Heading'
import TeamPointTable from '../../components/TeamPointTable/TeamPointTable'
import UserNavbar from '../../components/UserNavbar/UserNavbar'

function Teampage() {
    return (
        <div>
            <UserNavbar/>
            <Heading/>
            <TeamPointTable/>
        </div>
    )
}

export default Teampage
