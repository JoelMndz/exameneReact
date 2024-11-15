import { create } from "zustand"
import axiosAPI from "../../../utils/axios"
import { persist } from "zustand/middleware"


export const useAutenticacionStore = create(
  persist(
    set => ({
      cargando: false,
      token: null,
      user: null,
      async login(email, password) {
        try {
          set({cargando: true})
          const response = await axiosAPI({
            method: 'POST',
            url: '/api/login',
            data: {email, password}
          }) 
          const { user, token } = response.data;
          if(token){
            set({token: token, user: user})
          }
          return true
        } catch (error) {
          console.log(error);
          alert('Credenciales incorrectas!')
          return false
        }
        finally{
          set({cargando: false})
        }
      },
      salir(){
        set({token: null, user:null})
      }
    }),
    {
      name: '@authStorage',
    }
  )
)