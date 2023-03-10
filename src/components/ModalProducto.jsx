import { useState,useEffect } from "react";
import useQuiosco from "../hooks/useQuiosco"
import { formatearDinero } from "../helpers";
import { HiOutlineMinus, HiOutlinePlus, HiOutlineXMark } from "react-icons/hi2";
export default function ModalProducto() {
    const { producto, handleClickModal,handleAgregarPedido,pedido } = useQuiosco();
    const [cantidad, setCantidad] = useState(1)
    const [edicion, setEdicion] = useState(false)
    useEffect(() => {
      if(pedido.some(pedidoState=>pedidoState.id===producto.id)){
        const productoEdicion = pedido.filter(pedidoState=>pedidoState.id===producto.id)[0]
        setCantidad(productoEdicion.cantidad)
        setEdicion(true);
      }
    }, [pedido])
    
    return (
        <div className="md:flex items-center gap-10">
            <div className="md:w-1/3">
                <img alt={`${producto.nombre}`}
                    src={`/img/${producto.imagen}.jpg`}
                />
            </div>
            <div className="md:w-2/3">
                <div className="flex justify-end">
                    <button onClick={handleClickModal}>
                        <HiOutlineXMark />
                    </button>
                </div>
                <h1 className="text-3xl font-bold mt-5">
                    {producto.nombre}
                </h1>
                <p className="mt-5 font-black text-5xl text-amber-500">
                    {formatearDinero(producto.precio)}
                </p>
                <div className="flex gap-4 mt-5 ">
                    <button type="button" onClick={() => {
                        if (cantidad <= 1) return
                        setCantidad(cantidad - 1)
                    }}>
                        <HiOutlineMinus />
                    </button>
                    <p className="text-3xl">{cantidad}</p>
                    <button type="button" onClick={() => {
                        if (cantidad >= 5) return
                        setCantidad(cantidad + 1)
                    }}>
                        <HiOutlinePlus />
                    </button>
                </div>
                <button type="buttin" className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 cursor-pointer mt-5 text-white font-bold uppercase rounded-lg"
                onClick={()=>{handleAgregarPedido({...producto,cantidad})
                handleClickModal()}}>
                    {edicion ? 'Guardar Cambios':'Añadir'}
                </button>
            </div>
        </div>
    )
}
