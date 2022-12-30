import React from 'react'
import './address.css'
export default function 
(props) {
  return (
    <div className='address-block'>
        <div>
            <h2>Address</h2>
            <hr />
        <p>Address: {props.address.location}</p>
        <p>Postcode: {props.address.postcode}</p>
        <p>Street: {props.address.street.name +  " , " + props.address.street.number}</p>
        <p>TimeZone: {props.address.timezone.offset +  " , " + props.address.timezone.description}</p>
        <button className='button' onClick={() => props.setState('start')}>Back</button>
        </div>
    </div>
  )
}
