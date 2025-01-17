
import { useContext, useReducer } from "react";
import { clientReducer } from "../../reducer/client/clientReducer";
import { apiFetch } from "../../api/apiFetch";
import { AuthContext } from "../../context/auth/AuthContext";
import dayjs from "dayjs";

const clientState = {
    clients: [],
    selectedClient: null,
    listInterest: []
  };

export const useClient = () => {
    const {userid} = useContext(AuthContext);
  const [state, dispatch] = useReducer(clientReducer, clientState);

  const startGetClients = async (client) => {

    try {
        
        const { nombre = "", identificacion = ""} = client; 
    
        const { data, status } = await apiFetch.post("/api/Cliente/Listado", {
          identificacion,
          nombre,
          usuarioId: userid,
        });
    
        if (status === 200) dispatch({ type: "SET_CLIENTS", payload: data });
    } catch (error) {
        throw new Error(`Hubo un error en traer todos los clientes: ${error}`)
    }
  };

  const startAddClient = async (client) => {

    try {
        const {resenaPersonal, telefonoCelular, ...newClient} = client;
        newClient.resennaPersonal = resenaPersonal;
        newClient.celular = telefonoCelular;

        console.log(newClient);
        
        await apiFetch.post("/api/Cliente/Crear", newClient);
        
        return {
            ok: true,
            message: "Se a registrado con exito el cliente!!!"
        }
    } catch (error) {
        throw new Error(`Hubo un error en agregar un cliente: ${error}`)
    }
  };

  const startUpdateClient = async (updatedClient) => {

    try {
        
        const {status} = await apiFetch.post("/api/Cliente/Actualizar", updatedClient);

        if (status === 200) {
            const client = {
                id: updatedClient.id,
                identificacion: updatedClient.identificacion,
                nombre: updatedClient.nombre,
                apellidos: updatedClient.apellidos
              }
            dispatch({type: "UPDATE_CLIENT", payload: client })
            return {
                ok: true,
                message: "Se actualizo con exito el cliente!!!"
            }          
        }
    } catch (error) {
        throw new Error(`Hubo un error en actualizar un cliente: ${error}`)      
    }
  };

  const startDeleteClient = (id) => {
    dispatch({ type: "DELETE_CLIENT", payload: id });
  };

  const startGetInterest = async () => {
    try {
        const {data, status} = await apiFetch.get('/api/Intereses/Listado');

        if(status === 200) dispatch({type:"SET_INTERESTS", payload: data})
    } catch (error) {
        throw new Error(`Hubo un error al traer los intereses: ${error}`)
    }
  }

  const setSelectedClient = async (idClient) => {

    try {
        
        const { data, status } = await apiFetch.get(`/api/Cliente/Obtener/${idClient}`);
        
        const {id, nombre, apellidos, identificacion, telefonoCelular, otroTelefono, direccion, fNacimiento, fAfiliacion, interesesId, sexo, imagen, resenaPersonal} = data;
    
        const client = {
            id,
            nombre,
            apellidos, 
            identificacion, 
            telefonoCelular,
            otroTelefono,
            direccion,
            fNacimiento: dayjs(fNacimiento),
            fAfiliacion: dayjs(fAfiliacion),
            sexo,
            imagen,
            resenaPersonal,
            interesFK: interesesId
        }
        
        if (status === 200) {
    
            dispatch({ type: "SET_SELECTED_CLIENT", payload: client });
            
            return {
                ok: true
            }
        }
    } catch (error) {
        throw new Error(`Hubo un error en seleccionar un cliente: ${error}`)
    }

  };

  const setDisableClient = ()=> {
    dispatch({type: "DISABLE_CLIENT"})
  }
  return {
    startAddClient,
    startDeleteClient,
    startGetClients,
    startUpdateClient,
    startGetInterest,
    state,
    setSelectedClient,
    setDisableClient
  };
};
