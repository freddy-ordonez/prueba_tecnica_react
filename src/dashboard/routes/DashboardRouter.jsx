import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ConsultClientPage } from '../pages/ConsultClientPage'
import { ClientMaintenance } from '../pages/ClientMaintenance'
import { NotFoundPage } from '../pages/NotFoundPage'
import { HomePage } from '../pages/HomePage'


export const DashboardRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/clientes' element={<ConsultClientPage />} />
        <Route path='/clientes/mantenimiento' element={<ClientMaintenance />} />

        <Route path='/*' element={<NotFoundPage />} />
    </Routes>
  )
}
