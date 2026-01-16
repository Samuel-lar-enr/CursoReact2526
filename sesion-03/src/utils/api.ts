// api hará un fetching a mi api para traer todos los platos 


import { API_CONFIG, type Plato } from "../types"



export const fetchPlatos = async (): Promise<Plato[]> => {
    const url=`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.PLATOS}`
    try {
        const response = await fetch(url)
        if (!response.ok){
            throw new Error()
        }
        return await response.json()
        
    } catch (error) {
        console.log(error)
        throw error;
    }
    


}