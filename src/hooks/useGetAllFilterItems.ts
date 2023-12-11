import { Vehicle } from '../types/types'

export const useGetAllFilterItems = (vehicles:Vehicle[]) => {
			const allLevels: string[] = []
			const allNations: string[] = []
			const allTypeNames: string[] = []
			vehicles.map(
				vehicle =>
					(!allNations.includes(vehicle.nation.title) &&
						allNations.push(vehicle.nation.title)) ||
					(!allLevels.includes(String(vehicle.level)) &&
						allLevels.push(String(vehicle.level))) ||
					(!allTypeNames.includes(vehicle.type.title) &&
						allTypeNames.push(vehicle.type.title))
			)
	
			return {
				allLevels: allLevels.sort((a , b ) => Number(a) - Number(b)),
				allNations: allNations,
				allTypeNames,
			}
}