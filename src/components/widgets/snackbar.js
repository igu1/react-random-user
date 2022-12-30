import React from 'react'
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

function CustomSnackBar({ text, snackbarState, setsnackbarState, type}) {

    const Alert = React.forwardRef(
        function Alert(props, ref) {
            return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
        }
      );
    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setsnackbarState(false);
      };

  return (
    <Snackbar open={snackbarState} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
            {text}
        </Alert>
    </Snackbar>
  )
}

export default CustomSnackBar;