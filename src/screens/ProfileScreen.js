import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import Nav from '../Nav'
import "./ProfileScreen.css"
function ProfileScreen() {
    const user=useSelector(selectUser)
    return (
        <div className="profileScreen">
            <Nav />
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img 
                    src="https://i.pinimg.com/736x/4b/0c/d0/4b0cd02569a15ece506329fd82c83351.jpg" 
                    alt=""/>
                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                            <h3>Plans</h3>
                            <h5>Renewal Data: 04/20/2021</h5>
                            <div className="profileScreen__plansStandard">
                                <p>Netflix Standard<br/>1080p</p>
                                <button>Subscribe</button>
                                
                            </div>
                            <div className="profileScreen__plansBasic">
                                <p>Netflix Basic<br/>480p</p>
                                <button>Subscribe</button>
                            </div>
                            <div className="profileScreen__plansPremium">
                                <p>Netplix Premium<br/>4K + HDR</p>
                                <button>Current Package</button>
                            </div>
                            <button onClick={()=>auth.signOut()} className='profileScreen__signOut'>Sign Out</button>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProfileScreen
