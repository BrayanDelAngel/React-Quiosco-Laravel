import React from 'react'
import { Link } from 'react-router-dom'
import { createRef, useState } from 'react'
import Alerta from '../components/Alerta';
import { useAuth } from '../hooks/useAuth';
export default function Login() {
  const emailRef = createRef();
  const passwordRef = createRef();
  const [errores, setErrores] = useState([])
  const { login } = useAuth({
    middleware: 'guest',
    url: '/',
  });
  const handleSubmit = async e => {
    e.preventDefault();
    const datos = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }
    login(datos, setErrores);
  }
  return (
    <>
      <h1 className='text-4xl font-black text-center'>Iniciar Sesión</h1>
      <p className='text-center text-lg font-bold m-2'>Sea bienvenido</p>
      <div className='bg-white shadow-md rounded-md mt-5 px-5 py-10'>
        <form
          onSubmit={handleSubmit}
          noValidate
        >
          {errores ? errores.map((error, i) => <Alerta key={i}>{error}</Alerta>) : null}
          <div className='mb-2'>
            <label className='text-slate-800' htmlFor='email' id='email'>
              Email
            </label>
            <input type='email' className='mt-2 w-full bg-gray-50 p-3'
              name='email' placeholder='Correo' ref={emailRef} />
          </div>
          <div className='mb-2'>
            <label className='text-slate-800' htmlFor='password' id='password'>
              Password
            </label>
            <input type='text' className='mt-2 w-full bg-gray-50 p-3'
              name='password' placeholder='Contraseña' ref={passwordRef} />
          </div>
          <button type='submit' className='bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer'>Ingresar</button>
        </form>
      </div>
      <nav className='mt-5 '>
        <Link to='/auth/registrer' >Crear cuenta</Link>
      </nav>
    </>
  )
}
