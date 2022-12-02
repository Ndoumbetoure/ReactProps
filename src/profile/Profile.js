import React from 'react'
import image from "./assets/profil.png"


const Profile = ({fullName, bio, profession, alertMe}) => {

  const styleObject = { color : "orange" , textAligne : "center"}
  return (
    <div style={styleObject}>
       <div className="className">
         <img src={image} alt="my_profile" className='App-logo' />
       </div>
       <div className="fullname">
         <p>FullName : {fullName}</p>
         <button className='btn' onClick={alertMe}>Click Me</button>
         <p>Bio : {bio}</p>
         <p>Profession : {profession}</p>
       </div>
    </div>
  )
} 

Profile.defaultProps = {

  fullName : 'Nanoucha',
  bio : 'biography',
  profession : 'student'

}

export default Profile