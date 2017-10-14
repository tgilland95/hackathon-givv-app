import Tabs, { Tab, TabContainer } from 'material-ui/Tabs';

import AppBar from 'material-ui/AppBar'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper';
import React from 'react';

export default class AdminContent extends React.Component {
	state = {
		value: 0,
	 }
  
	 handleChange = (event, value) => {
		this.setState({ value });
	 }
  
	 render() {
		const  value  = this.state;
    return (
		 <Grid container xs={12} md={10} lg={8}>
	      <Grid item xs={12}>
		<Paper>
			
		</Paper>
		</Grid>
		</Grid>
    )
  }
}


