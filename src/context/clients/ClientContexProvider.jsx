import React from 'react'
import { ClientContext } from './ClientContext'
import { useClient } from '../../hooks/client/useClient'

export const ClientContexProvider = ({children}) => {
    const {startGetClients, startAddClient, startDeleteClient, startUpdateClient, setSelectedClient, state, startGetInterest, setDisableClient} = useClient();
  return (
    <ClientContext.Provider 
    value={{startGetClients, startAddClient, startDeleteClient, startUpdateClient, state, ...state, setSelectedClient, startGetInterest, setDisableClient}}
    >
        {children}
    </ClientContext.Provider>
  )
}
