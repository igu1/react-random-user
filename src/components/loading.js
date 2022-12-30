import React from 'react'
import { TailSpin } from 'react-loader-spinner';
import './loading.css';

export default function () {

  return (
    <div>
        <div className='loader'>
        <TailSpin
        height="80"
        width="80"
        color="red"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        />
        </div>
    </div>
  )
}
