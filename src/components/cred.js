import React from 'react'
import './cred.css'
export default function 
(props) {
  return (
    <div className='cred-block'>
        <div>
            <h2>Credentials</h2>
            <hr />
        <p>Username: {props.username}</p>
        <p>Password: {props.password}</p>
        <p>UUID: {props.uuid}</p>
        <button className='button' onClick={() => props.setState('start')}>Back</button>
        </div>
    </div>
  )
}
