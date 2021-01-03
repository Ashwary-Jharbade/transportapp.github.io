import React from 'react'
import ReactDom from 'react-dom'

import Header from './components/header'
import Counter from './components/counter'
import './css/main.css'

class App extends React.Component{
	constructor(){
		super()
	}
	render(){
		return (
			<>
				<Header/>
				<Counter/>
			</>
		)
	}
}
 

ReactDom.render(<App/>,document.getElementById('root'))