import React from 'react'
import PropTypes from 'prop-types'

const Profile = ({fullName,bio,profession,handleName, children}) => {
    return (
        <div className='div-container'>
            {children}
            <h2>{fullName}</h2>
            <h3 >{profession}</h3>
            <p>{bio}</p>
            <button 
                onClick={()=>handleName(fullName)} 
               
            >
                <p className='butt'>Click here </p>
            
            </button>

            
        </div>
    )
}

export default Profile

Profile.propTypes={
    fullName: PropTypes.string,
    professional: PropTypes.string,
    bio: PropTypes.string,
}