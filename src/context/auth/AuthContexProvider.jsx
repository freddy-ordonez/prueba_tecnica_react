import React from 'react'
import { AuthContext } from './AuthContext'
import { useAuth } from '../../hooks/auth/useAuth'

export const AuthContexProvider = ({children}) => {

    const {startLogin, startLogout, state, startCreateUser, startSetAuthenticate} = useAuth();
    
  return (
    <AuthContext.Provider value={{startLogin, startLogout, startCreateUser, startSetAuthenticate, state, ...state}}>
        {children}
    </AuthContext.Provider>
  )
}
