import { Alert, Snackbar } from '@mui/material'
import React from 'react'

export const MessagesAlert = ({open, hideDuration, severity, vertical, horizontal, message}) => {
  return (
    <Snackbar open={open} autoHideDuration={hideDuration} anchorOrigin={{vertical, horizontal}}>
        <Alert
          severity={severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
    </Snackbar>
  )
}
