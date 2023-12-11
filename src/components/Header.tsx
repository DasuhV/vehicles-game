import React from 'react';
import { LangType } from '../api/GraphQlAPI'

const Header = ({ setLang }:{ setLang:React.Dispatch<React.SetStateAction<LangType>>}) => {
	return (
		<header className='header'>
			<h1>Мир Кораблей</h1>
			<select onChange={e => setLang(e.target.value as LangType)}>
				<option value='en'>US</option>
				<option value='ru'>RUS</option>
			</select>
		</header>
	)
};

export default Header;