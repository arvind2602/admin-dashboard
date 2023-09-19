import React from 'react'
import Sidebar from './Sidebar'
import styled from '@mui/material/styles/styled';

const trial=()=>{
    <h1>This is trail</h1>
}
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);
const CleanScan360 = () => {
  return (
    <>
        <Sidebar  />
        <h1>Hello from CleanScan360</h1>
        
    </>
  )
}

export default CleanScan360