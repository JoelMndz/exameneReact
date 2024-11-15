import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useAutenticacionStore} from "../stores/autenticacionStore";

function LoginPage() {
  const [campos, setCampos] = useState({
    email: '',
    password: ''
  });
  const {cargando, login} = useAutenticacionStore()
  const navigation = useNavigate();

  const onChange = (e)=>{
    setCampos({...campos, [e.target.name]: e.target.value})
  }

  const enviarFormulario = async(e)=>{
    e.preventDefault()
    // if(await login(campos.email, campos.password)){
    //   navigation('/admin')
    // }
    navigation('/admin')
  }
  return <div className="card mx-auto row" style={{width:450}}>
    <form 
      onSubmit={enviarFormulario}
      className="card-body">
        <h4 className="text-center">Iniciar Sesión</h4>
      <input
        className="form-control mt-3"
        type="email"
        name="email"
        placeholder="Email"
        onChange={onChange} 
        required/>
      <input
        className="form-control mt-2"
        type="password"
        name="password"
        placeholder="Contraseña"
        onChange={onChange} 
        required/>
      <button 
        disabled={cargando}
        className="btn btn-primary mt-3 w-100" type="submit">Ingresar</button>
    </form>
  </div>;
}

export default LoginPage;
