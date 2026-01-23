import type { ReactNode } from "react"
import { Navigate } from "react-router-dom"

interface ProtectedRouteProps {
  isAllowed: boolean
  children: ReactNode
}


export const ProtectedRoute = ( { isAllowed, children }: ProtectedRouteProps) => {
    if (!isAllowed){
        return <Navigate to='/' replace/>
        //Replace, reemplaza las rustas anteriores por las que le estemos pasando por el historial de rutas
    }
    return <>{children}</>
}