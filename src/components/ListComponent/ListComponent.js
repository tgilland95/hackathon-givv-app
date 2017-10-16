import React, {Component} from 'react'

import Button from 'material-ui/Button'
import ListItem from './ListItem'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'

export default class ListComponent extends Component {
	data = [	"SLC", "provo", "orem", "midland", "NYC", "Austin", "LA", "houston"]
	
	constructor(props){
		super(props)		
	}
	render(){
		return (
			<Paper style={{margin: '20px', padding: "20px", height: '500px'}}>
				
				<TextField type='text' />
				<br/><br/>
				<Button raised color='accent'>dumb button</Button>
				<br />
				<ListItem data={this.data} />
				{this.props.name}
			
			</Paper>
		)
	}
}
