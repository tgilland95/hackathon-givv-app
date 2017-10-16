import React, { Component } from 'react';

import AdminContent from '../Content/AdminContent'
import GivvNav from '../Nav/Nav'
import Grid from 'material-ui/Grid'

class AdminLayout extends Component {
	render() {
		return (
			<div>
				<GivvNav />
				
				<AdminContent />
			</div>
		);
	}
}

export default AdminLayout;