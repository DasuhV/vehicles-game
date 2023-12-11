//variant #1
//
// export	const getVehicles = async (query: string) => {
// 		const URL = 'https://vortex.korabli.su/api/graphql/glossary'
// 		const res = await fetch(URL, {
// 			method: 'POST',
// 			headers: {
// 				'Content-Type': 'application/json',
// 				'Access-Control-Allow-Origin': 'http://localhost:5173'

// 			},
// 			body: JSON.stringify({ query: query }),
// 		})
// 		return await res.json()
// 	}

import axios from 'axios'
import { Vehicle } from '../types/types'

export type LangType = "en" | "ru"

export const getVehicles = async (query: string,lang:LangType) => {
	const response = await axios.post(
		'https://vortex.korabli.su/api/graphql/glossary',
		{
			query,
			variables:{"lang": lang},
			headers: {
				
				'Access-Control-Allow-Origin': 'http://localhost:5173',
			},
		}
	)
	
	return response.data.data.vehicles as Vehicle[]
}
