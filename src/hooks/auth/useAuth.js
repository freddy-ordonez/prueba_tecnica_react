import { useReducer } from "react";
import { authReducer } from "../../reducer/auth/authReducer";
import { apiFetch } from "../../api/apiFetch";

const initialState = {
  status: "not-authenticated", //'not-authenticated', 'authenticated'
  userid: null,
  username: null,
  errorMessage: null,
};

export const useAuth = () => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const startLogin = async (user) => {
    try {
      const { data, status } = await apiFetch.post(
        "/api/Authenticate/login",
        user
      );

      const { userid, username, token } = data;

      if (status === 200) {
        dispatch({ type: "LOGIN", payload: { userid, username } });
        localStorage.setItem("token", token);
        return {
          ok: true,
          message: `Bienvenido ${username}`,
        };
      }
    } catch (error) {
      return {
        ok: false,
        message: `usuario o contraseña incorrectas`,
      };
    }
  };

  const startLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("token"); // Opcional
  };

  const startCreateUser = async (user) => {
    try {
      const { data, status } = await apiFetch.post(
        "/api/Authenticate/register",
        user
      );

      if (status === 200) {
        return {
          ok: true,
          message: "Su registro se a completado con exito!!!",
        };     
      }

    } catch (error) {
      return {
        ok: false,
        message:
          "Hubo un problema al registrarse habla con el administrador!!!",
      };
    }
  };

  const startSetAuthenticate = ()=> {
    dispatch(({type: "SET_AUTHENTICATE"}));
  }

  return {
    ...state,
    state,
    startLogin,
    startLogout,
    startCreateUser,
    startSetAuthenticate
  };
};
