import { FC } from 'react'
import '../styles/VehiclesList.css'
import { Vehicle } from '../types/types'

const VehiclesList: FC<{ filteredArr: Vehicle[] }> = ({
	filteredArr,
}) => {
	return (
		<div className='vehicle-list'>
			{filteredArr?.map(vehicle => (
				<div key={vehicle.icons.medium} className='vehicle-item'>
					<div className='vehicle-item-header'>
						<div>
							<img src={vehicle.nation.icons.small} alt='' />
						</div>
						<div>
							<span className='vehicle-name'>{vehicle.title}</span>
							<div>
								<span>{vehicle.type.title} </span>
								<span>{vehicle.level} уровня</span>
							</div>
						</div>
					</div>
					<div className='vehicle-item-body'>
						<img src={vehicle.icons.medium} alt='' />
						<div className='vehicle-info-description'>
							{vehicle.description}
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default VehiclesList
