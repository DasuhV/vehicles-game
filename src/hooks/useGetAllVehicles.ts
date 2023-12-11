import { useEffect, useState } from 'react'
import { LangType, getVehicles } from '../api/GraphQlAPI'
import { Vehicle } from '../types/types'


//!when i add args called "isCatalogue" with 'true' value, i clean old version vehicles, but also i cleaning a submarine class and 11 level in filter
//! this is a server bug, i can fix it in the frontend but it's a dirty solution
export const useGetAllVehicles = (lang:LangType) => {
	const [vehicles, setVehicles] = useState<Vehicle[]>()

	const query = `
query AllVehicles($lang:String){
  vehicles(lang:$lang,) {
    id
    title
    description
    icons {
      large
      medium
    }
    level
    type {
      name
    	title
      icons {
        default
      }
    }
    nation {
      name
      title
      color
      icons {
        small
        medium
        large
      }
    }
  }
}`
useEffect(() => {
    const getAllVehicles = async () => {
        const vehicles = await getVehicles(query,lang)
        setVehicles(vehicles)
      }
		getAllVehicles()
}, [lang])
  
	return { vehicles }
}
