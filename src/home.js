import React from 'react'
import Loading from './components/loading';
import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';
import ProfileComponent from './components/profile-component';
import Cred from './components/cred';
import Address from './components/address';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Home() {
    const [BottomNavvalue, setBottomNavValue] = React.useState(0);

    const [state, setState] = useState('start');
    const [username, setname] = useState();
    const [userProfile, setUserprofile] = useState();
    const [userEmail, setEmail] = useState();
    const [userUsername, setUsername] = useState();
    const [userPassword, setPassword] = useState();
    const [userUuid, setUuid] = useState();
    const [userAddress, setAddress] = useState({});

      useEffect(() => {
            axios.get('https://randomuser.me/api/').then((res) => {
            console.log(res.data.results[0].location)
            setname(res.data.results[0].name.first + " " + res.data.results[0].name.last)  
            setUserprofile(res.data.results[0].picture.large)
            setEmail(res.data.results[0].email)
            setUsername(res.data.results[0].login.username)
            setPassword(res.data.results[0].login.password)
            setUuid(res.data.results[0].login.uuid)
            setAddress({location: res.data.results[0].location.city + ", " + res.data.results[0].location.state + ", " + res.data.results[0].location.country,
             postcode: res.data.results[0].location.postcode,
              street: {
                name: res.data.results[0].location.street.name,
                 number:res.data.results[0].location.street.number},
            timezone: {
              offset: res.data.results[0].location.timezone.offset,
               description: res.data.results[0].location.timezone.description}})
          })
      },[])

      if (state === 'start'){
        return (
          <>
          <ProfileComponent username={username} userProfile={userProfile} userEmail={userEmail} setState={setState}/>
            {/* <BottomNavigation
              className='bottom_nav_bar'
              showLabels
              value={BottomNavvalue}
              onChange={(event, newValue) => {
                setBottomNavValue(newValue);
              }}
            >
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
          </BottomNavigation> */}
        </>
        )
      }else if (state === 'cred') {
        return (
          <Cred username={userUsername} password={userPassword} uuid={userUuid} setState={setState}/>
        )
      }
      else if (state === 'address') {
        return (
          <Address setState={setState} address={userAddress}/>
        )
      }
}
