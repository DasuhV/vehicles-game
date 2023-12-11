import { useState } from 'react'
import { FaFilter } from 'react-icons/fa'
//types
import { LangType } from '../api/GraphQlAPI'
import { Vehicle } from '../types/types'
//custom hook
import { useGetAllVehicles } from '../hooks/useGetAllVehicles'
//children components
import Filter from './Filter'
import VehiclesList from './VehiclesList'



const Main = ({ lang }: { lang: LangType }) => {
	const { vehicles } = useGetAllVehicles(lang)
	const [filteredArr, setFilteredArr] = useState<Vehicle[]>([])
	const [open, setOpen] = useState(false)
	return (
		<main className='main'>
			<div className='main-filter'>
				<div className='main-filter-icon' onClick={() => setOpen(!open)}>
					<FaFilter size={25} />
				</div>
				{vehicles && (
					<Filter
						open={open}
						vehicles={vehicles}
						setFilteredArr={setFilteredArr}
					/>
				)}
				<div
					className='main-arr-container'
					onClick={() => open && setOpen(false)}
				>
					{filteredArr?.length ? (
						<VehiclesList filteredArr={filteredArr} />
					) : (
						<div>Not Found</div>
					)}
				</div>
			</div>
		</main>
	)
}

export default Main
