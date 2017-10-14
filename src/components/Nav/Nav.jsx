import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

class GivvNav extends Component {
	render() {
		return (
			<div>
				<AppBar position="static">
					<Toolbar>
						<Typography type='headline' color='inherit'> GIVV </Typography>
						
					</Toolbar>
				</AppBar> 
			</div>
		);
	}
}

export default GivvNav;