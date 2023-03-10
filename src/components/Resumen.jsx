import { formatearDinero } from "../helpers";
import useQuiosco from "../hooks/useQuiosco"
import ResumenProducto from "./ResumenProducto";

export default function Resumen() {
  const { pedido,total } = useQuiosco();
  const comprobarPedido=()=>pedido.length===0;
  return (
    <aside className="md:w-72 h-screen overflow-y-scroll p-5">
      <h1 className="text-4xl font-black">
        Mi pedido
      </h1>
      <p className="text-lg my-5">
        Resumen del pedido
      </p>
      <div className="py-10">
        {pedido.length === 0 ? (<p className="text-center text-2xl">
          No hay pedido
        </p>) : (
          pedido.map(producto => (
            <ResumenProducto 
            key={producto.id}
            producto={producto}/>
          ))
        )}
      </div>
      <p className="text-xl mt-10">
        Total a pagar {``}
        {formatearDinero(total)}
      </p>
      <form className="w-full">
        <div className="mt-5">
          <button type="submit"
            className={`${comprobarPedido() ? 'bg-indigo-100' : 'bg-indigo-600 hover:bg-indigo-800'}
          px-5 py-2 rounded-lg uppercase	font-bold text-white
          w-full cursor-pointer`}
          disabled={comprobarPedido()}>
            Pagar
          </button>
        </div>
      </form>
    </aside >
  )
}