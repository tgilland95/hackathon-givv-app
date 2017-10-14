import React, {Component} from 'react'

export default class ListItem extends Component{
	constructor(props){
		super(props)
		this.state = {
			
		}
		
	}
	
	componentWillMount(){
		this.setState({data:handleData(this.props.data)})
	}
	
	handleData(){
			let data;
			if (this.state.data) {
				data = this.state.data.map(data =>
				{
					return (
						<li>{data}</li>
					)
				});
			}
			return data;
		
	
	}
	addItem(e){
		let data = this.state.data
		data.push(e)
		this.setState({data: data})
	}
	render(){
		return(
		
		<div>
			<input type='text' ref='e' onClick={this.addItem.bind(this)} />
			<button>add</button>
		<ul>
			<div>{this.handleData(this.props.data)}</div>
		</ul>
		</div>
		)
	}
	
}

