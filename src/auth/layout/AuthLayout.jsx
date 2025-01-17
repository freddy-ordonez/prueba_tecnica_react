import { Box } from '@mui/material'
import React from 'react'

export const AuthLayout = ({children}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#F5F5F5",
      }}
    >
        {children}
    </Box>
  )
}
