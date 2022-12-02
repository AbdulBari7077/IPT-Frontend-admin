import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  return (
    <div className='spinner-main'>
        <Box sx={{ display: 'flex'}} >
            <CircularProgress size={"200px"} style={{color:"red"}}/>
        </Box>
    </div>
  );
}