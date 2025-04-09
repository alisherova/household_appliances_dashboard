import React from 'react'

const Back = (props) => {
  return (
    <div>
      <h2>Ism:{props.name}</h2>
      <div className='age'> Yoshi: {props.age}</div>
      <div className='familyasi'> Familiya: {props.text}</div>
      <div className='country'> Millati{props.subtitle} </div>
      
      
    </div>
  )
}

export default Back
