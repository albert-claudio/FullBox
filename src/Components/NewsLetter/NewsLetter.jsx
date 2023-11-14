import React from 'react'
import './NewsLetter.css'

const NewLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscriber to our newletter and stay update</p>
      <div>
        <input type="email" placeholder='Your Email id'/>
        <button>Subscriber</button>
      </div>
    </div>
  )
}

export default NewLetter