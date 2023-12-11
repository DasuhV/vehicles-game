/* eslint-disable no-mixed-spaces-and-tabs */
import {
	Dispatch,
	FC,
	SetStateAction,
	useEffect,
	useState,
} from 'react'
import '../styles/Filter.css'
import { useGetAllFilterItems } from '../hooks/useGetAllFilterItems'
import { Vehicle } from '../types/types'

type FilterItems = {
	levels: string[]
	nations: string[]
	typeName: string[]
}
interface IFilter {
	open:boolean
	vehicles: Vehicle[]
	setFilteredArr: Dispatch<SetStateAction<Vehicle[]>>
}

const Filter: FC<IFilter> = ({ open,vehicles, setFilteredArr }) => {
	const [filter, setFilter] = useState<FilterItems>({
		nations: [],
		levels: [],
		typeName: [],
	})
	const { allTypeNames, allLevels, allNations } = useGetAllFilterItems(vehicles)

	useEffect(() => {
		
		const filteredVehicleArr = (
			vehicles: Vehicle[],
			{ levels, nations, typeName }: FilterItems
		) => {
			//!!! Maxim, please, tell me, how i can rewrite this 'besobrasie'?
			//!! we need to rewrite this solution because it's hard to scale
			//!maybe we can collect the form data and put it into a filter without using a lot of conditions
			//!or we can somehow combine these conditions
			//!or we can move the logic of the conditions into a separate function
			//!or using custom hook
			//!or something else
			return vehicles.filter(vehicle =>
				levels.length && nations.length && typeName.length
					? levels.includes(String(vehicle.level)) && nations.includes(vehicle.nation.title) && typeName.includes(vehicle.type.title)
					: levels.length && nations.length
						? levels.includes(String(vehicle.level)) && nations.includes(vehicle.nation.title)
						: levels.length && typeName.length
							? levels.includes(String(vehicle.level)) && typeName.includes(vehicle.type.title)
							: nations.length && typeName.length
								? nations.includes(vehicle.nation.title) && typeName.includes(vehicle.type.title)
								: levels.length
									? levels.includes(String(vehicle.level))
									: nations.length
										? nations.includes(vehicle.nation.title)
										: typeName.length
											? typeName.includes(vehicle.type.title)
											: vehicle
			)
		}
		setFilteredArr(filteredVehicleArr(vehicles, filter))
	}, [filter, vehicles])
	//this is action for click filter items
	const chooseFilter = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const value = e.target.value
		let filterValues
		if (allLevels.includes(value)) {
			filterValues = filter.levels.includes(value)
				? { ...filter, levels: filter.levels.filter(a => !(a === value)) }
				: { ...filter, levels: [...filter.levels, value] }
		}
		if (allNations.includes(value)) {
			filterValues = filter.nations.includes(value)
				? { ...filter, nations: filter.nations.filter(a => !(a === value)) }
				: { ...filter, nations: [...filter.nations, value] }
		}
		if (allTypeNames.includes(value)) {
			filterValues = filter.typeName.includes(value)
				? { ...filter, typeName: filter.typeName.filter(a => !(a === value)) }
				: { ...filter, typeName: [...filter.typeName, value] }
		}
		if (filterValues) {
			setFilter(filterValues)
		}
	}

	return (
		<div className={`filter-main ${open ? 'active' : ''}`}>
			<div className='filter-content'>
				<div>
					<h3>Нация</h3>
					{allNations?.map(nation => (
						<div key={nation}>
							<label className='checkbox'>
								<input type='checkbox' value={nation} onChange={chooseFilter} />
								<span>{nation}</span>
							</label>
						</div>
					))}
				</div>
				<div>
					<h3>Уровень</h3>
					{allLevels?.map(level => (
						<div key={level}>
							<label className='checkbox'>
								<input type='checkbox' value={level} onChange={chooseFilter} />
								<span>{level}</span>
							</label>
						</div>
					))}
				</div>
				<div>
					<h3>Класс</h3>
					{allTypeNames?.map(classType => (
						<div key={classType}>
							<label className='checkbox'>
								<input
									type='checkbox'
									value={classType}
									onChange={chooseFilter}
								/>
								<span>{classType}</span>
							</label>
						</div>
					))}
				</div>
			</div>
		</div>
	) 
}

export default Filter
