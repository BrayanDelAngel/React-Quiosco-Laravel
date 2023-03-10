import React from 'react'
import { Link } from 'react-router-dom'
import { createRef, useState } from 'react'
import { useAuth } from '../hooks/useAuth';
import Alerta from '../components/Alerta';
export default function Registro() {

    const [errores,setErrores] = useState([])
    const nameRef = createRef();
    const emailRef = createRef();
    const passwordRef = createRef();
    const passwordConfirmationRef = createRef();
    const {registro}= useAuth({middleware:'guest',url:'/'});
    const handleSubmit =async e =>{
        e.preventDefault();
        const datos={
            name:nameRef.current.value,
            email:emailRef.current.value,
            password:passwordRef.current.value,
            password_confirmation:passwordConfirmationRef.current.value,
        }
        registro(datos,setErrores)
        
    }
    return (
        <>
            <h1 className='text-4xl font-black'>Crear cuenta</h1>
            <p className=''>Crea tu cuenta llenando el formulario</p>
            <div className='bg-white shadow-md rounded-md mt-5 px-5 py-10'>
                <form
                onSubmit={handleSubmit}
                noValidate
                >   
                    {errores?errores.map((error,i)=><Alerta key={i}>{error}</Alerta>) :null}
                    <div className='mb-2'>
                        <label className='text-slate-800' htmlFor='name' id='name'>
                            Nombre
                        </label>
                        <input type='text' className='mt-2 w-full bg-gray-50 p-3'
                            name='name' placeholder='Nombre' ref={nameRef} />
                    </div>
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
                    <div className='mb-2'>
                        <label className='text-slate-800' htmlFor='password_confirmarion' id='password_confirmarion'>
                            Repetir Password
                        </label>
                        <input type='text' className='mt-2 w-full bg-gray-50 p-3'
                            name='password_confirmarion' placeholder='Repetir contraseña' ref={passwordConfirmationRef} />
                    </div>
                    <button type='submit' className='bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer'>Registrar</button>
                </form>
            </div>
            <nav className='mt-5 '>
                <Link to='/auth/login' >Ingresar</Link>
            </nav>
        </>
    )
}
