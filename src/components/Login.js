import React, { Component } from 'react'

import App from './App'
import ButtonBar from 'material-ui/Button'
import Grid from 'material-ui/Grid';
import Link from 'react-router-dom/Link'
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
					<Link style={{textDecoration:'none'}} to={'/employee/'}><LoginButton  name="Employee" to='/employee/'/></Link>
					</Grid>
					<Grid item xs ={12} style={{justifyContent:"center",  display:"flex"}}>
						<Link style={{textDecoration:'none'}} to={'/employer/'}><LoginButton  name="Employer" /></Link>
					</Grid>
					<Grid item xs ={12} style={{justifyContent:"center",  display:"flex"}}>
					<Link style={{textDecoration:'none'}} to={'/admin/'}><LoginButton  name="Admin" /></Link> 
					</Grid>
					
					</Paper>
				</Grid>
				
				</div>
		
			

			
		);
	}
}


export default Login;