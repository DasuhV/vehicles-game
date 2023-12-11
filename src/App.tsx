import { useState } from 'react'
import './App.css'
import { LangType } from './api/GraphQlAPI'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

function App() {
	const [lang, setLang] = useState<LangType>('en')
		console.log('render')
	return (
		<div className='app'>
			<Header setLang={setLang} />
			<Main lang={lang} />
			<Footer />
		</div>
	)
}

export default App
