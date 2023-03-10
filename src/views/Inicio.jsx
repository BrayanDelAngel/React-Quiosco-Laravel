import Productos from "../components/Productos"
// import { productos as data } from "../data/pruductos"
import useQuiosco from "../hooks/useQuiosco"
import useSWR from 'swr'
import clienteAxios from "../config/axios";
export default function Inicio() {
  const { categoriaActual } = useQuiosco();
  //Consulta swr890
  const fetcher=()=>clienteAxios('api/productos').then(data=>data.data);
  const {data,error,isLoading}=useSWR('/api/productos',fetcher,{
    refreshInterval:1000
  })
  if(isLoading) return 'Cargando...'
  const productos =data.data.filter(producto=>producto.categoria_id===categoriaActual.id)
  return (
    <>
      <h1 className="text-4xl font-black">
        {categoriaActual.nombre}
      </h1>
      <p className="text-2xl my-10">
        Ingresa tu pedido
      </p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {productos.map(producto=>(
          <Productos key={producto.id} producto={producto}/>
        ))}
      </div>
    </>
  )
}
