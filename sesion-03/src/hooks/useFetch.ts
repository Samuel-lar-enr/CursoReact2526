import { useEffect, useState } from "react";

//T => generics
export function useFetch<T>(url:string){
    //Aqui guardaremos la data final
    const [data, setData] = useState<T | null>(null)
    //Mostrar o no un loop , aunque diga cargando
    const [loading, setLoading] = useState<boolean>(true)
    // Por si tenemos errores y fallamos
    const [error, setError] = useState<Error | null>(null)

    //efecto de que cuando carge el componenete, o renderice por primera vez usemos useError
    useEffect(() => {
      setLoading(true)
      setError(null)
      //creamos un mando a distancia para abortar el fetch
        const controller= new AbortController()
        //Signal es una señal que va por el cable del fetch
        const { signal }= controller
        const fetchData = async () => {
          try {
            //hacemos la llamada y pasamos la señal de cancelación
            const response = await fetch(url, {signal})
            if(!response.ok){
              throw new Error("Error en la peticion")
            }
            const result = await response.json()
            setData(result)
            setLoading(false)
            
          } catch (error: unknown) {
            setError(error as Error)
          } finally {
            setLoading(false)
          }
        }
        
    //UNO DE LOS ERRORES MAS UTILIZADOS ES QUE NO LLAMAIS A LA DUNCION DENTRO DEL USE EFFECT
    fetchData()
            //El return se ejecuta cuando se va desmontar un componente 
            return () => {
                controller.abort()
            }
    }, [url])
    return {data, loading, error}
};


