import { Box, Button } from '@mui/material'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { ClientContext } from '../../../context/clients/ClientContext';



export const ButtonConsultClient = () => {

  const navigate = useNavigate();
  const {setDisableClient} = useContext(ClientContext);

  const onBack = ()=> {
    navigate("/")
  }

  const onCreateClient =()=> {
    setDisableClient();
    navigate("/clientes/mantenimiento")
  } 

  return (
    <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            gap: 2,
            marginBottom: 2,
          }}
        >
          <Button variant="contained" color="primary" onClick={onCreateClient}>
            Agregar
          </Button>
          <Button variant="outlined" color="primary" onClick={onBack}>
            Regresar
          </Button>
        </Box>
  )
}
