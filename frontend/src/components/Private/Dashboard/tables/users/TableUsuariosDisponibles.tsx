import { DataTable } from './DataTable'
import { columns,  UserData } from './Colums'
import { useEffect, useState } from 'react'
import { customAxiosAdmin } from '@/axios/axios.interceptor'
import { UserFromApi } from '@/types'

const TableUsuariosDisponibles = () => {
  const [dataUsuarios,setDataUsuarios] = useState <UserData[]> ([])
  const getDataUser = async () => {
    try {
      const request = await customAxiosAdmin.get("administracion/users", {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      });
      const users: UserFromApi[] = request.data.users
      
      if(users.length > 0){
        setDataUsuarios(users)      
      }
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };
  useEffect(()=>{
    getDataUser()
  },[])

  return (
    <div className='p-4'>
    <div className='w-full shadow rounded'>
      <DataTable columns={columns} data={dataUsuarios} />
    </div>
    </div>
  )
}

export default TableUsuariosDisponibles