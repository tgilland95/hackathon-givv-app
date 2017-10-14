import List, { ListItem, ListItemText } from 'material-ui/List';
import React, { Component } from 'react'

import ButtonBar from 'material-ui/Button'
import Divider from 'material-ui/Divider'
import Grid from 'material-ui/Grid';
import LoginButton from './LoginButton'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'

class Login extends Component {
	render() {
		
		return (
			
				<div>
				
				<Grid container  style={{ justifyContent:"center", margin:"auto", marginTop:"5%"}}  >
				<Paper style={{minWidth:"300px", padding:"20px"}} >
				<Typography type="display1" style={{justifyContent:"center",  display:"flex"}}>Continue as: </Typography>

					<Grid item xs ={12} style={{justifyContent:"center",  display:"flex"}}>
						<LoginButton name="Employee" />
					</Grid>
					<Grid item xs ={12} style={{justifyContent:"center",  display:"flex"}}>
						<LoginButton name="Employer" />
					</Grid>
					<Grid item xs ={12} style={{justifyContent:"center",  display:"flex"}}>
						<LoginButton name="Admin" />
					</Grid>
					</Paper>
				</Grid>
				</div>
		
			

			
		);
	}
}


export default Login;