import * as React from 'react';
import './profile-component.css';
import Loading from './loading';
import CachedIcon from '@mui/icons-material/Cached';
import { Avatar } from '@mui/material';
import { useState } from 'react';
import CustomSnackBar from './widgets/snackbar';

export default function ProfileComponent(props) {

  const [snackbarState, setsnackbarState] = useState(false);


  return (
    <div className='profile-card'>
        <div>
          {props.username == null ? <Loading /> : 
          <div className='userdata'>
            <div className='d-data'>
          <Avatar alt={props.username} sx={{ width: 100, height: 100 }} src={props.userProfile} />
          </div>
            <p>{props.username}</p>
            <p>Email: {props.userEmail}</p>
            <div className='btns'>
              <button className='button' onClick={() => props.setState('cred')}>Cradentials</button>
              <button className='button' onClick={() => props.setState('address') }>Address</button>
            </div>
            <div className='reload-btn-container'>
              <button className='button btn-reload' onClick={() => {
                setsnackbarState(true); 
                window.location.reload();
              }}><CachedIcon className='reload-icon' /></button>
            </div>
            <CustomSnackBar text="Reloading..." snackbarState={snackbarState}  setsnackbarState={setsnackbarState} type='info'/>
          </div>
          }
        </div>
    </div>  
  )
}
